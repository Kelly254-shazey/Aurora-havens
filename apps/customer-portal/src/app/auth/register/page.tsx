'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, UserPlus, AlertCircle, Shield, Lock as LockIcon } from 'lucide-react';

export default function RegisterPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError('First and last name are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (!/[A-Z]/.test(form.password)) {
      setError('Password must contain at least one uppercase letter.');
      return;
    }
    if (!/[0-9]/.test(form.password)) {
      setError('Password must contain at least one number.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim() || undefined,
          password: form.password,
        }),
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({ message: 'Registration failed' }));
        throw new Error(err.message || 'Registration failed');
      }
      const data = await response.json();
      localStorage.setItem('portal_token', data.accessToken);
      localStorage.setItem('portal_user', JSON.stringify(data.user));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold-500/3 rounded-full blur-3xl" />
      </div>
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/20">
              <span className="text-dark-900 font-display font-bold text-lg">AH</span>
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-xl text-white block leading-tight">Aurora Havens</span>
              <span className="text-[10px] text-gold-400/50 tracking-[0.25em] uppercase font-semibold">Customer Portal</span>
            </div>
          </Link>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-gray-400 text-sm">Join Aurora Havens and start your journey</p>
          </div>
          {error && (
            <div className="flex items-center gap-2 px-4 py-3 mb-6 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name *</label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="John"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name *</label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Mwangi"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 700 000 000"
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Password *</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} required placeholder="Min. 8 characters"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-11 pr-11 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 transition-all" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Confirm Password *</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input type={showPassword ? 'text' : 'password'} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required placeholder="Re-enter password"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 transition-all" />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 font-display font-semibold rounded-xl shadow-lg shadow-gold-500/20 hover:bg-gold-400 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
              {isSubmitting ? <div className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" /> : <UserPlus className="w-5 h-5" />}
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-gold-400 hover:text-gold-300 font-medium transition-colors">Sign in</Link>
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mt-6">
          <span className="flex items-center gap-1"><LockIcon className="w-3 h-3" /> SSL Encrypted</span>
          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Data Protected</span>
        </div>
      </div>
    </div>
  );
}
