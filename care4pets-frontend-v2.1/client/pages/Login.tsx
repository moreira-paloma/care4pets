import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, startSession, getUser } from "@/services/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (loginUser(email, senha)) {
      const user = getUser();
      startSession(user);
      navigate("/dashboard");
    } else {
      setErro("Email ou senha incorretos");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Entrar</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full p-3 border rounded-lg"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          {erro && <p className="text-red-600 text-sm">{erro}</p>}

          <button className="w-full py-2 bg-primary text-white rounded-lg font-semibold">
            Entrar
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Não tem conta?{" "}
          <a href="/register" className="text-primary font-semibold">
            Criar conta
          </a>
        </p>
      </div>
    </div>
  );
}
