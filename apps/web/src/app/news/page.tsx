'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag, TrendingUp } from 'lucide-react';
import Pagination from '@/components/ui/Pagination';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const FEATURED = {
  title: 'Aurora Havens Expands to Three New African Markets',
  excerpt: 'We are thrilled to announce our expansion into Tanzania, Rwanda, and South Africa, bringing our integrated real estate and social impact platform to even more communities across the continent.',
  category: 'Company News',
  date: 'July 10, 2026',
  readTime: '5 min read',
  author: 'Amara Okonkwo',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop',
};

const ARTICLES = [
  {
    title: 'Top 5 Reasons to Invest in Nairobi Real Estate in 2026',
    excerpt: 'Nairobi continues to be one of Africa most dynamic real estate markets. Here is why savvy investors are paying attention.',
    category: 'Investment',
    date: 'July 8, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&fit=crop',
  },
  {
    title: 'Foundation Feeding Program Reaches 100,000 Meals Milestone',
    excerpt: 'Our feeding program has officially served over 100,000 meals to children in underserved communities across Kenya and Ghana.',
    category: 'Foundation',
    date: 'July 5, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&fit=crop',
  },
  {
    title: 'Understanding Property Valuation in Emerging African Markets',
    excerpt: 'A comprehensive guide to how properties are valued in fast-growing African cities and what investors should know.',
    category: 'Real Estate',
    date: 'July 2, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&fit=crop',
  },
  {
    title: 'New Luxury Development Breaks Ground in Westlands',
    excerpt: 'Construction has begun on our latest luxury residential project featuring 48 premium units with world-class amenities.',
    category: 'Construction',
    date: 'June 28, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&fit=crop',
  },
  {
    title: 'How Micro-Investing is Democratizing Real Estate in Africa',
    excerpt: 'Our low minimum investment thresholds are making property investment accessible to a new generation of African investors.',
    category: 'Investment',
    date: 'June 25, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&fit=crop',
  },
  {
    title: 'Success Story: From Sponsored Student to Software Engineer',
    excerpt: 'Read how Samuel Osei overcame adversity through our education program to become a software engineer at a leading tech company.',
    category: 'Foundation',
    date: 'June 20, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Company News': 'bg-gold-500/10 text-gold-600 border-gold-500/20',
  Investment: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  Foundation: 'bg-foundation-hot/10 text-foundation-hot border-foundation-hot/20',
  'Real Estate': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  Construction: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
};

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ARTICLES.length / ITEMS_PER_PAGE);
  const paginatedArticles = ARTICLES.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

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
              <TrendingUp className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-sm font-medium">News & Insights</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Latest{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">News</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest from Aurora Havens, including company news,
              investment insights, foundation impact stories, and industry trends.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ FEATURED ARTICLE ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-8">
              <div className="w-8 h-px bg-gold-500" />
              FEATURED STORY
              <div className="w-8 h-px bg-gold-500" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500 grid lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto bg-gradient-to-br from-dark-800 to-navy-500 min-h-[300px]">
                <img
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-lg border ${CATEGORY_COLORS[FEATURED.category] || 'bg-gray-100 text-gray-600'}`}>
                  {FEATURED.category}
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-dark-900 mb-4 group-hover:text-gold-600 transition-colors leading-tight">
                  {FEATURED.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{FEATURED.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> {FEATURED.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {FEATURED.readTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">By {FEATURED.author}</span>
                  <Link
                    href="/news/featured"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    Read Full Article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ ARTICLES GRID ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                LATEST ARTICLES
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Recent Posts
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Insights, stories, and updates from across Aurora Havens
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {paginatedArticles.map((article, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-800 to-navy-500">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-lg border ${CATEGORY_COLORS[article.category] || 'bg-gray-100 text-gray-600'}`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-dark-900 mb-2 group-hover:text-gold-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    <Link
                      href="/news/article"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      Read More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </section>
    </div>
  );
}
