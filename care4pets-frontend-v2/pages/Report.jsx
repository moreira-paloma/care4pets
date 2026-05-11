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
          <p className="text-muted-foreground mb-6">
            O recurso de denúncia está em desenvolvimento. Aqui você poderá enviar denúncias de maus-tratos com evidências fotográficas, detalhes de localização e descrições para ajudar a proteger animais vulneráveis.
          </p>
          <p className="text-sm text-muted-foreground">
            Continue construindo esta página para criar um sistema seguro de denúncias que se conecta com organizações locais de bem-estar animal e ONGs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
