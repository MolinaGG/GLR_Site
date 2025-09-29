import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { 
  Target, 
  Users, 
  Award, 
  Shield, 
  Zap, 
  Heart,
  CheckCircle,
  MessageCircle,
  Calendar,
  Linkedin,
  Mail
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada projeto é medido pelo impacto real no negócio do cliente, não apenas pela entrega técnica.'
  },
  {
    icon: Shield,
    title: 'Transparência Total',
    description: 'Comunicação clara sobre prazos, custos e limitações. Sem surpresas ou promessas irreais.'
  },
  {
    icon: Zap,
    title: 'Agilidade Inteligente',
    description: 'Entregas rápidas sem comprometer qualidade. Priorizamos o que gera mais valor primeiro.'
  },
  {
    icon: Heart,
    title: 'Parceria Verdadeira',
    description: 'Não somos apenas fornecedores, somos parceiros estratégicos no crescimento do seu negócio.'
  }
];

const team = [
  {
    name: 'Guilherme Molina Solano',
    role: 'Founder & CEO',
    bio: 'Especialista em automação e dados, focado em transformar processos manuais em soluções inteligentes para PMEs.',
    expertise: ['Python & ETL', 'Power BI', 'Automação de Processos', 'LGPD'],
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&face=1',
    linkedin: 'https://linkedin.com/in/guilherme-molina-solano',
    email: 'guilhermemolinasolano@gmail.com'
  }
];

const milestones = [
  {
    year: '2023',
    title: 'Fundação da GLR',
    description: 'Início das atividades focadas em automação e consultoria de dados para PMEs'
  },
  {
    year: '2024',
    title: 'Certificação LGPD',
    description: 'Especialização em conformidade e proteção de dados'
  },
  {
    year: '2025',
    title: 'Expansão de Serviços',
    description: 'Ampliação do portfólio com IA, chatbots e integrações avançadas'
  }
];

const certifications = [
  'Microsoft Certified: Azure Solutions Architect',
  'AWS Certified Solutions Architect',
  'Power BI Data Analyst Associate',
  'LGPD Foundation Certificate',
  'Scrum Master Certified'
];

const partnerships = [
  {
    name: 'Microsoft Partner',
    logo: 'https://images.pexels.com/photos/5474298/pexels-photo-5474298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    name: 'AWS Partner',
    logo: 'https://images.pexels.com/photos/11784506/pexels-photo-11784506.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    name: 'Google Cloud Partner',
    logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  }
];

export default function Sobre() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Sobre Nós' }]} />
        
        <Hero
          title="Sobre a GLR Consultoria"
          subtitle="Especialistas em transformar dados bagunçados em decisões inteligentes, com foco em automação, backup e conformidade LGPD"
          primaryCta={{
            text: "Fazer Diagnóstico Gratuito",
            href: "/diagnostico"
          }}
          secondaryCta={{
            text: "Conhecer a Equipe",
            onClick: () => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="py-16"
        />
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Democratizar o acesso a soluções de automação e dados para PMEs e médias empresas, 
                eliminando a complexidade técnica e entregando resultados mensuráveis em semanas, não meses.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Simplicidade</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Transformamos complexidade técnica em soluções simples e eficazes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Resultados Rápidos</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Entregas incrementais com valor desde a primeira semana
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Conformidade</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      LGPD e segurança como pilares fundamentais de cada projeto
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-3xl">
              <h3 className="font-montserrat font-bold text-2xl text-slate-900 dark:text-white mb-6">
                Nossa Visão
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Ser a referência em automação e dados para empresas que buscam crescimento sustentável 
                através da tecnologia, sempre com transparência e resultados comprovados.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">280%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">ROI Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">99.9%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Disponibilidade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Princípios que guiam cada decisão e projeto que desenvolvemos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team-section" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Especialista dedicado a transformar desafios técnicos em oportunidades de crescimento
            </p>
          </div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow max-w-md"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary-500 font-medium mb-6">
                  {member.role}
                </p>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">
                    Especialidades
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary-500 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-slate-400 hover:text-primary-500 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
              Nossa Jornada
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Marcos importantes na evolução da GLR Consultoria
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-6">
                Certificações
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Mantemos nossa equipe sempre atualizada com as principais certificações do mercado
              </p>
              
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary-500" />
                    <span className="text-slate-700 dark:text-slate-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-6">
                Parcerias
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Trabalhamos com as principais plataformas tecnológicas do mercado
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {partnerships.map((partner, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl">
                    <img 
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto"
                    />
                    <span className="font-medium text-slate-900 dark:text-white">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Conheça nossa equipe pessoalmente e descubra como podemos ajudar sua empresa a crescer
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
              href="https://wa.me/5511999999999?text=Olá! Gostaria de conhecer melhor a equipe da GLR Consultoria."
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