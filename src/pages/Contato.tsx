import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Calendar,
  Clock,
  Send,
  CheckCircle,
  Building,
  User,
  MessageSquare
} from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Resposta rápida para dúvidas e agendamentos',
    contact: '(11) 9 9999-9999',
    action: 'Enviar mensagem',
    href: 'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da GLR Consultoria.',
    available: '24/7',
    color: 'green'
  },
  {
    icon: Mail,
    title: 'E-mail',
    description: 'Para propostas detalhadas e documentação',
    contact: 'guilhermemolinasolano@gmail.com',
    action: 'Enviar e-mail',
    href: 'mailto:guilhermemolinasolano@gmail.com',
    available: 'Resposta em até 4h',
    color: 'blue'
  },
  {
    icon: Calendar,
    title: 'Reunião Online',
    description: 'Conversa estratégica de 30 minutos',
    contact: 'Calendly',
    action: 'Agendar reunião',
    href: 'https://calendly.com/glr-consultoria/30min',
    available: 'Seg-Sex 9h-18h',
    color: 'purple'
  },
  {
    icon: Phone,
    title: 'Telefone',
    description: 'Para urgências e suporte técnico',
    contact: '(11) 9 9999-9999',
    action: 'Ligar agora',
    href: 'tel:+5511999999999',
    available: 'Seg-Sex 9h-18h',
    color: 'indigo'
  }
];

const officeInfo = {
  address: 'São Paulo, SP',
  cep: '01000-000',
  neighborhood: 'Centro',
  reference: 'Próximo ao Marco Zero'
};

const businessHours = [
  { day: 'Segunda a Sexta', hours: '09:00 - 18:00' },
  { day: 'Sábado', hours: '09:00 - 12:00' },
  { day: 'Domingo', hours: 'Fechado' }
];

export default function Contato() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contato' }]} />
        
        <Hero
          title="Entre em Contato"
          subtitle="Pronto para transformar seus processos? Escolha a forma de contato que preferir e vamos conversar sobre suas necessidades"
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

      {/* Contact Methods */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
              Como Prefere Falar Conosco?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Oferecemos múltiplos canais para garantir que você nos encontre da forma mais conveniente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl text-center hover:shadow-xl transition-all duration-200 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  method.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  method.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  method.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-indigo-100 dark:bg-indigo-900/30'
                }`}>
                  <method.icon className={`h-8 w-8 ${
                    method.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    method.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    method.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-indigo-600 dark:text-indigo-400'
                  }`} />
                </div>

                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {method.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {method.description}
                </p>

                <div className="mb-4">
                  <div className="font-medium text-slate-900 dark:text-white mb-1">
                    {method.contact}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {method.available}
                  </div>
                </div>

                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-block w-full py-2 px-4 rounded-xl font-medium text-sm transition-colors ${
                    method.color === 'green' ? 'bg-green-500 hover:bg-green-600 text-white' :
                    method.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                    method.color === 'purple' ? 'bg-purple-500 hover:bg-purple-600 text-white' :
                    'bg-indigo-500 hover:bg-indigo-600 text-white'
                  }`}
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg"
            >
              <h2 className="font-montserrat font-bold text-2xl text-slate-900 dark:text-white mb-6">
                Envie sua Mensagem
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Obrigado pelo contato. Responderemos em breve!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Nome *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        E-mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Telefone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="(11) 9 9999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Empresa
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="diagnostico">Diagnóstico Gratuito</option>
                      <option value="dados">Higienização de Dados</option>
                      <option value="backup">Backup de Servidores</option>
                      <option value="chatbots">Chatbots & IA</option>
                      <option value="integracao">Integração de Sistemas</option>
                      <option value="bi">BI & Dashboards</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="Resumo do que precisa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Mensagem *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                        placeholder="Descreva seu projeto ou necessidade..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Info */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-primary-500 mr-2" />
                  Localização
                </h3>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <p>{officeInfo.address}</p>
                  <p>{officeInfo.neighborhood} - {officeInfo.cep}</p>
                  <p className="text-sm">{officeInfo.reference}</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary-500 mr-2" />
                  Horário de Atendimento
                </h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary-500 to-cyan-500 p-6 rounded-3xl text-white">
                <h3 className="font-semibold text-lg mb-4">
                  Precisa de uma Resposta Rápida?
                </h3>
                <p className="mb-6 text-white/90">
                  Para dúvidas urgentes ou agendamentos de última hora, use nosso WhatsApp.
                </p>
                <a
                  href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda urgente da GLR Consultoria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Direto</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}