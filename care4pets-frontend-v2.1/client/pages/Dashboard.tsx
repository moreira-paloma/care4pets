import { useState } from "react";
import { Layout } from "@/components/Layout";

export default function Dashboard() {
  const [alimentacao, setAlimentacao] = useState(false);
  const [passeio, setPasseio] = useState(false);
  const [vacina, setVacina] = useState(false);
  const [obs, setObs] = useState("");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-10 text-primary">
          Acompanhamento Diário
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-orange-100 p-6 rounded-xl shadow border border-orange-200">
            <h2 className="text-xl font-semibold mb-4">Alimentação</h2>
            <p className="mb-4">Horário da comida: 08:00 / 18:00</p>
            <button
              onClick={() => setAlimentacao(!alimentacao)}
              className={`w-full py-2 rounded-lg text-white font-semibold ${
                alimentacao ? "bg-green-600" : "bg-primary"
              }`}
            >
              {alimentacao ? "Marcado como feito" : "Marcar como feito"}
            </button>
          </div>

          <div className="bg-orange-100 p-6 rounded-xl shadow border border-orange-200">
            <h2 className="text-xl font-semibold mb-4">Passeio</h2>
            <p className="mb-4">Passeio recomendado: 30 minutos</p>
            <button
              onClick={() => setPasseio(!passeio)}
              className={`w-full py-2 rounded-lg text-white font-semibold ${
                passeio ? "bg-green-600" : "bg-primary"
              }`}
            >
              {passeio ? "Marcado como feito" : "Marcar como feito"}
            </button>
          </div>

          <div className="bg-orange-100 p-6 rounded-xl shadow border border-orange-200">
            <h2 className="text-xl font-semibold mb-4">Vacinas</h2>
            <p className="mb-4">Próxima vacina: 20/07/2026</p>
            <button
              onClick={() => setVacina(!vacina)}
              className={`w-full py-2 rounded-lg text-white font-semibold ${
                vacina ? "bg-green-600" : "bg-primary"
              }`}
            >
              {vacina ? "Marcado como atualizado" : "Marcar como atualizado"}
            </button>
          </div>

          <div className="bg-orange-100 p-6 rounded-xl shadow border border-orange-200">
            <h2 className="text-xl font-semibold mb-4">Observações</h2>
            <textarea
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              className="w-full p-3 border rounded-lg"
              rows={4}
              placeholder="Escreva algo sobre o dia do pet..."
            />
          </div>

        </div>
      </div>
    </Layout>
  );
}
