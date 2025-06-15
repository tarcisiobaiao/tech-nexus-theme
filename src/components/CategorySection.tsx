
import NewsCard from "./NewsCard";

interface CategorySectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const CategorySection = ({ title, subtitle, children }: CategorySectionProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>}
        </div>
        <a href="#" className="text-orange-600 hover:text-orange-700 text-sm font-semibold transition-colors">
          Ver mais →
        </a>
      </div>
      {children}
    </section>
  );
};

export default CategorySection;
