import { Layout } from "@/components/Layout";
import { useState } from "react";
import { createPet } from "@/services/petService";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    raca: "",
    peso: "",
    caracteristicas: "",
    tutorNome: "",
    tutorTelefone: "",
    tutorEmail: ""
  });

  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    const pet = {
      name: form.nome,
      species: "Dog",
      breed: form.raca,
      age: Number(form.idade),
      weight: Number(form.peso),
      tutor: {
        name: form.tutorNome,
        phone: form.tutorTelefone,
        email: form.tutorEmail
      }
    };

    try {
      await createPet(pet);

      setMensagem("Pet cadastrado com sucesso!");
      setForm({
        nome: "",
        idade: "",
        raca: "",
        peso: "",
        caracteristicas: "",
        tutorNome: "",
        tutorTelefone: "",
        tutorEmail: ""
      });
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao cadastrar o pet.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <div className="w-full max-w-lg bg-orange-100 p-10 rounded-2xl shadow-xl border border-orange-200">
          <h1 className="text-3xl font-bold mb-6 text-center text-primary">
            Cadastro do Animal
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="nome"
              placeholder="Nome do pet"
              value={form.nome}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="number"
              name="idade"
              placeholder="Idade"
              value={form.idade}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              name="raca"
              placeholder="Raça"
              value={form.raca}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="number"
              name="peso"
              placeholder="Peso (kg)"
              value={form.peso}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              name="caracteristicas"
              placeholder="Características do pet"
              value={form.caracteristicas}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows={4}
            />

            <h2 className="text-xl font-semibold mt-6">Tutor</h2>

            <input
              type="text"
              name="tutorNome"
              placeholder="Nome do tutor"
              value={form.tutorNome}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="text"
              name="tutorTelefone"
              placeholder="Telefone do tutor"
              value={form.tutorTelefone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="email"
              name="tutorEmail"
              placeholder="Email do tutor"
              value={form.tutorEmail}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              {loading ? "Cadastrando..." : "Cadastrar Pet"}
            </button>
          </form>

          {mensagem && (
            <p className="text-center mt-4 text-primary font-semibold">
              {mensagem}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
