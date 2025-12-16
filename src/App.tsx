import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Basico from './pages/Basico/Basico'
import Habitacao from './pages/Habitacao/Habitacao'
import Alimentacao from './pages/Alimentacao/Alimentacao'
import Enriquecimento from './pages/Enriquecimento/Enriquecimento'
import BrasilEuropa from './pages/BrasilEuropa/BrasilEuropa'
import Calculadora from './pages/Calculadora/Calculadora'
import Quiz from './pages/Quiz/Quiz'
import ArtigosList from './pages/Artigos/ArtigosList'
import { generateArtigoRoutes } from './pages/Artigos/artigos.routes'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basico" element={<Basico />} />
          <Route path="/habitacao" element={<Habitacao />} />
          <Route path="/alimentacao" element={<Alimentacao />} />
          <Route path="/enriquecimento" element={<Enriquecimento />} />
          <Route path="/brasil-europa" element={<BrasilEuropa />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/artigos" element={<ArtigosList />} />
          {/* Rotas de artigos geradas dinamicamente */}
          {generateArtigoRoutes()}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
