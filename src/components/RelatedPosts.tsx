
import NewsCard from "./NewsCard";

const RelatedPosts = () => {
  const relatedPosts = [
    {
      title: "Samsung Galaxy S24: análise completa do novo smartphone",
      excerpt: "Testamos o novo Galaxy S24 por duas semanas. Veja nossa avaliação completa.",
      category: "Reviews",
      readTime: "12 min"
    },
    {
      title: "WhatsApp Business: como usar para impulsionar vendas",
      excerpt: "Guia completo para usar o WhatsApp Business e aumentar suas vendas online.",
      category: "Tutoriais",
      readTime: "8 min"
    },
    {
      title: "Os melhores apps de 2024 para produtividade",
      excerpt: "Nossa seleção dos aplicativos essenciais para ser mais produtivo.",
      category: "Apps",
      readTime: "10 min"
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📖 Leia Também</h3>
      <div className="space-y-6">
        {relatedPosts.map((post, index) => (
          <div key={index}>
            <NewsCard {...post} isCompact />
            {index < relatedPosts.length - 1 && <hr className="mt-6 border-gray-100" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
