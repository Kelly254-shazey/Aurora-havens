'use client';

import { usePortalMaintenance } from '@/hooks/usePortal';
import { Wrench } from 'lucide-react';

export default function MaintenancePage() {
  const { data, isLoading } = usePortalMaintenance();
  const requests = data || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-dark-900">Maintenance Requests</h1>
        <button className="btn-primary text-sm">New Request</button>
      </div>

      {isLoading ? (
        <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-24 bg-white rounded-xl animate-pulse" />)}</div>
      ) : requests.length === 0 ? (
        <div className="card text-center py-12">
          <Wrench className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No maintenance requests yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {requests.map((req: any) => (
            <div key={req.id} className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5 text-gold-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-medium text-dark-900 truncate">{req.title}</p>
                    <span className={`badge ${req.priority === 'HIGH' ? 'badge-red' : req.priority === 'MEDIUM' ? 'badge-gold' : 'badge-green'}`}>{req.priority}</span>
                    <span className={`badge ${req.status === 'RESOLVED' ? 'badge-green' : 'badge-gray'}`}>{req.status}</span>
                  </div>
                  {req.description && (
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{req.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
