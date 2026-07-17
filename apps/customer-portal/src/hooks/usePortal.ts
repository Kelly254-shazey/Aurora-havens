'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

export function usePortalDashboard() {
  return useQuery({ queryKey: ['portal-dashboard'], queryFn: () => api.get<any>('/portal/dashboard') });
}

export function usePortalProfile() {
  return useQuery({ queryKey: ['portal-profile'], queryFn: () => api.get<any>('/portal/profile') });
}

export function usePortalNotifications(page = 1) {
  return useQuery({ queryKey: ['portal-notifications', page], queryFn: () => api.get<any>(`/portal/notifications?page=${page}`) });
}

export function usePortalSavedProperties() {
  return useQuery({ queryKey: ['portal-saved'], queryFn: () => api.get<any>('/portal/saved-properties') });
}

export function usePortalViewings() {
  return useQuery({ queryKey: ['portal-viewings'], queryFn: () => api.get<any>('/portal/viewings') });
}

export function usePortalOffers() {
  return useQuery({ queryKey: ['portal-offers'], queryFn: () => api.get<any>('/portal/offers') });
}

export function usePortalLeases() {
  return useQuery({ queryKey: ['portal-leases'], queryFn: () => api.get<any>('/portal/leases') });
}

export function usePortalMaintenance() {
  return useQuery({ queryKey: ['portal-maintenance'], queryFn: () => api.get<any>('/portal/maintenance') });
}

export function usePortalPayments(page = 1) {
  return useQuery({ queryKey: ['portal-payments', page], queryFn: () => api.get<any>(`/portal/payments?page=${page}`) });
}

export function usePortalDocuments() {
  return useQuery({ queryKey: ['portal-documents'], queryFn: () => api.get<any>('/portal/documents') });
}

export function usePortalConversations() {
  return useQuery({ queryKey: ['portal-conversations'], queryFn: () => api.get<any>('/portal/conversations') });
}

export function usePortalMessages(conversationId: string) {
  return useQuery({ queryKey: ['portal-messages', conversationId], queryFn: () => api.get<any>(`/portal/conversations/${conversationId}/messages`), enabled: !!conversationId });
}

export function useSendMessage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ conversationId, content }: { conversationId: string; content: string }) => api.post(`/portal/conversations/${conversationId}/messages`, { content }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['portal-conversations'] }),
  });
}

export function useToggleSaveProperty() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (propertyId: string) => api.post(`/portal/saved-properties/${propertyId}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['portal-saved'] }),
  });
}

export function useCreateViewing() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: { propertyId: string; scheduledAt: string; notes?: string }) => api.post('/portal/viewings', data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['portal-viewings'] }),
  });
}

export function useCreateOffer() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: { propertyId: string; amount: number; notes?: string }) => api.post('/portal/offers', data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['portal-offers'] }),
  });
}

export function useCreateMaintenance() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: { propertyId: string; title: string; description: string; priority: string }) => api.post('/portal/maintenance', data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['portal-maintenance'] }),
  });
}

export function useMarkNotificationRead() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.put(`/portal/notifications/${id}/read`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['portal-notifications'] }),
  });
}

export function useMarkAllNotificationsRead() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => api.put('/portal/notifications/read-all'),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['portal-notifications'] }),
  });
}
