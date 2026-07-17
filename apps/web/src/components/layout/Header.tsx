'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Search, Phone, ChevronDown,
  Building2, Heart, TrendingUp, Newspaper, Camera,
  MessageCircle, ArrowRight, Home, Info, HardHat, DollarSign,
} from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface NavGroup {
  label: string;
  href?: string;
  children?: NavItem[];
  icon: React.ReactNode;
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <Info className="w-4 h-4" />,
  },
  {
    label: 'Properties',
    href: '/properties',
    icon: <Building2 className="w-4 h-4" />,
    children: [
      { label: 'All Properties', href: '/properties', description: 'Browse our full portfolio' },
      { label: 'Residential', href: '/properties?type=RESIDENTIAL', description: 'Homes & apartments' },
      { label: 'Commercial', href: '/properties?type=COMMERCIAL', description: 'Office & retail spaces' },
      { label: 'Land', href: '/properties?type=LAND', description: 'Plots & acreage' },
      { label: 'Luxury', href: '/properties?type=LUXURY', description: 'Premium listings' },
    ],
  },
  {
    label: 'Construction',
    href: '/construction',
    icon: <HardHat className="w-4 h-4" />,
  },
  {
    label: 'Foundation',
    href: '/foundation',
    icon: <Heart className="w-4 h-4" />,
    children: [
      { label: 'Our Programs', href: '/foundation', description: 'Community initiatives' },
      { label: 'Donate', href: '/donate', description: 'Make a difference' },
      { label: 'Events', href: '/foundation/events', description: 'Upcoming activities' },
      { label: 'Success Stories', href: '/foundation/stories', description: 'Real impact' },
    ],
  },
  {
    label: 'Invest',
    href: '/invest',
    icon: <TrendingUp className="w-4 h-4" />,
    children: [
      { label: 'Opportunities', href: '/invest', description: 'Browse investments' },
      { label: 'How It Works', href: '/invest/how-it-works', description: 'Getting started' },
    ],
  },
  {
    label: 'News',
    href: '/news',
    icon: <Newspaper className="w-4 h-4" />,
  },
  {
    label: 'Gallery',
    href: '/gallery',
    icon: <Camera className="w-4 h-4" />,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <MessageCircle className="w-4 h-4" />,
  },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname.startsWith(href);
    },
    [pathname]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-dark-900/90 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-gold-500/[0.08]'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent'
        }`}
      >
        {/* Top bar - phone & tagline */}
        <div
          className={`border-b border-white/[0.06] transition-all duration-500 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
            <span className="text-[11px] text-white/40 tracking-wide hidden sm:block">
              Africa&apos;s Premier Real Estate & Social Impact Platform
            </span>
            <a
              href="tel:+254700000000"
              className="flex items-center gap-1.5 text-[11px] text-gold-400/70 hover:text-gold-400 transition-colors ml-auto"
            >
              <Phone className="w-3 h-3" />
              <span className="font-medium tracking-wide">+254 700 000 000</span>
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
                  <img src="/logo.png" alt="Aurora Havens" className="w-12 h-12 object-contain" />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-[18px] text-white block leading-tight tracking-tight">
                  Aurora Havens
                </span>
                <span className="text-[9px] text-gold-400/50 tracking-[0.25em] uppercase font-semibold">
                  Building Prosperity
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {NAV_GROUPS.map((group) => {
                const active = isActive(group.href || '');

                if (!group.children) {
                  return (
                    <Link
                      key={group.label}
                      href={group.href!}
                      className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                        active
                          ? 'text-gold-400'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {group.label}
                      {active && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-500 rounded-full" />
                      )}
                    </Link>
                  );
                }

                return (
                  <div
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(group.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                        active
                          ? 'text-gold-400'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {group.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          openDropdown === group.label ? 'rotate-180' : ''
                        }`}
                      />
                      {active && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-500 rounded-full" />
                      )}
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                        openDropdown === group.label
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="w-72 bg-dark-800/95 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 p-2 overflow-hidden">
                        <div className="absolute inset-x-0 -top-3 h-3" /> {/* Hover bridge */}
                        {group.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${
                              isActive(child.href)
                                ? 'bg-gold-500/10 text-gold-400'
                                : 'text-white/70 hover:bg-white/[0.05] hover:text-white'
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-medium flex items-center gap-2">
                                {child.label}
                                {isActive(child.href) && (
                                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0" />
                                )}
                              </div>
                              {child.description && (
                                <div className="text-[11px] text-white/30 mt-0.5">
                                  {child.description}
                                </div>
                              )}
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 mt-0.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden xl:flex items-center gap-2">
              <ThemeToggle />

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-11 h-11 flex items-center justify-center text-white/50 hover:text-gold-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <div className="w-px h-6 bg-white/10 mx-1" />

              <Link
                href="/auth/login"
                className="px-4 py-2 text-[13px] font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                Sign In
              </Link>

              <Link
                href="/auth/register"
                className="relative px-5 py-2.5 text-[13px] font-semibold text-dark-900 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 hover:from-gold-300 hover:via-gold-400 hover:to-gold-500 transition-all duration-300 overflow-hidden group/btn"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="xl:hidden relative w-11 h-11 flex items-center justify-center text-white/70 hover:text-gold-400 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
                    isMobileOpen ? 'rotate-45 translate-y-[5px]' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${
                    isMobileOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
                    isMobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop search bar */}
        <div
          className={`border-t border-white/[0.06] transition-all duration-400 overflow-hidden ${
            searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search properties, locations, articles..."
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.08] transition-all duration-300"
                autoFocus={searchOpen}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-dark-900/98 backdrop-blur-2xl border-l border-white/[0.06] shadow-2xl transition-transform duration-500 ease-out ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/[0.06]">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMobileOpen(false)}>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
                  <img src="/logo.png" alt="Aurora Havens" className="w-10 h-10 object-contain" />
                </div>
              <span className="font-display font-bold text-white text-sm">Aurora Havens</span>
            </Link>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <button
                className="w-11 h-11 flex items-center justify-center text-white/50 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav items */}
          <div className="px-4 py-4 overflow-y-auto h-[calc(100vh-72px-80px)]">
            <div className="space-y-1">
              {NAV_GROUPS.map((group, i) => {
                const active = isActive(group.href || '');
                const isExpanded = mobileExpanded === group.label;

                return (
                  <div
                    key={group.label}
                    className="animate-slide-down"
                    style={{ animationDelay: `${i * 40}ms`, animationFillMode: 'backwards' }}
                  >
                    {group.children ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : group.label)}
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                            active
                              ? 'text-gold-400 bg-gold-500/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {group.icon}
                            {group.label}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pl-5 pr-2 py-1 space-y-0.5">
                            {group.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] transition-all duration-200 ${
                                  isActive(child.href)
                                    ? 'text-gold-400 bg-gold-500/10'
                                    : 'text-white/50 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                <span className="w-1 h-1 rounded-full bg-current flex-shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={group.href!}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                          active
                            ? 'text-gold-400 bg-gold-500/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {group.icon}
                        {group.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-4 border-t border-white/[0.06] bg-dark-900/95 backdrop-blur-xl">
            <a
              href="tel:+254700000000"
              className="flex items-center justify-center gap-2 py-3 text-gold-400/70 hover:text-gold-400 text-[13px] font-medium transition-colors mb-3"
            >
              <Phone className="w-3.5 h-3.5" />
              +254 700 000 000
            </a>
            <div className="flex gap-3">
              <Link
                href="/auth/login"
                onClick={() => setIsMobileOpen(false)}
                className="flex-1 text-center py-3 border border-white/10 rounded-xl text-white/70 text-[13px] font-medium hover:text-white hover:border-white/20 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setIsMobileOpen(false)}
                className="flex-1 text-center py-3 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-900 rounded-xl text-[13px] font-semibold shadow-lg shadow-gold-500/20 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
