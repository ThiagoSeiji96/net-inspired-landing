import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Cloud, Cog } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas e responsivas com React, Angular, .NET Core e outras tecnologias de ponta."
  },
  {
    icon: Smartphone,
    title: "Aplicações Mobile",
    description: "Apps nativos e híbridos para iOS e Android usando React Native e Xamarin."
  },
  {
    icon: Database,
    title: "APIs e Backend",
    description: "Desenvolvimento de APIs RESTful e GraphQL com .NET, Node.js e bancos de dados robustos."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Deploy e hospedagem em Azure, AWS e Google Cloud com arquitetura escalável."
  },
  {
    icon: Globe,
    title: "E-commerce",
    description: "Lojas virtuais completas com integração de pagamentos e gestão de produtos."
  },
  {
    icon: Cog,
    title: "Consultoria Tech",
    description: "Análise de requisitos, arquitetura de software e modernização de sistemas legados."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para suas necessidades de desenvolvimento de software
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 animate-slide-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;