
import AdBanner from "./AdBanner";
import NewsCard from "./NewsCard";
import Newsletter from "./Newsletter";
import { TrendingUp, Clock, Star } from "lucide-react";

const Sidebar = () => {
  const trendingPosts = [
    { 
      title: "iPhone 16 Pro: Primeiras impressões e comparativo", 
      excerpt: "Análise detalhada das principais novidades do novo iPhone.",
      category: "Celulares", 
      readTime: "8 min" 
    },
    { 
      title: "WhatsApp libera nova função de editar mensagens", 
      excerpt: "Recurso permite alterar textos enviados em até 15 minutos.",
      category: "Apps", 
      readTime: "3 min" 
    },
    { 
      title: "Como acelerar seu Android em 5 passos", 
      excerpt: "Dicas práticas para melhorar a performance do seu smartphone.",
      category: "Tutoriais", 
      readTime: "6 min" 
    },
    { 
      title: "ChatGPT vs Gemini: qual IA é melhor?", 
      excerpt: "Comparativo completo entre os principais assistentes de IA.",
      category: "IA", 
      readTime: "12 min" 
    },
  ];

  const recentPosts = [
    { 
      title: "Samsung Galaxy S24: vale a pena o upgrade?", 
      excerpt: "Review completo do novo flagship da Samsung.",
      category: "Reviews", 
      readTime: "10 min" 
    },
    { 
      title: "Apps que consomem menos bateria do celular", 
      excerpt: "Lista com aplicativos otimizados para economia de energia.",
      category: "Apps", 
      readTime: "5 min" 
    },
    { 
      title: "Como fazer backup completo do WhatsApp", 
      excerpt: "Tutorial passo a passo para proteger suas conversas.",
      category: "Tutoriais", 
      readTime: "4 min" 
    },
  ];

  return (
    <aside className="space-y-8">
      {/* Top Banner Ad */}
      <AdBanner type="rectangle" />

      {/* Newsletter */}
      <Newsletter />

      {/* Trending Posts */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="w-5 h-5 text-red-600" />
          <h3 className="font-bold text-gray-900">Em Alta</h3>
        </div>
        <div className="space-y-6">
          {trendingPosts.map((post, index) => (
            <div key={index}>
              <NewsCard {...post} isCompact />
              {index < trendingPosts.length - 1 && <hr className="mt-6 border-gray-100" />}
            </div>
          ))}
        </div>
      </div>

      {/* Native Ad */}
      <AdBanner type="native" />

      {/* Recent Posts */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Clock className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-gray-900">Recentes</h3>
        </div>
        <div className="space-y-6">
          {recentPosts.map((post, index) => (
            <div key={index}>
              <NewsCard {...post} isCompact />
              {index < recentPosts.length - 1 && <hr className="mt-6 border-gray-100" />}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <AdBanner type="rectangle" />
    </aside>
  );
};

export default Sidebar;
