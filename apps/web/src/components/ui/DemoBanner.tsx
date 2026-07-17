'use client';

import { useAuth } from '@/contexts/AuthContext';
import { AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

export function DemoBanner() {
  const { token } = useAuth();
  const [dismissed, setDismissed] = useState(false);

  if (!token || token !== 'demo-token' || dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-500/90 backdrop-blur-sm px-4 py-2.5 flex items-center justify-center gap-3 text-sm">
      <AlertTriangle className="w-4 h-4 text-amber-900 flex-shrink-0" />
      <span className="text-amber-900 font-medium">
        Demo Mode — Data is simulated and will expire in 24 hours
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-2 p-1 rounded-full hover:bg-amber-600/30 transition-colors"
        aria-label="Dismiss demo banner"
      >
        <X className="w-3.5 h-3.5 text-amber-900" />
      </button>
    </div>
  );
}
