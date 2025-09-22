import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Building,
  Target,
  Zap,
  Shield,
  BarChart3,
  MessageCircle,
  Calendar
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: "E-commerce de Moda Premium",
    sector: "Varejo",
    size: "150 funcionários",
    challenge: "Dados de produto espalhados em 5 planilhas diferentes, causando inconsistências no catálogo online e dificultando análises de vendas",
    approach: [
      "Mapeamento completo das fontes de dados",
      "Desenvolvimento de ETL automatizado em Python",
      "Criação de base única normalizada",
      "Implementação de validações automáticas"
    ],
    solution: [
      "Pipeline de dados automatizado",
      "Dashboard Power BI em tempo real",
      "Sistema de alertas para inconsistências",
      "Treinamento da equipe de produto"
    ],
    results: [
      "35% de redução no tempo de cadastro de produtos",
      "90% menos erros no catálogo online",
      "200k+ produtos padronizados em 15 dias",
      "ROI de 280% no primeiro ano"
    ],
    metrics: {
      timeReduction: "35%",
      errorReduction: "90%",
      productsProcessed: "200k+",
      roi: "280%"
    },
    technologies: ["Python", "Power BI", "SQL Server", "Azure"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    testimonial: {
      quote: "A GLR transformou nosso caos de dados em um sistema organizado. Agora conseguimos lançar produtos 3x mais rápido.",
      author: "Marina Silva",
      role: "Gerente de E-commerce"
    }
  },
  {
    id: 2,
    client: "Distribuidora Regional de Alimentos",
    sector: "Distribuição",
    size: "80 funcionários",
    challenge: "Backup manual sem testes de restauração, causando insegurança sobre a integridade dos dados críticos do negócio",
    approach: [
      "Auditoria completa do ambiente atual",
      "Definição de RPO/RTO por sistema",
      "Implementação de rotinas PowerShell",
      "Configuração de armazenamento off-site"
    ],
    solution: [
      "Backup automatizado 24/7",
      "Testes de restauração mensais",
      "Monitoramento proativo",
      "Plano de recuperação de desastres"
    ],
    results: [
      "RTO reduzido de 8h para 30min",
      "99.9% de disponibilidade garantida",
      "100% dos backups testados mensalmente",
      "Redução de 60% nos custos de TI"
    ],
    metrics: {
      rtoReduction: "93%",
      availability: "99.9%",
      backupSuccess: "100%",
      costReduction: "60%"
    },
    technologies: ["Windows Server", "PowerShell", "Veeam", "AWS S3"],
    image: "https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    testimonial: {
      quote: "Dormimos tranquilos sabendo que nossos dados estão seguros. O investimento se pagou no primeiro mês.",
      author: "Carlos Mendes",
      role: "Diretor de TI"
    }
  },
  {
    id: 3,
    client: "Clínica Médica Especializada",
    sector: "Saúde",
    size: "45 funcionários",
    challenge: "Atendimento sobrecarregado com agendamentos manuais, causando filas e insatisfação dos pacientes",
    approach: [
      "Análise do fluxo de atendimento atual",
      "Desenvolvimento de chatbot inteligente",
      "Integração com sistema de agendamento",
      "Treinamento da equipe de recepção"
    ],
    solution: [
      "Chatbot WhatsApp 24/7",
      "Agendamento automático",
      "Lembretes de consulta",
      "Triagem inicial automatizada"
    ],
    results: [
      "65% de consultas agendadas via chatbot",
      "NPS aumentou 22 pontos em 2 meses",
      "40% de redução no tempo de espera",
      "Liberação de 2 funcionários para outras atividades"
    ],
    metrics: {
      automatedBookings: "65%",
      npsIncrease: "+22",
      waitTimeReduction: "40%",
      staffOptimization: "2"
    },
    technologies: ["WhatsApp API", "Node.js", "MySQL", "Dialogflow"],
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    testimonial: {
      quote: "O chatbot revolucionou nosso atendimento. Os pacientes adoram a praticidade e nossa equipe pode focar no que realmente importa.",
      author: "Dra. Ana Costa",
      role: "Diretora Médica"
    }
  },
  {
    id: 4,
    client: "Indústria de Componentes Eletrônicos",
    sector: "Manufatura",
    size: "200 funcionários",
    challenge: "Dashboards desatualizados e relatórios manuais que demoravam dias para serem gerados, atrasando decisões estratégicas",
    approach: [
      "Mapeamento de KPIs críticos",
      "Integração com sistemas ERP/MES",
      "Modelagem de dados em Power BI",
      "Criação de alertas automáticos"
    ],
    solution: [
      "Dashboards executivos em tempo real",
      "Alertas automáticos de desvios",
      "Relatórios self-service",
      "Mobile dashboards para gestores"
    ],
    results: [
      "Decisões 5x mais rápidas",
      "85% de redução no tempo de geração de relatórios",
      "Identificação proativa de 15 gargalos de produção",
      "Aumento de 12% na eficiência operacional"
    ],
    metrics: {
      decisionSpeed: "5x",
      reportingTime: "85%",
      bottlenecksFound: "15",
      efficiencyGain: "12%"
    },
    technologies: ["Power BI", "SQL Server", "SAP", "Azure"],
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    testimonial: {
      quote: "Agora temos visibilidade total da operação. Conseguimos antecipar problemas e otimizar processos em tempo real.",
      author: "Roberto Lima",
      role: "Gerente Industrial"
    }
  }
];

const impactMetrics = [
  {
    icon: TrendingUp,
    value: "280%",
    label: "ROI Médio",
    description: "Retorno sobre investimento no primeiro ano"
  },
  {
    icon: Clock,
    value: "65%",
    label: "Redução de Tempo",
    description: "Em processos manuais automatizados"
  },
  {
    icon: Users,
    value: "500+",
    label: "Funcionários Impactados",
    description: "Across all client implementations"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Disponibilidade",
    description: "Média dos sistemas implementados"
  }
];

export default function Cases() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Cases de Sucesso' }]} />
        
        <Hero
          title="Cases de Sucesso"
          subtitle="Resultados reais que nossos clientes alcançaram com nossas soluções de automação, dados e backup"
          primaryCta={{
            text: "Fazer Diagnóstico Gratuito",
            href: "/diagnostico"
          }}
          secondaryCta={{
            text: "Agendar Conversa",
            href: "https://calendly.com/glr-consultoria/30min",
            external: true
          }}
          className="py-16"
        />
      </div>

      {/* Impact Metrics */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
              Impacto Comprovado
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Métricas consolidadas de todos os projetos implementados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-3xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img 
                    src={study.image}
                    alt={study.client}
                    className="w-full h-64 sm:h-80 object-cover rounded-3xl shadow-lg"
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
                      {study.sector}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">
                      {study.size}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
                    {study.client}
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Desafio
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                        Abordagem
                      </h4>
                      <ul className="space-y-2">
                        {study.approach.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <Target className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                        Solução
                      </h4>
                      <ul className="space-y-2">
                        {study.solution.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <Zap className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-2xl mb-6">
                    <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Resultados Alcançados
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-primary-600 dark:text-primary-400">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-600 dark:text-slate-300 italic mb-3">
                          "{study.testimonial.quote}"
                        </p>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {study.testimonial.author}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {study.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Seu Próximo Case de Sucesso
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Comece com nosso diagnóstico gratuito e descubra como podemos transformar seu negócio
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
              href="https://wa.me/5511999999999?text=Olá! Vi os cases da GLR Consultoria e gostaria de saber como vocês podem ajudar minha empresa."
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