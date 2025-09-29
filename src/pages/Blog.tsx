import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Database,
  Shield,
  Bot,
  BarChart3,
  Zap,
  MessageCircle
} from 'lucide-react';

const categories = [
  { name: 'Todos', slug: 'all', icon: Zap },
  { name: 'Dados', slug: 'dados', icon: Database },
  { name: 'Backup', slug: 'backup', icon: Shield },
  { name: 'Automação', slug: 'automacao', icon: Bot },
  { name: 'BI & Analytics', slug: 'bi', icon: BarChart3 }
];

const blogPosts = [
  {
    id: 1,
    title: 'Como Escolher a Estratégia de Backup Ideal para PMEs',
    slug: 'estrategia-backup-pmes',
    excerpt: 'Guia completo para implementar uma estratégia de backup eficiente e econômica para pequenas e médias empresas.',
    content: 'Uma estratégia de backup bem planejada é fundamental para a continuidade dos negócios...',
    category: 'backup',
    author: 'Guilherme Molina',
    publishedAt: '2024-12-15',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/5474298/pexels-photo-5474298.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    tags: ['Backup', 'Disaster Recovery', 'Windows Server', 'PowerShell']
  },
  {
    id: 2,
    title: '5 Sinais de que Seus Dados Precisam de Limpeza Urgente',
    slug: 'sinais-dados-precisam-limpeza',
    excerpt: 'Identifique os principais indicadores de que sua empresa precisa investir em higienização de dados.',
    content: 'Dados desorganizados podem custar caro para qualquer empresa. Veja os sinais de alerta...',
    category: 'dados',
    author: 'Guilherme Molina',
    publishedAt: '2024-12-10',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    tags: ['Data Quality', 'Excel', 'Produtividade', 'Gestão']
  },
  {
    id: 3,
    title: 'Automação de Processos: Por Onde Começar?',
    slug: 'automacao-processos-como-comecar',
    excerpt: 'Guia prático para identificar os primeiros processos a serem automatizados na sua empresa.',
    content: 'A automação pode transformar a eficiência da sua empresa, mas é importante começar pelos processos certos...',
    category: 'automacao',
    author: 'Guilherme Molina',
    publishedAt: '2024-12-05',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    tags: ['Automação', 'Processos', 'Eficiência', 'ROI']
  },
  {
    id: 4,
    title: 'Power BI vs Excel: Quando Fazer a Migração?',
    slug: 'power-bi-vs-excel-migracao',
    excerpt: 'Entenda quando vale a pena migrar do Excel para o Power BI e como fazer essa transição.',
    content: 'O Excel é uma ferramenta poderosa, mas tem suas limitações. Saiba quando é hora de evoluir...',
    category: 'bi',
    author: 'Guilherme Molina',
    publishedAt: '2024-11-28',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    tags: ['Power BI', 'Excel', 'BI', 'Dashboards']
  },
  {
    id: 5,
    title: 'LGPD na Prática: Checklist para Pequenas Empresas',
    slug: 'lgpd-checklist-pequenas-empresas',
    excerpt: 'Lista prática de ações para adequar sua empresa à LGPD sem complicações.',
    content: 'A LGPD pode parecer complexa, mas com um checklist bem estruturado fica mais simples...',
    category: 'dados',
    author: 'Guilherme Molina',
    publishedAt: '2024-11-20',
    readTime: '12 min',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    tags: ['LGPD', 'Compliance', 'Proteção de Dados', 'Governança']
  }
];

const featuredPost = blogPosts[0];
const recentPosts = blogPosts.slice(1);

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? recentPosts 
    : recentPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        
        <Hero
          title="Blog GLR Consultoria"
          subtitle="Insights práticos sobre automação, dados, backup e IA aplicada para PMEs e médias empresas"
          primaryCta={{
            text: "Fazer Diagnóstico Gratuito",
            href: "/diagnostico"
          }}
          secondaryCta={{
            text: "Assinar Newsletter",
            href: "mailto:guilhermemolinasolano@gmail.com?subject=Quero assinar a newsletter"
          }}
          className="py-16"
        />
      </div>

      {/* Featured Post */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">
              Post em Destaque
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Nosso conteúdo mais recente e relevante
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img 
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 sm:h-80 object-cover rounded-3xl shadow-lg"
              />
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-2 rounded-full text-sm font-medium capitalize">
                  {featuredPost.category}
                </span>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(featuredPost.publishedAt)}
                </div>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>

              <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
                {featuredPost.title}
              </h3>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">
                      {featuredPost.author}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Especialista GLR
                    </div>
                  </div>
                </div>

                <button className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 font-medium group">
                  <span>Ler mais</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {featuredPost.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-slate-50 dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-2xl font-medium transition-colors ${
                  selectedCategory === category.slug
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {post.author}
                      </span>
                    </div>

                    <button className="text-primary-500 hover:text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Ler mais →
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                Nenhum post encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-6">
            Não Perca Nenhum Insight
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Receba conteúdos exclusivos sobre automação, dados e tecnologia diretamente no seu e-mail
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="mailto:guilhermemolinasolano@gmail.com?subject=Quero assinar a newsletter da GLR Consultoria"
              className="bg-white hover:bg-slate-50 text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors hover:shadow-lg"
            >
              Assinar Newsletter
            </a>
            
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de receber conteúdos sobre automação e dados da GLR Consultoria."
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