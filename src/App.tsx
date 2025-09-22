import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ConsentProvider } from './contexts/ConsentContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ConsentBanner from './components/ConsentBanner';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Cases from './pages/Cases';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Diagnostico from './pages/Diagnostico';
import DiagnosticoResultado from './pages/DiagnosticoResultado';

function App() {
  return (
    <ThemeProvider>
      <ConsentProvider>
        <Router>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/diagnostico" element={<Diagnostico />} />
                <Route path="/diagnostico/resultado" element={<DiagnosticoResultado />} />
              </Routes>
            </main>
            <Footer />
            <ConsentBanner />
          </div>
        </Router>
      </ConsentProvider>
    </ThemeProvider>
  );
}

export default App;