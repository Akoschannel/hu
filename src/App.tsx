import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Youtube, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Equipment from './pages/Equipment';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-red-600 text-white'
          : 'hover:bg-red-100 dark:hover:bg-red-900/50 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400'
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <Youtube className="h-8 w-8 text-red-600" />
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Ákos Channel</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <NavLink to="/">Kezdőlap</NavLink>
                <NavLink to="/gyik">GYIK</NavLink>
                <NavLink to="/felszerelesek">Felszerelések</NavLink>
                <NavLink to="/menetrend">Menetrend</NavLink>
                <NavLink to="/elerhetoseg">Elérhetőség</NavLink>
                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kezdőlap
                </Link>
                <Link
                  to="/gyik"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GYIK
                </Link>
                <Link
                  to="/felszerelesek"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Felszerelések
                </Link>
                <Link
                  to="/menetrend"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menetrend
                </Link>
                <Link
                  to="/elerhetoseg"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Elérhetőség
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gyik" element={<FAQ />} />
            <Route path="/felszerelesek" element={<Equipment />} />
            <Route path="/menetrend" element={<Schedule />} />
            <Route path="/elerhetoseg" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-auto transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <p>© 2024 Ákos Channel. Minden jog fenntartva.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;