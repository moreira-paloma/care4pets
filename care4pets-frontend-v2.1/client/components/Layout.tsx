import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <img
              src="/images/logo-care4pets.png"
              alt="Care4Pets Logo"
              className="w-18 h-28 object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-lg text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Início
            </Link>

            <Link
              to="/report"
              className="text-lg text-foreground hover:text-primary transition-colors font-medium"
            >
              Denunciar
            </Link>

            <Link
              to="/about"
              className="text-lg text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Sobre
            </Link>

            <Link
              to="/dashboard"
              className="text-lg text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Pet Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden md:block px-6 py-2 rounded-lg text-primary font-semibold border-2 border-primary hover:bg-primary/10 transition-colors"
            >
              Entrar
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 w-full">{children}</main>

      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <img
                  src="/images/logo-care4pets.png"
                  alt="Care4Pets Logo"
                  className="w-25 h-25 object-contain"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                Cuidando de animais de estimação, um registro por vez.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Produto</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Pet Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex justify-center">
            <p className="text-muted-foreground text-sm">
              © 2026 Care4Pets. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
