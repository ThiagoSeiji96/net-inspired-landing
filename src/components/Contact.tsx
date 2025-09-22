import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato e vamos transformar sua ideia em realidade
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Entre em Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground">contato@devsolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Localização</p>
                    <p className="text-muted-foreground">São Paulo - SP, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-card/30 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Resposta Rápida
                </h4>
                <p className="text-muted-foreground mb-4">
                  Respondo todos os contatos em até 24 horas. Vamos discutir seu projeto!
                </p>
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="bg-gradient-primary border-0 text-white h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-3xl font-bold mb-6">
                  Pronto para Começar?
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Consulta inicial gratuita</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Orçamento sem compromisso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Entrega dentro do prazo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Suporte pós-entrega</span>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 font-semibold w-full"
                >
                  Solicitar Orçamento Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;