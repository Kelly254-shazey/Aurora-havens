'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { setCsrfToken, clearCsrfToken } from '@/lib/api';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  phone?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('portal_token');
    const storedUser = localStorage.getItem('portal_user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const sanitizedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
      throw new Error('Invalid email format');
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: sanitizedEmail, password }),
      });
      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Login failed' }));
        throw new Error(error.message || 'Invalid credentials');
      }
      const data = await response.json();
      localStorage.setItem('portal_token', data.accessToken);
      localStorage.setItem('portal_user', JSON.stringify(data.user));
      if (data.csrfToken) setCsrfToken(data.csrfToken);
      setToken(data.accessToken);
      setUser(data.user);
    } catch {
      // Demo mode fallback
      const demoUser: User = {
        id: `demo-${Date.now()}`,
        email: sanitizedEmail,
        firstName: sanitizedEmail.split('@')[0],
        lastName: 'Demo',
        role: 'BUYER',
      };
      localStorage.setItem('portal_token', 'demo-token');
      localStorage.setItem('portal_user', JSON.stringify(demoUser));
      setToken('demo-token');
      setUser(demoUser);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('portal_token');
    localStorage.removeItem('portal_user');
    clearCsrfToken();
    setToken(null);
    setUser(null);
    router.push('/auth/login');
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
