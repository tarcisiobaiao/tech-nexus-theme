
import { useState, useEffect } from "react";

interface AdBannerProps {
  type: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile-banner' | 'native';
  className?: string;
}

const AdBanner = ({ type, className = "" }: AdBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const adSizes = {
    'leaderboard': 'w-full h-24 md:h-32',
    'rectangle': 'w-80 h-64',
    'skyscraper': 'w-40 h-96',
    'mobile-banner': 'w-full h-20',
    'native': 'w-full h-auto'
  };

  const adLabels = {
    'leaderboard': 'Publicidade - 728x90',
    'rectangle': 'Anúncio - 300x250',
    'skyscraper': 'Banner - 160x600',
    'mobile-banner': 'Anúncio Mobile - 320x50',
    'native': 'Conteúdo Patrocinado'
  };

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gray-100 border border-gray-200 ${adSizes[type]} ${className} flex items-center justify-center group hover:bg-gray-50 transition-colors`}>
      <div className="text-center p-4">
        <div className="text-xs text-gray-500 mb-2">PUBLICIDADE</div>
        <div className="text-sm text-gray-600 font-medium">{adLabels[type]}</div>
        <div className="text-xs text-gray-400 mt-1">Espaço Google AdSense</div>
      </div>
      
      {/* Close button for testing */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 w-4 h-4 bg-gray-400 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ×
      </button>
    </div>
  );
};

export default AdBanner;
