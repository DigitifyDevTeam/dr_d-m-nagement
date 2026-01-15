import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/80 shadow-lg shadow-primary-500/30 group-hover:shadow-xl group-hover:shadow-primary-500/40 transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                <img
                  src="/logo-doc.png"
                  alt="Docteur Déménagement"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <span className={`font-display font-bold text-2xl ${isScrolled ? 'text-gray-800' : 'text-white'} transition-colors duration-300`}>
                Docteur
              </span>
              <span className={`font-display font-bold text-2xl ${isScrolled ? 'text-primary-600' : 'text-secondary-400'} transition-colors duration-300`}>
                {' '}Déménagement
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 mr-8">
            {['Accueil', 'Services', 'Nos avantages', 'Comment ça marche', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/[àâä]/g, 'a').replace(/[ç]/g, 'c')}`}
                className={`relative font-medium text-base transition-colors duration-300 group py-2 whitespace-nowrap ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0605992510"
              className={`flex items-center gap-2 font-semibold transition-all duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-primary-100' : 'bg-white/20'
              }`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="hidden xl:inline whitespace-nowrap">06 05 99 25 10</span>
            </a>
            <a
              href="#devis"
              className="btn-primary text-sm px-6 py-2.5"
            >
              Devis 
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-gray-100 text-gray-600' : 'bg-white/20 text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
            {['Accueil', 'Services', 'Nos avantages', 'Comment ça marche', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/[àâä]/g, 'a').replace(/[ç]/g, 'c')}`}
                className="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a href="#devis" className="btn-primary w-full text-center block">
                Demander un Devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
