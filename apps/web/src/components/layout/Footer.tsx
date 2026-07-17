// TODO: Footer links should be CMS-driven via admin panel
// Admin can manage: footer sections, links, copyright text, partner branding

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { FOOTER_LINKS } from '@aurora-havens/shared';

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <img src="/logo.png" alt="Aurora Havens" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <span className="font-display font-bold text-xl block">Aurora Havens</span>
                <span className="text-[10px] text-gold-400/70 tracking-[0.2em] uppercase font-medium">
                  Building Prosperity
                </span>
              </div>
            </div>
            <p className="text-dark-200 mb-6 leading-relaxed">
              Africa&apos;s most trusted integrated real estate and social impact digital platform 
              where every property investment contributes directly to transforming lives.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@aurorahavens.com" className="flex items-center gap-3 text-dark-200 hover:text-gold-400 transition-colors group">
                <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@aurorahavens.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-dark-200 hover:text-gold-400 transition-colors group">
                <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-dark-200">
                <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-sm tracking-wide uppercase">
              Properties
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.properties.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-dark-200 hover:text-gold-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-sm tracking-wide uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-dark-200 hover:text-gold-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-sm tracking-wide uppercase">
              Support
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-dark-200 hover:text-gold-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              {FOOTER_LINKS.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center text-dark-200 hover:text-gold-400 hover:bg-gold-500/10 transition-all duration-300"
                >
                  {social.icon === 'facebook' && <Facebook className="w-4 h-4" />}
                  {social.icon === 'twitter' && <Twitter className="w-4 h-4" />}
                  {social.icon === 'instagram' && <Instagram className="w-4 h-4" />}
                  {social.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
                  {social.icon === 'youtube' && <Youtube className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-300 text-sm">
            &copy; {new Date().getFullYear()} Aurora Havens. All rights reserved.
          </p>
          <p className="text-dark-300 text-sm">
            Powered by <span className="text-gold-500 font-medium">KellyFlo Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
