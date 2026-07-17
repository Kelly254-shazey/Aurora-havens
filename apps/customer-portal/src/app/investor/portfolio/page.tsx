'use client';

import { TrendingUp, BarChart3, Layers } from 'lucide-react';
import Link from 'next/link';

function StatCard({ icon: Icon, label, value }: { icon: typeof TrendingUp; label: string; value: string }) {
  return (
    <div className="card flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-gold-600" />
      </div>
      <div className="min-w-0">
        <p className="text-2xl font-display font-bold text-dark-900">{value}</p>
        <p className="text-sm text-gray-500 truncate">{label}</p>
      </div>
    </div>
  );
}

export default function InvestorPortfolioPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">My Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={TrendingUp} label="Total Invested" value="KES 0" />
        <StatCard icon={BarChart3} label="Avg ROI" value="0%" />
        <StatCard icon={Layers} label="Active Investments" value="0" />
      </div>

      <div className="card text-center py-12">
        <p className="text-gray-500 mb-4">You haven&apos;t made any investments yet.</p>
        <Link href="/invest" className="btn-primary text-sm">Browse Opportunities</Link>
      </div>
    </div>
  );
}
