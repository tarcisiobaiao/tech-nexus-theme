
import { Mail, Gift } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-6 text-white">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Gift className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">📱 Newsletter Tech Exclusiva</h3>
          <p className="text-sm opacity-90 mb-4">
            Receba as últimas novidades em tecnologia, apps e tutoriais direto no seu email. 
            <strong> + Bônus: Guia gratuito com 50 apps essenciais!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-2 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Quero Receber! 🚀
            </button>
          </div>
          
          <p className="text-xs opacity-75 mt-2">
            ✓ Sem spam ✓ Cancele quando quiser ✓ Mais de 50.000 leitores
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
