'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiFetch } from '@/lib/api';

export function useApi<T>(endpoint: string | null, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const refetch = useCallback(async () => {
    if (!endpoint) { setLoading(false); return; }
    setLoading(true);
    setError(null);
    try {
      const result = await apiFetch<T>(endpoint, options);
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => { refetch(); }, [refetch]);

  return { data, error, loading, refetch };
}
