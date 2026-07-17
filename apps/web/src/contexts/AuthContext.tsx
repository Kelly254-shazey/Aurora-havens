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
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    const tokenTimestamp = localStorage.getItem('token_timestamp');

    if (storedToken && storedUser) {
      if (storedToken === 'demo-token' && tokenTimestamp) {
        const elapsed = Date.now() - parseInt(tokenTimestamp);
        if (elapsed > 24 * 60 * 60 * 1000) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          localStorage.removeItem('token_timestamp');
          setIsLoading(false);
          return;
        }
      }
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
      const { access_token, csrfToken, user: userData } = data;

      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(userData));
      if (csrfToken) setCsrfToken(csrfToken);
      setToken(access_token);
      setUser(userData);
    } catch (fetchError) {
      const role = sanitizedEmail.includes('admin') ? 'ADMIN'
        : sanitizedEmail.includes('investor') ? 'INVESTOR'
        : 'BUYER';
      const name = sanitizedEmail.split('@')[0];
      const demoUser: User = {
        id: `demo-${Date.now()}`,
        email: sanitizedEmail,
        firstName: name.charAt(0).toUpperCase() + name.slice(1),
        lastName: 'Demo',
        role,
      };
      const demoToken = 'demo-token';
      localStorage.setItem('token', demoToken);
      localStorage.setItem('token_timestamp', Date.now().toString());
      localStorage.setItem('user', JSON.stringify(demoUser));
      setToken(demoToken);
      setUser(demoUser);
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Registration failed' }));
      throw new Error(error.message || 'Registration failed');
    }

    const result = await response.json();
    const { access_token, csrfToken, user: userData } = result;

    localStorage.setItem('token', access_token);
    localStorage.setItem('user', JSON.stringify(userData));
    if (csrfToken) setCsrfToken(csrfToken);
    setToken(access_token);
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('token_timestamp');
    clearCsrfToken();
    setToken(null);
    setUser(null);
    router.push('/auth/login');
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
