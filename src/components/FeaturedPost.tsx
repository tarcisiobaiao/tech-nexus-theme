
import { Clock, Eye, Share2 } from "lucide-react";

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  views: string;
  imageUrl?: string;
  isLarge?: boolean;
}

const FeaturedPost = ({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  views, 
  imageUrl, 
  isLarge = false 
}: FeaturedPostProps) => {
  return (
    <article className={`group cursor-pointer ${isLarge ? 'md:col-span-2' : ''}`}>
      <div className="relative overflow-hidden rounded-lg">
        {/* Image */}
        <div className={`bg-gradient-to-br from-blue-500 to-orange-500 ${isLarge ? 'h-64 md:h-80' : 'h-48'} flex items-center justify-center`}>
          <div className="text-white text-center p-4">
            <div className="text-sm opacity-90 mb-2">{category}</div>
            <div className={`font-bold ${isLarge ? 'text-xl md:text-2xl' : 'text-lg'} leading-tight`}>
              {title}
            </div>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 text-xs font-semibold rounded">
          {category}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className={`font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors ${isLarge ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{views}</span>
          </div>
          <button className="flex items-center space-x-1 hover:text-orange-600 transition-colors">
            <Share2 className="w-3 h-3" />
            <span>Compartilhar</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
