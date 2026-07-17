'use client';

import Link from 'next/link';
import {
  Quote, Star, ArrowRight, Heart, GraduationCap,
  Stethoscope, Users, UtensilsCrossed, Building2, MapPin,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const FEATURED_STORY = {
  name: 'Grace Wanjiku',
  location: 'Kibera, Nairobi, Kenya',
  story: 'When I was twelve, my family could no longer afford school fees. I spent two years watching other children walk to school while I stayed home. The Aurora Havens Foundation stepped in and sponsored my entire education — from secondary school through nursing college. They didn\'t just pay tuition; they provided mentors, counseling, and a community that believed in me. Today, I am a registered nurse working in the same clinic that once treated my mother for free during a foundation medical camp. I see children every day who remind me of myself — bright, eager, but trapped by poverty. Thanks to this foundation, I can tell them: there is hope, and it has a name.',
  initials: 'GW',
  rating: 5,
  program: 'Education',
  icon: GraduationCap,
};

const STORIES = [
  {
    name: 'Samuel Osei',
    location: 'Accra, Ghana',
    story: 'The feeding program kept me nourished through primary school. Without those daily meals, I would have dropped out — I was too hungry to concentrate. Now I am studying computer science at university on a foundation scholarship.',
    initials: 'SO',
    rating: 5,
    program: 'Feeding Program',
    icon: UtensilsCrossed,
  },
  {
    name: 'Amina Bello',
    location: 'Lagos, Nigeria',
    story: 'The women empowerment program taught me tailoring skills and gave me a micro-loan to start. I now run my own fashion business and employ three other women from my community. This foundation changed my family\'s future.',
    initials: 'AB',
    rating: 5,
    program: 'Women Empowerment',
    icon: Users,
  },
  {
    name: 'David Kamau',
    location: 'Machakos, Kenya',
    story: 'After my father passed, we had no income. The foundation sponsored my secondary school education and connected me with a vocational training program. I am now a certified electrician supporting my younger siblings.',
    initials: 'DK',
    rating: 5,
    program: 'Youth Development',
    icon: Heart,
  },
  {
    name: 'Fatima Hassan',
    location: 'Mombasa, Kenya',
    story: 'The free medical camp detected my daughter\'s heart condition early. The foundation arranged and funded her surgery at a city hospital. She is now a healthy, playful seven-year-old. I owe them everything.',
    initials: 'FH',
    rating: 5,
    program: 'Healthcare',
    icon: Stethoscope,
  },
  {
    name: 'James Mensah',
    location: 'Kumasi, Ghana',
    story: 'The community building program constructed a clean water borehole in our village. Before that, women walked 5 kilometers daily for water. Now children have time to study, and waterborne diseases have dropped by 60%.',
    initials: 'JM',
    rating: 5,
    program: 'Community Building',
    icon: Building2,
  },
  {
    name: 'Ngozi Adekunle',
    location: 'Abuja, Nigeria',
    story: 'As a single mother with four children, I was overwhelmed. The foundation\'s holistic support — meals, school fees, skills training — gave me the tools to build a sustainable business. My children are all in school now.',
    initials: 'NA',
    rating: 5,
    program: 'Education',
    icon: GraduationCap,
  },
];

export default function StoriesPage() {
  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-500" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <Heart className="w-4 h-4 text-foundation-baby" />
              <span className="text-foundation-baby text-sm font-medium">Aurora Havens Foundation</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Stories of{' '}
              <span className="text-foundation-baby">Impact</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Every life we touch has a story. These are the voices of the communities
              we serve — and the transformations your support makes possible.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.45}>
            <Link
              href="#featured"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foundation-maroon font-display font-semibold rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Read Their Stories <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ FEATURED STORY ═══════════════════ */}
      <section id="featured" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                FEATURED STORY
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Our Stories of Impact
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                One journey from hardship to hope — and the power of community support
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-gradient-to-br from-foundation-maroon/5 via-white to-foundation-baby/10 rounded-2xl p-8 md:p-12 border border-foundation-baby/30">
              <div className="grid md:grid-cols-3 gap-4 sm:gap-8 items-start">
                <div className="md:col-span-2">
                  <Quote className="w-10 h-10 text-foundation-baby/40 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(FEATURED_STORY.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg italic mb-8 line-clamp-6 md:line-clamp-none">
                    &ldquo;{FEATURED_STORY.story}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-foundation-baby/20">
                    <div className="w-14 h-14 bg-gradient-to-br from-foundation-hot to-foundation-maroon rounded-full flex items-center justify-center">
                      <span className="font-display font-bold text-white text-lg">{FEATURED_STORY.initials}</span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-navy-500">{FEATURED_STORY.name}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {FEATURED_STORY.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-foundation-hot to-foundation-maroon rounded-2xl flex items-center justify-center mb-4">
                    <FEATURED_STORY.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-bold text-foundation-hot uppercase tracking-wider mb-1">Program</div>
                  <div className="font-display font-semibold text-navy-500 text-lg">{FEATURED_STORY.program}</div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Duration</div>
                    <div className="text-sm text-gray-600 font-medium">8 years of continuous support</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Outcome</div>
                    <div className="text-sm text-gray-600 font-medium">Registered nurse giving back to community</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ ALL STORIES ═══════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-foundation-hot font-medium text-sm mb-4">
                <div className="w-8 h-px bg-foundation-hot/40" />
                MORE STORIES
                <div className="w-8 h-px bg-foundation-hot/40" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                Voices from Our Communities
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Real stories from real people whose lives have been transformed
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.1}>
            {STORIES.map((story, index) => (
              <StaggerItem key={index}>
                <div className="group bg-white rounded-2xl p-8 border border-foundation-baby/30 hover:shadow-xl hover:shadow-foundation-hot/5 transition-all duration-500">
                  <Quote className="w-8 h-8 text-foundation-baby/40 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">
                    &ldquo;{story.story}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-foundation-baby/20 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-foundation-hot to-foundation-maroon rounded-full flex items-center justify-center">
                      <span className="font-display font-bold text-white text-sm">{story.initials}</span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-navy-500 text-sm">{story.name}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-foundation-hot/10 text-foundation-hot text-xs font-semibold px-3 py-1.5 rounded-full">
                    <story.icon className="w-3.5 h-3.5" />
                    {story.program}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ SHARE YOUR STORY CTA ═══════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Heart className="w-12 h-12 text-foundation-hot mx-auto mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-500 mb-6 leading-tight">
              Share Your{' '}
              <span className="text-foundation-hot">Story</span>
            </h2>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Have you or someone you know been impacted by our programs?
              We would love to hear from you — your story can inspire others to join the mission.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foundation-hot text-white font-display font-semibold rounded-xl shadow-xl shadow-foundation-hot/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Submit Your Story <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foundation-hot/30 text-foundation-hot font-display font-semibold rounded-xl hover:bg-foundation-hot/5 transition-all duration-300"
              >
                Help Create More Stories
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
