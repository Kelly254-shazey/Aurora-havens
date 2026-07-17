'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Camera, Grid3X3, Image as ImageIcon, ArrowRight } from 'lucide-react';
import Pagination from '@/components/ui/Pagination';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const CATEGORIES = ['All', 'Properties', 'Foundation', 'Construction', 'Events', 'Team'];

const GALLERY_ITEMS = [
  { category: 'Properties', title: 'Sunset Ridge Villa', location: 'Nairobi, Kenya' },
  { category: 'Properties', title: 'Ocean Breeze Penthouse', location: 'Lagos, Nigeria' },
  { category: 'Foundation', title: 'Feeding Program - Kibera', location: 'Nairobi, Kenya' },
  { category: 'Properties', title: 'Golden Heights Estate', location: 'Accra, Ghana' },
  { category: 'Construction', title: 'Westlands Commercial Plaza', location: 'Nairobi, Kenya' },
  { category: 'Foundation', title: 'School Supply Distribution', location: 'Kumasi, Ghana' },
  { category: 'Events', title: 'Investor Gala 2025', location: 'Nairobi, Kenya' },
  { category: 'Properties', title: 'Lavington Manor', location: 'Nairobi, Kenya' },
  { category: 'Team', title: 'Annual Strategy Retreat', location: 'Mombasa, Kenya' },
  { category: 'Foundation', title: 'Medical Camp - Diani', location: 'Mombasa, Kenya' },
  { category: 'Construction', title: 'Accra Mixed-Use Progress', location: 'Accra, Ghana' },
  { category: 'Properties', title: 'Kilimani Townhouse', location: 'Nairobi, Kenya' },
  { category: 'Events', title: 'Foundation Awards Night', location: 'Lagos, Nigeria' },
  { category: 'Team', title: 'New Office Launch', location: 'Nairobi, Kenya' },
  { category: 'Foundation', title: 'Women Empowerment Workshop', location: 'Accra, Ghana' },
  { category: 'Properties', title: 'Cape Coast Luxury Villa', location: 'Cape Coast, Ghana' },
  { category: 'Construction', title: 'Mombasa Beach Resort', location: 'Diani Beach, Kenya' },
  { category: 'Team', title: 'Community Outreach Day', location: 'Nairobi, Kenya' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-16 sm:pb-20 lg:pb-24 bg-navy-500 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold-500/3 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-8">
              <Camera className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-sm font-medium">Visual Portfolio</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Our{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Gallery</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A visual journey through our properties, foundation impact, construction projects,
              and the people behind Aurora Havens.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ FILTERS & GRID ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-navy-500 text-gold-400 shadow-lg shadow-navy-500/20'
                      : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry-style Grid */}
          <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, index) => {
              const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-60', 'h-88'];
              const height = heights[index % heights.length];

              return (
                <StaggerItem key={index}>
                  <div
                    className="group break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500 cursor-pointer"
                  >
                    <div className={`relative ${height} bg-gradient-to-br from-dark-800 to-navy-500 flex items-center justify-center`}>
                      <span className="text-gold-500/10 font-display text-5xl font-bold">AH</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-md bg-gold-500/20 text-gold-400 border border-gold-500/20 mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-display font-semibold text-white text-lg">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">No images found in this category.</p>
            </div>
          )}

          <div className="mt-12">
            <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
          </div>
        </div>
      </section>
    </div>
  );
}
