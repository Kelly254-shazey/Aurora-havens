'use client';

import { usePortalNotifications, useMarkNotificationRead, useMarkAllNotificationsRead } from '@/hooks/usePortal';
import { Bell, Check, CheckCheck } from 'lucide-react';

export default function NotificationsPage() {
  const { data, isLoading } = usePortalNotifications();
  const markRead = useMarkNotificationRead();
  const markAllRead = useMarkAllNotificationsRead();
  const notifications = data?.data || [];
  const unreadCount = data?.unreadCount || 0;

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-dark-900">Notifications</h1>
          {unreadCount > 0 && <p className="text-sm text-gray-500">{unreadCount} unread</p>}
        </div>
        {unreadCount > 0 && (
          <button onClick={() => markAllRead.mutate()} className="btn-ghost text-sm">
            <CheckCheck className="w-4 h-4" /> Mark all read
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-white rounded-xl animate-pulse" />)}</div>
      ) : notifications.length === 0 ? (
        <div className="card text-center py-12">
          <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No notifications yet</p>
        </div>
      ) : (
        <div className="space-y-2">
          {notifications.map((n: any) => (
            <div key={n.id} className={`card flex items-start gap-3 ${!n.isRead ? 'border-gold-500/30 bg-gold-500/5' : ''}`}>
              <Bell className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-dark-900">{n.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{n.message}</p>
                <p className="text-xs text-gray-400 mt-1">{new Date(n.createdAt).toLocaleString()}</p>
              </div>
              {!n.isRead && (
                <button onClick={() => markRead.mutate(n.id)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Mark as read">
                  <Check className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
