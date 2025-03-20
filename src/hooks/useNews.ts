import { useState, useEffect } from 'react';
import { NewsItemType } from '../types';

export function useNews() {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/wp-json/wp/v2/posts?per_page=4&_embed');
        if (!response.ok) throw new Error('Failed to fetch news');
        
        const data = await response.json();
        const formattedNews = data.map((post: any) => ({
          id: post.id,
          date: new Date(post.date).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\//g, '.'),
          category: post._embedded['wp:term'][0][0]?.name || 'お知らせ',
          title: post.title.rendered,
          link: post.link
        }));
        
        setNews(formattedNews);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchNews();
  }, []);

  return { news, isLoading, error };
}