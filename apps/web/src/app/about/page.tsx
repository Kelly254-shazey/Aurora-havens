'use client';

import Link from 'next/link';
import {
  ArrowRight, Shield, Eye, Heart, TrendingUp,
  Users, Building2, MapPin, Award, Target, Globe,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const TEAM = [
  { name: 'Amara Okonkwo', initials: 'AO', role: 'CEO & Founder', color: 'from-gold-400 to-gold-600' },
  { name: 'David Mwangi', initials: 'DM', role: 'Chief Operations Officer', color: 'from-dark-700 to-dark-800' },
  { name: 'Fatima Hassan', initials: 'FH', role: 'Head of Foundation', color: 'from-foundation-hot to-foundation-maroon' },
  { name: 'Kwame Asante', initials: 'KA', role: 'Chief Investment Officer', color: 'from-gold-500 to-gold-700' },
  { name: 'Zuri Ndegwa', initials: 'ZN', role: 'Head of Technology', color: 'from-dark-600 to-dark-800' },
  { name: 'Chidi Okafor', initials: 'CO', role: 'Head of Construction', color: 'from-gold-400 to-gold-600' },
];

const VALUES = [
  { icon: Shield, title: 'Professionalism', description: 'We uphold the highest standards in every transaction, delivering excellence through industry expertise and unwavering commitment to quality.' },
  { icon: Eye, title: 'Transparency', description: 'Our processes are open and honest. From pricing to progress reports, we keep our stakeholders informed at every step.' },
  { icon: Heart, title: 'Social Impact', description: 'Every property investment we manage contributes directly to community transformation, creating lasting change across Africa.' },
  { icon: TrendingUp, title: 'Innovation', description: 'We leverage cutting-edge technology to create seamless property experiences and redefine how Africa invests in real estate.' },
];

const MILESTONES = [
  { year: '2019', title: 'Foundation Laid', description: 'Aurora Havens was founded in Nairobi with a vision to transform African real estate and empower communities.' },
  { year: '2020', title: 'First Properties Listed', description: 'Launched our platform with 50 properties across Kenya, marking the beginning of our digital real estate journey.' },
  { year: '2021', title: 'Foundation Launch', description: 'Established the Aurora Havens Foundation, beginning our Healthcare and Education programs in underserved communities.' },
  { year: '2022', title: 'Continental Expansion', description: 'Expanded operations to Ghana and Nigeria, bringing our integrated real estate and social impact model to West Africa.' },
  { year: '2023', title: '500 Properties Milestone', description: 'Reached 500+ properties listed on our platform with over $2M in total investments managed.' },
  { year: '2024', title: '10,000 Happy Clients', description: 'Celebrated serving 10,000+ clients and transforming 50,000+ lives through our foundation programs.' },
];

export default function AboutPage() {
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
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">Our Story</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              More Than{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Real Estate</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a movement dedicated to transforming communities across Africa through
              sustainable development, quality housing, and meaningful social impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ MISSION & VISION ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                  <div className="w-8 h-px bg-gold-500" />
                  OUR MISSION
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
                  Building Prosperity.{' '}
                  <span className="text-gold-500">Restoring Hope.</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our mission is to provide quality housing solutions while creating opportunities
                  for economic growth and community development across Africa. Every property we
                  build, every investment we manage, and every donation we receive contributes to
                  a brighter future for thousands of families.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We believe that access to quality housing is a fundamental right, not a privilege.
                  Through our integrated platform, we make real estate investment accessible while
                  channeling resources into life-changing social programs.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-gold-500" />
                    <span className="font-display font-semibold text-dark-900">Purpose-Driven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-gold-500" />
                    <span className="font-display font-semibold text-dark-900">Pan-African</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold-500/5 rounded-3xl" />
                <div className="relative bg-dark-800 rounded-2xl overflow-hidden border border-gold-500/20 p-10">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Building2, value: '500+', label: 'Properties' },
                      { icon: Users, value: '10,000+', label: 'Happy Clients' },
                      { icon: Heart, value: '50,000+', label: 'Lives Changed' },
                      { icon: MapPin, value: '100+', label: 'Communities' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                        <stat.icon className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                        <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-gold-400/50 font-display text-sm tracking-wider">EST. 2019 &bull; NAIROBI, KENYA</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CORE VALUES ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                PRINCIPLES
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                The principles that guide everything we do at Aurora Havens
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {VALUES.map((value, index) => (
              <StaggerItem key={index}>
                <div className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-gold-600 group-hover:text-dark-900 transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-dark-900">{value.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ TEAM ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                LEADERSHIP
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                The passionate leaders driving our mission forward
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {TEAM.map((member, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-white font-display font-bold text-2xl">{member.initials}</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-dark-900 mb-1">{member.name}</h3>
                  <p className="text-gold-600 font-medium text-sm mb-4">{member.role}</p>
                  <div className="flex justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all cursor-pointer">
                      <span className="text-xs font-bold">in</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-all cursor-pointer">
                      <span className="text-xs font-bold">tw</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ TIMELINE ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                MILESTONES
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Key milestones that have shaped our growth and impact
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-gold-300 to-gray-200" />
            {MILESTONES.map((milestone, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`relative flex items-start sm:items-center mb-8 sm:mb-12 pl-12 sm:pl-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'} text-left`}>
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-gold-500/30 hover:shadow-lg transition-all duration-300">
                      <span className="text-gold-500 font-display font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-display font-semibold text-dark-900 text-lg mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800 via-navy-500 to-dark-800" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Our{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Mission</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Whether you&apos;re an investor, a homebuyer, or a changemaker, there&apos;s a place for you
              at Aurora Havens.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Properties <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-500/30 text-gold-400 font-display font-semibold rounded-xl hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
