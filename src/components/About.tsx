import { Badge } from "@/components/ui/badge";

const technologies = [
  ".NET Core", "C#", "React", "TypeScript", "Node.js", "Angular", 
  "SQL Server", "Azure", "AWS", "Docker", "Git", "Xamarin"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou uma desenvolvedora de software apaixonada por tecnologia, especializada 
                em criar soluções digitais inovadoras e eficientes. Com mais de 5 anos de 
                experiência no mercado, já desenvolvi projetos para empresas de diversos segmentos.
              </p>
              <p>
                Minha expertise está focada no ecossistema Microsoft (.NET) e tecnologias 
                web modernas, sempre mantendo o foco na qualidade, performance e 
                experiência do usuário.
              </p>
              <p>
                Acredito que a tecnologia deve simplificar processos e gerar valor real 
                para os negócios. Por isso, trabalho de forma colaborativa para entender 
                profundamente as necessidades de cada cliente.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Tecnologias & Ferramentas
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-gradient-primary text-white font-medium px-4 py-2 hover:opacity-80 transition-opacity"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Backend (.NET/C#)</span>
                  <span className="text-primary font-semibold">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Frontend (React/Angular)</span>
                  <span className="text-primary font-semibold">90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Database & Cloud</span>
                  <span className="text-primary font-semibold">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;