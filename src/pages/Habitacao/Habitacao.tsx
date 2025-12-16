import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import '../../styles/shared.css'
import './Habitacao.css'

const Habitacao = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animar hero
    if (heroRef.current) {
      anime({
        targets: heroRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutExpo',
      })
    }

    // Animar seções de conteúdo
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.content-section')
      anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.95, 1],
        delay: (_el, i) => i * 150,
        duration: 800,
        easing: 'easeOutElastic(1, .8)',
      })

      // Animar comparison items
      const comparisonItems = cardsRef.current.querySelectorAll('.comparison-item')
      anime({
        targets: comparisonItems,
        opacity: [0, 1],
        translateX: [-30, 0],
        delay: (_el, i) => 600 + (i * 100),
        duration: 600,
        easing: 'easeOutExpo',
      })

      // Animar substrate items
      const substrateItems = cardsRef.current.querySelectorAll('.substrate-item')
      anime({
        targets: substrateItems,
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: (_el, i) => 400 + (i * 100),
        duration: 500,
        easing: 'easeOutBack',
      })
    }
  }, [])

  return (
    <>
      <section className="habitacao-hero" ref={heroRef}>
        <Container>
          <div className="habitacao-hero-content">
            <h1 className="habitacao-hero-title">Habitação - A Gaiola Ideal</h1>
            <p className="habitacao-hero-subtitle">
              Aprenda a escolher e montar o ambiente perfeito para seus ratos
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <div ref={cardsRef} className="habitacao-page-content">

      <section className="content-section">
        <Card>
          <h2>Cálculo de Espaço</h2>
          <p>
            O espaço mínimo recomendado é calculado pelo <strong>volume</strong> da gaiola, 
            não apenas pela área do piso. Ratos são escaladores e precisam de altura.
          </p>
          
          <h3>Fórmula de Cálculo</h3>
          <div className="formula-box">
            <p>
              <strong>Volume mínimo por rato:</strong> 0,5 m³ (500 litros)
            </p>
            <p>
              <strong>Fórmula:</strong> Altura × Largura × Profundidade = Volume total
            </p>
            <p>
              <strong>Exemplo:</strong> Uma gaiola de 100cm × 50cm × 80cm = 0,4 m³
            </p>
            <p className="note">
              Esta gaiola seria adequada para <strong>1 rato</strong>, mas lembre-se: 
              nunca tenha apenas um! O mínimo são 2 ratos, então você precisaria de 
              pelo menos 0,8 m³ de volume.
            </p>
          </div>

          <div className="cta-box">
            <div className="cta-content">
              <div className="cta-icon-large">🧮</div>
              <h3>Calculadora de Gaiola</h3>
              <p>Descubra quantos ratos cabem na sua gaiola com nossa calculadora interativa!</p>
              <Button as={Link} to="/calculadora" size="lg" className="cta-button">
                <span>Calcular Agora</span>
                <span className="cta-arrow">→</span>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Gaiola vs. Aquário</h2>
            <p className="section-description">
              Entenda por que gaiolas são essenciais e aquários são perigosos para ratos
            </p>
          </div>
          
          <div className="danger-alert-modern">
            <div className="danger-icon">🚫</div>
            <div className="danger-content">
              <h3>⚠️ PROIBIDO: Aquários e Terrários</h3>
              <p>
                <strong>Nunca use aquários ou terrários de vidro para ratos!</strong> 
                Eles são extremamente perigosos e podem causar doenças fatais.
              </p>
            </div>
          </div>

          <div className="comparison-modern">
            <div className="comparison-card bad-modern">
              <div className="comparison-header">
                <div className="comparison-icon">❌</div>
                <h3>Aquários</h3>
                <span className="comparison-badge danger-badge">PERIGOSO</span>
              </div>
              <div className="comparison-content">
                <div className="comparison-point">
                  <span className="point-icon">💨</span>
                  <div>
                    <strong>Ventilação Inadequada</strong>
                    <p>Amônia se acumula rapidamente, causando intoxicação</p>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">💧</span>
                  <div>
                    <strong>Umidade Alta</strong>
                    <p>Causa problemas respiratórios graves e infecções</p>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">🚫</span>
                  <div>
                    <strong>Sem Escalada</strong>
                    <p>Ratos não podem usar suas habilidades naturais</p>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">🌡️</span>
                  <div>
                    <strong>Calor Excessivo</strong>
                    <p>Vidro retém calor, causando superaquecimento</p>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">🏥</span>
                  <div>
                    <strong>Doenças Respiratórias</strong>
                    <p>Risco muito alto de infecções fatais</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="comparison-card good-modern">
              <div className="comparison-header">
                <div className="comparison-icon">✅</div>
                <h3>Gaiolas de Malha</h3>
                <span className="comparison-badge success-badge">RECOMENDADO</span>
              </div>
              <div className="comparison-content">
                <div className="comparison-point">
                  <span className="point-icon">💨</span>
                  <div>
                    <strong>Ventilação Excelente</strong>
                    <p>Ar circula livremente, mantendo ambiente saudável</p>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">💧</span>
                  <div>
                    <strong>Umidade Controlada</strong>
                    <p>Ambiente seco e saudável, sem acúmulo de umidade</p>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">🧗</span>
                  <div>
                    <strong>Escalada Natural</strong>
                    <p>Ratos podem subir, explorar e exercitar</p>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">🌡️</span>
                  <div>
                    <strong>Temperatura Adequada</strong>
                    <p>Não retém calor excessivo, mantém temperatura ideal</p>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">❤️</span>
                  <div>
                    <strong>Saúde Respiratória</strong>
                    <p>Risco muito menor de doenças e infecções</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Substratos Seguros</h2>
            <p className="section-description">
              O substrato (cama) é fundamental para a saúde dos seus ratos. Ele absorve 
              urina, controla odores e fornece conforto.
            </p>
          </div>

          <div className="substrates-modern">
            <div className="substrates-section">
              <div className="section-title-modern">
                <span className="title-icon">✅</span>
                <h3>Substratos Recomendados</h3>
              </div>
              
              <div className="substrate-grid">
                <div className="substrate-card recommended-modern">
                  <div className="substrate-header">
                    <div className="substrate-icon">📄</div>
                    <h4>Celulose</h4>
                  </div>
                  <div className="substrate-features">
                    <div className="feature-tag">Absorvente</div>
                    <div className="feature-tag">Sem poeira</div>
                    <div className="feature-tag">Biodegradável</div>
                  </div>
                  <p className="substrate-description">
                    Fácil de encontrar no Brasil, ideal para iniciantes. 
                    Excelente custo-benefício.
                  </p>
                  <div className="substrate-where">
                    <strong>📍 Onde encontrar:</strong> Pet shops, lojas online
                  </div>
                </div>

                <div className="substrate-card recommended-modern">
                  <div className="substrate-header">
                    <div className="substrate-icon">🌿</div>
                    <h4>Hemp (Cânhamo)</h4>
                  </div>
                  <div className="substrate-features">
                    <div className="feature-tag">Muito absorvente</div>
                    <div className="feature-tag">Controle de odor</div>
                    <div className="feature-tag">Sustentável</div>
                  </div>
                  <p className="substrate-description">
                    Tendência europeia, considerado um dos melhores substratos. 
                    Controle de odor excelente.
                  </p>
                  <div className="substrate-where">
                    <strong>📍 Onde encontrar:</strong> Importado ou lojas especializadas
                  </div>
                </div>

                <div className="substrate-card recommended-modern">
                  <div className="substrate-header">
                    <div className="substrate-icon">🪵</div>
                    <h4>Granulado de Madeira</h4>
                  </div>
                  <div className="substrate-features">
                    <div className="feature-tag">Absorvente</div>
                    <div className="feature-tag">Econômico</div>
                    <div className="feature-tag warning-tag">⚠️ Sem pinus</div>
                  </div>
                  <p className="substrate-description">
                    Econômico em grandes quantidades, controle de odor bom. 
                    <strong> ATENÇÃO:</strong> Apenas madeiras seguras (evite pinus).
                  </p>
                  <div className="substrate-where">
                    <strong>📍 Onde encontrar:</strong> Pet shops, lojas especializadas
                  </div>
                </div>
              </div>
            </div>

            <div className="substrates-section">
              <div className="section-title-modern danger-title">
                <span className="title-icon">❌</span>
                <h3>Substratos Perigosos</h3>
              </div>
              
              <div className="substrate-grid">
                <div className="substrate-card dangerous-modern">
                  <div className="substrate-header">
                    <div className="substrate-icon">⚠️</div>
                    <h4>Maravalha de Pinus</h4>
                    <span className="danger-label">FATAL</span>
                  </div>
                  <div className="danger-reasons">
                    <div className="danger-reason">
                      <span className="danger-mark">⚠️</span>
                      <p><strong>Contém fenóis tóxicos</strong> que causam problemas respiratórios graves</p>
                    </div>
                    <div className="danger-reason">
                      <span className="danger-mark">💀</span>
                      <p><strong>Pode ser fatal</strong> para ratos</p>
                    </div>
                  </div>
                  <div className="danger-warning">
                    <strong>🚨 NUNCA use maravalha de pinus ou qualquer madeira de coníferas!</strong>
                  </div>
                </div>

                <div className="substrate-card dangerous-modern">
                  <div className="substrate-header">
                    <div className="substrate-icon">⚠️</div>
                    <h4>Serragem Fina</h4>
                    <span className="danger-label">PERIGOSO</span>
                  </div>
                  <div className="danger-reasons">
                    <div className="danger-reason">
                      <span className="danger-mark">💨</span>
                      <p><strong>Poeira excessiva</strong> causa problemas respiratórios</p>
                    </div>
                    <div className="danger-reason">
                      <span className="danger-mark">🏥</span>
                      <p>Pode levar a <strong>infecções respiratórias</strong></p>
                    </div>
                  </div>
                </div>

                <div className="substrate-card dangerous-modern">
                  <div className="substrate-header">
                    <div className="substrate-icon">⚠️</div>
                    <h4>Jornal</h4>
                    <span className="danger-label">TÓXICO</span>
                  </div>
                  <div className="danger-reasons">
                    <div className="danger-reason">
                      <span className="danger-mark">🖨️</span>
                      <p><strong>Tinta tóxica</strong> pode ser ingerida</p>
                    </div>
                    <div className="danger-reason">
                      <span className="danger-mark">💧</span>
                      <p><strong>Não absorve bem</strong>, mantém umidade</p>
                    </div>
                    <div className="danger-reason">
                      <span className="danger-mark">🏥</span>
                      <p>Pode causar <strong>problemas de saúde</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Tipos de Gaiolas</h2>
            <p className="section-description">
              Existem diferentes tipos de gaiolas disponíveis no mercado. Cada uma tem suas 
              vantagens e desvantagens. Escolha a melhor opção para você e seus ratos.
            </p>
          </div>

          <div className="cage-types-compact">
            <div className="cage-type-compact featured">
              <div className="cage-compact-header">
                <div className="cage-title-section">
                  <div className="cage-icon-compact">🏗️</div>
                  <h3>Gaiolas de Malha Fina</h3>
                  <span className="cage-badge-compact">⭐ MELHOR PARA BRASIL</span>
                </div>
                <div className="cage-pros-section">
                  <h4>✅ Vantagens</h4>
                  <ul>
                    <li>Ventilação excelente</li>
                    <li>Permite escalada natural</li>
                    <li>Fácil de limpar</li>
                    <li>Disponível no Brasil</li>
                    <li>Bom custo-benefício</li>
                  </ul>
                </div>
                <div className="cage-cons-section">
                  <h4>⚠️ Atenção</h4>
                  <ul>
                    <li>Verifique o espaçamento da malha</li>
                    <li>Algumas podem ter qualidade variável</li>
                  </ul>
                </div>
              </div>
              <div className="cage-price-compact">
                <strong>💰 Preço:</strong> R$ 500 - R$ 1.500
              </div>
            </div>

            <div className="cage-type-compact">
              <div className="cage-compact-header">
                <div className="cage-title-section">
                  <div className="cage-icon-compact">🔧</div>
                  <h3>Gaiolas DIY</h3>
                  <span className="cage-badge-compact creative">🔧 DIY</span>
                </div>
                <div className="cage-pros-section">
                  <h4>✅ Vantagens</h4>
                  <ul>
                    <li>Totalmente personalizável</li>
                    <li>Pode ser mais barato</li>
                    <li>Tamanho sob medida</li>
                    <li>Satisfação de criar algo único</li>
                  </ul>
                </div>
                <div className="cage-cons-section">
                  <h4>⚠️ Requisitos</h4>
                  <ul>
                    <li>Requer conhecimento técnico</li>
                    <li>Precisa garantir segurança total</li>
                    <li>Tempo de construção</li>
                    <li>Pode ser trabalhoso</li>
                  </ul>
                </div>
              </div>
              <div className="cage-price-compact">
                <strong>💰 Preço:</strong> R$ 300 - R$ 1.000 (materiais)
              </div>
            </div>
          </div>

          <div className="cage-orientation-section">
            <h3>Gaiolas Verticais vs. Horizontais</h3>
            <div className="orientation-comparison">
              <div className="orientation-card vertical">
                <div className="orientation-icon">⬆️</div>
                <h4>Gaiolas Verticais</h4>
                <p>
                  <strong>Ideal para ratos!</strong> Gaiolas altas aproveitam melhor o espaço 
                  e permitem que os ratos escalem, exercitando suas habilidades naturais.
                </p>
                <ul>
                  <li>✅ Aproveitam melhor o espaço vertical</li>
                  <li>✅ Permitem múltiplos níveis</li>
                  <li>✅ Estimulam escalada e exercício</li>
                  <li>✅ Mais adequadas para comportamento natural</li>
                </ul>
                <div className="orientation-note">
                  <strong>Recomendado:</strong> Mínimo 60-80cm de altura
                </div>
              </div>

              <div className="orientation-card horizontal">
                <div className="orientation-icon">➡️</div>
                <h4>Gaiolas Horizontais</h4>
                <p>
                  <strong>Menos ideal.</strong> Gaiolas largas mas baixas não aproveitam 
                  bem o espaço e limitam as atividades de escalada dos ratos.
                </p>
                <ul>
                  <li>⚠️ Menos espaço vertical para escalada</li>
                  <li>⚠️ Limitam comportamento natural</li>
                  <li>⚠️ Ocupam mais espaço no chão</li>
                  <li>✅ Podem ser úteis para ratos idosos ou com limitações</li>
                </ul>
                <div className="orientation-note warning">
                  <strong>Atenção:</strong> Prefira gaiolas verticais sempre que possível
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Localização da Gaiola</h2>
            <p className="section-description">
              A localização da gaiola é crucial para o bem-estar dos seus ratos. 
              Escolha um local que atenda às necessidades deles.
            </p>
          </div>

          <div className="location-comparison">
            <div className="location-card ideal-location">
              <div className="location-header">
                <div className="location-icon-large">✅</div>
                <h3>Locais Ideais</h3>
                <span className="location-badge success">RECOMENDADO</span>
              </div>
              <div className="location-points">
                <div className="location-point">
                  <div className="point-number">1</div>
                  <div className="point-content">
                    <strong>Altura Média</strong>
                    <p>Coloque a gaiola na altura dos olhos ou um pouco acima. Isso facilita interação e observação.</p>
                  </div>
                </div>
                <div className="location-point">
                  <div className="point-number">2</div>
                  <div className="point-content">
                    <strong>Área Social</strong>
                    <p>Onde a família passa tempo (sala, escritório). Ratos gostam de estar perto das pessoas.</p>
                  </div>
                </div>
                <div className="location-point">
                  <div className="point-number">3</div>
                  <div className="point-content">
                    <strong>Ventilação Adequada</strong>
                    <p>Bem ventilado, mas sem correntes de ar diretas. Ar fresco é essencial.</p>
                  </div>
                </div>
                <div className="location-point">
                  <div className="point-number">4</div>
                  <div className="point-content">
                    <strong>Luz Natural</strong>
                    <p>Acesso à luz do dia, mas não sol direto. Mantém ciclo circadiano natural.</p>
                  </div>
                </div>
                <div className="location-point">
                  <div className="point-number">5</div>
                  <div className="point-content">
                    <strong>Temperatura Ideal</strong>
                    <p>Entre 18°C e 24°C, longe de aquecedores/ar condicionado diretos.</p>
                  </div>
                </div>
                <div className="location-point">
                  <div className="point-number">6</div>
                  <div className="point-content">
                    <strong>Superfície Estável</strong>
                    <p>Sem vibrações, em local seguro onde não possa cair ou ser derrubada.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="location-card avoid-location">
              <div className="location-header">
                <div className="location-icon-large">❌</div>
                <h3>Locais a Evitar</h3>
                <span className="location-badge danger">PERIGOSO</span>
              </div>
              <div className="location-points">
                <div className="location-point danger-point">
                  <div className="point-icon-danger">🚫</div>
                  <div className="point-content">
                    <strong>Chão</strong>
                    <p>Muito baixo, exposto a correntes de ar, poeira e umidade do chão.</p>
                  </div>
                </div>
                <div className="location-point danger-point">
                  <div className="point-icon-danger">🚫</div>
                  <div className="point-content">
                    <strong>Garagem</strong>
                    <p>Fumos, produtos químicos, temperatura instável, risco de acidentes.</p>
                  </div>
                </div>
                <div className="location-point danger-point">
                  <div className="point-icon-danger">🚫</div>
                  <div className="point-content">
                    <strong>Cozinha</strong>
                    <p>Fumos de cozimento, produtos de limpeza, risco de contaminação.</p>
                  </div>
                </div>
                <div className="location-point danger-point">
                  <div className="point-icon-danger">🚫</div>
                  <div className="point-content">
                    <strong>Quarto</strong>
                    <p>Ruído noturno pode incomodar (ratos são crepusculares e ativos à noite).</p>
                  </div>
                </div>
                <div className="location-point danger-point">
                  <div className="point-icon-danger">🚫</div>
                  <div className="point-content">
                    <strong>Varanda</strong>
                    <p>Exposição ao sol, chuva, mudanças bruscas de temperatura, risco de superaquecimento.</p>
                  </div>
                </div>
                <div className="location-point danger-point">
                  <div className="point-icon-danger">🚫</div>
                  <div className="point-content">
                    <strong>Perto de Janelas</strong>
                    <p>Correntes de ar diretas e mudanças bruscas de temperatura.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Manutenção e Limpeza</h2>
            <p className="section-description">
              Manter a gaiola limpa é essencial para a saúde dos seus ratos. Uma rotina de 
              limpeza adequada previne doenças e odores.
            </p>
          </div>

          <div className="cleaning-schedule-modern">
            <div className="cleaning-card daily">
              <div className="cleaning-header">
                <div className="cleaning-icon-large">🧹</div>
                <div>
                  <h3>Limpeza Diária</h3>
                  <span className="cleaning-frequency">Todos os dias</span>
                </div>
              </div>
              <div className="cleaning-tasks">
                <div className="cleaning-task">
                  <span className="task-icon">🍽️</span>
                  <span>Remover restos de comida</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">💧</span>
                  <span>Trocar água dos bebedouros</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">💩</span>
                  <span>Verificar fezes em excesso</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">🧽</span>
                  <span>Limpar áreas molhadas</span>
                </div>
              </div>
              <div className="cleaning-time">
                <strong>⏱️ Tempo:</strong> 5-10 minutos
              </div>
            </div>

            <div className="cleaning-card weekly">
              <div className="cleaning-header">
                <div className="cleaning-icon-large">🧽</div>
                <div>
                  <h3>Limpeza Semanal</h3>
                  <span className="cleaning-frequency">Uma vez por semana</span>
                </div>
              </div>
              <div className="cleaning-tasks">
                <div className="cleaning-task">
                  <span className="task-icon">🛏️</span>
                  <span>Trocar todo o substrato</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">🍽️</span>
                  <span>Lavar potes de comida e água</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">🎪</span>
                  <span>Limpar brinquedos e acessórios</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">🔍</span>
                  <span>Verificar estado da gaiola</span>
                </div>
              </div>
              <div className="cleaning-time">
                <strong>⏱️ Tempo:</strong> 30-45 minutos
              </div>
            </div>

            <div className="cleaning-card monthly">
              <div className="cleaning-header">
                <div className="cleaning-icon-large">✨</div>
                <div>
                  <h3>Limpeza Mensal</h3>
                  <span className="cleaning-frequency">Uma vez por mês</span>
                </div>
              </div>
              <div className="cleaning-tasks">
                <div className="cleaning-task">
                  <span className="task-icon">🔧</span>
                  <span>Desmontar e lavar toda a gaiola</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">🧴</span>
                  <span>Desinfetar com produto seguro</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">🔍</span>
                  <span>Verificar e reparar danos</span>
                </div>
                <div className="cleaning-task">
                  <span className="task-icon">🎨</span>
                  <span>Reorganizar layout</span>
                </div>
              </div>
              <div className="cleaning-time">
                <strong>⏱️ Tempo:</strong> 1-2 horas
              </div>
            </div>
          </div>

          <div className="cleaning-warning-modern">
            <div className="warning-icon">⚠️</div>
            <div className="warning-content">
              <h4>Produtos de Limpeza Seguros</h4>
              <p>
                <strong>Use apenas produtos seguros para animais!</strong> Evite produtos com 
                amônia, cloro ou fragrâncias fortes. <strong>Vinagre branco diluído</strong> 
                (1 parte vinagre para 3 partes água) é uma opção segura e eficaz.
              </p>
              <div className="safe-products">
                <span className="product-tag safe">✅ Vinagre branco diluído</span>
                <span className="product-tag safe">✅ Água e sabão neutro</span>
                <span className="product-tag safe">✅ Produtos específicos para pets</span>
                <span className="product-tag unsafe">❌ Amônia</span>
                <span className="product-tag unsafe">❌ Cloro</span>
                <span className="product-tag unsafe">❌ Fragrâncias fortes</span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Acessórios Essenciais</h2>
            <p className="section-description">
              Além da gaiola e substrato, existem acessórios essenciais que todo rato precisa 
              para viver confortavelmente e com saúde.
            </p>
          </div>

          <div className="accessories-categories">
            <div className="accessory-category">
              <div className="category-header">
                <h3>⭐ Essenciais (Obrigatórios)</h3>
                <p>Itens que você DEVE ter</p>
              </div>
              <div className="accessories-grid-modern">
                <div className="accessory-card-modern essential">
                  <div className="accessory-badge">ESSENCIAL</div>
                  <div className="accessory-icon-modern">💧</div>
                  <h4>Bebedouros de Bilha</h4>
                  <div className="accessory-details">
                    <div className="detail-item">
                      <strong>📊 Quantidade:</strong> Mínimo 1 por rato, ideal 2 por rato
                    </div>
                    <div className="detail-item">
                      <strong>🔧 Tipos:</strong> Bebedouros de bilha com bico de aço inoxidável
                    </div>
                    <div className="detail-item">
                      <strong>🧹 Manutenção:</strong> Limpar e trocar água diariamente
                    </div>
                    <div className="detail-item">
                      <strong>📍 Posicionamento:</strong> Fixar na altura adequada
                    </div>
                  </div>
                  <div className="accessory-price">💰 R$ 15 - R$ 40 cada</div>
                </div>

                <div className="accessory-card-modern essential">
                  <div className="accessory-badge">ESSENCIAL</div>
                  <div className="accessory-icon-modern">🍽️</div>
                  <h4>Potes de Comida</h4>
                  <div className="accessory-details">
                    <div className="detail-item">
                      <strong>📊 Quantidade:</strong> 1-2 potes para o grupo
                    </div>
                    <div className="detail-item">
                      <strong>🔧 Material:</strong> Cerâmica pesada ou aço inoxidável
                    </div>
                    <div className="detail-item">
                      <strong>📏 Tamanho:</strong> Suficiente para a ração diária
                    </div>
                    <div className="detail-item">
                      <strong>💡 Dica:</strong> Potes pesados evitam que sejam virados
                    </div>
                  </div>
                  <div className="accessory-price">💰 R$ 10 - R$ 30 cada</div>
                </div>

                <div className="accessory-card-modern essential">
                  <div className="accessory-badge">ESSENCIAL</div>
                  <div className="accessory-icon-modern">🏠</div>
                  <h4>Tocas e Esconderijos</h4>
                  <div className="accessory-details">
                    <div className="detail-item">
                      <strong>📊 Quantidade:</strong> Mínimo 1 por rato, ideal 2 por rato
                    </div>
                    <div className="detail-item">
                      <strong>🔧 Tipos:</strong> Casinhas de plástico, madeira ou tecido
                    </div>
                    <div className="detail-item">
                      <strong>❤️ Importância:</strong> Ratos precisam de lugares seguros
                    </div>
                    <div className="detail-item">
                      <strong>💡 Dica:</strong> Múltiplas tocas reduzem conflitos
                    </div>
                  </div>
                  <div className="accessory-price">💰 R$ 20 - R$ 80 cada</div>
                </div>
              </div>
            </div>

            <div className="accessory-category">
              <div className="category-header">
                <h3>⭐ Importantes (Recomendados)</h3>
                <p>Itens que melhoram muito a qualidade de vida</p>
              </div>
              <div className="accessories-grid-modern">
                <div className="accessory-card-modern important">
                  <div className="accessory-badge important-badge">IMPORTANTE</div>
                  <div className="accessory-icon-modern">🪜</div>
                  <h4>Plataformas e Níveis</h4>
                  <div className="accessory-details">
                    <div className="detail-item">
                      <strong>🎯 Função:</strong> Criar múltiplos níveis na gaiola
                    </div>
                    <div className="detail-item">
                      <strong>🔧 Material:</strong> Madeira segura, plástico ou metal
                    </div>
                    <div className="detail-item">
                      <strong>📈 Benefício:</strong> Aumenta o espaço utilizável
                    </div>
                    <div className="detail-item">
                      <strong>💡 Dica:</strong> Conecte com rampas ou escadas
                    </div>
                  </div>
                  <div className="accessory-price">💰 R$ 30 - R$ 100</div>
                </div>

                <div className="accessory-card-modern important">
                  <div className="accessory-badge important-badge">IMPORTANTE</div>
                  <div className="accessory-icon-modern">🕸️</div>
                  <h4>Redes e Cordas</h4>
                  <div className="accessory-details">
                    <div className="detail-item">
                      <strong>🎯 Função:</strong> Criar áreas de escalada e descanso
                    </div>
                    <div className="detail-item">
                      <strong>🔧 Material:</strong> Corda de algodão ou sisal
                    </div>
                    <div className="detail-item">
                      <strong>📈 Benefício:</strong> Exercício e enriquecimento
                    </div>
                    <div className="detail-item">
                      <strong>💡 Dica:</strong> Troque quando desgastadas
                    </div>
                  </div>
                  <div className="accessory-price">💰 R$ 15 - R$ 50</div>
                </div>

                <div className="accessory-card-modern optional">
                  <div className="accessory-badge optional-badge">OPCIONAL</div>
                  <div className="accessory-icon-modern">🎪</div>
                  <h4>Brinquedos e Enriquecimento</h4>
                  <div className="accessory-details">
                    <div className="detail-item">
                      <strong>🎯 Tipos:</strong> Rodas, túneis, brinquedos de madeira
                    </div>
                    <div className="detail-item">
                      <strong>❤️ Importância:</strong> Previne tédio e comportamentos destrutivos
                    </div>
                    <div className="detail-item">
                      <strong>🔄 Rotatividade:</strong> Troque brinquedos regularmente
                    </div>
                    <div className="detail-item">
                      <strong>💡 Dica:</strong> Muitos podem ser feitos em casa (DIY)
                    </div>
                  </div>
                  <div className="accessory-price">💰 R$ 10 - R$ 80</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Dicas de Montagem</h2>
            <p className="section-description">
              A organização da gaiola é tão importante quanto o tamanho. Uma gaiola bem 
              organizada oferece mais espaço, segurança e enriquecimento para seus ratos.
            </p>
          </div>

          <div className="setup-tips-modern">
            <div className="setup-tip-modern">
              <div className="tip-number">1</div>
              <div className="tip-content">
                <h4>Distribuição de Níveis</h4>
                <p>
                  Crie pelo menos 2-3 níveis na gaiola usando plataformas. Isso aumenta 
                  significativamente o espaço utilizável. Conecte os níveis com rampas, 
                  escadas ou redes.
                </p>
                <div className="tip-benefit">
                  <span className="benefit-icon">📈</span>
                  <span>Aumenta o espaço utilizável em até 200%</span>
                </div>
              </div>
            </div>

            <div className="setup-tip-modern">
              <div className="tip-number">2</div>
              <div className="tip-content">
                <h4>Zonas Funcionais</h4>
                <p>
                  Organize a gaiola em zonas: área de alimentação (potes), área de descanso 
                  (tocas), área de exercício (redes, brinquedos) e área de higiene (canto 
                  com substrato mais profundo).
                </p>
                <div className="tip-benefit">
                  <span className="benefit-icon">🎯</span>
                  <span>Melhora organização e bem-estar</span>
                </div>
              </div>
            </div>

            <div className="setup-tip-modern">
              <div className="tip-number">3</div>
              <div className="tip-content">
                <h4>Múltiplas Tocas</h4>
                <p>
                  Coloque pelo menos uma toca por rato em diferentes níveis. Isso permite 
                  que cada rato tenha seu espaço e reduz conflitos. Use tocas de diferentes 
                  tamanhos e materiais.
                </p>
                <div className="tip-benefit">
                  <span className="benefit-icon">❤️</span>
                  <span>Reduz conflitos e estresse</span>
                </div>
              </div>
            </div>

            <div className="setup-tip-modern">
              <div className="tip-number">4</div>
              <div className="tip-content">
                <h4>Rotas de Fuga</h4>
                <p>
                  Sempre tenha múltiplas rotas entre os níveis. Se um rato for perseguido, 
                  precisa de caminhos alternativos para escapar. Isso previne bullying e 
                  estresse.
                </p>
                <div className="tip-benefit">
                  <span className="benefit-icon">🛡️</span>
                  <span>Previne bullying e agressão</span>
                </div>
              </div>
            </div>

            <div className="setup-tip-modern">
              <div className="tip-number">5</div>
              <div className="tip-content">
                <h4>Espaço para Exercício</h4>
                <p>
                  Reserve áreas abertas para corrida e brincadeiras. Não encha a gaiola 
                  completamente - ratos precisam de espaço para se mover livremente.
                </p>
                <div className="tip-benefit">
                  <span className="benefit-icon">🏃</span>
                  <span>Permite exercício e brincadeiras</span>
                </div>
              </div>
            </div>

            <div className="setup-tip-modern">
              <div className="tip-number">6</div>
              <div className="tip-content">
                <h4>Segurança em Primeiro Lugar</h4>
                <p>
                  Verifique que todos os acessórios estão bem fixados. Plataformas devem 
                  ser estáveis, redes não devem ter buracos grandes, e brinquedos não devem 
                  ter partes soltas que possam ser engolidas.
                </p>
                <div className="tip-benefit">
                  <span className="benefit-icon">🔒</span>
                  <span>Previne acidentes e ferimentos</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Problemas Comuns e Soluções</h2>
            <p className="section-description">
              Encontre soluções rápidas para os problemas mais comuns na criação de ratos.
            </p>
          </div>

          <div className="problems-solutions-modern">
            <div className="problem-card">
              <div className="problem-header">
                <div className="problem-icon">🔴</div>
                <h3>Odor Forte</h3>
              </div>
              <div className="solutions-list">
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Aumente a frequência de limpeza</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Use substrato mais absorvente (Hemp ou Celulose)</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Verifique se há áreas molhadas não limpas</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Considere aumentar a ventilação</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Verifique a saúde dos ratos (odor pode indicar doença)</span>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <div className="problem-header">
                <div className="problem-icon">🔴</div>
                <h3>Gaiola Muito Pequena</h3>
              </div>
              <div className="solutions-list">
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Calcule o volume necessário (0,5 m³ por rato)</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Considere conectar múltiplas gaiolas</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Use plataformas para criar mais níveis</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Remova acessórios desnecessários</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Planeje upgrade para gaiola maior</span>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <div className="problem-header">
                <div className="problem-icon">🔴</div>
                <h3>Ratos Escapando</h3>
              </div>
              <div className="solutions-list">
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Verifique o espaçamento da malha (máximo 1cm)</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Inspecione a gaiola regularmente por danos</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Certifique-se que todas as portas estão bem fechadas</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Use travas de segurança se necessário</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Verifique se não há buracos ou aberturas</span>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <div className="problem-header">
                <div className="problem-icon">🔴</div>
                <h3>Substrato Espalhado</h3>
              </div>
              <div className="solutions-list">
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Use bandejas profundas (mínimo 10cm de altura)</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Considere usar guarda-pó ou tela ao redor da gaiola</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Coloque a gaiola em uma área fácil de limpar</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Use substrato mais pesado (granulado de madeira)</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Reduza a quantidade de substrato se necessário</span>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <div className="problem-header">
                <div className="problem-icon">🔴</div>
                <h3>Conflitos entre Ratos</h3>
              </div>
              <div className="solutions-list">
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Aumente o número de recursos (tocas, potes, bebedouros)</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Garanta múltiplas rotas de fuga</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Verifique se a gaiola não está superlotada</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Adicione mais níveis e espaços</span>
                </div>
                <div className="solution-item">
                  <span className="solution-check">✅</span>
                  <span>Considere separar temporariamente se necessário</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Custos de Habitação</h2>
            <p className="section-description">
              Ter uma gaiola adequada envolve custos iniciais e de manutenção. É importante 
              planejar financeiramente antes de adquirir seus ratos.
            </p>
          </div>

          <div className="cost-breakdown-modern">
            <div className="cost-card initial">
              <div className="cost-header">
                <div className="cost-icon-large">💰</div>
                <h3>Investimento Inicial</h3>
                <span className="cost-badge">Uma vez</span>
              </div>
              <div className="cost-items">
                <div className="cost-line">
                  <span className="cost-label">Gaiola adequada (para 2-4 ratos)</span>
                  <span className="cost-value">R$ 500 - R$ 1.800</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Bebedouros de bilha (2-4 unidades)</span>
                  <span className="cost-value">R$ 50 - R$ 150</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Potes de comida pesados (2 unidades)</span>
                  <span className="cost-value">R$ 40 - R$ 120</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Tocas e esconderijos (3-4 unidades)</span>
                  <span className="cost-value">R$ 80 - R$ 300</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Plataformas e níveis</span>
                  <span className="cost-value">R$ 80 - R$ 250</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Redes e cordas</span>
                  <span className="cost-value">R$ 50 - R$ 150</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Brinquedos e enriquecimento inicial</span>
                  <span className="cost-value">R$ 80 - R$ 200</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Substrato inicial (volume grande)</span>
                  <span className="cost-value">R$ 100 - R$ 250</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Produtos de limpeza seguros</span>
                  <span className="cost-value">R$ 30 - R$ 80</span>
                </div>
              </div>
              <div className="cost-total-modern">
                <div className="total-label">Total Inicial</div>
                <div className="total-value">R$ 1.010 - R$ 3.300</div>
              </div>
            </div>

            <div className="cost-card monthly">
              <div className="cost-header">
                <div className="cost-icon-large">💵</div>
                <h3>Custos Mensais</h3>
                <span className="cost-badge">Recorrente</span>
              </div>
              <div className="cost-items">
                <div className="cost-line">
                  <span className="cost-label">Substrato (reposição mensal)</span>
                  <span className="cost-value">R$ 60 - R$ 180</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Reposição de acessórios desgastados</span>
                  <span className="cost-value">R$ 30 - R$ 80</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Produtos de limpeza seguros</span>
                  <span className="cost-value">R$ 20 - R$ 50</span>
                </div>
                <div className="cost-line">
                  <span className="cost-label">Brinquedos e enriquecimento novos</span>
                  <span className="cost-value">R$ 30 - R$ 80</span>
                </div>
              </div>
              <div className="cost-total-modern">
                <div className="total-label">Total Mensal</div>
                <div className="total-value">R$ 140 - R$ 390</div>
              </div>
            </div>
          </div>

          <div className="cost-tip-modern">
            <div className="tip-icon">💡</div>
            <div className="tip-content">
              <h4>Dica de Economia</h4>
              <p>
                Você pode economizar fazendo muitos acessórios em casa (DIY) usando materiais 
                seguros como papelão, cordas de algodão e madeira não tratada. Isso reduz 
                significativamente os custos iniciais e mensais.
              </p>
              <div className="diy-examples">
                <span className="diy-tag">📦 Brinquedos de papelão</span>
                <span className="diy-tag">🪢 Redes de corda</span>
                <span className="diy-tag">🏠 Tocas de caixa</span>
                <span className="diy-tag">🪜 Plataformas de madeira</span>
              </div>
            </div>
          </div>
        </Card>
      </section>
        </div>
      </Container>
    </>
  )
}

export default Habitacao

