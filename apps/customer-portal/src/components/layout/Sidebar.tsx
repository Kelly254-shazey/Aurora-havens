'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard, User, Bell, MessageSquare, FileText, CreditCard,
  LifeBuoy, ShieldCheck, LogOut, ChevronLeft, ChevronRight,
  Home, Heart, CalendarCheck, HandCoins, Wrench, Building2,
  TrendingUp, Gift, Settings,
} from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Notifications', href: '/notifications', icon: Bell },
  { label: 'Messages', href: '/messages', icon: MessageSquare },
  { label: 'Documents', href: '/documents', icon: FileText },
  { label: 'Payments', href: '/payments', icon: CreditCard },
  { label: 'Support', href: '/support', icon: LifeBuoy },
  { label: 'Security', href: '/security', icon: ShieldCheck },
];

const ROLE_SECTIONS: Record<string, { label: string; items: { label: string; href: string; icon: typeof Home }[] }> = {
  BUYER: {
    label: 'Buyer',
    items: [
      { label: 'Saved Properties', href: '/buyer/saved', icon: Heart },
      { label: 'Viewings', href: '/buyer/viewings', icon: CalendarCheck },
      { label: 'Offers', href: '/buyer/offers', icon: HandCoins },
    ],
  },
  TENANT: {
    label: 'Tenant',
    items: [
      { label: 'My Rental', href: '/tenant/leases', icon: FileText },
      { label: 'Maintenance', href: '/tenant/maintenance', icon: Wrench },
    ],
  },
  PROPERTY_OWNER: {
    label: 'Property Owner',
    items: [
      { label: 'My Properties', href: '/owner/properties', icon: Building2 },
      { label: 'Maintenance', href: '/owner/maintenance', icon: Wrench },
    ],
  },
  INVESTOR: {
    label: 'Investor',
    items: [
      { label: 'Portfolio', href: '/investor/portfolio', icon: TrendingUp },
    ],
  },
  DONOR: {
    label: 'Donor',
    items: [
      { label: 'Donations', href: '/donor/history', icon: Gift },
    ],
  },
};

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const userRoles: string[] = (user as any)?.roles || [user?.role || 'BUYER'];
  const activeRoles = Array.isArray(userRoles) ? userRoles : [userRoles];

  return (
    <aside className={`${collapsed ? 'w-[72px]' : 'w-64'} bg-sidebar text-white flex flex-col transition-all duration-300 fixed left-0 top-0 bottom-0 z-30`}>
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-4 h-16 border-b border-white/10`}>
        {!collapsed ? (
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Aurora Havens" className="w-10 h-10 object-contain" />
            <span className="font-display font-semibold text-sm">Portal</span>
          </Link>
        ) : (
          <Link href="/dashboard" className="flex items-center justify-center" title="Aurora Havens Portal">
            <img src="/logo.png" alt="Aurora Havens" className="w-10 h-10 object-contain" />
          </Link>
        )}
        <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1" role="navigation" aria-label="Portal navigation">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gold-500/20 text-gold-400'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
              title={collapsed ? item.label : undefined}
              aria-current={isActive ? 'page' : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}

        {activeRoles.map((role) => {
          const section = ROLE_SECTIONS[role];
          if (!section) return null;
          return (
            <div key={role} className="pt-3 mt-3 border-t border-white/10">
              {!collapsed && <p className="px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">{section.label}</p>}
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gold-500/20 text-gold-400'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                    title={collapsed ? item.label : undefined}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-3 space-y-1">
        <Link href="/" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200`} title={collapsed ? 'Back to Site' : undefined}>
          <Home className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Back to Site</span>}
        </Link>
        <button onClick={logout} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200`} title={collapsed ? 'Sign Out' : undefined}>
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
