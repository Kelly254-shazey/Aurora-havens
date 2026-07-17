'use client';

import Link from 'next/link';
import {
  ArrowRight, TrendingUp, DollarSign, Clock, Users,
  Shield, BarChart3, ChevronDown, CheckCircle2,
  Building2, Wallet, Target, Zap,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const STEPS = [
  {
    icon: Wallet,
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up and complete your investor profile. Our verification process is quick, secure, and fully digital.',
  },
  {
    icon: Target,
    step: '02',
    title: 'Choose Your Investment',
    description: 'Browse our curated portfolio of real estate opportunities. Each listing includes projected ROI, duration, and risk assessment.',
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Earn & Track Returns',
    description: 'Receive regular payouts and monitor your portfolio performance through your personalized investor dashboard.',
  },
];

const OPPORTUNITIES = [
  {
    title: 'Nairobi Residential Complex',
    location: 'Westlands, Nairobi',
    roi: '18%',
    minInvestment: '$5,000',
    duration: '12 months',
    status: 'Open',
    type: 'Residential',
    description: 'A premium 48-unit residential development in the heart of Westlands with strong rental demand.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&fit=crop',
  },
  {
    title: 'Lagos Commercial Tower',
    location: 'Victoria Island, Lagos',
    roi: '22%',
    minInvestment: '$10,000',
    duration: '18 months',
    status: 'Open',
    type: 'Commercial',
    description: 'Grade A office space in Lagos prime business district with pre-leased anchor tenants.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&fit=crop',
  },
  {
    title: 'Accra Mixed-Use Development',
    location: 'East Legon, Accra',
    roi: '16%',
    minInvestment: '$2,500',
    duration: '12 months',
    status: 'Open',
    type: 'Mixed-Use',
    description: 'Combining retail, residential, and office space in one of Accra fastest-growing neighborhoods.',
    image: 'https://images.unsplash.com/photo-1582407947092-a5f9c8380be7?w=800&q=80&fit=crop',
  },
  {
    title: 'Mombasa Beach Resort',
    location: 'Diani Beach, Mombasa',
    roi: '20%',
    minInvestment: '$7,500',
    duration: '24 months',
    status: 'Limited',
    type: 'Hospitality',
    description: 'Luxury beachfront resort expansion with guaranteed returns from tourism revenue sharing.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop',
  },
];

const STATS = [
  { icon: DollarSign, value: '$2.5M+', label: 'Total Invested' },
  { icon: Users, value: '500+', label: 'Active Investors' },
  { icon: TrendingUp, value: '18%', label: 'Average ROI' },
  { icon: CheckCircle2, value: '100%', label: 'Payout Rate' },
];

const FAQS = [
  {
    question: 'How do I start investing with Aurora Havens?',
    answer: 'Getting started is simple. Create an account, complete the quick verification process, choose your preferred investment opportunity, and make your first investment. Our team is available to guide you through every step.',
  },
  {
    question: 'What is the minimum investment amount?',
    answer: 'Our investment opportunities start from as low as $2,500, making real estate investment accessible to a wider audience. Each opportunity clearly states its minimum investment requirement.',
  },
  {
    question: 'How and when do I receive my returns?',
    answer: 'Returns are paid out according to the schedule specified in each investment opportunity, typically monthly or quarterly. All payouts are transferred directly to your registered bank account.',
  },
  {
    question: 'Is my investment secure?',
    answer: 'We take investor security very seriously. All properties are legally verified, fully documented, and held in escrow. Our team conducts thorough due diligence before any opportunity is listed on our platform.',
  },
  {
    question: 'Can I withdraw my investment early?',
    answer: 'While our investments are designed for their specified duration, we understand that circumstances change. Contact our investor relations team to discuss early exit options, which may be available with adjusted returns.',
  },
  {
    question: 'What happens to my investment if a project underperforms?',
    answer: 'We select only high-quality, vetted opportunities with strong fundamentals. In the rare event of underperformance, our team works proactively to mitigate risks. Your capital is secured against the underlying property asset.',
  },
];

export default function InvestPage() {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-8">
                  <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
                  <span className="text-gold-400 text-sm font-medium">Investment Platform</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                  Grow Your{' '}
                  <span className="bg-gold-gradient bg-clip-text text-transparent">Wealth</span><br />
                  Responsibly
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-base sm:text-xl text-gray-500 mb-8 sm:mb-10 leading-relaxed max-w-lg">
                  Access premium real estate investment opportunities across Africa.
                  Enjoy competitive returns while making a meaningful impact on communities.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#opportunities"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View Opportunities <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-500/30 text-gold-400 font-display font-semibold rounded-xl hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
                  >
                    How It Works
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="hidden lg:block">
              <ScrollReveal direction="right" delay={0.3}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-500">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-display font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">18%</div>
                    <div className="text-gray-500 font-medium">Average Annual ROI</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {STATS.map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-gold-500/20 transition-colors">
                        <stat.icon className="w-5 h-5 text-gold-500 mb-2" />
                        <div className="text-2xl font-display font-bold text-gold-400">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                PROCESS
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Start investing in African real estate in three simple steps
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12}>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              {STEPS.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative text-center p-8 rounded-2xl border border-gray-100 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 group">
                    <div className="absolute -top-4 left-8 bg-navy-500 text-gold-400 font-display font-bold text-sm px-3 py-1 rounded-lg shadow-lg">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-gold-600 group-hover:text-dark-900 transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2 text-dark-900">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                    {index < STEPS.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-gold-300">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ OPPORTUNITIES ═══════════════════ */}
      <section id="opportunities" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                OPPORTUNITIES
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Investment Opportunities
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Carefully vetted real estate opportunities with competitive returns
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              {OPPORTUNITIES.map((opp, index) => (
                <StaggerItem key={index}>
                  <div className="group bg-navy-500 rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500">
                    <div className="relative h-48 bg-gradient-to-br from-dark-800 to-dark-900 overflow-hidden">
                      <img
                        src={opp.image}
                        alt={opp.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-gold-gradient text-dark-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                          {opp.roi} ROI
                        </span>
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${
                          opp.status === 'Open'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}>
                          {opp.status}
                        </span>
                      </div>
                      <span className="absolute top-4 right-4 bg-navy-500/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg border border-white/10">
                        {opp.type}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-xl text-white mb-1 group-hover:text-gold-400 transition-colors">
                        {opp.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">{opp.location}</p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{opp.description}</p>
                       <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                         <div className="bg-white/5 rounded-xl p-3 text-center">
                           <div className="text-[10px] sm:text-xs text-gray-500 mb-1 leading-tight">Min. Investment</div>
                           <div className="font-display font-semibold text-gold-400 text-sm">{opp.minInvestment}</div>
                         </div>
                         <div className="bg-white/5 rounded-xl p-3 text-center">
                           <div className="text-[10px] sm:text-xs text-gray-500 mb-1 leading-tight">Duration</div>
                           <div className="font-display font-semibold text-white text-sm">{opp.duration}</div>
                         </div>
                         <div className="bg-white/5 rounded-xl p-3 text-center">
                           <div className="text-[10px] sm:text-xs text-gray-500 mb-1 leading-tight">ROI</div>
                           <div className="font-display font-semibold text-emerald-400 text-sm">{opp.roi}</div>
                        </div>
                      </div>
                      <button className="w-full py-3 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300">
                        Invest Now <span className="ml-1">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                FAQ
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Everything you need to know about investing with Aurora Havens
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08}>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <StaggerItem key={index}>
                  <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-colors">
                    <button className="w-full flex items-center justify-between p-6 text-left group">
                      <span className="font-display font-semibold text-dark-900 pr-4 group-hover:text-gold-600 transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-gold-500 transition-colors" />
                    </button>
                    <div className="px-6 pb-6">
                      <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-navy-500">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-dark-800 to-navy-500" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Investing</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
              Join 500+ investors who are earning competitive returns while building
              prosperity across Africa.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Create Account <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-500/30 text-gold-400 font-display font-semibold rounded-xl hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
              >
                Talk to an Advisor
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
