
import { Clock, Eye, Share2, User, Calendar, Tag } from "lucide-react";

interface PostContentProps {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: string;
  tags: string[];
}

const PostContent = ({ 
  title, 
  excerpt, 
  content, 
  category, 
  author, 
  publishDate, 
  readTime, 
  views, 
  tags 
}: PostContentProps) => {
  return (
    <article className="bg-white rounded-lg shadow-sm">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-500 to-orange-500 rounded-t-lg relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg" />
        <div className="absolute top-4 left-4">
          <span className="bg-orange-600 text-white px-3 py-1 text-sm font-semibold rounded">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>Por <strong>{author}</strong></span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
          <button className="flex items-center space-x-1 hover:text-orange-600 transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Compartilhar</span>
          </button>
        </div>

        {/* Excerpt */}
        <div className="text-lg text-gray-700 mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
          {excerpt}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          {content.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            )
          ))}
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center flex-wrap gap-2">
            <Tag className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500 mr-2">Tags:</span>
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full hover:bg-orange-100 hover:text-orange-700 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostContent;
