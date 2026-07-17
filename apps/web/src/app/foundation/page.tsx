'use client';

import Link from 'next/link';
import {
  ArrowRight, Heart, HandHeart, GraduationCap, Stethoscope,
  Users, Home, UtensilsCrossed, Building2, MapPin,
  Quote, Star,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const STATS = [
  { icon: UtensilsCrossed, value: '100,000+', label: 'Meals Served' },
  { icon: GraduationCap, value: '500+', label: 'Children Sponsored' },
  { icon: Stethoscope, value: '50+', label: 'Medical Camps' },
  { icon: MapPin, value: '100+', label: 'Communities Reached' },
  { icon: Home, value: '1,000+', label: 'Women Supported' },
];

const PROGRAMS = [
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Providing free medical camps, health screenings, and access to essential healthcare services in underserved communities across Africa.',
    impact: '15,000+ beneficiaries',
    color: 'from-foundation-maroon to-foundation-hot',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Sponsoring children through school, providing learning materials, and building educational infrastructure in rural areas.',
    impact: '500+ children sponsored',
    color: 'from-foundation-hot to-foundation-baby',
  },
  {
    icon: UtensilsCrossed,
    title: 'Feeding Program',
    description: 'Ensuring no child goes hungry through daily meal programs in schools and community centers across our regions of operation.',
    impact: '100,000+ meals served',
    color: 'from-foundation-baby to-foundation-maroon',
  },
  {
    icon: Users,
    title: 'Women Empowerment',
    description: 'Supporting women with skills training, micro-loans, and resources to build sustainable livelihoods for their families.',
    impact: '1,000+ women supported',
    color: 'from-foundation-hot to-foundation-maroon',
  },
  {
    icon: Heart,
    title: 'Youth Development',
    description: 'Equipping young people with vocational skills, mentorship, and employment opportunities to break the cycle of poverty.',
    impact: '2,000+ youth trained',
    color: 'from-foundation-maroon to-foundation-baby',
  },
  {
    icon: Building2,
    title: 'Community Building',
    description: 'Constructing community centers, clean water facilities, and infrastructure that uplifts entire neighborhoods.',
    impact: '100+ communities served',
    color: 'from-foundation-baby to-foundation-hot',
  },
];

const STORIES = [
  {
    name: 'Grace Wanjiku',
    location: 'Kibera, Nairobi',
    story: 'The Aurora Foundation sponsored my education when my family could no longer afford school fees. Today, I am a registered nurse working in my community.',
    initials: 'GW',
    rating: 5,
  },
  {
    name: 'Samuel Osei',
    location: 'Accra, Ghana',
    story: 'The feeding program kept me nourished through primary school. Without it, I would have dropped out. Now I am studying engineering at university.',
    initials: 'SO',
    rating: 5,
  },
  {
    name: 'Amina Bello',
    location: 'Lagos, Nigeria',
    story: 'The women empowerment program taught me tailoring skills and gave me a startup loan. I now run my own fashion business and employ three other women.',
    initials: 'AB',
    rating: 5,
  },
];

export default function FoundationPage() {
  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-500" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-foundation-baby rounded-full animate-pulse" />
              <span className="text-foundation-baby text-sm font-medium">Aurora Havens Foundation</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Restoring{' '}
              <span className="text-foundation-baby">Hope</span>,<br />
              Transforming Lives
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
              Through healthcare, education, and community empowerment, the Aurora Havens Foundation
              is creating lasting change in communities across Africa.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foundation-maroon font-display font-semibold rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Donate Now <Heart className="w-5 h-5" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-display font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Our Programs <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ IMPACT STATS ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                OUR IMPACT
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Making a Real Difference
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Every number represents a life touched, a family fed, or a community transformed
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8" staggerDelay={0.1}>
            {STATS.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center group p-4 sm:p-6 rounded-2xl border border-gray-100 hover:border-foundation-hot/30 hover:shadow-xl hover:shadow-foundation-hot/5 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-foundation-hot/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-foundation-hot group-hover:shadow-lg group-hover:shadow-foundation-hot/20 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-foundation-hot group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-navy-500 mb-1 whitespace-nowrap">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ PROGRAMS ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                PROGRAMS
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Our Initiatives
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Six pillars of impact working together to transform communities
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.1}>
            {PROGRAMS.map((program, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-foundation-hot/30 hover:shadow-xl hover:shadow-foundation-hot/5 transition-all duration-500">
                  <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-navy-500 mb-2">{program.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-4">{program.description}</p>
                  <div className="flex items-center gap-2 text-foundation-hot font-semibold text-sm">
                    <HandHeart className="w-4 h-4" />
                    {program.impact}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ SUCCESS STORIES ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                STORIES
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Lives We&apos;ve Changed
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Real stories from real people whose lives have been transformed
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.1}>
            {STORIES.map((story, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl p-8 border border-foundation-baby/30 hover:shadow-xl hover:shadow-foundation-hot/5 transition-all duration-500">
                  <Quote className="w-8 h-8 text-foundation-baby/40 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{story.story}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-foundation-baby/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-foundation-hot to-foundation-maroon rounded-full flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">{story.initials}</span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-navy-500 text-sm">{story.name}</div>
                      <div className="text-xs text-gray-500">{story.location}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ DONATE CTA ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Heart className="w-12 h-12 text-foundation-hot mx-auto mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-6 leading-tight">
              Every Donation Changes{' '}
              <span className="text-foundation-hot">a Life</span>
            </h2>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your generosity helps us feed children, educate youth, empower women, and build
              stronger communities. No amount is too small to make a difference.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foundation-hot text-white font-display font-semibold rounded-xl shadow-xl shadow-foundation-hot/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Make a Donation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foundation-hot/30 text-foundation-hot font-display font-semibold rounded-xl hover:bg-foundation-hot/5 transition-all duration-300"
              >
                Become a Volunteer
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
