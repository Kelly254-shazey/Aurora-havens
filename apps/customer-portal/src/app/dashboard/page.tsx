'use client';

import { useAuth } from '@/contexts/AuthContext';
import { usePortalDashboard } from '@/hooks/usePortal';
import { Bell, MessageSquare, FileText, CreditCard, Heart, CalendarCheck, HandCoins, Wrench, TrendingUp, Gift, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';

function StatCard({ icon: Icon, label, value, href }: { icon: typeof Bell; label: string; value: string | number; href?: string }) {
  const content = (
    <div className="card flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
      <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-gold-600" />
      </div>
      <div className="min-w-0">
        <p className="text-2xl font-display font-bold text-dark-900">{value}</p>
        <p className="text-sm text-gray-500 truncate">{label}</p>
      </div>
      {href && <ArrowRight className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />}
    </div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const { data, isLoading, error } = usePortalDashboard();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-32 bg-white rounded-2xl animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-white rounded-2xl animate-pulse" />)}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card flex items-center gap-3 text-red-600">
        <AlertCircle className="w-5 h-5" />
        <p>Failed to load dashboard. Please try again.</p>
      </div>
    );
  }

  const stats = data?.stats || {};
  const roles = data?.roles || [user?.role];
  const notifications = data?.recentNotifications || [];
  const activity = data?.recentActivity || [];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-6 sm:p-8 text-white">
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">
          Welcome back, {user?.firstName}
        </h1>
        <p className="text-gray-400 mb-4">Here&apos;s what&apos;s happening with your account.</p>
        <div className="flex flex-wrap gap-2">
          {roles.map((role: string) => (
            <span key={role} className="badge-gold text-xs">{role.replace('_', ' ')}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Heart} label="Saved Properties" value={stats.savedProperties || 0} href="/buyer/saved" />
        <StatCard icon={CalendarCheck} label="Viewings" value={stats.viewings || 0} href="/buyer/viewings" />
        <StatCard icon={HandCoins} label="Active Offers" value={stats.activeOffers || 0} href="/buyer/offers" />
        <StatCard icon={CreditCard} label="Total Paid" value={`KES ${Number(stats.totalPaid || 0).toLocaleString()}`} href="/payments" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Wrench} label="Maintenance" value={stats.maintenanceRequests || 0} href="/tenant/maintenance" />
        <StatCard icon={TrendingUp} label="Investments" value={stats.activeInvestments || 0} href="/investor/portfolio" />
        <StatCard icon={Gift} label="Donations" value={stats.totalDonations || 0} href="/donor/history" />
        <StatCard icon={CreditCard} label="Pending Balance" value={`KES ${Number(stats.pendingBalance || 0).toLocaleString()}`} href="/payments" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-dark-900">Recent Notifications</h2>
            <Link href="/notifications" className="text-sm text-gold-600 hover:text-gold-700 font-medium">View all</Link>
          </div>
          {notifications.length === 0 ? (
            <p className="text-sm text-gray-500 py-8 text-center">No notifications yet</p>
          ) : (
            <div className="space-y-3">
              {notifications.slice(0, 5).map((n: any) => (
                <div key={n.id} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <Bell className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-dark-900 truncate">{n.title}</p>
                    <p className="text-xs text-gray-500 truncate">{n.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-dark-900">Recent Activity</h2>
          </div>
          {activity.length === 0 ? (
            <p className="text-sm text-gray-500 py-8 text-center">No activity yet</p>
          ) : (
            <div className="space-y-3">
              {activity.slice(0, 5).map((a: any) => (
                <div key={a.id} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-dark-900 truncate">{a.description || a.action}</p>
                    <p className="text-xs text-gray-500">{new Date(a.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
