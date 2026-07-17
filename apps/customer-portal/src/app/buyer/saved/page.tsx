'use client';
import { usePortalSavedProperties } from '@/hooks/usePortal';
import { Heart, MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';

export default function SavedPropertiesPage() {
  const { data: saved, isLoading } = usePortalSavedProperties();
  const items = saved || [];
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">Saved Properties</h1>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{[...Array(3)].map((_, i) => <div key={i} className="h-64 bg-white rounded-2xl animate-pulse" />)}</div>
      ) : items.length === 0 ? (
        <div className="card text-center py-12"><Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" /><p className="text-gray-500">No saved properties yet</p></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item: any) => {
            const attrs = item.entity?.attributes || {};
            return (
              <div key={item.id} className="card group">
                <div className="h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center"><MapPin className="w-8 h-8 text-gray-300" /></div>
                <h3 className="font-display font-semibold text-dark-900 mb-1">{item.entity?.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{attrs.location || attrs.city || 'Kenya'}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  {attrs.bedrooms && <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {attrs.bedrooms} Beds</span>}
                  {attrs.bathrooms && <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {attrs.bathrooms} Baths</span>}
                  {attrs.squareFeet && <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" /> {attrs.squareFeet} sqft</span>}
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-display font-bold text-gold-600">KES {Number(attrs.price || 0).toLocaleString()}</p>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors" aria-label="Remove from saved"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
