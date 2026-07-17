'use client';
import { usePortalViewings } from '@/hooks/usePortal';
import { CalendarCheck, Clock, Plus } from 'lucide-react';

export default function ViewingsPage() {
  const { data: viewings, isLoading } = usePortalViewings();
  const items = viewings || [];
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-dark-900">Property Viewings</h1>
        <button className="btn-primary text-sm"><Plus className="w-4 h-4" /> Schedule Viewing</button>
      </div>
      {isLoading ? (
        <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-24 bg-white rounded-xl animate-pulse" />)}</div>
      ) : items.length === 0 ? (
        <div className="card text-center py-12"><CalendarCheck className="w-12 h-12 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No viewings scheduled</p></div>
      ) : (
        <div className="space-y-3">
          {items.map((v: any) => {
            const attrs = v.attributes || {};
            return (
              <div key={v.id} className="card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0"><CalendarCheck className="w-6 h-6 text-gold-600" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-900">{v.title}</p>
                  {attrs.scheduledAt && <p className="text-xs text-gray-500 mt-1 flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(attrs.scheduledAt).toLocaleString()}</p>}
                </div>
                <span className={`badge ${attrs.status === 'CONFIRMED' ? 'badge-green' : attrs.status === 'COMPLETED' ? 'badge-blue' : 'badge-gold'}`}>{attrs.status || v.status}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
