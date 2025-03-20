import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import { getNews, deleteNews } from '../../lib/supabase';
import NewsEditor from './NewsEditor';
import type { NewsItemType } from '../../types';

export default function NewsAdmin() {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItemType | null>(null);

  const loadNews = async () => {
    try {
      const newsItems = await getNews(20); // 最新20件を取得
      setNews(newsItems);
    } catch (error) {
      console.error('Failed to load news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('本当に削除しますか？')) return;

    try {
      await deleteNews(id);
      await loadNews();
    } catch (error) {
      console.error('Failed to delete news:', error);
      alert('削除に失敗しました');
    }
  };

  const handleEdit = (item: NewsItemType) => {
    setSelectedNews(item);
    setShowEditor(true);
  };

  const handleSave = async () => {
    setShowEditor(false);
    setSelectedNews(null);
    await loadNews();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (showEditor) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => {
            setShowEditor(false);
            setSelectedNews(null);
          }}
          className="mb-8 text-primary-600 hover:text-primary-700"
        >
          ← 一覧に戻る
        </button>
        <NewsEditor initialData={selectedNews} onSave={handleSave} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">お知らせ管理</h1>
        <button
          onClick={() => setShowEditor(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          新規作成
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {news.map((item) => (
            <li key={item.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-900">{item.title}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => item.id && handleDelete(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}