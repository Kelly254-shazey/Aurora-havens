const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function getHeaders(token?: string | null, method?: string): HeadersInit {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (method && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
    const csrf = typeof window !== 'undefined' ? localStorage.getItem('csrf-token') : null;
    if (csrf) headers['X-CSRF-Token'] = csrf;
  }
  return headers;
}

function getStoredToken(): string | null {
  return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
}

export function setCsrfToken(token: string) {
  if (typeof window !== 'undefined') localStorage.setItem('csrf-token', token);
}

export function clearCsrfToken() {
  if (typeof window !== 'undefined') localStorage.removeItem('csrf-token');
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (response.status === 401) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('csrf-token');
      window.location.href = '/auth/login';
    }
    throw new Error('Unauthorized');
  }
  if (response.status === 403) {
    throw new Error('CSRF validation failed. Please refresh and try again.');
  }
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }
  if (response.status === 204) return undefined as T;
  return response.json();
}

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getStoredToken();
  const method = options.method || 'GET';
  const headers: HeadersInit = { ...getHeaders(token, method), ...options.headers };
  const response = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  return handleResponse<T>(response);
}

export const api = {
  async get<T>(endpoint: string): Promise<{ data: T }> {
    const token = getStoredToken();
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'GET',
      headers: getHeaders(token, 'GET'),
    });
    const data = await handleResponse<T>(response);
    return { data };
  },

  async post<T>(endpoint: string, body?: unknown): Promise<{ data: T }> {
    const token = getStoredToken();
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(token, 'POST'),
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await handleResponse<T>(response);
    return { data };
  },

  async put<T>(endpoint: string, body?: unknown): Promise<{ data: T }> {
    const token = getStoredToken();
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'PUT',
      headers: getHeaders(token, 'PUT'),
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await handleResponse<T>(response);
    return { data };
  },

  async delete<T>(endpoint: string): Promise<{ data: T }> {
    const token = getStoredToken();
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'DELETE',
      headers: getHeaders(token, 'DELETE'),
    });
    const data = await handleResponse<T>(response);
    return { data };
  },
};
