import { Layout } from "@/components/Layout";
import {
  Heart,
  Activity,
  Syringe,
  AlertCircle,
  Users,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block bg-orange-100 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                🐾 Cuide dos seus pets com amor
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-green-600 bg-clip-text text-transparent">
                  Saúde e Proteção para Seus Pets
                </span>
                <br />
                Em um único lugar
              </h1>

              <p className="text-xl text-foreground/80 max-w-lg">
                Acompanhe a saúde, nutrição e vacinas do seu pet. Denuncie maus-tratos e ajude a proteger animais vulneráveis em sua comunidade.
              </p>

              <div className="pt-4">
                <button className="btn-primary group">
                  Cadastre aqui o seu animal
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5112629/pexels-photo-5112629.jpeg"
                alt="Filhote de Golden Retriever lindo no parque"
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Tudo que seu pet precisa
            </h2>
            <p className="text-xl text-foreground/70">
              Ferramentas completas para donos que amam seus pets
            </p>
          </div>

          {/* Feature 1 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/6235650/pexels-photo-6235650.jpeg"
                  alt="Veterinária examinando cão"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block bg-orange-100 text-primary px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  <Heart className="w-4 h-4 inline mr-2" fill="currentColor" />
                  Acompanhamento de Saúde
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Saúde do seu pet ao seu alcance
                </h3>
                <p className="text-foreground/70 text-lg">
                  Registre histórico médico, vacinações e métricas de saúde.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                    <span className="text-foreground">Registros médicos completos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                    <span className="text-foreground">Agenda de vacinações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                    <span className="text-foreground">Lembretes automáticos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <div className="inline-block bg-green-100 text-secondary px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  <Activity className="w-4 h-4 inline mr-2" />
                  Rotina & Nutrição
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Mantenha seu pet saudável e feliz
                </h3>
                <p className="text-foreground/70 text-lg">
                  Registre alimentação, exercícios e atividades diárias.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
                    <span className="text-foreground">Horários de alimentação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
                    <span className="text-foreground">Registro de exercícios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
                    <span className="text-foreground">Acompanhamento de peso</span>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src="https://images.pexels.com/photos/8434676/pexels-photo-8434676.jpeg"
                  alt="Cachorro comendo"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/9667765/pexels-photo-9667765.jpeg"
                  alt="Cachorro correndo"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="space-y-4">
                <div className="inline-block bg-yellow-100 text-accent px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  <Activity className="w-4 h-4 inline mr-2" />
                  Atividades & Exercícios
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Pets ativos são pets felizes
                </h3>
                <p className="text-foreground/70 text-lg">
                  Acompanhe passeios, brincadeiras e exercícios.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">Monitoramento de atividades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">Sugestões de exercícios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">Histórico de diversão</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  <AlertCircle className="w-4 h-4 inline mr-2" />
                  Proteger Animais
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Denuncie e ajude a salvar animais
                </h3>
                <p className="text-foreground/70 text-lg">
                  Envie denúncias com fotos, localização e detalhes.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mt-1" />
                    <span className="text-foreground">Denúncia anônima segura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mt-1" />
                    <span className="text-foreground">Compartilhamento com ONGs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mt-1" />
                    <span className="text-foreground">Acompanhamento de casos</span>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src="https://images.pexels.com/photos/2813385/pexels-photo-2813385.jpeg"
                  alt="Cachorro brincando"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Use Care4Pets Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Por que usar Care4Pets?
            </h2>
            <p className="text-xl text-foreground/70">
              Feito por pessoas que amam animais para pessoas que amam animais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Cuidado Genuíno</h3>
              <p className="text-foreground/70">
                Desenvolvido com veterinários, donos e ONGs reais para entender necessidades reais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Comunidade Unida</h3>
              <p className="text-foreground/70">
                Conecte-se com pessoas que amam pets e fazem a diferença.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-yellow-100">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Segurança</h3>
              <p className="text-foreground/70">
                Seus dados e informações dos pets são tratados com responsabilidade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Syringe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Organização da Saúde</h3>
              <p className="text-foreground/70">
                Facilita o acompanhamento de vacinas, consultas e cuidados essenciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-r from-orange-600 via-orange-500 to-green-600">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cadastre o seu Pet
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Organize a saúde, rotina e bem-estar do seu animal de forma simples.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg bg-white text-primary font-bold hover:shadow-2xl hover:scale-105 transition-all">
                Cadastrar aqui
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
