import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Care4Pets
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
            Início
          </Link>
          <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
            Dashboard
          </Link>
          <Link to="/report" className="text-foreground hover:text-primary transition-colors font-medium">
            Denunciar
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
            Sobre
          </Link>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block px-6 py-2 rounded-lg text-primary font-semibold border-2 border-primary hover:bg-primary/10 transition-colors">
            Entrar
          </button>
          <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Começar
          </button>
        </div>
      </nav>
    </header>
  );
}
