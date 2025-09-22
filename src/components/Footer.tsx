const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">&lt;/&gt;</span>
            </div>
            <span className="text-foreground font-semibold text-lg">DevSolutions</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 DevSolutions. Desenvolvendo o futuro, um código por vez.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;