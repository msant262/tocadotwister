import { useEffect, useRef } from 'react'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import '../../styles/shared.css'
import './Enriquecimento.css'

const Enriquecimento = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll('.content-section')
      anime({
        targets: sections,
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.95, 1],
        delay: (_el, i) => i * 150,
        duration: 800,
        easing: 'easeOutElastic(1, .8)',
      })

      const enrichmentCards = contentRef.current.querySelectorAll('.enrichment-card')
      anime({
        targets: enrichmentCards,
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: (_el, i) => 300 + (i * 100),
        duration: 500,
        easing: 'easeOutBack',
      })

      const diyCards = contentRef.current.querySelectorAll('.diy-card')
      anime({
        targets: diyCards,
        opacity: [0, 1],
        rotateY: [-15, 0],
        delay: (_el, i) => 500 + (i * 100),
        duration: 600,
        easing: 'easeOutExpo',
      })
    }
  }, [])

  return (
    <>
      <section className="enriquecimento-hero" ref={heroRef}>
        <Container>
          <div className="enriquecimento-hero-content">
            <h1 className="enriquecimento-hero-title">Enriquecimento Ambiental</h1>
            <p className="enriquecimento-hero-subtitle">
              A alma do site - Crie um ambiente estimulante e enriquecedor para seus ratos
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <div ref={contentRef} className="enriquecimento-page-content">

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Layout da Gaiola</h2>
            <p className="section-description">
              Um bom layout de gaiola oferece múltiplos níveis, esconderijos e áreas 
              de atividade. Isso estimula o comportamento natural dos ratos e previne tédio.
            </p>
          </div>

          <div className="enrichment-grid-modern">
            <div className="enrichment-card">
              <div className="enrichment-icon">🌐</div>
              <h3>Redes e Plataformas</h3>
              <p>
                Redes de corda ou tecido criam níveis intermediários e áreas de descanso. 
                Ratos adoram escalar e se pendurar.
              </p>
              <div className="enrichment-tips">
                <strong>💡 Dicas:</strong>
                <ul>
                  <li>Use redes de algodão ou corda de sisal</li>
                  <li>Instale em diferentes alturas</li>
                  <li>Substitua quando começarem a desfiar</li>
                  <li>Lave regularmente</li>
                </ul>
              </div>
              <div className="enrichment-where">
                <strong>📍 Onde encontrar:</strong> Pet shops, lojas online, ou faça você mesmo!
              </div>
            </div>

            <div className="enrichment-card">
              <div className="enrichment-icon">🏠</div>
              <h3>Tocas e Esconderijos</h3>
              <p>
                Ratos precisam de lugares seguros para descansar. Use casinhas de plástico, 
                madeira ou tecido.
              </p>
              <div className="enrichment-tips">
                <strong>💡 Dicas:</strong>
                <ul>
                  <li>Múltiplas tocas permitem que cada rato tenha seu espaço</li>
                  <li>Use materiais seguros e não tóxicos</li>
                  <li>Varie os tamanhos e formatos</li>
                  <li>Lave regularmente</li>
                </ul>
              </div>
              <div className="enrichment-where">
                <strong>📍 Tipos:</strong> Casinhas de plástico, madeira, tecido, iglus, túneis
              </div>
            </div>

            <div className="enrichment-card">
              <div className="enrichment-icon">🪢</div>
              <h3>Cordas e Escadas</h3>
              <p>
                Cordas de sisal ou algodão conectam diferentes níveis e oferecem exercício. 
                Escadas também são ótimas para acesso entre níveis.
              </p>
              <div className="enrichment-tips">
                <strong>💡 Dicas:</strong>
                <ul>
                  <li>Crie rotas alternativas entre níveis</li>
                  <li>Use cordas com nós para facilitar escalada</li>
                  <li>Escadas de madeira ou plástico são seguras</li>
                  <li>Monitore o desgaste</li>
                </ul>
              </div>
            </div>

            <div className="enrichment-card">
              <div className="enrichment-icon">🎪</div>
              <h3>Brinquedos Suspensos</h3>
              <p>
                Brinquedos que balançam ou penduram estimulam exploração e brincadeiras.
              </p>
              <div className="enrichment-tips">
                <strong>💡 Dicas:</strong>
                <ul>
                  <li>Brinquedos de madeira pendurados</li>
                  <li>Bolas de vime com petiscos</li>
                  <li>Brinquedos interativos</li>
                  <li>Rotacione os brinquedos regularmente</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Brinquedos Comerciais</h2>
            <p className="section-description">
              Existem diversos brinquedos comerciais disponíveis que podem enriquecer 
              o ambiente dos seus ratos.
            </p>
          </div>

          <div className="commercial-toys">
            <div className="toy-category">
              <div className="toy-icon">🧩</div>
              <h3>Brinquedos Interativos</h3>
              <p>Brinquedos que desafiam mentalmente os ratos.</p>
              <div className="toy-list">
                <div className="toy-item">Bolas de forragem</div>
                <div className="toy-item">Quebra-cabeças de comida</div>
                <div className="toy-item">Brinquedos de labirinto</div>
                <div className="toy-item">Brinquedos de destreza</div>
              </div>
            </div>

            <div className="toy-category">
              <div className="toy-icon">🪵</div>
              <h3>Brinquedos de Madeira</h3>
              <p>Brinquedos seguros para roer e escalar.</p>
              <div className="toy-list">
                <div className="toy-item">Blocos de madeira</div>
                <div className="toy-item">Escadas de madeira</div>
                <div className="toy-item">Ponte de madeira</div>
                <div className="toy-item">Casinhas de madeira</div>
              </div>
            </div>

            <div className="toy-category">
              <div className="toy-icon">🪀</div>
              <h3>Brinquedos de Exercício</h3>
              <p>Brinquedos que promovem atividade física.</p>
              <div className="toy-list">
                <div className="toy-item">Roda de exercício (grande)</div>
                <div className="toy-item">Bolas de exercício</div>
                <div className="toy-item">Túneis flexíveis</div>
                <div className="toy-item">Escaladores</div>
              </div>
            </div>

            <div className="toy-category">
              <div className="toy-icon">🎁</div>
              <h3>Brinquedos de Forragem</h3>
              <p>Brinquedos que escondem comida e estimulam busca.</p>
              <div className="toy-list">
                <div className="toy-item">Brinquedos de forragem</div>
                <div className="toy-item">Cestos de vime</div>
                <div className="toy-item">Brinquedos com compartimentos</div>
                <div className="toy-item">Brinquedos de papelão</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Foraging - Caça à Comida</h2>
            <p className="section-description">
              Foraging é a prática de fazer os ratos "caçarem" sua comida ao invés de 
              simplesmente encontrá-la em um pote. Isso estimula comportamento natural, 
              previne tédio e promove atividade física e mental.
            </p>
          </div>

          <div className="foraging-methods-modern">
            <div className="foraging-card">
              <div className="foraging-number">1</div>
              <h3>Espalhar Ração</h3>
              <p>
                Ao invés de colocar toda a ração em um pote, espalhe pela gaiola. 
                Os ratos terão que procurar e coletar.
              </p>
              <div className="foraging-tips">
                <strong>💡 Como fazer:</strong>
                <ul>
                  <li>Espalhe a ração em diferentes níveis</li>
                  <li>Esconda em pequenas quantidades</li>
                  <li>Varie os locais diariamente</li>
                  <li>Combine com outros métodos</li>
                </ul>
              </div>
            </div>

            <div className="foraging-card">
              <div className="foraging-number">2</div>
              <h3>Brinquedos de Foraging</h3>
              <p>
                Use brinquedos que escondem comida, como bolas de forragem, 
                quebra-cabeças ou brinquedos interativos.
              </p>
              <div className="foraging-tips">
                <strong>💡 Tipos:</strong>
                <ul>
                  <li>Bolas de forragem</li>
                  <li>Quebra-cabeças de comida</li>
                  <li>Brinquedos interativos</li>
                  <li>Brinquedos de labirinto</li>
                </ul>
              </div>
            </div>

            <div className="foraging-card">
              <div className="foraging-number">3</div>
              <h3>Esconder Petiscos</h3>
              <p>
                Esconda pequenos pedaços de frutas ou vegetais em diferentes lugares 
                da gaiola para os ratos descobrirem.
              </p>
              <div className="foraging-tips">
                <strong>💡 Dicas:</strong>
                <ul>
                  <li>Use petiscos pequenos e seguros</li>
                  <li>Esconda em tocas, redes e plataformas</li>
                  <li>Varie os tipos de petiscos</li>
                  <li>Monitore para evitar acúmulo</li>
                </ul>
              </div>
            </div>

            <div className="foraging-card">
              <div className="foraging-number">4</div>
              <h3>Caixas de Papelão</h3>
              <p>
                Crie pequenas caixas de papelão com comida dentro. Os ratos terão 
                que abrir para encontrar o tesouro.
              </p>
              <div className="foraging-tips">
                <strong>💡 Como fazer:</strong>
                <ul>
                  <li>Use caixas pequenas e limpas</li>
                  <li>Faça buracos para dificultar acesso</li>
                  <li>Coloque comida variada</li>
                  <li>Substitua quando ficar sujo</li>
                </ul>
              </div>
            </div>

            <div className="foraging-card">
              <div className="foraging-number">5</div>
              <h3>Cestos de Forragem</h3>
              <p>
                Encha cestos de vime ou papelão com feno ou papel picado e esconda 
                comida dentro. Os ratos terão que cavar para encontrar.
              </p>
              <div className="foraging-tips">
                <strong>💡 Materiais:</strong>
                <ul>
                  <li>Cestos de vime pequenos</li>
                  <li>Feno ou papel picado</li>
                  <li>Ração e petiscos</li>
                  <li>Substitua regularmente</li>
                </ul>
              </div>
            </div>

            <div className="foraging-card">
              <div className="foraging-number">6</div>
              <h3>Rolos e Túneis</h3>
              <p>
                Use rolos de papel higiênico ou túneis de papelão com comida dentro. 
                Os ratos terão que explorar para encontrar a comida.
              </p>
              <div className="foraging-tips">
                <strong>💡 Variações:</strong>
                <ul>
                  <li>Rolos fechados com comida</li>
                  <li>Túneis com múltiplas entradas</li>
                  <li>Rolos com furos</li>
                  <li>Combine com outros métodos</li>
                </ul>
              </div>
            </div>
          </div>

          <HighlightBox variant="info" icon="💡">
            <p>
              <strong>Dica:</strong> Combine diferentes métodos de foraging para manter 
              os ratos sempre estimulados. Varie os métodos diariamente para evitar 
              que os ratos se acostumem.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>DIY - Faça Você Mesmo</h2>
            <p className="section-description">
              Criar brinquedos DIY é econômico, divertido e permite personalização. 
              Aqui estão ideias práticas e seguras:
            </p>
          </div>

          <div className="diy-projects-modern">
            <div className="diy-card">
              <div className="diy-icon">🔄</div>
              <h3>Rolo de Papel Higiênico</h3>
              <div className="diy-materials">
                <strong>📦 Materiais:</strong> Rolo de papel higiênico vazio
              </div>
              <div className="diy-steps">
                <strong>🔧 Como fazer:</strong>
                <ol>
                  <li>Encha o rolo com ração ou petiscos</li>
                  <li>Feche as extremidades dobrando-as</li>
                  <li>Coloque na gaiola e deixe os ratos descobrirem!</li>
                </ol>
              </div>
              <div className="diy-variation">
                <strong>💡 Variação:</strong> Faça furos no rolo para dificultar o acesso.
              </div>
            </div>

            <div className="diy-card">
              <div className="diy-icon">📦</div>
              <h3>Caixa de Papelão com Túneis</h3>
              <div className="diy-materials">
                <strong>📦 Materiais:</strong> Caixa de papelão, tesoura
              </div>
              <div className="diy-steps">
                <strong>🔧 Como fazer:</strong>
                <ol>
                  <li>Faça vários buracos na caixa</li>
                  <li>Crie túneis conectando os buracos</li>
                  <li>Coloque petiscos dentro</li>
                  <li>Substitua quando ficar sujo (é descartável!)</li>
                </ol>
              </div>
            </div>

            <div className="diy-card">
              <div className="diy-icon">🪢</div>
              <h3>Corda de Nós</h3>
              <div className="diy-materials">
                <strong>📦 Materiais:</strong> Corda de algodão ou sisal
              </div>
              <div className="diy-steps">
                <strong>🔧 Como fazer:</strong>
                <ol>
                  <li>Corte pedaços de corda (30-50cm)</li>
                  <li>Faça nós espaçados ao longo da corda</li>
                  <li>Pendure na gaiola ou conecte níveis</li>
                </ol>
              </div>
              <div className="diy-variation">
                <strong>💡 Uso:</strong> Escalada, exercício e conexão entre níveis.
              </div>
            </div>

            <div className="diy-card">
              <div className="diy-icon">🎁</div>
              <h3>Caixa Surpresa</h3>
              <div className="diy-materials">
                <strong>📦 Materiais:</strong> Caixa pequena, papel de presente
              </div>
              <div className="diy-steps">
                <strong>🔧 Como fazer:</strong>
                <ol>
                  <li>Envolva a caixa com papel (deixe algumas aberturas)</li>
                  <li>Coloque petiscos dentro</li>
                  <li>Os ratos terão que "desembrulhar" para encontrar a comida</li>
                </ol>
              </div>
            </div>

            <div className="diy-card">
              <div className="diy-icon">🌾</div>
              <h3>Cesto de Forragem</h3>
              <div className="diy-materials">
                <strong>📦 Materiais:</strong> Cesto de vime pequeno, feno ou papel picado
              </div>
              <div className="diy-steps">
                <strong>🔧 Como fazer:</strong>
                <ol>
                  <li>Encha o cesto com feno ou papel picado</li>
                  <li>Esconda ração e petiscos dentro</li>
                  <li>Os ratos terão que cavar para encontrar a comida</li>
                </ol>
              </div>
            </div>

            <div className="diy-card">
              <div className="diy-icon">🏠</div>
              <h3>Casinha de Papelão</h3>
              <div className="diy-materials">
                <strong>📦 Materiais:</strong> Caixa de papelão, tesoura, fita adesiva
              </div>
              <div className="diy-steps">
                <strong>🔧 Como fazer:</strong>
                <ol>
                  <li>Corte a caixa no formato desejado</li>
                  <li>Faça uma entrada e janelas</li>
                  <li>Use fita adesiva para reforçar (sem cola)</li>
                  <li>Substitua quando ficar sujo</li>
                </ol>
              </div>
            </div>
          </div>

          <HighlightBox variant="warning" icon="⚠️">
            <h4>Segurança em Brinquedos DIY</h4>
            <ul>
              <li>Use apenas materiais não tóxicos</li>
              <li>Evite colas, tintas ou produtos químicos</li>
              <li>Remova brinquedos quando começarem a se desfazer</li>
              <li>Monitore para garantir que não há partes pequenas que possam ser engolidas</li>
              <li>Substitua brinquedos de papelão quando ficarem sujos ou úmidos</li>
            </ul>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Rotação de Brinquedos</h2>
            <p className="section-description">
              Rotacionar brinquedos regularmente mantém o ambiente sempre interessante 
              e previne que os ratos se acostumem com os mesmos estímulos.
            </p>
          </div>

          <div className="rotation-tips">
            <div className="rotation-card">
              <div className="rotation-icon">🔄</div>
              <h3>Frequência de Rotação</h3>
              <p>Troque alguns brinquedos a cada 1-2 semanas para manter o interesse.</p>
            </div>

            <div className="rotation-card">
              <div className="rotation-icon">📦</div>
              <h3>Estoque de Brinquedos</h3>
              <p>Mantenha um estoque de brinquedos para poder rotacionar sem precisar comprar sempre.</p>
            </div>

            <div className="rotation-card">
              <div className="rotation-icon">🧹</div>
              <h3>Limpeza</h3>
              <p>Lave e desinfete brinquedos antes de recolocá-los na gaiola.</p>
            </div>

            <div className="rotation-card">
              <div className="rotation-icon">👀</div>
              <h3>Observação</h3>
              <p>Observe quais brinquedos seus ratos mais gostam e mantenha-os por mais tempo.</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Enriquecimento Sensorial</h2>
            <p className="section-description">
              Além de brinquedos físicos, você pode enriquecer o ambiente através de 
              diferentes estímulos sensoriais.
            </p>
          </div>

          <div className="sensory-enrichment">
            <div className="sensory-card">
              <div className="sensory-icon">👃</div>
              <h3>Estímulos Olfativos</h3>
              <p>Varie os cheiros na gaiola usando diferentes substratos, ervas seguras e alimentos.</p>
              <div className="sensory-examples">
                <strong>Exemplos:</strong> Ervas secas (camomila, hortelã), substratos perfumados, 
                diferentes tipos de madeira
              </div>
            </div>

            <div className="sensory-card">
              <div className="sensory-icon">👂</div>
              <h3>Estímulos Sonoros</h3>
              <p>Música suave ou sons da natureza podem ser relaxantes para os ratos.</p>
              <div className="sensory-examples">
                <strong>Exemplos:</strong> Música clássica, sons da natureza, ruído branco suave
              </div>
            </div>

            <div className="sensory-card">
              <div className="sensory-icon">👁️</div>
              <h3>Estímulos Visuais</h3>
              <p>Varie a iluminação e adicione elementos visuais interessantes.</p>
              <div className="sensory-examples">
                <strong>Exemplos:</strong> Iluminação natural, objetos coloridos, espelhos seguros
              </div>
            </div>

            <div className="sensory-card">
              <div className="sensory-icon">✋</div>
              <h3>Estímulos Táteis</h3>
              <p>Diferentes texturas e materiais estimulam o tato dos ratos.</p>
              <div className="sensory-examples">
                <strong>Exemplos:</strong> Tecidos variados, diferentes substratos, materiais naturais
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Atividades Fora da Gaiola</h2>
            <p className="section-description">
              Permitir que seus ratos saiam da gaiola regularmente é essencial para 
              enriquecimento e socialização.
            </p>
          </div>

          <div className="out-of-cage">
            <div className="activity-card">
              <div className="activity-icon">🏃</div>
              <h3>Área de Exercício</h3>
              <p>Crie uma área segura e supervisionada para seus ratos explorarem e se exercitarem.</p>
              <div className="activity-tips">
                <strong>💡 Dicas:</strong>
                <ul>
                  <li>Use um playpen ou área cercada</li>
                  <li>Remova objetos perigosos</li>
                  <li>Supervise sempre</li>
                  <li>Ofereça brinquedos e esconderijos</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🤝</div>
              <h3>Interação Social</h3>
              <p>Interaja com seus ratos fora da gaiola para fortalecer o vínculo.</p>
              <div className="activity-tips">
                <strong>💡 Atividades:</strong>
                <ul>
                  <li>Brincadeiras guiadas</li>
                  <li>Treinamento com petiscos</li>
                  <li>Carinho e acariciar</li>
                  <li>Exploração conjunta</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🎯</div>
              <h3>Treinamento</h3>
              <p>Ratos são inteligentes e podem aprender truques e comandos.</p>
              <div className="activity-tips">
                <strong>💡 Truques:</strong>
                <ul>
                  <li>Vir quando chamado</li>
                  <li>Ficar em pé</li>
                  <li>Atravessar túneis</li>
                  <li>Buscar objetos</li>
                </ul>
              </div>
            </div>
          </div>

          <HighlightBox variant="info" icon="⏰">
            <p>
              <strong>Frequência:</strong> Permita que seus ratos saiam da gaiola pelo menos 
              1 hora por dia, idealmente dividida em 2-3 sessões. Sempre supervisione para 
              garantir a segurança.
            </p>
          </HighlightBox>
        </Card>
      </section>
      </div>
    </Container>
    </>
  )
}

export default Enriquecimento

