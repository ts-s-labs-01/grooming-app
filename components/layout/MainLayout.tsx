"use client";

import Link from "next/link";
import { useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-primary text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold hover:text-secondary transition-colors">
                GroomingApp
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="hover:bg-accent px-3 py-2 rounded-md transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  href="#features"
                  className="hover:bg-accent px-3 py-2 rounded-md transition-colors"
                >
                  Características
                </Link>
                <Link
                  href="#about"
                  className="hover:bg-accent px-3 py-2 rounded-md transition-colors"
                >
                  Nosotros
                </Link>
                <Link
                  href="#contact"
                  className="hover:bg-accent px-3 py-2 rounded-md transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-accent p-2 rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2 mt-2">
                <Link
                  href="/"
                  className="hover:bg-accent px-3 py-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="#features"
                  className="hover:bg-accent px-3 py-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Características
                </Link>
                <Link
                  href="#about"
                  className="hover:bg-accent px-3 py-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nosotros
                </Link>
                <Link
                  href="#contact"
                  className="hover:bg-accent px-3 py-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">GroomingApp</h3>
              <p className="text-secondary">
                Tu aplicación de grooming favorita para el cuidado personal.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-secondary transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-secondary transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-secondary transition-colors">
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:hello@groomingapp.com" className="hover:text-secondary transition-colors">
                    hello@groomingapp.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <span>+1 234 567 890</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-accent mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} GroomingApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
