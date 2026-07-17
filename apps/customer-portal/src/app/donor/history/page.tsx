'use client';

import { Heart, Sparkles, FolderHeart } from 'lucide-react';
import Link from 'next/link';

function StatCard({ icon: Icon, label, value }: { icon: typeof Heart; label: string; value: string }) {
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

export default function DonorHistoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">Donation History</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={Heart} label="Total Donated" value="KES 0" />
        <StatCard icon={Sparkles} label="Impact Score" value="0" />
        <StatCard icon={FolderHeart} label="Programs Supported" value="0" />
      </div>

      <div className="card text-center py-12">
        <p className="text-gray-500 mb-4">You haven&apos;t made any donations yet.</p>
        <Link href="https://aurorahavens.co.ke/donate" className="btn-primary text-sm" target="_blank" rel="noopener noreferrer">Donate Now</Link>
      </div>
    </div>
  );
}
