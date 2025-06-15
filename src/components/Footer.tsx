
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">Tech<span className="text-orange-600">Nexus</span></h3>
              <p className="text-gray-400 text-sm mt-2">
                Seu portal de tecnologia com as últimas notícias, reviews, tutoriais e soluções tech.
              </p>
            </div>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Celulares</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Tutoriais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Soluções</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Inteligência Artificial</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Reportar Bug</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Sugerir Conteúdo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Parcerias</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Receba as melhores notícias de tech no seu email.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <button className="w-full bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded text-sm font-semibold transition-colors">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <p>&copy; 2024 TechNexus. Todos os direitos reservados.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-600 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Mail className="w-4 h-4" />
            <span>contato@technexus.com.br</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
