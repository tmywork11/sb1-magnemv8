import { createClient } from '@microcms/client';

if (!import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN || !import.meta.env.VITE_MICROCMS_API_KEY) {
  throw new Error('Missing required environment variables for microCMS');
}

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

export type Category = {
  id: string;
  name: string;
};

export type News = {
  id: string;
  title: string;
  content: string;
  category: Category;
  publishedAt: string;
  revisedAt: string;
};

export type NewsResponse = {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
};

export async function getNewsList(limit = 4) {
  const response = await client.getList<News>({
    endpoint: 'news',
    queries: { 
      orders: '-publishedAt',
      limit
    },
  });

  return response.contents.map(news => ({
    id: news.id,
    title: news.title,
    content: news.content,
    category: news.category?.name || 'お知らせ',
    date: new Date(news.publishedAt).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    link: `/news/${news.id}`
  }));
}

export async function getNewsById(contentId: string) {
  const news = await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
  });

  return {
    id: news.id,
    title: news.title,
    content: news.content,
    category: news.category?.name || 'お知らせ',
    date: new Date(news.publishedAt).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.'),
    link: `/news/${news.id}`
  };
}