'use client';

import Link from 'next/link';
import {
  ArrowRight, Heart, HandHeart, GraduationCap, Stethoscope,
  Users, UtensilsCrossed, Building2, CheckCircle2,
  DollarSign, Handshake, Users as UsersIcon,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const PROGRAMS = [
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Delivering essential medical services to underserved communities across Africa, ensuring access to quality healthcare for all ages.',
    impact: '15,000+ beneficiaries',
    gradient: 'from-foundation-maroon to-foundation-hot',
    href: '/foundation/programs/healthcare',
    items: ['Free Medical Camps', 'Health Screenings', 'Maternal Care', 'Mental Health Support'],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Sponsoring children through school and building the infrastructure needed to give every child the opportunity to learn and thrive.',
    impact: '500+ children sponsored',
    gradient: 'from-foundation-hot to-foundation-baby',
    href: '/foundation/programs/education',
    items: ['School Sponsorship', 'Learning Materials', 'Teacher Training', 'Digital Literacy'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Feeding Program',
    description: 'Fighting childhood hunger with nutritious meals that keep children healthy, in school, and ready to learn.',
    impact: '100,000+ meals served',
    gradient: 'from-foundation-baby to-foundation-maroon',
    href: '/foundation/programs/feeding',
    items: ['Daily School Meals', 'Weekend Feeding', 'Nutrition Education', 'Food Packages'],
  },
  {
    icon: Users,
    title: 'Women Empowerment',
    description: 'Equipping women with the skills, capital, and confidence to build sustainable livelihoods and become community leaders.',
    impact: '1,000+ women supported',
    gradient: 'from-foundation-hot to-foundation-maroon',
    href: '/foundation/programs/women',
    items: ['Skills Training', 'Micro-Loans', 'Business Mentorship', 'Legal Aid'],
  },
  {
    icon: Heart,
    title: 'Youth Development',
    description: 'Preparing young people for the future through vocational training, mentorship, and opportunities in sports and the arts.',
    impact: '2,000+ youth trained',
    gradient: 'from-foundation-maroon to-foundation-baby',
    href: '/foundation/programs/youth',
    items: ['Vocational Training', 'Mentorship', 'Sports Programs', 'Arts & Culture'],
  },
  {
    icon: Building2,
    title: 'Community Building',
    description: 'Transforming neighborhoods through infrastructure projects that provide clean water, safe spaces, and lasting change.',
    impact: '100+ communities served',
    gradient: 'from-foundation-baby to-foundation-hot',
    href: '/foundation/programs/community',
    items: ['Water Projects', 'Community Centers', 'Infrastructure', 'Environmental'],
  },
];

const SUPPORT_WAYS = [
  {
    icon: DollarSign,
    title: 'Donate',
    description: 'Your financial support fuels our programs. Every dollar goes directly to transforming lives.',
    href: '/donate',
    cta: 'Make a Donation',
  },
  {
    icon: UsersIcon,
    title: 'Volunteer',
    description: 'Lend your time and skills to our programs — on the ground or virtually from anywhere in the world.',
    href: '/volunteer',
    cta: 'Join Our Team',
  },
  {
    icon: Handshake,
    title: 'Partner',
    description: 'Corporate partnerships, sponsorships, and collaborations amplify our reach and deepen our impact.',
    href: '/partner',
    cta: 'Become a Partner',
  },
];

export default function ProgramsPage() {
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
              Our Foundation{' '}
              <span className="text-foundation-baby">Programs</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
              From healthcare to education, every program is designed to lift communities
              and create lasting, measurable impact across Africa.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foundation-maroon font-display font-semibold rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Programs <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-display font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Support Our Mission
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ 6 PILLARS INTRO ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
              <div className="w-8 h-px bg-foundation-hot/40" />
              — PROGRAMS —
              <div className="w-8 h-px bg-foundation-hot/40" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
              6 Pillars of Change
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Our six core programs work in concert to address the root causes of poverty.
              Together, they form a holistic framework that uplifts individuals, strengthens
              families, and transforms entire communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ PROGRAM CARDS ═══════════════════ */}
      {PROGRAMS.map((program, index) => (
        <section key={index} className={`py-16 sm:py-20 lg:py-24 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div id={program.title.toLowerCase().replace(/\s+/g, '-')} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal direction="left">
                <div className="relative overflow-hidden rounded-2xl bg-navy-500">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)`
                  }} />
                  <div className="relative p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                        {program.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 font-semibold">
                        <HandHeart className="w-4 h-4" />
                        {program.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="mt-8 grid sm:grid-cols-2 gap-4 sm:gap-8 items-start">
                <ScrollReveal direction="left">
                  <div>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {program.description}
                    </p>
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-2 text-foundation-hot font-display font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h4 className="font-display font-semibold text-navy-500 text-sm mb-4 uppercase tracking-wider">
                      What We Do
                    </h4>
                    <ul className="space-y-3">
                      {program.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-foundation-hot shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════ HOW TO SUPPORT ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                — HOW TO SUPPORT —
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Make a Difference Today
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                There are many ways to join us in transforming lives
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.1}>
            {SUPPORT_WAYS.map((item, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 text-center hover:border-foundation-hot/30 hover:shadow-xl hover:shadow-foundation-hot/5 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-foundation-maroon to-foundation-hot rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-navy-500 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-foundation-maroon to-foundation-hot text-white font-display font-semibold rounded-xl hover:shadow-lg hover:shadow-foundation-hot/20 hover:-translate-y-0.5 transition-all duration-300 text-sm"
                  >
                    {item.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ FOOTER CTA ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Heart className="w-12 h-12 text-foundation-hot mx-auto mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-6 leading-tight">
              Every Program Changes{' '}
              <span className="text-foundation-hot">a Life</span>
            </h2>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your support makes our programs possible. Join us in creating lasting change
              for communities across Africa.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foundation-hot text-white font-display font-semibold rounded-xl shadow-xl shadow-foundation-hot/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Donate Now <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
