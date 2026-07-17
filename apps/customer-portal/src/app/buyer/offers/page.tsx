'use client';
import { usePortalOffers } from '@/hooks/usePortal';
import { HandCoins } from 'lucide-react';

export default function OffersPage() {
  const { data: offers, isLoading } = usePortalOffers();
  const items = offers || [];
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">My Offers</h1>
      {isLoading ? (
        <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-24 bg-white rounded-xl animate-pulse" />)}</div>
      ) : items.length === 0 ? (
        <div className="card text-center py-12"><HandCoins className="w-12 h-12 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No offers yet</p></div>
      ) : (
        <div className="space-y-3">
          {items.map((o: any) => {
            const attrs = o.attributes || {};
            return (
              <div key={o.id} className="card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0"><HandCoins className="w-6 h-6 text-gold-600" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-900">{o.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">KES {Number(attrs.amount || 0).toLocaleString()}</p>
                </div>
                <span className={`badge ${attrs.status === 'ACCEPTED' ? 'badge-green' : attrs.status === 'REJECTED' ? 'badge-red' : 'badge-gold'}`}>{attrs.status || o.status}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
