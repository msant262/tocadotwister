import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Stats from '../../components/Stats/Stats'
import './Home.css'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      anime({
        targets: heroRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutExpo',
      })
    }
  }, [])

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.feature-card')
      anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [50, 0],
        delay: (_el, i) => i * 100,
        duration: 600,
        easing: 'easeOutExpo',
      })
    }
  }, [])

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">Bem-vindo à Toca do Twister</h1>
            <p className="hero-subtitle">
              Seu guia completo sobre criação de Ratos Twister no Brasil
            </p>
            <div className="hero-buttons">
              <Button as={Link} to="/basico" size="lg" className="hero-btn-primary">
                Começar Agora
              </Button>
              <Link to="/quiz" className="hero-btn-quiz">
                <span className="quiz-icon">🎯</span>
                <span className="quiz-text">
                  <strong>Você está pronto?</strong>
                  <small>Teste seus conhecimentos</small>
                </span>
                <span className="quiz-arrow">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section className="features">
          <div className="section-header">
            <h2>O que você vai aprender</h2>
            <p className="section-subtitle">
              Guias completos para criar e cuidar de seus Ratos Twister
            </p>
          </div>
          <div className="features-grid" ref={cardsRef}>
            <Card className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>O Básico</h3>
              <p>
                Entenda o que é um Twister, diferenças para ratos de rua, 
                inteligência, sociabilidade e expectativa de vida.
              </p>
              <Button as={Link} to="/basico" variant="outline">
                Saiba mais →
              </Button>
            </Card>

            <Card className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Habitação</h3>
              <p>
                Aprenda a calcular o espaço necessário, escolher a gaiola ideal 
                e os substratos seguros para seus ratos.
              </p>
              <Button as={Link} to="/habitacao" variant="outline">
                Saiba mais →
              </Button>
            </Card>

            <Card className="feature-card">
              <div className="feature-icon">🥗</div>
              <h3>Alimentação</h3>
              <p>
                Descubra a melhor nutrição para seus ratos, com tabelas completas 
                de alimentos permitidos e proibidos.
              </p>
              <Button as={Link} to="/alimentacao" variant="outline">
                Saiba mais →
              </Button>
            </Card>

            <Card className="feature-card">
              <div className="feature-icon">🎪</div>
              <h3>Enriquecimento</h3>
              <p>
                Crie um ambiente estimulante com brinquedos DIY, foraging 
                e layouts de gaiola ideais.
              </p>
              <Button as={Link} to="/enriquecimento" variant="outline">
                Saiba mais →
              </Button>
            </Card>

            <Card className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Brasil</h3>
              <p>
                Guia completo de recursos, produtos e serviços disponíveis no Brasil 
                para seus ratos. Aproveite o melhor do mercado brasileiro!
              </p>
              <Button as={Link} to="/brasil-europa" variant="outline">
                Saiba mais →
              </Button>
            </Card>

            <Card className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Ferramentas</h3>
              <p>
                Use nossa calculadora de gaiola e faça o quiz para descobrir 
                se você está pronto para ter um Twister.
              </p>
              <div className="card-buttons">
                <Button as={Link} to="/calculadora" variant="outline" size="sm">
                  Calculadora
                </Button>
                <Button as={Link} to="/quiz" variant="outline" size="sm">
                  Quiz
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <Stats />

        <section className="quiz-highlight">
          <Container>
            <Card className="quiz-card">
              <div className="quiz-card-content">
                <div className="quiz-card-icon">🎯</div>
                <div className="quiz-card-text">
                  <h2>Descubra se você está pronto para ter um Twister</h2>
                  <p>
                    Responda nosso quiz interativo e descubra se você tem os conhecimentos 
                    necessários para cuidar de Ratos Twister. É rápido, divertido e educativo!
                  </p>
                  <div className="quiz-features">
                    <span className="quiz-feature">✓ 8 perguntas</span>
                    <span className="quiz-feature">✓ 5 minutos</span>
                    <span className="quiz-feature">✓ Resultado instantâneo</span>
                  </div>
                </div>
                <div className="quiz-card-action">
                  <Button as={Link} to="/quiz" size="lg" className="quiz-cta-btn">
                    Fazer Quiz Agora
                  </Button>
                </div>
              </div>
            </Card>
          </Container>
        </section>

        <section className="artigos-preview">
          <Container>
            <div className="section-header">
              <h2>Artigos em Destaque</h2>
              <p className="section-subtitle">
                Respostas para as perguntas mais comuns sobre Ratos Twister
              </p>
            </div>
            <div className="artigos-preview-grid">
              <Card className="artigo-preview-card">
                <span className="artigo-badge">Cuidados</span>
                <h3>Rato Twister cheira mal?</h3>
                <p>Como evitar odores na gaiola com cuidados adequados</p>
                <Button as={Link} to="/artigos/cheira-mal" variant="outline" size="sm">
                  Ler artigo →
                </Button>
              </Card>
              <Card className="artigo-preview-card">
                <span className="artigo-badge">Comportamento</span>
                <h3>Por que não ter apenas um?</h3>
                <p>Entenda a regra de ouro da criação de ratos</p>
                <Button as={Link} to="/artigos/nao-ter-apenas-um" variant="outline" size="sm">
                  Ler artigo →
                </Button>
              </Card>
              <Card className="artigo-preview-card">
                <span className="artigo-badge">Alimentação</span>
                <h3>Alimentos tóxicos</h3>
                <p>Lista completa do que evitar para manter seus ratos seguros</p>
                <Button as={Link} to="/artigos/alimentos-toxicos" variant="outline" size="sm">
                  Ler artigo →
                </Button>
              </Card>
            </div>
            <div className="artigos-cta">
              <Button as={Link} to="/artigos" size="lg">
                Ver todos os artigos
              </Button>
            </div>
          </Container>
        </section>
      </Container>
    </div>
  )
}

export default Home

