import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2D2D2D] mb-6">
            Transforma tu look con{" "}
            <span className="text-[#FF6B35]">Gromming App</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            La herramienta definitiva para profesionales del grooming.
            Gestiona clientes, citas y servicios en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FF6B35] hover:bg-[#E85D04] text-white text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Descargar App
            </button>
            <button className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white text-lg px-8 py-4 rounded-full font-semibold transition-all">
              Ver Demo
            </button>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F7C59F] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-16">
            ¿Por qué elegir <span className="text-[#FF6B35]">Gromming App</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-[#FFF8F0] border border-[#F7C59F] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Gestión de Citas</h3>
              <p className="text-gray-600">
                Agenda y organiza las citas de tus clientes de manera automática.
                Recordatorios incluidos.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-[#FFF8F0] border border-[#F7C59F] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Cartera de Clientes</h3>
              <p className="text-gray-600">
                Mantén un registro completo de tus clientes con historial,
                preferencias y notas personalizadas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-[#FFF8F0] border border-[#F7C59F] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Estadísticas</h3>
              <p className="text-gray-600">
                Visualiza el rendimiento de tu negocio con gráficos
                y métricas en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-8">
            Sobre <span className="text-[#FF6B35]">Gromming App</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Gromming App fue creada para simplificar la vida de los profesionales
            del grooming y barbería. Sabemos que tu tiempo es valioso y que
            gestionar un negocio requiere herramientas eficientes.
            <br /><br />
            Nuestra misión es ayudarte a enfocarte en lo que mejor sabes hacer:
            dejar a tus clientes impecables.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FF6B35] to-[#E85D04]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Únete a miles de profesionales que ya usan Gromming App
          </p>
          <button className="bg-white text-[#FF6B35] text-lg px-10 py-4 rounded-full font-bold hover:bg-[#FFF8F0] transition-all transform hover:scale-105 shadow-lg">
            Empezar Gratis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#2D2D2D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-[#FF6B35] text-xl font-bold mb-4">Gromming App</h3>
              <p className="text-gray-400 text-sm">
                La mejor herramienta para profesionales del grooming.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-[#FF6B35]">Características</a></li>
                <li><a href="#" className="hover:text-[#FF6B35]">Precios</a></li>
                <li><a href="#" className="hover:text-[#FF6B35]">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-[#FF6B35]">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-[#FF6B35]">Blog</a></li>
                <li><a href="#" className="hover:text-[#FF6B35]">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-[#FF6B35]">Términos</a></li>
                <li><a href="#" className="hover:text-[#FF6B35]">Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            © 2026 Gromming App. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
