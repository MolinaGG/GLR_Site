import React from 'react';
import { motion } from 'framer-motion';

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href?: string;
    onClick?: () => void;
    external?: boolean;
  };
  secondaryCta?: {
    text: string;
    href?: string;
    onClick?: () => void;
    external?: boolean;
  };
  backgroundImage?: string;
  className?: string;
};

export default function Hero({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta, 
  backgroundImage,
  className = "" 
}: HeroProps) {
  const renderCta = (cta: NonNullable<HeroProps['primaryCta']>, isPrimary = true) => {
    const baseClass = isPrimary 
      ? "bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
      : "border-2 border-slate-300 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-400 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-lg";

    if (cta.onClick) {
      return (
        <button onClick={cta.onClick} className={baseClass}>
          {cta.text}
        </button>
      );
    }

    if (cta.external) {
      return (
        <a href={cta.href} target="_blank" rel="noopener noreferrer" className={baseClass}>
          {cta.text}
        </a>
      );
    }

    return (
      <a href={cta.href} className={baseClass}>
        {cta.text}
      </a>
    );
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-primary-50/50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {backgroundImage && (
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full opacity-20 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 dark:bg-cyan-900 rounded-full opacity-20 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {renderCta(primaryCta, true)}
            {secondaryCta && renderCta(secondaryCta, false)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}