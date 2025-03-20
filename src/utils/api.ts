import { wpSettings } from '../types';

declare global {
  interface Window {
    wpSettings: wpSettings;
  }
}

const BASE_URL = window.wpSettings?.apiUrl || '/wp-json';

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  
  if (window.wpSettings?.nonce) {
    headers.append('X-WP-Nonce', window.wpSettings.nonce);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export async function getThemeSettings() {
  return fetchApi<wpSettings>('/dayservice/v1/settings');
}