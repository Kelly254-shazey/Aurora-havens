'use client';
import { useState } from 'react';
import { api } from '@/lib/api';
import Link from 'next/link';
import {
  Mail, Phone, MapPin, Clock, Send, MessageCircle,
  ArrowRight, Building2, Globe, CheckCircle,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await api.post('/api/v1/contact', {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim() || undefined,
        subject: form.subject,
        message: form.message.trim(),
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
              <MessageCircle className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-sm font-medium">Get In Touch</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Contact{' '}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Us</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have a question, want to invest, or need help with a property?
              Our team is here to assist you every step of the way.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ CONTACT SECTION ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                  <div className="w-8 h-px bg-gold-500" />
                  SEND A MESSAGE
                </div>
                <h2 className="font-display text-3xl font-bold text-dark-900 mb-6">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours.
                  For urgent inquiries, please call us directly.
                </p>
              </ScrollReveal>

              {success ? (
                <div className="card text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-dark-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => { setSuccess(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="text-gold-600 font-medium hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>
                  )}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        maxLength={100}
                        placeholder="John Mwangi"
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label className="label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        maxLength={254}
                        placeholder="john@example.com"
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        maxLength={20}
                        placeholder="+254 700 000 000"
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="label">Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className="input" required>
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="properties">Property Inquiry</option>
                        <option value="investment">Investment Question</option>
                        <option value="foundation">Foundation / Donation</option>
                        <option value="support">Customer Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label">Message *</label>
                    <textarea
                      rows={6}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      maxLength={2000}
                      placeholder="Tell us how we can help you..."
                      className="input resize-none"
                      required
                    />
                    <p className="text-xs text-gray-400 mt-1">{form.message.length}/2000</p>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-dark-900 font-display font-semibold rounded-xl shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <StaggerContainer className="space-y-6" staggerDelay={0.15}>
                {/* Office Card */}
                <StaggerItem>
                  <div className="bg-dark-800 rounded-2xl p-8 border border-gold-500/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-gold-500" />
                      </div>
                      <h3 className="font-display font-semibold text-white text-lg">Head Office</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-white font-medium">Westlands Business Park</p>
                          <p className="text-gray-400 text-sm">3rd Floor, Tower A<br />Westlands, Nairobi, Kenya</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                        <div>
                          <a href="tel:+254700000000" className="text-white font-medium hover:text-gold-400 transition-colors">
                            +254 700 000 000
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                        <div>
                          <a href="mailto:info@aurorahavens.com" className="text-white font-medium hover:text-gold-400 transition-colors">
                            info@aurorahavens.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-gold-500 flex-shrink-0" />
                        <span className="text-white font-medium">www.aurorahavens.com</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                {/* Business Hours */}
                <StaggerItem>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-gold-600" />
                      </div>
                      <h3 className="font-display font-semibold text-dark-900 text-lg">Business Hours</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                        { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
                        { day: 'Sunday', hours: 'Closed' },
                      ].map((schedule) => (
                        <div key={schedule.day} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                          <span className="text-gray-600 font-medium text-sm">{schedule.day}</span>
                          <span className={`font-semibold text-sm ${schedule.hours === 'Closed' ? 'text-gray-400' : 'text-dark-900'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>

                {/* Regional Offices */}
                <StaggerItem>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="font-display font-semibold text-dark-900 text-lg mb-4">Regional Offices</h3>
                    <div className="space-y-3">
                      {[
                        { city: 'Lagos, Nigeria', phone: '+234 800 000 0000' },
                        { city: 'Accra, Ghana', phone: '+233 300 000 000' },
                        { city: 'Dar es Salaam, Tanzania', phone: '+255 220 000 000' },
                      ].map((office) => (
                        <div key={office.city} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                          <MapPin className="w-4 h-4 text-gold-500" />
                          <div>
                            <p className="text-dark-900 font-medium text-sm">{office.city}</p>
                            <p className="text-gray-500 text-xs">{office.phone}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MAP ═══════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-gold-600 font-medium text-sm mb-4">
                <div className="w-8 h-px bg-gold-500" />
                LOCATION
                <div className="w-8 h-px bg-gold-500" />
              </div>
              <h2 className="font-display text-3xl font-bold text-dark-900">
                Find Us
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-dark-800 rounded-2xl h-96 flex items-center justify-center border border-gold-500/20">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold-500/30 mx-auto mb-4" />
                <p className="text-gray-400 font-display font-medium">Interactive Map</p>
                <p className="text-gray-500 text-sm mt-1">Westlands Business Park, Nairobi</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
