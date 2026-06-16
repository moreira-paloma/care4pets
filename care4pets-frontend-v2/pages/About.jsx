import { Layout } from "@/components/Layout";
import { Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Sobre o Care4Pets</h1>

          <p className="text-muted-foreground mb-6">
            O Care4Pets nasceu com a ideia de facilitar o cuidado diário com os animais.
            Aqui você organiza informações importantes, acompanha a saúde do seu pet
            e encontra ferramentas que tornam o dia a dia mais simples.
          </p>

          <p className="text-muted-foreground text-sm">
            Este projeto está em evolução. Em breve, esta página contará com mais detalhes
            sobre a missão, valores e o propósito por trás da plataforma.
          </p>
        </div>
      </div>
    </Layout>
  );
}
