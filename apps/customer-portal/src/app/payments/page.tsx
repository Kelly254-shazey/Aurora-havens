'use client';

import { usePortalPayments } from '@/hooks/usePortal';
import { CreditCard, Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useState } from 'react';

export default function PaymentsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePortalPayments(page);
  const payments = data?.data || [];
  const pagination = data?.pagination;

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">Payment History</h1>

      <div className="card overflow-hidden">
        {isLoading ? (
          <div className="p-6 space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-gray-50 rounded-lg animate-pulse" />)}</div>
        ) : payments.length === 0 ? (
          <div className="text-center py-12">
            <CreditCard className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No payments yet</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {payments.map((p: any) => (
              <div key={p.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${p.status === 'COMPLETED' ? 'bg-emerald-50' : p.status === 'PENDING' ? 'bg-amber-50' : 'bg-red-50'}`}>
                  {p.status === 'COMPLETED' ? <ArrowDownRight className="w-5 h-5 text-emerald-600" /> : <ArrowUpRight className="w-5 h-5 text-amber-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-900 truncate">{p.type} — {p.paymentMethod || 'N/A'}</p>
                  <p className="text-xs text-gray-500">{new Date(p.createdAt).toLocaleDateString()} {p.paymentReference && `• Ref: ${p.paymentReference}`}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-semibold text-dark-900">KES {Number(p.amount).toLocaleString()}</p>
                  <span className={`badge ${p.status === 'COMPLETED' ? 'badge-green' : p.status === 'PENDING' ? 'badge-gold' : 'badge-red'}`}>{p.status}</span>
                </div>
                {p.status === 'COMPLETED' && (
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Download receipt">
                    <Download className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="btn-ghost text-sm disabled:opacity-50">Previous</button>
          <span className="text-sm text-gray-500">Page {page} of {pagination.totalPages}</span>
          <button onClick={() => setPage(Math.min(pagination.totalPages, page + 1))} disabled={page === pagination.totalPages} className="btn-ghost text-sm disabled:opacity-50">Next</button>
        </div>
      )}
    </div>
  );
}
