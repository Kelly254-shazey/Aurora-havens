'use client';

import { Building2 } from 'lucide-react';

export default function OwnerPropertiesPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">My Properties</h1>

      <div className="card text-center py-12">
        <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500">No properties registered yet. Properties will appear here once ownership is verified.</p>
      </div>
    </div>
  );
}
