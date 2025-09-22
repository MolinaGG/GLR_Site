import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Clock,
  Shield,
  BarChart3,
  MessageCircle,
  Calendar
} from 'lucide-react';

export default function Diagnostico() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Diagnóstico Gratuito' }]} />
        
        <Hero
          title="Diagnóstico de Automação Gratuito"
          subtitle="Descubra o potencial de automação da sua empresa em 15 minutos. Receba um score de Maturidade Digital e um roadmap personalizado de 90 dias."
          primaryCta={{
            text: "Iniciar Diagnóstico",
            onClick: () => document.getElementById('diagnostico-form')?.scrollIntoView({ behavior: 'smooth' })
          }}
          secondaryCta={{
            text: "Falar com Especialista",
            href: "https://wa.me/5511999999999?text=Olá! Gostaria de fazer o diagnóstico com ajuda de um especialista.",
            external: true
          }}
          className="py-16"
        />
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
              O que Você Vai Receber
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Um diagnóstico completo e personalizado para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                Score de Maturidade
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Pontuação de 0-100 baseada no seu nível atual de automação
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                3 Oportunidades
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Iniciativas priorizadas por impacto × esforço
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                Roadmap 90 Dias
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Plano detalhado com cronograma e próximos passos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                ROI Estimado
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Projeção de retorno sobre investimento
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnostic Form Preview */}
      <section id="diagnostico-form" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              O diagnóstico é dividido em 9 etapas simples e objetivas
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Clock className="h-4 w-4" />
                <span>15 minutos</span>
              </div>
              <h3 className="font-semibold text-2xl text-slate-900 dark:text-white mb-4">
                Questionário de Maturidade Digital
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Responda algumas perguntas sobre sua empresa e receba insights personalizados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-slate-100 dark:bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-slate-600 dark:text-slate-300">1-3</span>
                </div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">Perfil da Empresa</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Informações básicas e objetivos</p>
              </div>
              
              <div className="text-center">
                <div className="bg-slate-100 dark:bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-slate-600 dark:text-slate-300">4-6</span>
                </div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">Ambiente Atual</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sistemas, dados e processos</p>
              </div>
              
              <div className="text-center">
                <div className="bg-slate-100 dark:bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-slate-600 dark:text-slate-300">7-9</span>
                </div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">Necessidades</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Segurança, prazos e orçamento</p>
              </div>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-2xl mb-8">
              <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-3">
                Garantias do Diagnóstico:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                  <span className="text-primary-600 dark:text-primary-400">100% gratuito e sem compromisso</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                  <span className="text-primary-600 dark:text-primary-400">Dados protegidos conforme LGPD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                  <span className="text-primary-600 dark:text-primary-400">Resultado imediato por e-mail</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                  <span className="text-primary-600 dark:text-primary-400">Possibilidade de reunião de follow-up</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Mais de <strong>500 empresas</strong> já fizeram o diagnóstico e descobriram oportunidades de automação
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors hover:shadow-lg flex items-center justify-center space-x-2">
                  <span>Iniciar Diagnóstico Agora</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <a
                  href="https://calendly.com/glr-consultoria/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 border-2 border-slate-300 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-400 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Agendar Reunião</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-slate-900 dark:text-white pr-4">
                  O diagnóstico é realmente gratuito?
                </span>
                <ArrowRight className="h-5 w-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-slate-600 dark:text-slate-300">
                  Sim, 100% gratuito e sem compromisso. É nossa forma de conhecer seu ambiente e propor soluções personalizadas. Não há pegadinhas ou custos ocultos.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-slate-900 dark:text-white pr-4">
                  Quanto tempo leva para receber o resultado?
                </span>
                <ArrowRight className="h-5 w-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-slate-600 dark:text-slate-300">
                  O resultado é gerado automaticamente após completar o questionário. Você recebe por e-mail em até 5 minutos, com seu score e roadmap personalizado.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-slate-900 dark:text-white pr-4">
                  Meus dados ficam seguros?
                </span>
                <ArrowRight className="h-5 w-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-slate-600 dark:text-slate-300">
                  Absolutamente. Seguimos rigorosamente a LGPD e não compartilhamos seus dados com terceiros. Usamos apenas para gerar seu diagnóstico e eventual contato de follow-up.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-slate-900 dark:text-white pr-4">
                  Preciso ter conhecimento técnico?
                </span>
                <ArrowRight className="h-5 w-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-slate-600 dark:text-slate-300">
                  Não! O questionário foi desenvolvido para gestores e decisores, com linguagem simples e objetiva. Se tiver dúvidas, pode falar conosco no WhatsApp.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-slate-900 dark:text-white pr-4">
                  E se eu quiser implementar as sugestões?
                </span>
                <ArrowRight className="h-5 w-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-slate-600 dark:text-slate-300">
                  Ótimo! Após o diagnóstico, você pode agendar uma reunião gratuita para discutir implementação. Mas não há obrigação - o diagnóstico é seu, independente de contratar nossos serviços.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Descubra Seu Potencial de Automação
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            15 minutos que podem transformar a eficiência da sua empresa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="bg-white hover:bg-slate-50 text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors hover:shadow-lg">
              Fazer Diagnóstico Agora
            </button>
            
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer o diagnóstico de automação com ajuda de um especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Ajuda de Especialista</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}