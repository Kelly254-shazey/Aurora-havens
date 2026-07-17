'use client';

import { ShieldCheck, Key, Monitor, Smartphone, AlertTriangle } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">Security Settings</h1>

      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Key className="w-5 h-5 text-gold-600" />
          <h2 className="font-display font-semibold text-dark-900">Change Password</h2>
        </div>
        <div className="space-y-3">
          <div>
            <label className="label">Current Password</label>
            <input type="password" className="input" placeholder="Enter current password" />
          </div>
          <div>
            <label className="label">New Password</label>
            <input type="password" className="input" placeholder="Enter new password" />
          </div>
          <div>
            <label className="label">Confirm New Password</label>
            <input type="password" className="input" placeholder="Confirm new password" />
          </div>
          <button className="btn-primary text-sm">Update Password</button>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="w-5 h-5 text-gold-600" />
          <h2 className="font-display font-semibold text-dark-900">Two-Factor Authentication</h2>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div>
            <p className="text-sm font-medium text-dark-900">Authenticator App</p>
            <p className="text-xs text-gray-500">Use an authenticator app to generate one-time codes</p>
          </div>
          <span className="badge-red">Not Enabled</span>
        </div>
        <button className="btn-secondary text-sm mt-3">Enable 2FA</button>
      </div>

      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="w-5 h-5 text-gold-600" />
          <h2 className="font-display font-semibold text-dark-900">Active Sessions</h2>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-dark-900">Current Session</p>
              <p className="text-xs text-gray-500">This device • Active now</p>
            </div>
            <span className="badge-green ml-auto">Current</span>
          </div>
        </div>
      </div>

      <div className="card border-red-200">
        <div className="flex items-center gap-3 mb-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="font-display font-semibold text-red-700">Danger Zone</h2>
        </div>
        <p className="text-sm text-gray-600 mb-3">Permanently delete your account and all associated data.</p>
        <button className="btn-danger text-sm">Delete Account</button>
      </div>
    </div>
  );
}
