'use client';

import { usePortalLeases } from '@/hooks/usePortal';
import { FileText } from 'lucide-react';

export default function LeasesPage() {
  const { data, isLoading } = usePortalLeases();
  const leases = data || [];

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">Lease Agreements</h1>

      {isLoading ? (
        <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-24 bg-white rounded-xl animate-pulse" />)}</div>
      ) : leases.length === 0 ? (
        <div className="card text-center py-12">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No lease agreements yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {leases.map((lease: any) => (
            <div key={lease.id} className="card flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-gold-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-medium text-dark-900 truncate">{lease.title || 'Lease Agreement'}</p>
                  <span className={`badge ${lease.status === 'ACTIVE' ? 'badge-green' : 'badge-gray'}`}>{lease.status || 'PENDING'}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {lease.startDate && new Date(lease.startDate).toLocaleDateString()} — {lease.endDate && new Date(lease.endDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold text-dark-900">KES {Number(lease.monthlyRent || 0).toLocaleString()}</p>
                <p className="text-xs text-gray-500">/month</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
