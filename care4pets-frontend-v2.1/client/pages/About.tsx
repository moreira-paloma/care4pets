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
          <h1 className="text-3xl font-bold mb-4">Sobre Care4Pets</h1>
          <p className="text-muted-foreground mb-6">
            A página sobre nós está em desenvolvimento. Aqui você aprenderá mais sobre nossa missão, equipe e o impacto que estamos fazendo na comunidade de bem-estar animal.
          </p>
          <p className="text-sm text-muted-foreground">
            Continue construindo esta página para compartilhar sua história, missão, valores e as organizações com as quais trabalhamos.
          </p>
        </div>
      </div>
    </Layout>
  );
}
