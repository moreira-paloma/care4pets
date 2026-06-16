import { Layout } from "@/components/Layout";
import { Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Dashboard em Breve</h1>
          <p className="text-muted-foreground mb-6">
            Com o recurso de Dashboard você poderá acompanhar a saúde dos seus pets, gerenciar registros e visualizar análises.
          </p>
          <p className="text-sm text-muted-foreground">
            Continue construindo esta página no app para mostrar acompanhamento de saúde dos pets, registros de vacinação, horários de alimentação e muito mais.
          </p>
        </div>
      </div>
    </Layout>
  );
}
