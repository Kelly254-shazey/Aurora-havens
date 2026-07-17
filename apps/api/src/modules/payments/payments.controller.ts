import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  HttpCode,
  HttpStatus,
  RawBodyRequest,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { Roles } from '../../common/decorators';
import { RolesGuard } from '../../common/guards/roles.guard';
import { UserRole } from '@aurora-havens/shared';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-intent')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create payment intent' })
  @ApiResponse({ status: 201, description: 'Payment intent created' })
  async createPaymentIntent(@Body() data: { amount: number; currency?: string; metadata?: Record<string, string> }) {
    return this.paymentsService.createPaymentIntent(data.amount, data.currency, data.metadata);
  }

  @Post('confirm')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Confirm payment' })
  @ApiResponse({ status: 200, description: 'Payment confirmed' })
  async confirmPayment(@Body() data: { paymentIntentId: string }) {
    return this.paymentsService.confirmPayment(data.paymentIntentId);
  }

  @Post('refund')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create refund' })
  @ApiResponse({ status: 200, description: 'Refund created' })
  async createRefund(@Body() data: { paymentIntentId: string; amount?: number }) {
    return this.paymentsService.createRefund(data.paymentIntentId, data.amount);
  }

  @Post('customer')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create customer' })
  @ApiResponse({ status: 201, description: 'Customer created' })
  async createCustomer(@Body() data: { email: string; name: string; phone?: string }) {
    return this.paymentsService.createCustomer(data.email, data.name, data.phone);
  }

  @Post('subscription')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create subscription' })
  @ApiResponse({ status: 201, description: 'Subscription created' })
  async createSubscription(@Body() data: { customerId: string; priceId: string }) {
    return this.paymentsService.createSubscription(data.customerId, data.priceId);
  }

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Stripe webhook' })
  @ApiResponse({ status: 200, description: 'Webhook processed' })
  async handleWebhook(@Req() req: RawBodyRequest<Request>) {
    const signature = (req.headers as any)['stripe-signature'] as string;
    return this.paymentsService.handleWebhook(req.rawBody as Buffer, signature);
  }
}
