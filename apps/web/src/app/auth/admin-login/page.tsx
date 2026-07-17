'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await login(email, password);
      // Admin will be routed by their own admin app in production
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Admin login failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-gold-500" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-gray-400 text-sm">Authorized personnel only. All access is logged.</p>
        </div>

        {/* Form */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="admin-email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  id="admin-email"
                  type="email"
                  placeholder="admin@aurorahavens.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.08] transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.08] transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gold-500 text-dark-900 font-display font-semibold rounded-xl hover:bg-gold-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Authenticating...' : 'Access Admin Panel'}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link href="/auth/login" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
            ← Back to regular login
          </Link>
        </div>
      </div>
    </div>
  );
}
