import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { createNews, updateNews } from '../../lib/supabase';
import type { NewsItemType } from '../../types';

interface NewsEditorProps {
  initialData?: Partial<NewsItemType>;
  onSave?: () => void;
}

export default function NewsEditor({ initialData, onSave }: NewsEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState(initialData?.category || 'お知らせ');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ここで画像アップロード処理を実装
    // Supabaseのストレージを使用する場合の例:
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      // 画像URLを content に挿入
      const imageTag = `\n![${file.name}](${imageUrl})\n`;
      setContent(prev => prev + imageTag);
    } catch (error) {
      console.error('Failed to upload image:', error);
      alert('画像のアップロードに失敗しました');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (initialData?.id) {
        await updateNews(initialData.id, { title, content, category });
      } else {
        await createNews({ title, content, category });
      }
      onSave?.();
    } catch (error) {
      console.error('Failed to save news:', error);
      alert('保存に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          カテゴリー
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="お知らせ">お知らせ</option>
          <option value="イベント">イベント</option>
          <option value="スタッフ">スタッフ</option>
        </select>
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          本文
        </label>
        <div className="mt-1 relative">
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
          <div className="absolute right-2 bottom-2">
            <label className="cursor-pointer inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
              <Upload className="h-4 w-4 mr-2" />
              画像を追加
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Markdown形式で記述できます。画像は「画像を追加」ボタンからアップロードしてください。
        </p>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
        >
          {isSubmitting ? '保存中...' : '保存する'}
        </button>
      </div>
    </form>
  );
}