import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, MessageCircle, Calendar, BarChart3 } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/blog', label: 'Blog' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary-500" />
            <span className="font-montserrat font-bold text-xl text-slate-900 dark:text-white">
              GLR Consultoria
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-500'
                    : 'text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTAs */}
            <div className="flex items-center space-x-4 ml-8">
              <Link
                to="/diagnostico"
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Diagnóstico
              </Link>
              
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre automação e consultoria em TI."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
              
              <a
                href="https://calendly.com/glr-consultoria/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Agendar</span>
              </a>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-primary-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-slate-700 dark:text-slate-300 hover:text-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2">
                <Link
                  to="/diagnostico"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Fazer Diagnóstico
                </Link>
                
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre automação e consultoria em TI."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}