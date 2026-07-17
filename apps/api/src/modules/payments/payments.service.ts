import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe | null = null;

  constructor(private configService: ConfigService) {}

  private getStripe(): Stripe {
    if (!this.stripe) {
      const key = this.configService.get<string>('STRIPE_SECRET_KEY');
      if (!key) throw new BadRequestException('Stripe not configured');
      this.stripe = new Stripe(key, {
        apiVersion: '2024-12-18.acacia' as Stripe.LatestApiVersion,
      });
    }
    return this.stripe;
  }

  async createPaymentIntent(amount: number, currency: string = 'usd', metadata?: Record<string, string>) {
    try {
      const paymentIntent = await this.getStripe().paymentIntents.create({
        amount: Math.round(amount * 100),
        currency,
        metadata,
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return {
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      };
    } catch (error) {
      throw new BadRequestException(`Payment failed: ${(error as Error).message}`);
    }
  }

  async confirmPayment(paymentIntentId: string) {
    try {
      const paymentIntent = await this.getStripe().paymentIntents.retrieve(paymentIntentId);
      return {
        status: paymentIntent.status,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
      };
    } catch (error) {
      throw new BadRequestException(`Payment confirmation failed: ${(error as Error).message}`);
    }
  }

  async createRefund(paymentIntentId: string, amount?: number) {
    try {
      const refund = await this.getStripe().refunds.create({
        payment_intent: paymentIntentId,
        amount: amount ? Math.round(amount * 100) : undefined,
      });

      return {
        refundId: refund.id,
        status: refund.status,
        amount: refund.amount / 100,
      };
    } catch (error) {
      throw new BadRequestException(`Refund failed: ${(error as Error).message}`);
    }
  }

  async createCustomer(email: string, name: string, phone?: string) {
    try {
      const customer = await this.getStripe().customers.create({
        email,
        name,
        phone,
      });

      return {
        customerId: customer.id,
        email: customer.email,
        name: customer.name,
      };
    } catch (error) {
      throw new BadRequestException(`Customer creation failed: ${(error as Error).message}`);
    }
  }

  async createSubscription(customerId: string, priceId: string) {
    try {
      const subscription = await this.getStripe().subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });

      return {
        subscriptionId: subscription.id,
        status: subscription.status,
        clientSecret: (subscription.latest_invoice as Stripe.Invoice)?.payment_intent
          ? ((subscription.latest_invoice as Stripe.Invoice).payment_intent as Stripe.PaymentIntent)?.client_secret
          : null,
      };
    } catch (error) {
      throw new BadRequestException(`Subscription failed: ${(error as Error).message}`);
    }
  }

  async handleWebhook(payload: Buffer, signature: string) {
    const webhookSecret = this.configService.get('STRIPE_WEBHOOK_SECRET');
    
    try {
      const event = this.getStripe().webhooks.constructEvent(payload, signature, webhookSecret);
      
      switch (event.type) {
        case 'payment_intent.succeeded':
          return { type: 'payment_success', data: event.data.object };
        case 'payment_intent.payment_failed':
          return { type: 'payment_failed', data: event.data.object };
        case 'charge.refunded':
          return { type: 'refund', data: event.data.object };
        default:
          return { type: 'unknown', data: event.data.object };
      }
    } catch (error) {
      throw new BadRequestException(`Webhook verification failed: ${(error as Error).message}`);
    }
  }
}
