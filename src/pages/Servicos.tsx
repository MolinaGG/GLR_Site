import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { 
  Database, 
  Shield, 
  Bot, 
  BarChart3, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Target,
  Settings,
  FileText,
  MessageCircle,
  Calendar
} from 'lucide-react';

const services = [
  {
    id: 'diagnostico',
    icon: Target,
    title: 'Diagnóstico & Roadmap',
    description: 'Análise completa do ambiente atual e plano estratégico de 90 dias',
    features: [
      'Blueprint de automação personalizado',
      'Matriz impacto × esforço para priorização',
      'Roadmap detalhado com cronograma',
      'Score de Maturidade Digital (0-100)',
      'Identificação de quick wins'
    ],
    benefits: [
      'Visão clara das oportunidades',
      'Priorização baseada em dados',
      'ROI estimado por iniciativa'
    ],
    deliverables: [
      'Relatório executivo (PDF)',
      'Apresentação técnica',
      'Planilha de priorização'
    ]
  },
  {
    id: 'dados',
    icon: Database,
    title: 'Higienização & Integração de Dados',
    description: 'Transforme dados bagunçados em insights confiáveis e dashboards em tempo real',
    features: [
      'Limpeza e padronização (Excel/CSV/PDF)',
      'OCR para documentos digitalizados',
      'Deduplicação inteligente',
      'Normalização de formatos',
      'ETL/ELT com Python',
      'APIs de integração',
      'Camadas de dados para Power BI'
    ],
    benefits: [
      'Redução de 90% em duplicatas',
      'Padronização automática',
      'Dashboards confiáveis em tempo real'
    ],
    deliverables: [
      'Pipeline de dados automatizado',
      'Documentação técnica',
      'Treinamento da equipe'
    ]
  },
  {
    id: 'backup',
    icon: Shield,
    title: 'Backup & Rotinas de Servidor',
    description: 'Proteção completa com recuperação garantida e RPO/RTO alinhados ao negócio',
    features: [
      'Rotinas em Windows Server (PowerShell)',
      'Orquestração de backups automatizada',
      'Políticas de retenção personalizadas',
      'RPO/RTO definidos por criticidade',
      'Armazenamento off-site seguro',
      'Ferramentas comerciais licenciadas',
      'Testes de restauração mensais'
    ],
    benefits: [
      'RPO/RTO personalizado',
      'Automação com PowerShell',
      'Testes mensais garantidos'
    ],
    deliverables: [
      'Scripts de backup automatizados',
      'Plano de recuperação de desastres',
      'Relatórios de monitoramento'
    ]
  },
  {
    id: 'chatbots',
    icon: Bot,
    title: 'Chatbots & Automação IA',
    description: 'Atendimento 24/7 que realmente resolve, com integração completa ao seu stack',
    features: [
      'Bots para WhatsApp/Telegram/Web',
      'Roteamento inteligente',
      'NLP e processamento de linguagem',
      'Integrações CRM/ERP nativas',
      'Agentes de dados especializados',
      'Geração de respostas contextuais',
      'Supervisão humana quando necessário'
    ],
    benefits: [
      'Redução de 60% no tempo de resposta',
      'Integração com sistemas existentes',
      'Escalabilidade 24/7'
    ],
    deliverables: [
      'Chatbot configurado e treinado',
      'Integrações com sistemas',
      'Dashboard de métricas'
    ]
  },
  {
    id: 'integracao',
    icon: Settings,
    title: 'Integrações de Sistemas',
    description: 'Conecte seus sistemas e elimine trabalho manual entre plataformas',
    features: [
      'Conectores ERP/CRM/e-commerce',
      'APIs REST e webhooks',
      'Fluxos Zapier/Make avançados',
      'Sincronização em tempo real',
      'Tratamento de erros robusto',
      'Logs e monitoramento'
    ],
    benefits: [
      'Eliminação de retrabalho',
      'Dados sincronizados',
      'Processos automatizados'
    ],
    deliverables: [
      'Integrações funcionais',
      'Documentação de APIs',
      'Monitoramento ativo'
    ]
  },
  {
    id: 'bi',
    icon: BarChart3,
    title: 'BI & Dashboards Executivos',
    description: 'Decisões baseadas em dados com dashboards Power BI personalizados',
    features: [
      'Dashboards Power BI customizados',
      'Modelagem de dados (DAX)',
      'KPIs automáticos do negócio',
      'Governança de dados',
      'Treinamento completo da equipe',
      'Indicadores operacionais e executivos',
      'Alertas automáticos'
    ],
    benefits: [
      'Dashboards personalizados',
      'KPIs automáticos',
      'Equipe treinada'
    ],
    deliverables: [
      'Dashboards Power BI',
      'Documentação de KPIs',
      'Treinamento certificado'
    ]
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Descoberta',
    description: 'Diagnóstico gratuito do ambiente atual e identificação de oportunidades',
    duration: '1-2 semanas',
    activities: [
      'Mapeamento de sistemas atuais',
      'Identificação de dores e gargalos',
      'Análise de dados e processos',
      'Entrevistas com stakeholders'
    ]
  },
  {
    step: '02',
    title: 'Blueprint',
    description: 'Roadmap detalhado com priorização por impacto × esforço',
    duration: '1 semana',
    activities: [
      'Matriz de priorização',
      'Arquitetura da solução',
      'Cronograma detalhado',
      'Estimativas de ROI'
    ]
  },
  {
    step: '03',
    title: 'Implementação',
    description: 'Execução em ciclos semanais com entregas incrementais',
    duration: '2-8 semanas',
    activities: [
      'Desenvolvimento iterativo',
      'Testes contínuos',
      'Validação com usuários',
      'Ajustes baseados em feedback'
    ]
  },
  {
    step: '04',
    title: 'Sustentação',
    description: 'Documentação, treinamento e suporte contínuo',
    duration: 'Ongoing',
    activities: [
      'Documentação completa',
      'Treinamento da equipe',
      'Suporte técnico',
      'Monitoramento proativo'
    ]
  }
];

export default function Servicos() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Serviços' }]} />
        
        <Hero
          title="Nossos Serviços"
          subtitle="Soluções completas para automatizar processos, higienizar dados e acelerar decisões baseadas em informações confiáveis"
          primaryCta={{
            text: "Fazer Diagnóstico Gratuito",
            href: "/diagnostico"
          }}
          secondaryCta={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da GLR Consultoria.",
            external: true
          }}
          className="py-16"
        />
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-2xl mr-4">
                      <service.icon className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                        Principais Benefícios
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                        Entregáveis
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start space-x-2">
                            <FileText className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {deliverable}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                        Tecnologias
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <Zap className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-4">
                    Recursos Inclusos
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Nosso Processo em 4 Etapas
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Metodologia comprovada para entregar valor rapidamente e com segurança
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-montserrat font-bold text-lg">{step.step}</span>
                </div>
                
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {step.description}
                </p>
                
                <div className="text-primary-500 text-sm font-medium mb-4">
                  {step.duration}
                </div>

                <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  {step.activities.map((activity, activityIndex) => (
                    <li key={activityIndex}>• {activity}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Faça um diagnóstico gratuito ou agende uma conversa para discutir suas necessidades específicas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="/diagnostico"
              className="bg-white hover:bg-slate-50 text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors hover:shadow-lg"
            >
              Fazer Diagnóstico Gratuito
            </a>
            
            <a
              href="https://calendly.com/glr-consultoria/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors"
            >
              <Calendar className="h-5 w-5" />
              <span>Agendar Conversa</span>
            </a>
            
            <a
              href="https://wa.me/5511999999999?text=Olá! Vi a página de serviços da GLR Consultoria e gostaria de saber mais sobre automação e consultoria em TI."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}