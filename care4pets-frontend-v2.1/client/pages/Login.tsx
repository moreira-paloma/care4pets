export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Entrar</h1>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-border bg-background"
              placeholder="seuemail@email.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Senha</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-border bg-background"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
