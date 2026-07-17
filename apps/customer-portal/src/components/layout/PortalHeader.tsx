'use client';

import { useAuth } from '@/contexts/AuthContext';
import { Bell, User, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export function PortalHeader() {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const initials = user ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}` : '?';

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <Link href="/notifications" className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Notifications">
          <Bell className="w-5 h-5 text-dark-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-dark-900 font-display font-bold text-xs">
              {initials}
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-dark-900">{user?.firstName} {user?.lastName}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
              <Link href="/profile" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setDropdownOpen(false)}>My Profile</Link>
              <Link href="/settings" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setDropdownOpen(false)}>Settings</Link>
              <Link href="/security" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setDropdownOpen(false)}>Security</Link>
              <div className="border-t border-gray-100 my-1" />
              <Link href="/" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setDropdownOpen(false)}>Back to Site</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
