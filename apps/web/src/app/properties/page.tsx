'use client';

import Link from 'next/link';
import {
  Search, SlidersHorizontal, MapPin, Bed, Bath, Square,
  ArrowRight, Building2, Home, LandPlot, Crown, Grid3X3,
} from 'lucide-react';
import Pagination from '@/components/ui/Pagination';

const PROPERTIES = [
  {
    title: 'Sunset Ridge Villa',
    location: 'Karen, Nairobi, Kenya',
    price: '$485,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    type: 'Residential',
    badge: 'Featured',
    badgeColor: 'bg-gold-gradient text-dark-900',
  },
  {
    title: 'Ocean Breeze Penthouse',
    location: 'Victoria Island, Lagos, Nigeria',
    price: '$720,000',
    beds: 3,
    baths: 3,
    sqft: '3,100',
    type: 'Luxury',
    badge: 'New',
    badgeColor: 'bg-dark-900 text-gold-400',
  },
  {
    title: 'Golden Heights Estate',
    location: 'East Legon, Accra, Ghana',
    price: '$345,000',
    beds: 4,
    baths: 3,
    sqft: '3,600',
    type: 'Residential',
    badge: 'Hot',
    badgeColor: 'bg-gold-500 text-dark-900',
  },
  {
    title: 'Savanna Commercial Plaza',
    location: 'Westlands, Nairobi, Kenya',
    price: '$1,200,000',
    beds: 20,
    baths: 12,
    sqft: '18,500',
    type: 'Commercial',
    badge: 'Premium',
    badgeColor: 'bg-dark-900 text-gold-400',
  },
  {
    title: 'Kilimani Townhouse',
    location: 'Kilimani, Nairobi, Kenya',
    price: '$275,000',
    beds: 3,
    baths: 2,
    sqft: '2,400',
    type: 'Residential',
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Riverside Office Suites',
    location: 'Riverside, Nairobi, Kenya',
    price: '$890,000',
    beds: 12,
    baths: 8,
    sqft: '12,000',
    type: 'Commercial',
    badge: 'Featured',
    badgeColor: 'bg-gold-gradient text-dark-900',
  },
  {
    title: 'Cape Coast Luxury Villa',
    location: 'Cape Coast, Ghana',
    price: '$650,000',
    beds: 6,
    baths: 5,
    sqft: '5,800',
    type: 'Luxury',
    badge: 'Premium',
    badgeColor: 'bg-dark-900 text-gold-400',
  },
  {
    title: 'Langata Residential Plot',
    location: 'Langata, Nairobi, Kenya',
    price: '$120,000',
    beds: 0,
    baths: 0,
    sqft: '8,500',
    type: 'Land',
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Ikoyi Smart Apartment',
    location: 'Ikoyi, Lagos, Nigeria',
    price: '$395,000',
    beds: 2,
    baths: 2,
    sqft: '1,800',
    type: 'Residential',
    badge: 'New',
    badgeColor: 'bg-dark-900 text-gold-400',
  },
  {
    title: 'Mombasa Beachfront Plot',
    location: 'Diani Beach, Mombasa, Kenya',
    price: '$210,000',
    beds: 0,
    baths: 0,
    sqft: '12,000',
    type: 'Land',
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Lavington Manor',
    location: 'Lavington, Nairobi, Kenya',
    price: '$580,000',
    beds: 5,
    baths: 4,
    sqft: '4,500',
    type: 'Luxury',
    badge: 'Featured',
    badgeColor: 'bg-gold-gradient text-dark-900',
  },
  {
    title: 'Accra Retail Center',
    location: 'Osu, Accra, Ghana',
    price: '$950,000',
    beds: 8,
    baths: 6,
    sqft: '14,200',
    type: 'Commercial',
    badge: null,
    badgeColor: '',
  },
];

const FILTER_TABS = [
  { label: 'All', icon: Grid3X3, count: 12 },
  { label: 'Residential', icon: Home, count: 5 },
  { label: 'Commercial', icon: Building2, count: 3 },
  { label: 'Land', icon: LandPlot, count: 2 },
  { label: 'Luxury', icon: Crown, count: 3 },
];

export default function PropertiesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Aurora Havens Properties',
            description: 'Premium real estate properties available for purchase or rent',
            url: 'https://aurorahavens.com/properties',
          }),
        }}
      />
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-12 sm:pb-16 lg:pb-20 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold-500/3 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-gold-400 font-medium text-sm mb-4">
              <div className="w-8 h-px bg-gold-500" />
              PORTFOLIO
              <div className="w-8 h-px bg-gold-500" />
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Explore Our{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Properties</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Discover handpicked premium properties across Africa. Every investment transforms a community.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 sm:p-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <div className="flex-1 flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search location, property, type..."
                  className="flex-1 min-w-0 bg-transparent text-white placeholder:text-white/30 outline-none text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
                <button className="flex-1 sm:flex-none px-6 py-3 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 transition-all">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FILTERS ═══════════════════ */}
      <section className="sticky top-[56px] sm:top-[72px] z-30 bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.label}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  tab.label === 'All'
                    ? 'bg-dark-900 text-gold-400 shadow-lg shadow-dark-900/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-md ${
                  tab.label === 'All' ? 'bg-gold-500/20 text-gold-400' : 'bg-gray-200 text-gray-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROPERTY GRID ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <p className="text-gray-500 font-medium">
              Showing <span className="text-dark-900 font-semibold">12</span> properties
            </p>
            <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Largest First</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {PROPERTIES.map((property, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-800 to-dark-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gold-500/20 font-display text-5xl font-bold">AH</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {property.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-lg ${property.badgeColor} shadow-lg`}>
                      {property.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-dark-900/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg border border-white/10">
                    {property.type}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-gold-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    {property.beds > 0 && (
                      <span className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-dark-400" /> {property.beds} Beds
                      </span>
                    )}
                    {property.baths > 0 && (
                      <span className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-dark-400" /> {property.baths} Baths
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Square className="w-4 h-4 text-dark-400" /> {property.sqft} sqft
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xl font-display font-bold text-dark-900">{property.price}</span>
                    <Link
                      href={`/properties/${index}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      View Details <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Can&apos;t Find What You&apos;re Looking{' '}
            <span className="bg-gold-gradient bg-clip-text text-transparent">For</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Our team of property experts can help you find the perfect property tailored to your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/invest"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-500/30 text-gold-400 font-display font-semibold rounded-xl hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
            >
              Invest With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
