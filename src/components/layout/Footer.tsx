import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="h-8 w-8 text-primary-500" />
              <span className="font-montserrat font-bold text-xl text-white">
                GLR Consultoria
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Especialistas em automação, higienização de dados e backup de servidores. 
              Transformamos processos manuais em soluções inteligentes para PMEs e médias empresas.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-500" />
                <a 
                  href="mailto:guilhermemolinasolano@gmail.com" 
                  className="hover:text-primary-400 transition-colors"
                >
                  guilhermemolinasolano@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-500" />
                <a 
                  href="tel:+5511999999999" 
                  className="hover:text-primary-400 transition-colors"
                >
                  (11) 9 9999-9999
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span>São Paulo, SP</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <Shield className="h-4 w-4 text-primary-500" />
              <span>CNPJ: 61.121.266/0001-87</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/servicos" className="hover:text-primary-400 transition-colors">Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-primary-400 transition-colors">Sobre</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-primary-400 transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/servicos#diagnostico" className="hover:text-primary-400 transition-colors">Diagnóstico Gratuito</Link></li>
              <li><Link to="/servicos#dados" className="hover:text-primary-400 transition-colors">Higienização de Dados</Link></li>
              <li><Link to="/servicos#backup" className="hover:text-primary-400 transition-colors">Backup de Servidores</Link></li>
              <li><Link to="/servicos#chatbots" className="hover:text-primary-400 transition-colors">Chatbots & IA</Link></li>
              <li><Link to="/servicos#integracao" className="hover:text-primary-400 transition-colors">Integração de Sistemas</Link></li>
              <li><Link to="/servicos#bi" className="hover:text-primary-400 transition-colors">BI & Dashboards</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre automação e consultoria em TI."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Falar no WhatsApp</span>
            </a>
            
            <a
              href="https://linkedin.com/company/glr-consultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a
              href="https://instagram.com/glr.consultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm mb-1">
              © 2024 GLR Consultoria. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs text-slate-500">
              <Link to="/politica-privacidade" className="hover:text-primary-400 transition-colors">Política de Privacidade</Link>
              <Link to="/termos-uso" className="hover:text-primary-400 transition-colors">Termos de Uso</Link>
              <Link to="/lgpd" className="hover:text-primary-400 transition-colors">LGPD</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}