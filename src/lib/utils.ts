import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
  responseType?: 'json' | 'blob'; // 新增响应类型
}

export async function request<T = any>(url: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', headers = {}, body, responseType = 'json' } = options;
  const fetchOptions: RequestInit = {
    method,
    headers: { ...headers },
  };
  if (body instanceof FormData) {
    fetchOptions.body = body;
    // FormData 不能设置 Content-Type
  } else if (body) {
    fetchOptions.body = JSON.stringify(body);
    fetchOptions.headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
  }
  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) {
      throw new Error(`请求失败: ${res.status} ${res.statusText}`);
    }
    if (responseType === 'blob') {
      return (await res.blob()) as any;
    }
    const result = await res.json();
    if (typeof result === 'object' && result !== null && 'code' in result && 'data' in result) {
      if (result.code !== 200) {
        throw new Error(result.msg || '请求失败');
      }
      return result.data;
    }
    return result;
  } catch (err) {
    throw err;
  }
}
