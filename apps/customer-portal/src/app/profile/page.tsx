'use client';

import { useAuth } from '@/contexts/AuthContext';
import { usePortalProfile } from '@/hooks/usePortal';
import { User, Mail, Phone, Calendar, Shield, Camera } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();
  const { data: profile } = usePortalProfile();

  const p = profile || user;

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">My Profile</h1>

      <div className="card">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center text-dark-900 font-display font-bold text-2xl">
              {p?.firstName?.[0]}{p?.lastName?.[0]}
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors" aria-label="Change photo">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-dark-900">{p?.firstName} {p?.lastName}</h2>
            <p className="text-sm text-gray-500">{p?.email}</p>
            <span className="badge-gold mt-1">{p?.role}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" defaultValue={p?.firstName} className="input pl-10" readOnly />
              </div>
            </div>
            <div>
              <label className="label">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" defaultValue={p?.lastName} className="input pl-10" readOnly />
              </div>
            </div>
          </div>
          <div>
            <label className="label">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="email" defaultValue={p?.email} className="input pl-10" readOnly />
            </div>
          </div>
          <div>
            <label className="label">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="tel" defaultValue={p?.phone || ''} className="input pl-10" placeholder="Not provided" readOnly />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Role</label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" defaultValue={p?.role} className="input pl-10" readOnly />
              </div>
            </div>
            <div>
              <label className="label">Member Since</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" defaultValue={p?.createdAt ? new Date(p.createdAt).toLocaleDateString() : 'N/A'} className="input pl-10" readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
