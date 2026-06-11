import { Layout } from "@/components/Layout";
import { Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
        
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Heart className="w-10 h-10 text-white" fill="white" />
        </div>

        <h1 className="text-4xl font-bold mb-8 text-primary">Sobre o Care4Pets</h1>

        <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-left">
          <p>
            O Care4Pets nasceu do meu amor pelos animais e da vontade de criar algo que realmente fizesse sentido.
            Este projeto faz parte da minha jornada como estudante, mas também é um reflexo do que eu acredito:
            que a tecnologia pode cuidar, aproximar e transformar.
          </p>

          <p>
            Cada detalhe desta plataforma foi construído com paciência, estudo e dedicação.
            Entre códigos, testes e ajustes, percebi que não estava apenas entregando um trabalho para a universidade.
            Estava dando vida a uma ideia que sempre carreguei comigo: facilitar o cuidado com quem não sabe pedir ajuda, mas sente tudo.
          </p>

          <p>
            Meu objetivo é criar um espaço simples, acolhedor e útil para tutores que querem acompanhar a saúde e o bem-estar dos seus pets.
            Ainda estou construindo, aprendendo e melhorando, mas cada etapa me aproxima de algo maior do que uma nota ou um projeto acadêmico.
            Me aproxima de um propósito.
          </p>

          <p>
            Em breve, quero compartilhar mais sobre essa jornada, sobre o que me inspira e sobre o impacto que espero gerar na comunidade de bem-estar animal.
            O Care4Pets continua evoluindo, assim como eu.
          </p>
        </div>
      </div>
    </Layout>
  );
}
