'use client';

import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-mono font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          TS
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
