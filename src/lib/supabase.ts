import { createClient } from '@supabase/supabase-js';
import type { NewsItemType } from '../types';

// Validate environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// News related functions
export async function getNews(limit = 4): Promise<NewsItemType[]> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching news:', error);
    // フォールバックとしてモックデータを返す
    return [];
  }

  return data.map(item => ({
    id: item.id,
    title: item.title,
    content: item.content,
    category: item.category,
    date: new Date(item.created_at).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    link: `/news/${item.id}`
  }));
}

export async function getNewsById(id: string): Promise<NewsItemType | null> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    console.error('Error fetching news by id:', error);
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    content: data.content,
    category: data.category,
    date: new Date(data.created_at).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    link: `/news/${data.id}`
  };
}