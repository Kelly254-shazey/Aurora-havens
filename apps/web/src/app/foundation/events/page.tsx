'use client';

import Link from 'next/link';
import {
  Calendar, MapPin, ArrowRight, Clock, Users, Heart,
  Stethoscope, GraduationCap, UtensilsCrossed, Star, CheckCircle2,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const UPCOMING_EVENTS = [
  {
    title: 'Annual Charity Gala 2026',
    description: 'An elegant evening of music, dining, and fundraising to support education programs across East Africa.',
    location: 'Nairobi Serena Hotel',
    date: { month: 'AUG', day: '15' },
    status: 'Registration Open',
    icon: Star,
    gradient: 'from-foundation-maroon to-foundation-hot',
  },
  {
    title: 'Free Medical Camp — Kibera',
    description: 'Providing free health screenings, consultations, and medication to 500+ residents in Kibera.',
    location: 'Kibera Community Center',
    date: { month: 'AUG', day: '22' },
    status: 'Volunteers Needed',
    icon: Stethoscope,
    gradient: 'from-foundation-hot to-foundation-baby',
  },
  {
    title: 'Back-to-School Drive',
    description: 'Distributing school supplies, uniforms, and books to 300 children in rural Kenya.',
    location: 'Machakos County',
    date: { month: 'SEP', day: '05' },
    status: 'Upcoming',
    icon: GraduationCap,
    gradient: 'from-foundation-baby to-foundation-maroon',
  },
  {
    title: 'Women Empowerment Workshop',
    description: 'Three-day skills training covering entrepreneurship, financial literacy, and digital marketing.',
    location: 'Accra Community Hub',
    date: { month: 'SEP', day: '18' },
    status: 'Registration Open',
    icon: Users,
    gradient: 'from-foundation-hot to-foundation-maroon',
  },
  {
    title: 'Community Feeding Day',
    description: 'Serving 1,000 nutritious meals to children and families in underserved communities.',
    location: 'Lagos Outreach Center',
    date: { month: 'OCT', day: '02' },
    status: 'Upcoming',
    icon: UtensilsCrossed,
    gradient: 'from-foundation-maroon to-foundation-baby',
  },
  {
    title: 'Clean Water Initiative Launch',
    description: 'Unveiling a new borehole and water purification system serving 3 villages.',
    location: 'Machakos Village',
    date: { month: 'OCT', day: '20' },
    status: 'Upcoming',
    icon: Heart,
    gradient: 'from-foundation-baby to-foundation-hot',
  },
];

const PAST_EVENTS = [
  {
    title: '2025 Year-End Gala',
    description: 'Raised $120,000 for education and healthcare programs.',
    location: 'Nairobi',
    date: { month: 'DEC', day: '12' },
    attendees: '250+ guests',
    gradient: 'from-foundation-maroon to-foundation-hot',
  },
  {
    title: 'Mental Health Awareness Walk',
    description: '500 participants walked to destigmatize mental health in local communities.',
    location: 'Accra',
    date: { month: 'OCT', day: '10' },
    attendees: '500 walkers',
    gradient: 'from-foundation-hot to-foundation-baby',
  },
  {
    title: 'Youth Coding Bootcamp',
    description: '80 young people completed a 2-week web development and AI fundamentals program.',
    location: 'Lagos',
    date: { month: 'JUL', day: '28' },
    attendees: '80 graduates',
    gradient: 'from-foundation-baby to-foundation-maroon',
  },
];

export default function EventsPage() {
  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-500" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <Calendar className="w-4 h-4 text-foundation-baby" />
              <span className="text-foundation-baby text-sm font-medium">Aurora Havens Foundation</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Foundation{' '}
              <span className="text-foundation-baby">Events</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Join us at our upcoming events to make a tangible difference.
              From galas to community outreach, every event advances our mission.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.45}>
            <Link
              href="#upcoming"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foundation-maroon font-display font-semibold rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              View Upcoming Events <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ UPCOMING EVENTS ═══════════════════ */}
      <section id="upcoming" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                UPCOMING EVENTS
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Mark Your Calendar
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Six events designed to uplift communities and inspire change
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.1}>
            {UPCOMING_EVENTS.map((event, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-foundation-hot/30 hover:shadow-xl hover:shadow-foundation-hot/5 transition-all duration-500">
                  <div className={`relative h-48 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}>
                    <event.icon className="w-16 h-16 text-white/30" />
                    <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 shadow-lg text-center">
                      <div className="text-xs font-bold text-foundation-hot leading-none">{event.date.month}</div>
                      <div className="font-display text-2xl font-bold text-navy-500 leading-none mt-1">{event.date.day}</div>
                    </div>
                    <div className="absolute top-4 right-4 hidden sm:block">
                      <span className="inline-flex items-center gap-1 bg-white/90 text-foundation-maroon text-xs font-semibold px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        {event.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl text-navy-500 mb-2 group-hover:text-foundation-hot transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{event.description}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-foundation-maroon to-foundation-hot text-white font-display font-semibold rounded-xl hover:shadow-lg hover:shadow-foundation-hot/20 hover:-translate-y-0.5 transition-all duration-300 text-sm">
                      Register <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ PAST EVENTS ═══════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                PAST EVENTS
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Our Recent Impact
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                A look back at the events that brought communities together
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.1}>
            {PAST_EVENTS.map((event, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-foundation-hot/5 transition-all duration-500">
                  <div className={`relative h-32 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative bg-white rounded-xl px-3 py-2 shadow-lg text-center">
                      <div className="text-xs font-bold text-foundation-hot leading-none">{event.date.month}</div>
                      <div className="font-display text-xl font-bold text-navy-500 leading-none mt-0.5">{event.date.day}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-navy-500 mb-2">{event.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{event.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-foundation-hot font-medium">
                        <Users className="w-3.5 h-3.5" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ HOST AN EVENT CTA ═══════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Calendar className="w-12 h-12 text-foundation-hot mx-auto mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-6 leading-tight">
              Host an{' '}
              <span className="text-foundation-hot">Event</span>
            </h2>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with Aurora Havens Foundation to organize your own fundraising event.
              We provide branding, logistics support, and a platform to amplify your impact.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foundation-hot text-white font-display font-semibold rounded-xl shadow-xl shadow-foundation-hot/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foundation-hot/30 text-foundation-hot font-display font-semibold rounded-xl hover:bg-foundation-hot/5 transition-all duration-300"
              >
                Donate Instead
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
