import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">&lt;/&gt;</span>
            </div>
            <span className="text-white font-semibold text-xl">DevSolutions</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a>
          </nav>
          
          <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium px-6">
            Vamos Conversar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;