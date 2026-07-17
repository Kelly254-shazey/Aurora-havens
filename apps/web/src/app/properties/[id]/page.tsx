'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin, Bed, Bath, Square, ArrowLeft, Heart, Share2,
  Phone, Mail, CalendarCheck, Shield, CheckCircle2, Building2,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const PROPERTIES = [
  {
    title: 'Sunset Ridge Villa',
    location: 'Karen, Nairobi, Kenya',
    price: '$485,000',
    beds: 5, baths: 4, sqft: '4,200',
    type: 'Residential',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&fit=crop',
    description: 'A stunning 5-bedroom villa nestled in the prestigious Karen neighborhood. This modern masterpiece features floor-to-ceiling windows, a gourmet kitchen with imported Italian appliances, a private infinity pool, and landscaped gardens. The property includes smart home automation, solar panels, and a 3-car garage.',
    features: ['Infinity Pool', 'Smart Home', 'Solar Panels', '3-Car Garage', 'Landscaped Garden', 'Staff Quarters'],
    yearBuilt: 2023,
    lotSize: '0.5 acres',
    garage: '3 Cars',
  },
  {
    title: 'Ocean Breeze Penthouse',
    location: 'Victoria Island, Lagos, Nigeria',
    price: '$720,000',
    beds: 3, baths: 3, sqft: '3,100',
    type: 'Luxury',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&fit=crop',
    description: 'An exquisite penthouse apartment in the heart of Victoria Island with breathtaking ocean views. Features marble flooring throughout, a private rooftop terrace, designer kitchen, and luxury finishes. Building amenities include 24/7 security, concierge service, gym, and rooftop pool.',
    features: ['Ocean Views', 'Rooftop Terrace', 'Concierge', 'Marble Floors', 'Designer Kitchen', 'Gym Access'],
    yearBuilt: 2024,
    lotSize: 'N/A',
    garage: '2 Cars',
  },
  {
    title: 'Golden Heights Estate',
    location: 'East Legon, Accra, Ghana',
    price: '$345,000',
    beds: 4, baths: 3, sqft: '3,600',
    type: 'Residential',
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&fit=crop',
    description: 'A beautifully designed 4-bedroom family home in one of Accra\'s most sought-after neighborhoods. Open-plan living, modern kitchen, spacious bedrooms with en-suite bathrooms, and a private garden. Close to international schools, shopping centers, and restaurants.',
    features: ['Open Plan Living', 'Modern Kitchen', 'Private Garden', 'En-Suite Bathrooms', 'Air Conditioning', 'Backup Water'],
    yearBuilt: 2022,
    lotSize: '0.3 acres',
    garage: '2 Cars',
  },
  {
    title: 'Savanna Commercial Plaza',
    location: 'Westlands, Nairobi, Kenya',
    price: '$1,200,000',
    beds: 20, baths: 12, sqft: '18,500',
    type: 'Commercial',
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&fit=crop',
    description: 'A prime commercial plaza in the bustling Westlands business district. 20 office units across 4 floors with modern infrastructure, underground parking, backup generators, and high-speed elevators. Excellent ROI with long-term corporate tenants.',
    features: ['20 Office Units', 'Underground Parking', 'Backup Generators', 'High-Speed Elevators', 'CCTV Security', 'Fiber Internet'],
    yearBuilt: 2021,
    lotSize: '0.8 acres',
    garage: '40 Cars',
  },
  {
    title: 'Kilimani Townhouse',
    location: 'Kilimani, Nairobi, Kenya',
    price: '$275,000',
    beds: 3, baths: 2, sqft: '2,400',
    type: 'Residential',
    badge: null,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80&fit=crop',
    description: 'A contemporary 3-bedroom townhouse in the vibrant Kilimani area. Features an open-concept layout, modern finishes, private courtyard, and rooftop terrace. Walking distance to Yaya Center and close to major highways.',
    features: ['Rooftop Terrace', 'Private Courtyard', 'Modern Finishes', 'Walking Distance to Shopping', 'Secure Parking', 'Backup Power'],
    yearBuilt: 2023,
    lotSize: '0.15 acres',
    garage: '1 Car',
  },
  {
    title: 'Riverside Office Suites',
    location: 'Riverside, Nairobi, Kenya',
    price: '$890,000',
    beds: 12, baths: 8, sqft: '12,000',
    type: 'Commercial',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop',
    description: 'Premium office suites in the tranquil Riverside area. 12 fully fitted units with panoramic city views, meeting rooms, executive boardroom, and dedicated reception. Ideal for multinational corporations and professional firms.',
    features: ['12 Fitted Units', 'City Views', 'Boardroom', 'Reception Area', 'CCTV', '24/7 Security'],
    yearBuilt: 2020,
    lotSize: '0.5 acres',
    garage: '24 Cars',
  },
  {
    title: 'Cape Coast Luxury Villa',
    location: 'Cape Coast, Ghana',
    price: '$650,000',
    beds: 6, baths: 5, sqft: '5,800',
    type: 'Luxury',
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80&fit=crop',
    description: 'An expansive 6-bedroom luxury villa with stunning ocean views in Cape Coast. Features include a private beach access, wine cellar, home theater, staff quarters, and beautifully manicured tropical gardens.',
    features: ['Ocean Views', 'Private Beach', 'Wine Cellar', 'Home Theater', 'Tropical Gardens', 'Staff Quarters'],
    yearBuilt: 2023,
    lotSize: '1.2 acres',
    garage: '4 Cars',
  },
  {
    title: 'Langata Residential Plot',
    location: 'Langata, Nairobi, Kenya',
    price: '$120,000',
    beds: 0, baths: 0, sqft: '8,500',
    type: 'Land',
    badge: null,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&fit=crop',
    description: 'A prime 8,500 sqft residential plot in the serene Langata neighborhood. Flat terrain, all utilities available, title deed ready. Perfect for building a custom family home. Near Nairobi National Park and Wilson Airport.',
    features: ['Ready Title Deed', 'All Utilities', 'Flat Terrain', 'Near National Park', 'Gated Community', 'Access Road'],
    yearBuilt: null,
    lotSize: '8,500 sqft',
    garage: null,
  },
  {
    title: 'Ikoyi Smart Apartment',
    location: 'Ikoyi, Lagos, Nigeria',
    price: '$395,000',
    beds: 2, baths: 2, sqft: '1,800',
    type: 'Residential',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&fit=crop',
    description: 'A sleek 2-bedroom smart apartment in the exclusive Ikoyi district. Features automated lighting, climate control, keyless entry, and premium finishes. Building includes a gym, pool, and 24-hour concierge.',
    features: ['Smart Home', 'Keyless Entry', 'Gym & Pool', 'Concierge', 'Premium Finishes', 'Rooftop Lounge'],
    yearBuilt: 2024,
    lotSize: 'N/A',
    garage: '1 Car',
  },
  {
    title: 'Mombasa Beachfront Plot',
    location: 'Diani Beach, Mombasa, Kenya',
    price: '$210,000',
    beds: 0, baths: 0, sqft: '12,000',
    type: 'Land',
    badge: null,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&fit=crop',
    description: 'A rare beachfront plot on the pristine Diani Beach. 12,000 sqft of prime coastal land with direct beach access. Ideal for a luxury villa or boutique hotel development. All permits in place.',
    features: ['Beachfront', 'Direct Beach Access', 'Permits Ready', 'Tourism Zone', 'Near Airport', 'Utilities Available'],
    yearBuilt: null,
    lotSize: '12,000 sqft',
    garage: null,
  },
  {
    title: 'Lavington Manor',
    location: 'Lavington, Nairobi, Kenya',
    price: '$580,000',
    beds: 5, baths: 4, sqft: '4,500',
    type: 'Luxury',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&fit=crop',
    description: 'An elegant 5-bedroom manor in the exclusive Lavington neighborhood. Classical architecture meets modern luxury with high ceilings, imported fixtures, a chef\'s kitchen, wine room, and beautifully landscaped grounds.',
    features: ['Wine Room', 'Chef\'s Kitchen', 'High Ceilings', 'Imported Fixtures', 'Landscaped Grounds', 'Security System'],
    yearBuilt: 2022,
    lotSize: '0.6 acres',
    garage: '3 Cars',
  },
  {
    title: 'Accra Retail Center',
    location: 'Osu, Accra, Ghana',
    price: '$950,000',
    beds: 8, baths: 6, sqft: '14,200',
    type: 'Commercial',
    badge: null,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80&fit=crop',
    description: 'A prime retail center in the bustling Osu district of Accra. 8 retail units with high foot traffic, ample parking, and excellent visibility. Fully leased with strong tenant mix generating consistent returns.',
    features: ['8 Retail Units', 'High Foot Traffic', 'Ample Parking', 'Fully Leased', 'Strong Returns', 'Prime Location'],
    yearBuilt: 2021,
    lotSize: '0.4 acres',
    garage: '30 Cars',
  },
];

export default function PropertyDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const property = PROPERTIES[id];

  if (!property || isNaN(id)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-dark-900 mb-2">Property Not Found</h1>
          <p className="text-gray-500 mb-6">The property you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/properties" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-dark-900 font-display font-semibold rounded-xl hover:bg-gold-400 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-navy-500 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 z-10">
          <Link href="/properties" className="inline-flex items-center gap-2 px-4 py-2 bg-navy-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-xl hover:bg-navy-500 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button className="p-2.5 bg-navy-500/80 backdrop-blur-sm text-white rounded-xl hover:bg-navy-500 transition-colors" aria-label="Save property">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2.5 bg-navy-500/80 backdrop-blur-sm text-white rounded-xl hover:bg-navy-500 transition-colors" aria-label="Share property">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              {property.badge && (
                <span className="inline-block bg-gold-500 text-dark-900 text-xs font-bold px-3 py-1 rounded-lg mb-3">
                  {property.badge}
                </span>
              )}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{property.title}</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>{property.location}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Price + Stats */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg shadow-black/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Asking Price</p>
                      <p className="text-3xl font-display font-bold text-dark-900">{property.price}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 bg-gold-500/10 text-gold-700 text-sm font-medium rounded-lg border border-gold-500/20">
                      {property.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {property.beds > 0 && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <Bed className="w-5 h-5 text-gold-500" />
                        <div>
                          <p className="text-xs text-gray-500">Bedrooms</p>
                          <p className="font-semibold text-dark-900">{property.beds}</p>
                        </div>
                      </div>
                    )}
                    {property.baths > 0 && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <Bath className="w-5 h-5 text-gold-500" />
                        <div>
                          <p className="text-xs text-gray-500">Bathrooms</p>
                          <p className="font-semibold text-dark-900">{property.baths}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Square className="w-5 h-5 text-gold-500" />
                      <div>
                        <p className="text-xs text-gray-500">Area</p>
                        <p className="font-semibold text-dark-900">{property.sqft} sqft</p>
                      </div>
                    </div>
                    {property.garage && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <Building2 className="w-5 h-5 text-gold-500" />
                        <div>
                          <p className="text-xs text-gray-500">Parking</p>
                          <p className="font-semibold text-dark-900">{property.garage}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg shadow-black/5">
                  <h2 className="font-display text-xl font-bold text-dark-900 mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>
              </ScrollReveal>

              {/* Features */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg shadow-black/5">
                  <h2 className="font-display text-xl font-bold text-dark-900 mb-4">Features & Amenities</h2>
                  <StaggerContainer staggerDelay={0.06}>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {property.features.map((feature) => (
                        <StaggerItem key={feature}>
                          <div className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl">
                            <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>
                </div>
              </ScrollReveal>

              {/* Property Details */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg shadow-black/5">
                  <h2 className="font-display text-xl font-bold text-dark-900 mb-4">Property Details</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">Type</span>
                      <span className="font-medium text-dark-900 text-sm">{property.type}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">Lot Size</span>
                      <span className="font-medium text-dark-900 text-sm">{property.lotSize}</span>
                    </div>
                    {property.yearBuilt && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-500 text-sm">Year Built</span>
                        <span className="font-medium text-dark-900 text-sm">{property.yearBuilt}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">Location</span>
                      <span className="font-medium text-dark-900 text-sm">{property.location.split(',').pop()?.trim()}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-black/5 sticky top-24">
                  <h3 className="font-display font-bold text-dark-900 mb-4">Interested in this property?</h3>
                  <p className="text-gray-500 text-sm mb-6">Our team is ready to help you with viewing arrangements and inquiries.</p>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold-500 text-dark-900 font-display font-semibold rounded-xl hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20"
                    >
                      <CalendarCheck className="w-5 h-5" /> Schedule Viewing
                    </Link>
                    <a
                      href="tel:+254700000000"
                      className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-navy-500 text-navy-500 font-display font-semibold rounded-xl hover:bg-navy-500 hover:text-white transition-all"
                    >
                      <Phone className="w-5 h-5" /> Call Agent
                    </a>
                    <a
                      href="mailto:info@aurorahavens.com"
                      className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-gray-200 text-gray-700 font-display font-semibold rounded-xl hover:border-gold-500 hover:text-gold-600 transition-all"
                    >
                      <Mail className="w-5 h-5" /> Send Email
                    </a>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Shield className="w-4 h-4 text-gold-500" />
                      <span>Verified listing by Aurora Havens</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
