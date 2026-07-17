'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

export interface Property {
  id: string;
  title: string;
  description: string;
  slug: string;
  type: string;
  status: string;
  price: number;
  currency: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  lotSize?: number;
  yearBuilt?: number;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  features: string[];
  images: Array<{ id: string; url: string; alt: string; isPrimary: boolean; order: number }>;
  mapCoordinates?: { lat: number; lng: number };
  agent?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    avatar?: string;
  };
  isFeatured: boolean;
  isNew: boolean;
  isSold: boolean;
  views: number;
  inquiries: number;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyQuery {
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  city?: string;
  state?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export function useProperties(query: PropertyQuery = {}) {
  return useQuery<PaginatedResponse<Property>>({
    queryKey: ['properties', query],
    queryFn: async () => {
      const params = new URLSearchParams();
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
      const { data } = await api.get<PaginatedResponse<Property>>(`/properties?${params.toString()}`);
      return data;
    },
  });
}

export function useProperty(slug: string) {
  return useQuery<Property>({
    queryKey: ['property', slug],
    queryFn: async () => {
      const { data } = await api.get<Property>(`/properties/${slug}`);
      return data;
    },
    enabled: !!slug,
  });
}

export function useFeaturedProperties() {
  return useQuery<Property[]>({
    queryKey: ['properties', 'featured'],
    queryFn: async () => {
      const { data } = await api.get<Property[]>('/properties/featured');
      return data;
    },
  });
}

export function useCreateInquiry() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (inquiry: {
      propertyId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      message?: string;
    }) => {
      const { data } = await api.post<{ success: boolean }>(`/properties/${inquiry.propertyId}/inquiry`, inquiry);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
}

export function useToggleFavorite() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (propertyId: string) => {
      const { data } = await api.post<{ success: boolean }>(`/properties/${propertyId}/favorite`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
}

export function useFavorites() {
  return useQuery<Property[]>({
    queryKey: ['favorites'],
    queryFn: async () => {
      const { data } = await api.get<Property[]>('/properties/favorites');
      return data;
    },
  });
}
