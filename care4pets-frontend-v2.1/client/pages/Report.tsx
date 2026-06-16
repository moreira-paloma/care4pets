import { Layout } from "@/components/Layout";
import { AlertCircle } from "lucide-react";

export default function Report() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-md mx-auto">

          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Denunciar Maus-Tratos Animal</h1>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Esta área do Care4Pets está em desenvolvimento. Meu objetivo é criar um espaço seguro onde seja possível
            registrar denúncias de maus-tratos com fotos, localização e detalhes importantes para ajudar animais em situação de risco.
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            No momento, ainda estou estudando como implementar esse recurso da melhor forma e buscando parcerias com ONGs,
            protetores independentes e instituições de bem-estar animal para garantir que cada denúncia seja encaminhada
            para quem realmente pode ajudar.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Em breve, esta página contará com orientações completas, contatos verificados e um sistema seguro para envio de denúncias.
            Obrigada por acompanhar o desenvolvimento e por se importar com a proteção dos animais.
          </p>

        </div>
      </div>
    </Layout>
  );
}
