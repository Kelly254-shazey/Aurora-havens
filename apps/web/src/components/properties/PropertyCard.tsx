'use client';

import Link from 'next/link';
import { MapPin, Bed, Bath, Square, Heart, Share2 } from 'lucide-react';
import { formatCurrency } from '@aurora-havens/shared';

interface PropertyCardProps {
  id: string;
  title: string;
  slug: string;
  price: number;
  currency: string;
  type: string;
  status: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  address: {
    city: string;
    state: string;
  };
  images: Array<{ url: string; alt: string; isPrimary: boolean }>;
  isFeatured?: boolean;
  isNew?: boolean;
}

export function PropertyCard({
  title,
  slug,
  price,
  currency,
  type,
  status,
  bedrooms,
  bathrooms,
  squareFeet,
  address,
  images,
  isFeatured,
  isNew,
}: PropertyCardProps) {
  const primaryImage = images.find((img) => img.isPrimary) || images[0];

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500">
      <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
        {primaryImage ? (
          <img
            src={primaryImage.url}
            alt={primaryImage.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
            <span className="text-gold-500/30 font-display text-4xl font-bold">AH</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 flex gap-2">
          {isFeatured && (
            <span className="bg-gold-gradient text-dark-900 text-xs font-bold px-2.5 py-1 rounded-lg shadow-lg">
              Featured
            </span>
          )}
          {isNew && (
            <span className="bg-dark-900/80 backdrop-blur-sm text-gold-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-gold-500/20">
              New
            </span>
          )}
          <span className="bg-dark-900/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg">
            {type}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gold-500 hover:text-dark-900 transition-all shadow-lg">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gold-500 hover:text-dark-900 transition-all shadow-lg">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-3 left-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold backdrop-blur-sm ${
            status === 'AVAILABLE' ? 'bg-emerald-500/90 text-white' :
            status === 'SOLD' ? 'bg-red-500/90 text-white' :
            status === 'RENTED' ? 'bg-blue-500/90 text-white' :
            'bg-gray-500/90 text-white'
          }`}>
            {status}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin className="w-3.5 h-3.5 text-gold-500" />
          <span>{address.city}, {address.state}</span>
        </div>

        <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-gold-600 transition-colors">
          <Link href={`/properties/${slug}`}>{title}</Link>
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          {bedrooms && (
            <span className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-dark-400" /> {bedrooms} Beds
            </span>
          )}
          {bathrooms && (
            <span className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-dark-400" /> {bathrooms} Baths
            </span>
          )}
          {squareFeet && (
            <span className="flex items-center gap-1.5">
              <Square className="w-4 h-4 text-dark-400" /> {squareFeet.toLocaleString()} sqft
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xl font-display font-bold text-dark-900">
            {formatCurrency(price, currency)}
          </span>
          <Link
            href={`/properties/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
          >
            View Details
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
