'use client';

import { LifeBuoy, MessageSquare, Phone, Mail, ExternalLink } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">Support Centre</h1>

      <div className="card">
        <h2 className="font-display font-semibold text-dark-900 mb-4">Contact Support</h2>
        <div className="space-y-3">
          <a href="mailto:support@aurorahavens.com" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <Mail className="w-5 h-5 text-gold-600" />
            <div>
              <p className="text-sm font-medium text-dark-900">Email Support</p>
              <p className="text-xs text-gray-500">support@aurorahavens.com</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
          </a>
          <a href="tel:+254700000000" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <Phone className="w-5 h-5 text-gold-600" />
            <div>
              <p className="text-sm font-medium text-dark-900">Phone Support</p>
              <p className="text-xs text-gray-500">+254 700 000 000</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
          </a>
        </div>
      </div>

      <div className="card">
        <h2 className="font-display font-semibold text-dark-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: 'How do I reset my password?', a: 'Go to Security settings and click "Change Password".' },
            { q: 'How do I save a property?', a: 'Click the heart icon on any property listing.' },
            { q: 'How do I schedule a viewing?', a: 'Navigate to Buyer > Viewings and click "Schedule Viewing".' },
          ].map((faq, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between p-3 rounded-xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors text-sm font-medium text-dark-900">
                {faq.q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-2 px-3 text-sm text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
