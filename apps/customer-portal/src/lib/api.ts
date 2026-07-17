const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function getHeaders(token?: string | null, method?: string): HeadersInit {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (method && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
    const csrf = typeof window !== 'undefined' ? localStorage.getItem('portal_csrf') : null;
    if (csrf) headers['X-CSRF-Token'] = csrf;
  }
  return headers;
}

function getStoredToken(): string | null {
  return typeof window !== 'undefined' ? localStorage.getItem('portal_token') : null;
}

export function setCsrfToken(token: string) {
  if (typeof window !== 'undefined') localStorage.setItem('portal_csrf', token);
}

export function clearCsrfToken() {
  if (typeof window !== 'undefined') localStorage.removeItem('portal_csrf');
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (response.status === 401) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('portal_token');
      localStorage.removeItem('portal_user');
      localStorage.removeItem('portal_csrf');
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
  get: <T>(endpoint: string) => apiFetch<T>(endpoint),
  post: <T>(endpoint: string, body?: unknown) => apiFetch<T>(endpoint, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  put: <T>(endpoint: string, body?: unknown) => apiFetch<T>(endpoint, { method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  delete: <T>(endpoint: string) => apiFetch<T>(endpoint, { method: 'DELETE' }),
};
