import React from 'react';

interface HeroSlideProps {
  imageUrl: string;
  mobileImageUrl: string;
  alt: string;
  caption: string;
  isActive: boolean;
}

export default function HeroSlide({ imageUrl, mobileImageUrl, alt, caption, isActive }: HeroSlideProps) {
  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* レスポンシブ対応の画像表示 */}
        <picture>
          {/* デスクトップ用の大きな画像 */}
          <source
            media="(min-width: 768px)"
            srcSet={imageUrl}
          />
          {/* モバイル用の最適化された画像 */}
          <source
            media="(max-width: 767px)"
            srcSet={mobileImageUrl}
          />
          {/* フォールバック用のメイン画像 */}
          <img
            src={imageUrl}
            alt={alt}
            className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out ${
              isActive ? 'scale-110' : 'scale-100'
            }`}
            loading="eager"
          />
        </picture>
        {/* オーバーレイグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        
        {/* キャプションエリア */}
        <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 md:left-24 max-w-[280px] sm:max-w-sm md:max-w-xl">
          <p className="text-base sm:text-lg md:text-xl text-white font-medium tracking-wider opacity-90">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}