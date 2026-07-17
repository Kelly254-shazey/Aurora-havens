'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Building2, Users, Heart, TrendingUp,
  Star, MapPin, Bed, Bath, Square, Shield, Eye,
  HandHeart, GraduationCap, Stethoscope, Home
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Aurora Havens',
            url: 'https://aurorahavens.com',
            logo: 'https://aurorahavens.com/logo.png',
            description: 'Real estate and community development across Africa',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+254-700-000-000',
              contactType: 'customer service',
            },
          }),
        }}
      />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center bg-dark-900 overflow-hidden overflow-x-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-900/50 to-dark-900/30" />
        </motion.div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold-500/3 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />
        </div>

        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-8">
                  <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
                  <span className="text-gold-400 text-sm font-medium">Africa&apos;s Premier Real Estate Platform</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                  Building{' '}
                  <span className="bg-gold-gradient bg-clip-text text-transparent">Prosperity.</span>
                  <br />
                  <span className="text-gold-400">Restoring Hope.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed max-w-lg">
                  Africa&apos;s most trusted integrated real estate and social impact platform.
                  Every property investment contributes directly to transforming lives.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/properties"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Explore Properties
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/invest"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-500/30 text-gold-400 font-display font-semibold rounded-xl hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
                  >
                    Invest Today
                  </Link>
                  <Link
                    href="/foundation"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/10 text-white font-display font-semibold rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    Donate
                    <Heart className="w-5 h-5" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={0.5} className="mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold-500/5 rounded-3xl blur-xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { icon: Building2, value: '500+', label: 'Properties' },
                    { icon: Users, value: '10K+', label: 'Happy Clients' },
                    { icon: Heart, value: '50K+', label: 'Lives Changed' },
                    { icon: TrendingUp, value: '18%', label: 'Avg. ROI' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-500 group"
                    >
                      <stat.icon className="w-8 h-8 text-gold-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                  <div className="w-8 h-px bg-gold-500" />
                  WHO WE ARE
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
                  More Than Just{' '}
                  <span className="text-gold-500">Real Estate</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We are a movement dedicated to transforming communities across Africa through
                  sustainable development and meaningful social impact.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our mission is to provide quality housing solutions while creating opportunities
                  for economic growth and community development. Every property we build, every
                  investment we manage, and every donation we receive contributes to a brighter
                  future for thousands of families.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-dark-900 text-gold-400 font-display font-semibold rounded-xl border border-gold-500/20 hover:border-gold-500/40 hover:bg-dark-800 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/foundation"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-gold-500 text-gold-600 font-display font-semibold rounded-xl hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
                  >
                    Our Impact
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold-500/5 rounded-3xl" />
                <div className="relative aspect-video bg-dark-900 rounded-2xl overflow-hidden border border-gold-500/20 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop"
                    alt="Aurora Havens community"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-gold-500/30 cursor-pointer hover:scale-110 transition-transform">
                      <span className="text-dark-900 text-3xl ml-1">&#9654;</span>
                    </div>
                    <p className="text-gold-400 font-display font-semibold">Watch Our Story</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PROPERTIES ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                PORTFOLIO
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Discover our handpicked selection of premium properties across Africa
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
            {[
              {
                title: 'Sunset Ridge Villa',
                location: 'Nairobi, Kenya',
                price: '$450,000',
                beds: 4, baths: 3, sqft: '3,500',
                badge: 'Featured',
                badgeColor: 'bg-gold-gradient text-dark-900',
                image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop',
              },
              {
                title: 'Ocean View Penthouse',
                location: 'Lagos, Nigeria',
                price: '$680,000',
                beds: 3, baths: 2, sqft: '2,800',
                badge: 'New',
                badgeColor: 'bg-dark-900 text-gold-400',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop',
              },
              {
                title: 'Savanna Heights Estate',
                location: 'Accra, Ghana',
                price: '$320,000',
                beds: 5, baths: 4, sqft: '4,200',
                badge: 'Hot',
                badgeColor: 'bg-gold-500 text-dark-900',
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&fit=crop',
              },
            ].map((property) => (
              <StaggerItem key={property.title}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-800 to-dark-900 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-lg ${property.badgeColor} shadow-lg`}>
                      {property.badge}
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
                      <span className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-dark-400" /> {property.beds}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-dark-400" /> {property.baths}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Square className="w-4 h-4 text-dark-400" /> {property.sqft} sqft
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xl font-display font-bold text-dark-900">{property.price}</span>
                      <Link
                        href="/properties"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                      >
                        View Details <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-gold-400 font-display font-semibold rounded-xl border border-gold-500/20 hover:border-gold-500/40 hover:bg-dark-800 transition-all duration-300"
              >
                View All Properties <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                WHY US
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Why Choose Aurora Havens
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                We combine real estate excellence with meaningful social impact
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8" staggerDelay={0.12}>
            {[
              { icon: Shield, title: 'Professionalism', description: 'Industry-leading expertise in property management and development' },
              { icon: Eye, title: 'Transparency', description: 'Clear processes, honest pricing, and regular updates at every step' },
              { icon: Heart, title: 'Social Impact', description: 'Every investment contributes directly to community transformation' },
              { icon: TrendingUp, title: 'Innovation', description: 'Cutting-edge technology for a seamless property experience' },
            ].map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group text-center p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-gold-600 group-hover:text-dark-900 transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-dark-900">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ FOUNDATION IMPACT ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                AURORA HAVENS FOUNDATION
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Our Foundation Impact
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Together, we&apos;re making a real difference in communities across Africa
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8" staggerDelay={0.1}>
            {[
              { icon: <HandHeart className="w-6 h-6" />, value: '100,000+', label: 'Meals Served' },
              { icon: <GraduationCap className="w-6 h-6" />, value: '500+', label: 'Children Sponsored' },
              { icon: <Stethoscope className="w-6 h-6" />, value: '50+', label: 'Medical Camps' },
              { icon: <MapPin className="w-6 h-6" />, value: '100+', label: 'Communities Reached' },
              { icon: <Home className="w-6 h-6" />, value: '1,000+', label: 'Women Supported' },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-foundation-hot/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-foundation-hot/10 group-hover:border-foundation-hot/30 group-hover:bg-foundation-hot/15 transition-all duration-300 text-foundation-hot">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-display font-bold text-dark-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/foundation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foundation-hot text-white font-display font-semibold rounded-xl shadow-xl shadow-foundation-hot/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ INVESTMENT ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 text-gold-400 font-medium text-sm mb-4">
                  <div className="w-8 h-px bg-gold-500" />
                  INVESTMENTS
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Investment{' '}
                  <span className="bg-gold-gradient bg-clip-text text-transparent">Opportunities</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Grow your wealth responsibly with our carefully curated investment opportunities.
                  Enjoy competitive returns while making a positive impact on communities.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'High-yield real estate investments',
                    'Transparent ROI tracking',
                    'Flexible investment terms',
                    'Regular progress updates',
                    'Dedicated investor support',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-dark-900 text-xs font-bold">&#10003;</span>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/invest"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Investing <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold-500/5 rounded-3xl" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-500">
                  <div className="text-center mb-8">
                    <div className="text-5xl sm:text-6xl font-display font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">18%</div>
                    <div className="text-gray-400 font-medium">Average Annual ROI</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '$2M+', label: 'Total Invested' },
                      { value: '500+', label: 'Active Investors' },
                      { value: '100%', label: 'Payout Rate' },
                      { value: '5+', label: 'Years Experience' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-gold-500/20 transition-colors">
                        <div className="text-2xl font-display font-bold text-gold-400">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                TESTIMONIALS
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
            {[
              {
                name: 'Amina Okafor',
                role: 'Property Investor',
                content: 'Aurora Havens made investing in real estate accessible and transparent. My portfolio has grown 22% in just one year.',
                rating: 5,
              },
              {
                name: 'James Mwangi',
                role: 'Homeowner',
                content: 'The team guided me through every step. I now own a beautiful home in Nairobi that I never thought was possible.',
                rating: 5,
              },
              {
                name: 'Fatima Al-Hassan',
                role: 'Foundation Donor',
                content: 'Seeing the direct impact of my donations on communities is incredibly rewarding. This platform truly changes lives.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-gray-100 hover:border-gold-500/20 transition-all duration-300">
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center">
                      <span className="font-display font-bold text-gold-700 text-sm">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-dark-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Make a{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Difference</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of investors, donors, and property owners who are building
              prosperity and restoring hope across Africa.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Properties
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/invest"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-500/30 text-gold-400 font-display font-semibold rounded-xl hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
              >
                Become an Investor
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foundation-hot text-white font-display font-semibold rounded-xl shadow-xl shadow-foundation-hot/20 hover:shadow-foundation-hot/30 hover:bg-foundation-maroon hover:-translate-y-0.5 transition-all duration-300"
              >
                Donate Today
                <Heart className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
