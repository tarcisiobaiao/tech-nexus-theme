
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostContent from "@/components/PostContent";
import RelatedPosts from "@/components/RelatedPosts";
import AdBanner from "@/components/AdBanner";
import Sidebar from "@/components/Sidebar";

const SinglePost = () => {
  // In WordPress, this data would come from get_post() and related functions
  const postData = {
    title: "iPhone 16 Pro Max: Review completo do novo flagship da Apple",
    excerpt: "Após duas semanas de testes intensivos, analisamos todos os aspectos do novo iPhone 16 Pro Max. Câmeras aprimoradas, performance excepcional e bateria que dura o dia todo são apenas algumas das novidades que testamos.",
    content: `O iPhone 16 Pro Max representa mais um marco na evolução dos smartphones premium da Apple. Com melhorias significativas em praticamente todos os aspectos, desde o design até a performance, este dispositivo promete redefinir o que esperamos de um smartphone em 2024.

**Design e Construção**

A Apple manteve a linguagem de design premium que conhecemos, mas trouxe refinamentos importantes. O acabamento em titânio confere não apenas elegância, mas também maior resistência. A nova coloração Titânio Natural é simplesmente deslumbrante, refletindo a luz de forma única.

**Performance e Velocidade**

O chip A18 Pro é uma verdadeira revolução. Nos nossos testes de benchmark, os resultados foram impressionantes. Aplicativos abrem instantaneamente, multitarefas é fluida e mesmo os jogos mais pesados rodam sem qualquer engasgo.

**Sistema de Câmeras**

Aqui temos uma das maiores evoluções. O novo sistema de câmeras tríplice oferece qualidade de imagem profissional. O modo noturno foi completamente reformulado, produzindo imagens nítidas mesmo em condições de baixa luminosidade.

**Bateria e Carregamento**

A autonomia melhorou significativamente. Em nossos testes de uso intenso, o dispositivo durou facilmente um dia inteiro, chegando ao final com cerca de 20% de bateria restante.

**Conclusão**

O iPhone 16 Pro Max é, sem dúvida, um dos melhores smartphones já criados. Embora o preço seja elevado, a qualidade e inovação justificam o investimento para quem busca o que há de melhor em tecnologia móvel.`,
    category: "Reviews",
    author: "João Silva",
    publishDate: "15 de junho de 2024",
    readTime: "15 min",
    views: "12.5k",
    tags: ["iPhone", "Apple", "Smartphone", "Review", "Tecnologia", "Mobile"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Top Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner type="leaderboard" />
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-600">
              <a href="/" className="hover:text-orange-600">Início</a>
              <span className="mx-2">›</span>
              <a href="#" className="hover:text-orange-600">{postData.category}</a>
              <span className="mx-2">›</span>
              <span className="text-gray-900">{postData.title}</span>
            </nav>

            {/* Post Content */}
            <PostContent {...postData} />

            {/* Mid-content Ad */}
            <AdBanner type="leaderboard" />

            {/* Related Posts */}
            <RelatedPosts />

            {/* Comments Section Placeholder */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💬 Comentários</h3>
              <p className="text-gray-600">
                Sistema de comentários será integrado com WordPress. 
                <br />
                <strong>WordPress:</strong> comments_template() ou sistema customizado.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SinglePost;
