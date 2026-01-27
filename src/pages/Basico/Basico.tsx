import { useEffect, useRef } from 'react'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import '../../styles/shared.css'
import './Basico.css'

const Basico = () => {
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

      // Animar life stages
      const lifeStages = cardsRef.current.querySelectorAll('.life-stage')
      anime({
        targets: lifeStages,
        opacity: [0, 1],
        translateX: [-30, 0],
        delay: (_el, i) => 600 + (i * 100),
        duration: 600,
        easing: 'easeOutExpo',
      })

      // Animar info cards
      const infoCards = cardsRef.current.querySelectorAll('.info-card')
      anime({
        targets: infoCards,
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: (_el, i) => 300 + (i * 100),
        duration: 500,
        easing: 'easeOutBack',
      })
    }
  }, [])

  return (
    <>
      <section className="basico-hero" ref={heroRef}>
        <Container>
          <div className="basico-hero-content">
            <h1 className="basico-hero-title">O Básico - Para Iniciantes</h1>
            <p className="basico-hero-subtitle">
              Tudo que você precisa saber antes de ter seu primeiro Rato Twister
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <div ref={cardsRef} className="basico-page-content">

      <section className="content-section">
        <Card>
          <h2>O que é um Twister?</h2>
          <p>
            O Rato Twister (Rattus norvegicus domesticus) é uma variedade doméstica 
            do rato marrom, criada especificamente para companhia. Diferente dos ratos 
            de rua, os Twisters são animais dóceis, inteligentes e sociáveis.
          </p>
          
          <h3>Diferenças para ratos de rua</h3>
          <div className="comparison-grid">
            <div className="info-card">
              <div className="info-card-icon">🤝</div>
              <h4>Comportamento</h4>
              <p>
                Twisters são criados para serem dóceis e confiar em humanos, enquanto 
                ratos de rua são selvagens e desconfiados.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">🏥</div>
              <h4>Saúde</h4>
              <p>
                Ratos domésticos são criados em ambientes controlados, reduzindo doenças 
                e parasitas. Recebem cuidados veterinários desde o nascimento.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">👶</div>
              <h4>Socialização</h4>
              <p>
                Twisters são acostumados ao contato humano desde filhotes, facilitando 
                a criação de vínculos afetivos duradouros.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">🧬</div>
              <h4>Genética</h4>
              <p>
                Criados seletivamente para temperamento dócil e saúde, diferente dos 
                ratos selvagens que podem ser portadores de doenças.
              </p>
            </div>
          </div>

          <HighlightBox variant="info" icon="🧠">
            <h3>Inteligência</h3>
            <p>
              Ratos Twister são extremamente inteligentes! Eles podem aprender truques, 
              reconhecer seus tutores, resolver problemas e até mesmo usar ferramentas. 
              Sua inteligência é comparável à de cães e gatos.
            </p>
          </HighlightBox>

          <HighlightBox variant="success" icon="👥">
            <h3>Sociabilidade</h3>
            <p>
              Ratos são animais de colônia por natureza. Eles precisam de companhia de 
              sua própria espécie para serem felizes e saudáveis. Um rato solitário 
              pode desenvolver depressão, ansiedade e comportamentos destrutivos.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <h2>Regra de Ouro: Nunca ter apenas um</h2>
          <HighlightBox variant="warning" icon="⭐">
            <p>
              <strong>⚠️ IMPORTANTE:</strong> Ratos Twister são animais de colônia e 
              <strong> NUNCA</strong> devem ser mantidos sozinhos.
            </p>
          </HighlightBox>
          
          <h3>Por quê?</h3>
          <ul>
            <li>
              <strong>Bem-estar mental:</strong> Ratos solitários desenvolvem 
              depressão e ansiedade.
            </li>
            <li>
              <strong>Comportamento:</strong> Ratos sozinhos podem se tornar 
              agressivos, destrutivos ou apáticos.
            </li>
            <li>
              <strong>Saúde física:</strong> O estresse da solidão pode enfraquecer 
              o sistema imunológico.
            </li>
            <li>
              <strong>Expectativa de vida:</strong> Ratos solitários tendem a viver 
              menos que ratos em grupos.
            </li>
          </ul>

          <h3>Quantos ratos ter?</h3>
          <div className="group-recommendations">
            <div className="group-card">
              <div className="group-number">2</div>
              <h4>Mínimo</h4>
              <p>O mínimo absoluto para garantir companhia. Funciona, mas não é ideal.</p>
            </div>
            <div className="group-card recommended">
              <div className="group-number">3-4</div>
              <h4>Ideal</h4>
              <p>Grupos de 3-4 ratos são perfeitos! Oferecem interação social rica sem sobrecarregar o espaço.</p>
            </div>
            <div className="group-card">
              <div className="group-number">5+</div>
              <h4>Grande</h4>
              <p>Grupos maiores funcionam bem, mas exigem gaiola grande e mais cuidados.</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <h2>Características Físicas</h2>
          
          <div className="physical-features">
            <div className="feature-item">
              <div className="feature-icon-large">📏</div>
              <h3>Tamanho</h3>
              <p>
                <strong>Comprimento:</strong> 20-25 cm (corpo) + 15-20 cm (cauda)<br/>
                <strong>Peso:</strong> Machos: 300-500g | Fêmeas: 250-400g<br/>
                <strong>Corpo:</strong> Compacto e musculoso, adaptado para escalar e cavar
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-large">👁️</div>
              <h3>Sentidos</h3>
              <p>
                <strong>Visão:</strong> Enxergam mal, parecido com borrões e têm visão limitada de cores<br/>
                <strong>Olfato:</strong> Extremamente desenvolvido - principal sentido<br/>
                <strong>Audição:</strong> Muito sensível, ouvem frequências que humanos não captam<br/>
                <strong>Tato:</strong> Bigodes (vibrissas) são essenciais para navegação
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-large">🦷</div>
              <h3>Dentição</h3>
              <p>
                <strong>Dentes incisivos:</strong> Crescem continuamente (2-3mm por semana)<br/>
                <strong>Necessidade:</strong> Precisam roer para desgastar os dentes<br/>
                <strong>Cores:</strong> Amarelo-laranja é normal e saudável<br/>
                <strong>Atenção:</strong> Dentes muito longos indicam problema de saúde
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <h2>Comportamento e Personalidade</h2>
          
          <HighlightBox variant="info" icon="🎭">
            <h3>Personalidades Únicas</h3>
            <p>
              Cada rato tem sua personalidade! Alguns são mais tímidos, outros mais aventureiros. 
              Alguns adoram carinho, outros preferem explorar. É importante respeitar a individualidade de cada um.
            </p>
          </HighlightBox>

          <div className="behavior-grid">
            <div className="behavior-card">
              <div className="behavior-icon">🌙</div>
              <h4>Atividade Noturna</h4>
              <p>
                Ratos são crepusculares (mais ativos ao amanhecer e entardecer). 
                Podem se adaptar parcialmente ao ritmo humano, mas sempre terão picos de atividade.
              </p>
            </div>

            <div className="behavior-card">
              <div className="behavior-icon">🏃</div>
              <h4>Energia e Brincadeiras</h4>
              <p>
                Extremamente ativos! Adoram correr, escalar, explorar e brincar. 
                Precisam de espaço e enriquecimento para gastar energia.
              </p>
            </div>

            <div className="behavior-card">
              <div className="behavior-icon">🧹</div>
              <h4>Higiene</h4>
              <p>
                Ratos são muito limpos! Passam horas se limpando. 
                O cheiro forte geralmente indica problema de saúde ou gaiola suja.
              </p>
            </div>

            <div className="behavior-card">
              <div className="behavior-icon">💤</div>
              <h4>Sono</h4>
              <p>
                Dormem em ciclos curtos (15-30 min) várias vezes ao dia. 
                Precisam de tocas escuras e confortáveis para descansar.
              </p>
            </div>

            <div className="behavior-card">
              <div className="behavior-icon">🗣️</div>
              <h4>Comunicação</h4>
              <p>
                Usam sons ultrassônicos para comunicação entre si. 
                Também se comunicam através de linguagem corporal e cheiros.
              </p>
            </div>

            <div className="behavior-card">
              <div className="behavior-icon">❤️</div>
              <h4>Afeição</h4>
              <p>
                Ratos podem ser muito carinhosos! Adoram receber carinho, fazer cócegas 
                e até mesmo "beijar" seus tutores (lamber as mãos).
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <h2>Onde Conseguir Ratos Twister</h2>
          
          <div className="source-comparison">
            <div className="source-card">
              <div className="source-badge good">✅ Recomendado</div>
              <h3>Criadores Responsáveis</h3>
              <ul>
                <li>✅ Ratos socializados desde filhotes</li>
                <li>✅ Histórico de saúde conhecido</li>
                <li>✅ Suporte pós-compra</li>
                <li>✅ Genética controlada</li>
                <li>✅ Melhor para iniciantes</li>
              </ul>
              <p className="source-note">
                <strong>Dica:</strong> Procure criadores que permitam visitas e forneçam 
                informações sobre os pais dos filhotes.
              </p>
            </div>

            <div className="source-card">
              <div className="source-badge warning">⚠️ Cuidado</div>
              <h3>Pet Shops</h3>
              <ul>
                <li>⚠️ Pode não ter histórico de saúde</li>
                <li>⚠️ Socialização variável</li>
                <li>⚠️ Pode ter problemas genéticos</li>
                <li>✅ Mais fácil de encontrar</li>
                <li>✅ Geralmente mais barato</li>
              </ul>
              <p className="source-note">
                <strong>Dica:</strong> Se comprar em pet shop, observe bem o comportamento 
                e saúde do rato antes de levar.
              </p>
            </div>

            <div className="source-card">
              <div className="source-badge danger">❌ Evitar</div>
              <h3>Ratos de Rua</h3>
              <ul>
                <li>❌ Selvagens e perigosos</li>
                <li>❌ Podem transmitir doenças</li>
                <li>❌ Não socializados</li>
                <li>❌ Imprevisíveis</li>
                <li>❌ Não são Twisters</li>
              </ul>
              <p className="source-note">
                <strong>Importante:</strong> Ratos de rua NÃO são animais de estimação. 
                Não tente domesticá-los.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <h2>Custos Iniciais</h2>
          
          <p>
            Ter ratos Twister envolve custos iniciais e mensais. É importante estar preparado 
            financeiramente antes de adotar.
          </p>

          <div className="cost-breakdown">
            <div className="cost-category">
              <h3>💰 Investimento Inicial</h3>
              <ul>
                <li><strong>Gaiola adequada:</strong> R$ 300 - R$ 1.500</li>
                <li><strong>Acessórios (bebedouros, potes, brinquedos):</strong> R$ 150 - R$ 400</li>
                <li><strong>Substrato inicial:</strong> R$ 50 - R$ 100</li>
                <li><strong>Ratos (2-4):</strong> R$ 100 - R$ 500</li>
                <li><strong>Consulta veterinária inicial:</strong> R$ 100 - R$ 300</li>
              </ul>
              <div className="cost-total">
                <strong>Total inicial: R$ 700 - R$ 2.800</strong>
              </div>
            </div>

            <div className="cost-category">
              <h3>💵 Custos Mensais</h3>
              <ul>
                <li><strong>Ração:</strong> R$ 50 - R$ 150</li>
                <li><strong>Substrato:</strong> R$ 40 - R$ 120</li>
                <li><strong>Alimentos frescos:</strong> R$ 30 - R$ 80</li>
                <li><strong>Brinquedos/enriquecimento:</strong> R$ 20 - R$ 50</li>
                <li><strong>Emergências veterinárias:</strong> Variável</li>
              </ul>
              <div className="cost-total">
                <strong>Total mensal: R$ 140 - R$ 400</strong>
              </div>
            </div>
          </div>

          <HighlightBox variant="warning" icon="💡">
            <p>
              <strong>Dica importante:</strong> Sempre tenha uma reserva para emergências veterinárias. 
              Ratos podem desenvolver problemas de saúde que requerem tratamento imediato e podem ser caros.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <h2>Expectativa de Vida e Ciclo de Vida</h2>
          
          <h3>Expectativa de Vida</h3>
          <p>
            Ratos Twister vivem em média <strong>2 a 3 anos</strong>, embora alguns 
            possam viver até 4 anos com cuidados excelentes. Machos geralmente vivem 
            um pouco menos que fêmeas.
          </p>

          <h3>Ciclo de Vida</h3>
          
          <div className="life-cycle">
            <div className="life-stage">
              <h4>Bebê (0-3 semanas)</h4>
              <p>
                Nascidos cegos e surdos, dependem completamente da mãe. 
                Abrem os olhos por volta de 2 semanas.
              </p>
            </div>

            <div className="life-stage">
              <h4>Jovem (3-8 semanas)</h4>
              <p>
                Período de desmame e socialização. Extremamente ativos e curiosos. 
                Ideal para começar a interagir com humanos.
              </p>
            </div>

            <div className="life-stage">
              <h4>Adulto Jovem (2-12 meses)</h4>
              <p>
                Período de maior atividade e energia. Atingem maturidade sexual 
                por volta de 5-6 semanas.
              </p>
            </div>

            <div className="life-stage">
              <h4>Adulto (1-2 anos)</h4>
              <p>
                Período de estabilidade. Mantêm boa saúde e energia com cuidados adequados.
              </p>
            </div>

            <div className="life-stage">
              <h4>Idoso (2+ anos)</h4>
              <p>
                Podem desenvolver problemas de saúde como tumores, problemas respiratórios 
                ou artrite. Requerem cuidados especiais e visitas veterinárias regulares.
              </p>
            </div>
          </div>
        </Card>
      </section>
        </div>
      </Container>
    </>
  )
}

export default Basico

