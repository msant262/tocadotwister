import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Toca do Twister</h3>
            <p>Guia completo sobre criação de Ratos Twister no Brasil</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="/basico">O Básico</a></li>
              <li><a href="/habitacao">Habitação</a></li>
              <li><a href="/alimentacao">Alimentação</a></li>
              <li><a href="/enriquecimento">Enriquecimento</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Ferramentas</h4>
            <ul>
              <li><a href="/calculadora">Calculadora de Gaiola</a></li>
              <li><a href="/quiz">Quiz: Você está pronto?</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Toca do Twister. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}

import Container from '../Container/Container'
export default Footer

