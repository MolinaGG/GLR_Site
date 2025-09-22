import React from 'react';
import { useConsent } from '../contexts/ConsentContext';
import { X, Shield, Cookie } from 'lucide-react';

export default function ConsentBanner() {
  const { showBanner, acceptConsent, rejectConsent } = useConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Cookie className="h-6 w-6 text-primary-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Consentimento de Cookies
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Utilizamos cookies para melhorar sua experiência, realizar análises e personalizar conteúdo. 
              Ao continuar navegando, você concorda com nossa <a href="/politica-privacidade" className="text-primary-500 underline">Política de Privacidade</a>.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={acceptConsent}
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Aceitar todos
              </button>
              <button
                onClick={rejectConsent}
                className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Apenas essenciais
              </button>
              <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                <Shield className="h-4 w-4 mr-1" />
                LGPD Compliance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}