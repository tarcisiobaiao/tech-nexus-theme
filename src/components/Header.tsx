import { Search, Menu, Bell, User } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="text-xs text-gray-600">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-4 h-4 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
            <User className="w-4 h-4 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img alt="TechSOS by JSay Designs" src="/lovable-uploads/c657ba31-d482-4503-8dd0-7ae7511b4d86.png" className="h-2 md:h-20 w-auto" />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input type="text" placeholder="Buscar tecnologia, apps, tutoriais..." className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" />
              <Search className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block pb-4 md:pb-6`}>
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 text-sm font-medium">
            <li><a href="/" className="text-orange-600 border-b-2 border-orange-600 pb-3 block">Início</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors pb-3 block">Celulares</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors pb-3 block">Apps</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors pb-3 block">Tutoriais</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors pb-3 block">Reviews</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors pb-3 block">Soluções</a></li>
          </ul>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input type="text" placeholder="Buscar..." className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" />
            <Search className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>;
};
export default Header;