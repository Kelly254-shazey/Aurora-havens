'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart, Shield, CheckCircle2, Stethoscope, GraduationCap,
  UtensilsCrossed, Users, Building2, ArrowLeft, Lock,
} from 'lucide-react';

const CAUSES = [
  { id: 'womens-health', icon: Stethoscope, title: "Women's Health", description: "Maternal care and health services" },
  { id: 'education', icon: GraduationCap, title: "Education", description: "School sponsorship and learning" },
  { id: 'feeding', icon: UtensilsCrossed, title: "Feeding Programme", description: "Nutritious meals for children" },
  { id: 'youth', icon: Users, title: "Youth Empowerment", description: "Skills training and mentorship" },
  { id: 'emergency', icon: Shield, title: "Emergency Relief", description: "Rapid response to crises" },
  { id: 'community', icon: Building2, title: "Community Development", description: "Infrastructure and water projects" },
  { id: 'general', icon: Heart, title: "General Fund", description: "Where it's needed most" },
];

const AMOUNTS = [500, 1000, 2500, 5000, 10000];

const PAYMENT_METHODS = [
  { id: 'mpesa', icon: '📱', label: 'M-Pesa' },
  { id: 'card', icon: '💳', label: 'Card' },
  { id: 'paypal', icon: '🅿️', label: 'PayPal' },
  { id: 'bank', icon: '🏦', label: 'Bank Transfer' },
];

export default function DonatePage() {
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const effectiveAmount = selectedAmount || Number(customAmount) || 0;

  const handleCauseSelect = (id: string) => {
    setSelectedCause(id);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.cause;
      return next;
    });
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setErrors((prev) => {
      const next = { ...prev };
      delete next.amount;
      return next;
    });
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.amount;
      return next;
    });
  };

  const handleMethodSelect = (id: string) => {
    setSelectedMethod(id);
    setFormData({});
    setErrors({});
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!selectedCause) {
      newErrors.cause = 'Please select a cause';
    }

    if (!selectedAmount && (!customAmount || Number(customAmount) <= 0)) {
      newErrors.amount = 'Please enter a valid amount';
    }

    if (!selectedMethod) {
      newErrors.method = 'Please select a payment method';
    }

    if (selectedMethod === 'mpesa') {
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    }

    if (selectedMethod === 'card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiry) newErrors.expiry = 'Expiry date is required';
      if (!formData.cvc) newErrors.cvc = 'CVC is required';
    }

    if (selectedMethod === 'paypal') {
      if (!formData.email) newErrors.email = 'Email address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const causeTitle = CAUSES.find((c) => c.id === selectedCause)?.title ?? '';
  const txRef = `AH-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

  if (step === 'success') {
    return (
      <section className="min-h-screen bg-white pt-32 pb-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="font-display text-3xl font-bold text-dark-900 mb-3">
              Donation Successful
            </h1>
            <p className="text-gray-500 mb-8">
              Thank you for supporting Aurora Havens Foundation.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 text-left space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Transaction Ref</span>
                <span className="text-dark-900 text-sm font-medium font-mono">{txRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Amount</span>
                <span className="text-dark-900 text-sm font-semibold">
                  KES {effectiveAmount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Programme</span>
                <span className="text-dark-900 text-sm font-medium">{causeTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Status</span>
                <span className="text-green-600 text-sm font-medium">Completed</span>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 w-full py-4 bg-gold-500 text-dark-900 font-display font-bold text-lg rounded-xl hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/20"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* ═══════ HERO ═══════ */}
      <section className="pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-600 text-sm font-medium tracking-widest uppercase mb-4">
            Aurora Havens Foundation
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
            Support Meaningful Change
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Every contribution directly supports our programmes across Africa. Choose a cause that matters to you.
          </p>
        </div>
      </section>

      {step === 'processing' ? (
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
              <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
              <h2 className="font-display text-xl font-bold text-dark-900 mb-2">Processing...</h2>
              <p className="text-gray-500">Please wait while we process your donation.</p>
            </div>
          </div>
        </section>
      ) : (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {/* ═══════ STEP 1: CAUSES ═══════ */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-dark-900 mb-4">Choose a Cause</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {CAUSES.map((cause) => {
                const Icon = cause.icon;
                const isActive = selectedCause === cause.id;
                return (
                  <button
                    key={cause.id}
                    type="button"
                    onClick={() => handleCauseSelect(cause.id)}
                    className={`text-left rounded-xl p-5 border-2 transition-all cursor-pointer ${
                      isActive
                        ? 'border-gold-500 bg-gold-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gold-500 hover:shadow-md'
                    }`}
                  >
                    <Icon className="w-8 h-8 text-gold-600 mb-3" />
                    <p className="font-semibold text-dark-900 text-sm">{cause.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{cause.description}</p>
                  </button>
                );
              })}
            </div>
            {errors.cause && (
              <p className="text-red-500 text-sm mt-2">{errors.cause}</p>
            )}
          </section>

          {/* ═══════ STEP 2: AMOUNT ═══════ */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-dark-900 mb-4">Select Amount</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
              {AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  className={`py-3 px-4 rounded-xl border-2 font-display font-bold text-dark-900 transition-all ${
                    selectedAmount === amount
                      ? 'border-gold-500 bg-gold-50 text-gold-700'
                      : 'border-gray-200 hover:border-gold-500'
                  }`}
                >
                  KES {amount.toLocaleString()}
                </button>
              ))}
            </div>
            <div className="relative max-w-xs">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium pointer-events-none">
                KES
              </span>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="w-full pl-14 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark-900"
              />
            </div>
            {errors.amount && (
              <p className="text-red-500 text-sm mt-2">{errors.amount}</p>
            )}
          </section>

          {/* ═══════ STEP 3: PAYMENT METHOD ═══════ */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-dark-900 mb-4">Payment Method</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PAYMENT_METHODS.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => handleMethodSelect(method.id)}
                  className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedMethod === method.id
                      ? 'border-gold-500 bg-gold-50'
                      : 'border-gray-200 hover:border-gold-500'
                  }`}
                >
                  <span className="text-2xl">{method.icon}</span>
                  <span className="text-sm font-medium text-dark-900">{method.label}</span>
                </button>
              ))}
            </div>
            {errors.method && (
              <p className="text-red-500 text-sm mt-2">{errors.method}</p>
            )}
          </section>

          {/* ═══════ STEP 4: PAYMENT FORM ═══════ */}
          {selectedMethod && (
            <section className="mb-12">
              <h2 className="text-lg font-semibold text-dark-900 mb-4">Payment Details</h2>
              <div className="max-w-md space-y-4">
                {selectedMethod === 'mpesa' && (
                  <div>
                    <label className="block text-sm font-medium text-dark-900 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark-900"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                )}

                {selectedMethod === 'card' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-dark-900 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        value={formData.cardNumber || ''}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark-900"
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-dark-900 mb-1">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={formData.expiry || ''}
                          onChange={(e) => handleInputChange('expiry', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark-900"
                        />
                        {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-900 mb-1">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={formData.cvc || ''}
                          onChange={(e) => handleInputChange('cvc', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark-900"
                        />
                        {errors.cvc && <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>}
                      </div>
                    </div>
                  </>
                )}

                {selectedMethod === 'paypal' && (
                  <div>
                    <label className="block text-sm font-medium text-dark-900 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email || ''}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-dark-900"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                )}

                {selectedMethod === 'bank' && (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="text-sm font-medium text-dark-900 mb-3">Bank Details</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><span className="text-gray-400">Bank:</span> KCB</p>
                      <p><span className="text-gray-400">Account:</span> 12345678</p>
                      <p><span className="text-gray-400">Name:</span> Aurora Havens Foundation</p>
                      <p><span className="text-gray-400">Ref:</span> Your Name</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ═══════ STEP 5: SUBMIT ═══════ */}
          <section>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!selectedCause || effectiveAmount <= 0 || !selectedMethod}
              className="w-full py-4 bg-gold-500 text-dark-900 font-display font-bold text-lg rounded-xl hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gold-500 disabled:hover:shadow-lg"
            >
              Donate KES {effectiveAmount > 0 ? effectiveAmount.toLocaleString() : '0'}
            </button>
            <p className="text-xs text-gray-400 flex items-center justify-center gap-4 mt-4">
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Secure Payments</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Encrypted Transactions</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Transparent Fund Management</span>
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
