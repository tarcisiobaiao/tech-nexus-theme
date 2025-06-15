
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";
import FeaturedPost from "@/components/FeaturedPost";
import NewsCard from "@/components/NewsCard";
import CategorySection from "@/components/CategorySection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  // Featured Posts Data - In WordPress, this will come from get_posts() with meta_query for featured
  const featuredPosts = [
    {
      title: "iPhone 16 Pro Max: Review completo do novo flagship da Apple",
      excerpt: "Testamos o novo iPhone 16 Pro Max por uma semana. Veja se vale a pena o investimento e compare com a concorrência Android.",
      category: "Reviews",
      readTime: "15 min",
      views: "12.5k",
      isLarge: true
    },
    {
      title: "WhatsApp Web ganha função de chamadas em grupo",
      excerpt: "Nova atualização permite videochamadas direto do navegador com até 8 pessoas simultaneamente.",
      category: "Apps",
      readTime: "5 min",
      views: "8.2k"
    },
    {
      title: "Como acelerar seu PC em 10 passos simples",
      excerpt: "Tutorial completo para otimizar a performance do seu computador sem gastar nada.",
      category: "Tutoriais",
      readTime: "12 min",
      views: "15.3k"
    }
  ];

  // Category Posts Data - In WordPress, this will come from get_posts() with category queries
  const cellphoneNews = [
    {
      title: "Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max: batalha dos titãs",
      excerpt: "Comparamos os dois smartphones mais potentes do mercado em câmeras, performance e bateria.",
      category: "Celulares",
      readTime: "18 min",
      isHot: true
    },
    {
      title: "Xiaomi 14 chega ao Brasil por R$ 3.999",
      excerpt: "Novo flagship da marca chinesa promete performance premium com preço mais acessível.",
      category: "Lançamentos",
      readTime: "6 min"
    },
    {
      title: "Os 5 celulares com melhor custo-benefício de 2024",
      excerpt: "Nossa seleção dos smartphones que oferecem o melhor desempenho pelo preço.",
      category: "Guias",
      readTime: "10 min"
    }
  ];

  const appNews = [
    {
      title: "Instagram testa nova função de edição de fotos com IA",
      excerpt: "Recurso usa inteligência artificial para melhorar automaticamente suas imagens.",
      category: "Apps",
      readTime: "4 min"
    },
    {
      title: "TikTok vs YouTube Shorts: qual plataforma paga mais?",
      excerpt: "Análise completa da monetização para criadores de conteúdo em 2024.",
      category: "Criadores",
      readTime: "8 min"
    },
    {
      title: "Netflix libera jogos gratuitos para assinantes",
      excerpt: "Catálogo inclui títulos populares como Oxenfree e Grand Theft Auto: The Trilogy.",
      category: "Streaming",
      readTime: "5 min",
      isHot: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* WordPress Template: header.php */}
      <Header />
      
      {/* Top Leaderboard Ad - WordPress: get_option('adsense_header') */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner type="leaderboard" />
      </div>

      {/* Main Content Area - WordPress Template: index.php */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content - WordPress: Primary Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Featured Stories Section - WordPress: Featured Posts Query */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <FeaturedPost key={index} {...post} />
                ))}
              </div>
            </section>

            {/* Mid-content Ad - WordPress: get_option('adsense_content') */}
            <div className="my-12">
              <AdBanner type="leaderboard" />
            </div>

            {/* Celulares Section - WordPress: Category Query (Celulares) */}
            <CategorySection 
              title="📱 Celulares & Smartphones" 
              subtitle="Últimas novidades, reviews e comparativos"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cellphoneNews.map((post, index) => (
                  <NewsCard key={index} {...post} />
                ))}
              </div>
            </CategorySection>

            {/* Apps Section - WordPress: Category Query (Apps) */}
            <CategorySection 
              title="📲 Apps & Plataformas" 
              subtitle="Novidades, updates e dicas dos seus apps favoritos"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {appNews.map((post, index) => (
                  <NewsCard key={index} {...post} />
                ))}
              </div>
            </CategorySection>

            {/* Bottom Ad - WordPress: get_option('adsense_footer') */}
            <div className="mt-12">
              <AdBanner type="leaderboard" />
            </div>
          </div>

          {/* Sidebar - WordPress Template: sidebar.php */}
          <Sidebar />
        </div>
      </main>

      {/* WordPress Template: footer.php */}
      <Footer />
    </div>
  );
};

export default Index;
