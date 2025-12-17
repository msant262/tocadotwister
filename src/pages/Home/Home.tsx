import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Stats from '../../components/Stats/Stats'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import './Home.css'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const twisterInfoRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (aboutRef.current) {
      anime({
        targets: aboutRef.current,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 200,
      })
    }
  }, [])

  useEffect(() => {
    if (twisterInfoRef.current) {
      anime({
        targets: twisterInfoRef.current,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 100,
      })
    }
  }, [])

  useEffect(() => {
    if (valuesRef.current) {
      const items = valuesRef.current.querySelectorAll('.value-item')
      anime({
        targets: items,
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: (_el, i) => i * 150,
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
            <p className="hero-description">
              Informações precisas, baseadas em evidências científicas e melhores práticas internacionais, 
              adaptadas especialmente para a realidade brasileira. Tudo que você precisa para criar e cuidar 
              de seus Ratos Twister de forma responsável e com muito amor.
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
        <section className="twister-info" ref={twisterInfoRef}>
          <div className="twister-info-content">
            <div className="twister-info-text">
              <h2>O que é um Rato Twister? 🐭</h2>
              <p>
                Os Ratos Twister são ratos domésticos criados especificamente para serem animais de estimação. 
                Diferente dos ratos de rua, eles são <strong>sociáveis, inteligentes e carinhosos</strong>, 
                desenvolvidos através de criação seletiva para serem companheiros ideais.
              </p>
              <p>
                Eles são animais extremamente <strong>sociais</strong> que precisam viver em grupos de pelo menos 2 ratos, 
                têm uma <strong>expectativa de vida de 2 a 3 anos</strong> e requerem cuidados específicos em termos de 
                habitação, alimentação e enriquecimento ambiental.
              </p>
              <div className="twister-info-highlights">
                <div className="info-highlight-item">
                  <span className="highlight-icon">🧠</span>
                  <span>Muito inteligentes e fáceis de treinar</span>
                </div>
                <div className="info-highlight-item">
                  <span className="highlight-icon">❤️</span>
                  <span>Extremamente sociáveis e carinhosos</span>
                </div>
                <div className="info-highlight-item">
                  <span className="highlight-icon">🏠</span>
                  <span>Perfeitos para viver em ambientes domésticos</span>
                </div>
              </div>
            </div>
            <div className="twister-info-visual">
              <div className="twister-emoji-large">🐭</div>
            </div>
          </div>
        </section>

        <section className="about-project" ref={aboutRef}>
          <div className="section-header">
            <h2>Sobre a Toca do Twister</h2>
            <p className="section-subtitle">
              Seu guia completo e confiável sobre criação de Ratos Twister no Brasil
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                A <strong>Toca do Twister</strong> nasceu da necessidade de reunir informações precisas, 
                baseadas em evidências científicas e nas melhores práticas internacionais, adaptadas 
                especificamente para a realidade brasileira.
              </p>
              <p>
                Nosso objetivo é fornecer um <strong>guia completo e acessível</strong> para todos que desejam 
                criar Ratos Twister de forma responsável, garantindo o bem-estar desses animais incríveis.
              </p>
            </div>
            <HighlightBox variant="info" icon="📚" className="about-highlight">
              <div>
                <h3>Conteúdo Baseado em Evidências</h3>
                <p>
                  Todas as informações são baseadas em pesquisas científicas, padrões internacionais 
                  de bem-estar animal e experiências de criadores experientes, adaptadas para o contexto brasileiro.
                </p>
              </div>
            </HighlightBox>
          </div>
        </section>

        <section className="values" ref={valuesRef}>
          <div className="section-header">
            <h2>Nossos Valores</h2>
            <p className="section-subtitle">
              O que nos guia na criação deste projeto
            </p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Precisão</h3>
              <p>
                Informações verificadas e baseadas em evidências científicas e melhores práticas internacionais.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🇧🇷</div>
              <h3>Adaptação Local</h3>
              <p>
                Conteúdo adaptado para a realidade brasileira, com produtos, serviços e recursos disponíveis no Brasil.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">❤️</div>
              <h3>Bem-estar Animal</h3>
              <p>
                Priorizamos sempre o bem-estar e a saúde dos Ratos Twister em todas as nossas recomendações.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">📖</div>
              <h3>Educação</h3>
              <p>
                Acreditamos que a educação é a base para uma criação responsável e bem-sucedida.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Acessibilidade</h3>
              <p>
                Conteúdo gratuito e acessível para todos, desde iniciantes até criadores experientes.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔄</div>
              <h3>Atualização Contínua</h3>
              <p>
                Mantemos nosso conteúdo atualizado com as mais recentes descobertas e melhores práticas.
              </p>
            </div>
          </div>
        </section>

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

        <section className="why-use">
          <Container>
            <div className="section-header">
              <h2>Por que usar a Toca do Twister?</h2>
              <p className="section-subtitle">
                Tudo que você precisa em um só lugar
              </p>
            </div>
            <div className="why-use-grid">
              <div className="why-use-item">
                <div className="why-use-icon">📋</div>
                <h3>Guias Completos</h3>
                <p>
                  Informações detalhadas sobre habitação, alimentação, enriquecimento e cuidados básicos, 
                  tudo em um formato fácil de seguir.
                </p>
              </div>
              <div className="why-use-item">
                <div className="why-use-icon">🛠️</div>
                <h3>Ferramentas Práticas</h3>
                <p>
                  Calculadora de gaiola para determinar o espaço adequado e quiz interativo para testar seus conhecimentos.
                </p>
              </div>
              <div className="why-use-item">
                <div className="why-use-icon">📚</div>
                <h3>Artigos Educativos</h3>
                <p>
                  Respostas para as perguntas mais comuns, baseadas em evidências e experiências reais.
                </p>
              </div>
              <div className="why-use-item">
                <div className="why-use-icon">🇧🇷</div>
                <h3>Focado no Brasil</h3>
                <p>
                  Produtos, serviços e recursos disponíveis no mercado brasileiro, com dicas específicas para nossa realidade.
                </p>
              </div>
            </div>
          </Container>
        </section>

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

