import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import logoRato from '../../img/logoRato.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoRato} alt="Toca do Twister" className="footer-logo-img" />
              <h3>Toca do Twister</h3>
            </Link>
            <p>Guia completo sobre criação de Ratos Twister no Brasil. Informações baseadas em evidências científicas e melhores práticas internacionais.</p>
          </div>
          <div className="footer-section">
            <h4>Guias</h4>
            <ul>
              <li><Link to="/basico">O Básico</Link></li>
              <li><Link to="/habitacao">Habitação</Link></li>
              <li><Link to="/alimentacao">Alimentação</Link></li>
              <li><Link to="/enriquecimento">Enriquecimento</Link></li>
              <li><Link to="/brasil-europa">Brasil vs. Europa</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Ferramentas</h4>
            <ul>
              <li><Link to="/calculadora">Calculadora de Gaiola</Link></li>
              <li><Link to="/quiz">Quiz: Você está pronto?</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Artigos</h4>
            <ul>
              <li><Link to="/artigos">Todos os Artigos</Link></li>
              <li><Link to="/artigos/cheira-mal">Rato Twister cheira mal?</Link></li>
              <li><Link to="/artigos/nao-ter-apenas-um">Por que não ter apenas um?</Link></li>
              <li><Link to="/artigos/alimentos-toxicos">Alimentos tóxicos</Link></li>
              <li><Link to="/artigos/custo-brasil">Custos no Brasil</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Toca do Twister. Todos os direitos reservados.</p>
          <p className="footer-disclaimer">Informações baseadas em evidências científicas e melhores práticas de bem-estar animal.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

