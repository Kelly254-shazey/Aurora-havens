import Link from 'next/link';
import {
  ArrowRight, Shield, CheckCircle2, TrendingUp, Lock,
  UserPlus, Search, CreditCard, BarChart3, Clock,
  FileCheck, Eye, Wallet, AlertCircle,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Account Creation',
    icon: UserPlus,
    color: 'from-gold-500 to-amber-500',
    description: 'Setting up your investor account is straightforward and secure. We verify every investor to protect both you and our borrowers.',
    details: [
      { icon: FileCheck, label: 'Complete a brief KYC (Know Your Customer) form with your personal and financial information.' },
      { icon: Eye, label: 'Upload a government-issued ID and proof of address for identity verification.' },
      { icon: Clock, label: 'Verification typically takes 24–48 hours. You\'ll receive an email once approved.' },
      { icon: Shield, label: 'Your data is encrypted with 256-bit SSL and never shared with third parties.' },
    ],
  },
  {
    number: '02',
    title: 'Browse & Choose',
    icon: Search,
    color: 'from-gold-500 to-yellow-500',
    description: 'Explore our curated portfolio of investment opportunities across multiple sectors and risk levels. Every project has been vetted by our due diligence team.',
    details: [
      { icon: Eye, label: 'Browse opportunities filtered by sector, return rate, risk level, and social impact score.' },
      { icon: FileCheck, label: 'Review detailed project profiles including financials, timelines, and impact projections.' },
      { icon: AlertCircle, label: 'Each listing includes a risk assessment and expected ROI range for transparency.' },
      { icon: CheckCircle2, label: 'Our team conducts independent due diligence before any project is listed.' },
    ],
  },
  {
    number: '03',
    title: 'Invest & Fund',
    icon: CreditCard,
    color: 'from-gold-500 to-yellow-600',
    description: 'Once you\'ve chosen a project, funding is simple and secure. Your capital is held in escrow until the project meets its funding goal.',
    details: [
      { icon: CreditCard, label: 'Fund via mobile money, bank transfer, or card — with zero transaction fees on your end.' },
      { icon: Lock, label: 'Your capital is held in a secure escrow account until the project reaches its funding target.' },
      { icon: CheckCircle2, label: 'Receive instant confirmation and a digital certificate of your investment.' },
      { icon: FileCheck, label: 'If a project doesn\'t reach its goal, your funds are returned in full within 5 business days.' },
    ],
  },
  {
    number: '04',
    title: 'Track & Earn',
    icon: BarChart3,
    color: 'from-gold-500 to-amber-600',
    description: 'Monitor your investments in real time through your personal dashboard. Receive regular updates and payouts as projects deliver returns.',
    details: [
      { icon: BarChart3, label: 'Access your investor dashboard with real-time portfolio value, returns, and impact metrics.' },
      { icon: Clock, label: 'Receive monthly progress reports with photos, financials, and community impact updates.' },
      { icon: Wallet, label: 'Payouts are distributed to your account on schedule — view history and download statements anytime.' },
      { icon: TrendingUp, label: 'Track your cumulative impact: jobs created, families supported, communities transformed.' },
    ],
  },
];

const TRUST_SIGNALS = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: '256-bit SSL encryption, regulated escrow accounts, and strict KYC compliance protect every transaction.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Every project is independently vetted. Access financials, timelines, and risk assessments before you invest.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Returns',
    description: 'Earn 8–15% annual returns while making measurable social impact. Diversify across sectors and regions.',
  },
  {
    icon: CheckCircle2,
    title: 'Verified Impact',
    description: 'Quarterly impact reports with real data — jobs created, meals served, children educated — not just promises.',
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-dark-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 50%)`
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-gold-500 text-sm font-medium">Aurora Havens Invest</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
            How It{' '}
            <span className="text-gold-500">Works</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            From account setup to earning returns — here is everything you need to know
            about investing with Aurora Havens in four simple steps.
          </p>
          <Link
            href="#steps"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            See the Process <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════ 4-STEP PROCESS ═══════════════════ */}
      <section id="steps" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm mb-4">
              <div className="w-8 h-px bg-gold-500/40" />
              THE PROCESS
              <div className="w-8 h-px bg-gold-500/40" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
              Four Steps to Start Investing
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A secure, transparent journey from sign-up to your first return
            </p>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {STEPS.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Step Header */}
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-gold-500 font-display font-bold text-sm tracking-wider">STEP {step.number}</div>
                      <h3 className="font-display text-2xl font-bold text-dark-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </div>

                {/* Step Details */}
                <div className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                  <div className="space-y-5">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                          <detail.icon className="w-5 h-5 text-gold-500" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{detail.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY INVEST ═══════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm mb-4">
              <div className="w-8 h-px bg-gold-500/40" />
              WHY INVEST WITH US
              <div className="w-8 h-px bg-gold-500/40" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
              Built on Trust
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Four pillars that make Aurora Havens a secure and rewarding place to invest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {TRUST_SIGNALS.map((signal, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 text-center">
                <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <signal.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-display font-semibold text-xl text-dark-900 mb-3">{signal.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-12 h-12 text-gold-500 mx-auto mb-6" />
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Start Investing{' '}
            <span className="text-gold-500">Today</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of investors earning competitive returns while creating
            measurable social impact across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/invest"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Create Your Account <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-500/30 text-gold-500 font-display font-semibold rounded-xl hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
