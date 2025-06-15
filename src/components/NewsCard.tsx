
import { Clock, TrendingUp } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  isHot?: boolean;
  isCompact?: boolean;
}

const NewsCard = ({ title, excerpt, category, readTime, isHot = false, isCompact = false }: NewsCardProps) => {
  if (isCompact) {
    return (
      <article className="flex space-x-3 group cursor-pointer">
        <div className="w-20 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {title}
          </h4>
          <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
            <span className="text-orange-600 font-medium">{category}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer">
      <div className="relative">
        {/* Image Placeholder */}
        <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 text-xs font-semibold rounded">
          {category}
        </div>

        {/* Hot Badge */}
        {isHot && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>HOT</span>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-2">
        <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <Clock className="w-3 h-3" />
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
