import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Download,
  Calendar,
  MessageCircle,
  BarChart3,
  Zap,
  Clock,
  DollarSign,
  Award,
  AlertCircle
} from 'lucide-react';

// Mock data - in a real app, this would come from the diagnostic form
const mockResults = {
  score: 67,
  level: 'Em Evolução',
  company: 'Empresa Exemplo',
  opportunities: [
    {
      title: 'Automação de Backup',
      impact: 'Alto',
      effort: 'Baixo',
      description: 'Implementar rotinas automatizadas de backup com PowerShell',
      roi: '320%',
      timeframe: '2-3 semanas',
      priority: 1
    },
    {
      title: 'Higienização de Dados',
      impact: 'Alto',
      effort: 'Médio',
      description: 'Padronizar e limpar base de dados de clientes',
      roi: '280%',
      timeframe: '3-4 semanas',
      priority: 2
    },
    {
      title: 'Chatbot de Atendimento',
      impact: 'Médio',
      effort: 'Médio',
      description: 'Bot para FAQ e agendamentos via WhatsApp',
      roi: '180%',
      timeframe: '4-6 semanas',
      priority: 3
    }
  ],
  roadmap: {
    phase1: {
      title: 'Primeiros 30 dias',
      items: [
        'Auditoria completa do ambiente atual',
        'Implementação de backup automatizado',
        'Início da higienização de dados'
      ]
    },
    phase2: {
      title: '30-60 dias',
      items: [
        'Finalização da limpeza de dados',
        'Desenvolvimento do chatbot',
        'Testes e validações'
      ]
    },
    phase3: {
      title: '60-90 dias',
      items: [
        'Deploy do chatbot em produção',
        'Treinamento da equipe',
        'Monitoramento e otimizações'
      ]
    }
  },
  metrics: {
    timeReduction: '45%',
    costSaving: 'R$ 15.000/mês',
    errorReduction: '80%',
    efficiency: '35%'
  }
};

const getScoreColor = (score: number) => {
  if (score >= 90) return 'text-green-500';
  if (score >= 70) return 'text-blue-500';
  if (score >= 40) return 'text-yellow-500';
  return 'text-red-500';
};

const getScoreLevel = (score: number) => {
  if (score >= 90) return 'Referência';
  if (score >= 70) return 'Avançado';
  if (score >= 40) return 'Em Evolução';
  return 'Inicial';
};

const getPriorityColor = (priority: number) => {
  if (priority === 1) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
  if (priority === 2) return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
  return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
};

export default function DiagnosticoResultado() {
  const location = useLocation();
  const results = mockResults; // In real app, get from location.state or API

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Diagnóstico', path: '/diagnostico' },
          { label: 'Resultado' }
        ]} />

        {/* Header */}
        <div className="text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Seu Diagnóstico de Automação
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Análise completa do potencial de automação da {results.company}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Score Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-3xl text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-slate-200 dark:text-slate-600"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - results.score / 100)}`}
                    className={getScoreColor(results.score)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-4xl font-bold ${getScoreColor(results.score)}`}>
                    {results.score}
                  </span>
                </div>
              </div>
            </div>

            <h2 className="font-montserrat font-bold text-2xl text-slate-900 dark:text-white mb-2">
              Score de Maturidade Digital
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              Nível: <strong>{getScoreLevel(results.score)}</strong>
            </p>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Sua empresa está no caminho certo! Há oportunidades significativas para aumentar a eficiência através da automação.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center"
            >
              <Clock className="h-8 w-8 text-primary-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {results.metrics.timeReduction}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Redução de Tempo
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center"
            >
              <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {results.metrics.costSaving}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Economia Mensal
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center"
            >
              <CheckCircle className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {results.metrics.errorReduction}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Menos Erros
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center"
            >
              <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {results.metrics.efficiency}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Mais Eficiência
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
              3 Oportunidades Prioritárias
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Iniciativas selecionadas pela matriz impacto × esforço para maximizar seu ROI
            </p>
          </div>

          <div className="space-y-8">
            {results.opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-2xl flex items-center justify-center">
                      <span className="font-bold text-primary-600 dark:text-primary-400">
                        {opportunity.priority}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-2">
                        {opportunity.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(opportunity.priority)}`}>
                          Prioridade {opportunity.priority}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          Impacto: {opportunity.impact} • Esforço: {opportunity.effort}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {opportunity.roi}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      ROI estimado
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {opportunity.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Prazo: {opportunity.timeframe}</span>
                  </div>
                  
                  <button className="text-primary-500 hover:text-primary-600 font-medium flex items-center space-x-2 group">
                    <span>Ver detalhes</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
              Roadmap de 90 Dias
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Plano detalhado para implementar as automações de forma estruturada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl"
            >
              <div className="bg-primary-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-4">
                {results.roadmap.phase1.title}
              </h3>
              <ul className="space-y-2">
                {results.roadmap.phase1.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl"
            >
              <div className="bg-primary-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-4">
                {results.roadmap.phase2.title}
              </h3>
              <ul className="space-y-2">
                {results.roadmap.phase2.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl"
            >
              <div className="bg-primary-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-4">
                {results.roadmap.phase3.title}
              </h3>
              <ul className="space-y-2">
                {results.roadmap.phase3.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Próximos Passos
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Agora que você conhece seu potencial, vamos transformar essas oportunidades em resultados reais
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Download className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Baixar PDF</h3>
                <p className="text-white/80 text-sm mb-4">
                  Relatório completo com todos os detalhes
                </p>
                <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                  Download
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Calendar className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Agendar Reunião</h3>
                <p className="text-white/80 text-sm mb-4">
                  30min para discutir implementação
                </p>
                <a
                  href="https://calendly.com/glr-consultoria/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  Agendar
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <MessageCircle className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Falar Conosco</h3>
                <p className="text-white/80 text-sm mb-4">
                  Tire dúvidas direto no WhatsApp
                </p>
                <a
                  href="https://wa.me/5511999999999?text=Olá! Acabei de fazer o diagnóstico e gostaria de saber mais sobre implementação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <AlertCircle className="h-6 w-6 text-white inline mr-2" />
              <span className="text-white font-medium">
                Este diagnóstico é válido por 90 dias. Recomendamos agendar uma conversa nas próximas 2 semanas para aproveitar as oportunidades identificadas.
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}