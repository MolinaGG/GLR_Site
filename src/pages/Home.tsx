import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import { 
  Database, 
  Shield, 
  Bot, 
  BarChart3, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Clock,
  Award,
  Target,
  MessageCircle,
  Calendar,
  Star,
  ChevronDown
} from 'lucide-react';

const trustedCompanies = [
  { name: "Microsoft", logo: "https://images.pexels.com/photos/5474298/pexels-photo-5474298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
  { name: "AWS", logo: "https://images.pexels.com/photos/11784506/pexels-photo-11784506.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
  { name: "Google", logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
  { name: "Meta", logo: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" }
];

const services = [
  {
    icon: Database,
    title: "Higienização & Integração de Dados",
    description: "Transforme dados bagunçados em insights confiáveis",
    benefits: [
      "Redução de 90% em duplicatas",
      "Padronização automática de formatos",
      "Integração com Power BI em tempo real"
    ],
    link: "/servicos#dados"
  },
  {
    icon: Shield,
    title: "Backup & Rotinas de Servidor",
    description: "Proteção completa com recuperação garantida",
    benefits: [
      "RPO/RTO personalizado para seu negócio",
      "Automação com PowerShell",
      "Testes de restauração mensais"
    ],
    link: "/servicos#backup"
  },
  {
    icon: Bot,
    title: "Chatbots & Automação IA",
    description: "Atendimento 24/7 que realmente resolve",
    benefits: [
      "Redução de 60% no tempo de resposta",
      "Integração com CRM/ERP existente",
      "Supervisão humana quando necessário"
    ],
    link: "/servicos#chatbots"
  },
  {
    icon: BarChart3,
    title: "BI & Dashboards Executivos",
    description: "Decisões baseadas em dados em tempo real",
    benefits: [
      "Dashboards Power BI personalizados",
      "KPIs automáticos do seu negócio",
      "Treinamento da equipe incluído"
    ],
    link: "/servicos#bi"
  }
];

const caseStudies = [
  {
    client: "E-commerce de Moda",
    sector: "Varejo",
    challenge: "Dados de produto espalhados em 5 planilhas diferentes",
    result: "35% de redução no tempo de cadastro de produtos",
    metrics: "200k+ produtos padronizados em 15 dias",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
  },
  {
    client: "Distribuidora Regional",
    sector: "Distribuição",
    challenge: "Backup manual sem testes de restauração",
    result: "RTO reduzido de 8h para 30min",
    metrics: "99.9% de disponibilidade garantida",
    image: "https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
  },
  {
    client: "Clínica Médica",
    sector: "Saúde",
    challenge: "Atendimento sobrecarregado com agendamentos",
    result: "65% de consultas agendadas via chatbot",
    metrics: "NPS aumentou 22 pontos em 2 meses",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Descoberta",
    description: "Diagnóstico gratuito do ambiente atual e identificação de oportunidades",
    duration: "1-2 semanas"
  },
  {
    step: "02", 
    title: "Blueprint",
    description: "Roadmap detalhado com priorização por impacto × esforço",
    duration: "1 semana"
  },
  {
    step: "03",
    title: "Implementação",
    description: "Execução em ciclos semanais com entregas incrementais",
    duration: "2-8 semanas"
  },
  {
    step: "04",
    title: "Sustentação",
    description: "Documentação, treinamento e suporte contínuo",
    duration: "Ongoing"
  }
];

const differentials = [
  {
    icon: Shield,
    title: "LGPD-first",
    description: "Contratos, bases legais e minimização de dados desde o início"
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Ciclos semanais com valor entregue em 14-30 dias"
  },
  {
    icon: Award,
    title: "Documentação Completa",
    description: "Playbooks, treinamento e handover estruturado"
  },
  {
    icon: Users,
    title: "Suporte Humano",
    description: "Time especializado com SLAs definidos"
  }
];

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Diretor de TI",
    company: "TechCorp",
    content: "O diagnóstico da GLR identificou gargalos que nem sabíamos que existiam. Em 30 dias já víamos resultados concretos.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&face=1"
  },
  {
    name: "Maria Santos",
    role: "Gerente de Operações", 
    company: "LogiFlow",
    content: "A automação dos backups nos deu paz de espírito. Sabemos que nossos dados estão seguros com testes mensais.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&face=1"
  },
  {
    name: "Roberto Lima",
    role: "CEO",
    company: "MedCenter",
    content: "O chatbot revolucionou nosso atendimento. 70% dos agendamentos agora são automáticos, liberando nossa equipe para o que importa.",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&face=1"
  }
];

const faqItems = [
  {
    question: "Quanto tempo para ver os primeiros resultados?",
    answer: "Primeiras entregas aparecem em 2-4 semanas, dependendo do escopo. Nosso processo é incremental para gerar valor rapidamente."
  },
  {
    question: "Preciso trocar meus sistemas atuais?",
    answer: "Não necessariamente. Trabalhamos com integração via API, webhooks ou ETL, aproveitando ao máximo seu investimento atual."
  },
  {
    question: "Vocês oferecem suporte após a implementação?",
    answer: "Sim, oferecemos suporte contínuo com SLAs definidos, horas de evolução e manutenção proativa dos sistemas."
  },
  {
    question: "Como vocês garantem conformidade com a LGPD?",
    answer: "Mapeamos dados pessoais, definimos bases legais, implementamos controles de acesso e criamos processos de governança desde o início."
  },
  {
    question: "O diagnóstico é realmente gratuito?",
    answer: "Sim, 100% gratuito e sem compromisso. É nossa forma de conhecer seu ambiente e propor soluções personalizadas."
  },
  {
    question: "Qual o investimento típico para automação?",
    answer: "Varia conforme escopo, mas temos soluções desde R$ 15k. O ROI médio é de 300% no primeiro ano com redução de custos operacionais."
  },
  {
    question: "Vocês trabalham com empresas de que tamanho?",
    answer: "Focamos em PMEs e médias empresas (50-500 funcionários) que buscam escalabilidade e eficiência operacional."
  },
  {
    question: "Como funciona o processo de implementação?",
    answer: "Ciclos semanais com entregas incrementais. Você acompanha o progresso e pode sugerir ajustes a qualquer momento."
  }
];

export default function Home() {
  const scrollToDiagnostico = () => {
    const element = document.getElementById('diagnostico-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Automatize, reduza custos e acelere decisões baseadas em dados"
        subtitle="Diagnóstico guiado + execução ponta a ponta em dados, backup de servidores e automações com chatbot/IA."
        primaryCta={{
          text: "Fazer Diagnóstico Gratuito",
          onClick: scrollToDiagnostico
        }}
        secondaryCta={{
          text: "Falar no WhatsApp",
          href: "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre automação e consultoria em TI.",
          external: true
        }}
      />

      {/* Trusted Companies */}
      <section className="py-12 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8 font-medium">
            Trabalhamos com tecnologias líderes de mercado
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section id="diagnostico-section" className="py-20 bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Diagnóstico de Automação
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Descubra o potencial de automação da sua empresa em 15 minutos. 
              Receba um score de Maturidade Digital e um roadmap personalizado de 90 dias.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-4">
                  O que você vai receber:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-300">
                      Score de Maturidade Digital (0-100 pontos)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-300">
                      3 oportunidades priorizadas por impacto × esforço
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-300">
                      Roadmap de 90 dias com iniciativas práticas
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-300">
                      Estimativa de ROI e redução de custos
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">15min</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Tempo médio</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Gratuito</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
                <Target className="h-16 w-16 text-primary-500 mx-auto mb-6" />
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-4">
                  Pronto para descobrir seu potencial?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Questionário simples e objetivo. Sem pegadinhas, sem compromisso.
                </p>
                <Link 
                  to="/diagnostico"
                  className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <span>Iniciar Diagnóstico</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Soluções completas para transformar dados bagunçados em decisões inteligentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl hover:shadow-xl transition-all duration-200 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-2xl mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                    <service.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary-500" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={service.link}
                  className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 font-medium group-hover:translate-x-2 transition-transform"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Resultados reais que nossos clientes alcançaram com nossas soluções
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={study.image}
                  alt={study.client}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                      {study.sector}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                    {study.client}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    <strong>Desafio:</strong> {study.challenge}
                  </p>
                  
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-primary-500" />
                      <span className="font-semibold text-primary-700 dark:text-primary-300">
                        {study.result}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 text-sm">
                      {study.metrics}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/cases"
              className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
            >
              <span>Ver Todos os Cases</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Nosso Processo em 4 Etapas
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Metodologia comprovada para entregar valor rapidamente e com segurança
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-primary-200 dark:bg-primary-800 z-0" />
                )}
                
                <div className="relative z-10 bg-primary-500 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-montserrat font-bold text-xl">{step.step}</span>
                </div>
                
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                  {step.description}
                </p>
                
                <div className="flex items-center justify-center space-x-1 text-primary-500">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{step.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Por que Escolher a GLR?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Diferenciais que garantem o sucesso do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-3xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <diff.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              O que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Comece com nosso diagnóstico gratuito ou agende uma conversa para discutir suas necessidades específicas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link 
              to="/diagnostico"
              className="bg-white hover:bg-slate-50 text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors hover:shadow-lg"
            >
              Fazer Diagnóstico Gratuito
            </Link>
            
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
              href="https://wa.me/5511999999999?text=Olá! Vi o site da GLR Consultoria e gostaria de saber mais sobre automação e consultoria em TI."
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