'use client';

import Link from 'next/link';
import {
  ArrowRight, HardHat, CheckCircle2, Clock, MapPin,
  Building2, Ruler, Wrench, Shield, Star, Zap,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const PACKAGES = [
  {
    name: 'Standard',
    price: '$45,000',
    description: 'Quality residential construction with essential finishes',
    icon: Building2,
    features: [
      '2-3 Bedroom Home',
      'Modern Kitchen Fittings',
      'Quality Tiling & Flooring',
      'Standard Plumbing & Electrical',
      'Perimeter Wall & Gate',
      'Landscaping Basics',
      '1 Year Structural Warranty',
    ],
    popular: false,
    color: 'border-gray-200 hover:border-gold-500/30',
  },
  {
    name: 'Premium',
    price: '$85,000',
    description: 'Elevated living with premium finishes and smart features',
    icon: Star,
    features: [
      '3-4 Bedroom Home',
      'Premium Kitchen with Island',
      'Imported Tiles & Fixtures',
      'Smart Home Integration',
      'Solar Panel System',
      'Inbuilt Wardrobes',
      'Swimming Pool Option',
      '3 Year Structural Warranty',
    ],
    popular: true,
    color: 'border-gold-500 shadow-xl shadow-gold-500/10',
  },
  {
    name: 'Luxury',
    price: '$150,000+',
    description: 'Bespoke luxury construction with world-class specifications',
    icon: Zap,
    features: [
      '4-6 Bedroom Villa',
      'Designer Kitchen & Pantry',
      'Marble & Hardwood Finishes',
      'Full Smart Home System',
      'Private Pool & Garden',
      'Home Theater & Gym',
      'Guest Wing / Cottage',
      '5 Year Structural Warranty',
      'Dedicated Project Manager',
    ],
    popular: false,
    color: 'border-gray-200 hover:border-gold-500/30',
  },
];

const PROJECTS = [
  {
    title: 'Westlands Luxury Residences',
    location: 'Westlands, Nairobi',
    units: '48 Units',
    progress: 75,
    status: 'On Track',
    completionDate: 'December 2026',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
  },
  {
    title: 'Accra Mixed-Use Complex',
    location: 'East Legon, Accra',
    units: '32 Units + Retail',
    progress: 45,
    status: 'On Track',
    completionDate: 'March 2027',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop',
  },
  {
    title: 'Diani Beach Resort Villas',
    location: 'Diani Beach, Mombasa',
    units: '12 Villas',
    progress: 30,
    status: 'On Track',
    completionDate: 'June 2027',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&fit=crop',
  },
];

export default function ConstructionPage() {
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
              <HardHat className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-sm font-medium">Build With Us</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Construction{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Services</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we bring your dream home to life with quality craftsmanship,
              transparent pricing, and on-time delivery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ PACKAGES ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                PACKAGES
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Construction Packages
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Choose from our carefully designed packages, each tailored to different budgets and lifestyles
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 sm:gap-8 items-start">
            {PACKAGES.map((pkg, index) => (
              <StaggerItem key={index}>
                <div className={`relative bg-white rounded-2xl p-8 border-2 ${pkg.color} transition-all duration-500 ${pkg.popular ? 'md:-translate-y-4' : 'hover:shadow-xl'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-gradient text-dark-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${pkg.popular ? 'bg-gold-500 shadow-lg shadow-gold-500/20' : 'bg-gold-500/10'}`}>
                    <pkg.icon className={`w-7 h-7 ${pkg.popular ? 'text-dark-900' : 'text-gold-600'}`} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy-500 mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-display font-bold text-navy-500 mb-2">{pkg.price}</div>
                  <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 font-display font-semibold rounded-xl transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gold-gradient text-dark-900 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30'
                        : 'border-2 border-dark-800 text-navy-500 hover:bg-dark-800 hover:text-white'
                    }`}
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ CURRENT PROJECTS ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                ONGOING
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Current Projects
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Track the progress of our ongoing construction projects across Africa
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 sm:gap-8">
            {PROJECTS.map((project, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-800 to-navy-500 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-500" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-navy-500 mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{project.units}</p>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-gray-500 font-medium">Progress</span>
                        <span className="font-display font-bold text-gold-600">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold-gradient rounded-full transition-all duration-1000"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        Est. {project.completionDate}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ WHY CHOOSE ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-400 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                WHY US
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Build With Confidence
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: Shield, title: 'Quality Assured', description: 'Premium materials and skilled craftsmanship in every project' },
              { icon: Clock, title: 'On-Time Delivery', description: 'We honor our timelines with transparent progress tracking' },
              { icon: Ruler, title: 'Custom Designs', description: 'Tailored floor plans and finishes to match your vision' },
              { icon: Wrench, title: 'Full Service', description: 'From permits to handover, we handle every detail' },
            ].map((feature, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-500 group">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-gold-500 group-hover:text-dark-900 transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
