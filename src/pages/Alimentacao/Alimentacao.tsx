import { useEffect, useRef } from 'react'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import '../../styles/shared.css'
import './Alimentacao.css'

const Alimentacao = () => {
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

      const foodCards = contentRef.current.querySelectorAll('.food-card')
      anime({
        targets: foodCards,
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: (_el, i) => 300 + (i * 100),
        duration: 500,
        easing: 'easeOutBack',
      })

      const dangerCards = contentRef.current.querySelectorAll('.danger-card')
      anime({
        targets: dangerCards,
        opacity: [0, 1],
        translateX: [-30, 0],
        delay: (_el, i) => 500 + (i * 100),
        duration: 600,
        easing: 'easeOutExpo',
      })
    }
  }, [])

  return (
    <>
      <section className="alimentacao-hero" ref={heroRef}>
        <Container>
          <div className="alimentacao-hero-content">
            <h1 className="alimentacao-hero-title">Alimentação - Nutrição</h1>
            <p className="alimentacao-hero-subtitle">
              Aprenda a alimentar seus ratos de forma saudável e balanceada
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <div ref={contentRef} className="alimentacao-page-content">

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Base da Alimentação</h2>
            <p className="section-description">
              A alimentação é fundamental para a saúde e longevidade dos seus ratos. 
              Entenda as opções disponíveis e escolha a melhor para seus pets.
            </p>
          </div>

          <h3>Ração Extrusada vs. Mix de Sementes</h3>
          <p>
            Este é um debate comum na comunidade de criadores de ratos. Vamos entender 
            as diferenças:
          </p>

          <div className="comparison-modern">
            <div className="comparison-card good-modern">
              <div className="comparison-header">
                <div className="comparison-icon">✅</div>
                <h3>Ração Extrusada</h3>
                <span className="comparison-badge success-badge">RECOMENDADO</span>
              </div>
              <div className="comparison-content">
                <div className="comparison-point">
                  <span className="point-icon">✅</span>
                  <div>
                    <strong>Vantagens</strong>
                    <ul>
                      <li>Nutrição balanceada e completa</li>
                      <li>Impossível selecionar apenas partes (evita desequilíbrio)</li>
                      <li>Fácil de encontrar e armazenar</li>
                      <li>Menor risco de deficiências nutricionais</li>
                      <li>Controle de peso mais fácil</li>
                    </ul>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">⚠️</span>
                  <div>
                    <strong>Desvantagens</strong>
                    <ul>
                      <li>Pode ser menos interessante para os ratos</li>
                      <li>Algumas marcas podem ter ingredientes de baixa qualidade</li>
                      <li>Pode ser mais cara</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="comparison-card">
              <div className="comparison-header">
                <div className="comparison-icon">🌾</div>
                <h3>Mix de Sementes</h3>
                <span className="comparison-badge">AVANÇADO</span>
              </div>
              <div className="comparison-content">
                <div className="comparison-point">
                  <span className="point-icon">✅</span>
                  <div>
                    <strong>Vantagens</strong>
                    <ul>
                      <li>Mais natural e interessante para os ratos</li>
                      <li>Permite variedade</li>
                      <li>Pode ser mais barato</li>
                      <li>Enriquecimento comportamental</li>
                    </ul>
                  </div>
                </div>
                <div className="comparison-point">
                  <span className="point-icon">⚠️</span>
                  <div>
                    <strong>Desvantagens</strong>
                    <ul>
                      <li>Ratos podem selecionar apenas partes favoritas</li>
                      <li>Risco de desequilíbrio nutricional</li>
                      <li>Requer conhecimento para balancear corretamente</li>
                      <li>Pode ser difícil encontrar mix adequado no Brasil</li>
                      <li>Necessita monitoramento constante</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HighlightBox variant="info" icon="💡">
            <p>
              <strong>Recomendação:</strong> Para iniciantes, ração extrusada de boa qualidade 
              é a opção mais segura. Se optar por mix, estude bem a composição e monitore 
              o peso dos seus ratos regularmente.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Necessidades Nutricionais</h2>
            <p className="section-description">
              Ratos precisam de uma dieta balanceada com proteínas, carboidratos, gorduras, 
              vitaminas e minerais.
            </p>
          </div>

          <div className="nutrition-needs">
            <div className="nutrition-card">
              <div className="nutrition-icon">🥩</div>
              <h4>Proteínas</h4>
              <p><strong>Necessidade:</strong> 12-16% da dieta</p>
              <p>Essenciais para crescimento, reparo de tecidos e sistema imunológico.</p>
              <div className="nutrition-sources">
                <strong>Fontes:</strong> Ração de qualidade, ovos, frango, peixe, insetos
              </div>
            </div>

            <div className="nutrition-card">
              <div className="nutrition-icon">🌾</div>
              <h4>Carboidratos</h4>
              <p><strong>Necessidade:</strong> 40-50% da dieta</p>
              <p>Principal fonte de energia para atividades diárias.</p>
              <div className="nutrition-sources">
                <strong>Fontes:</strong> Ração, arroz, massas, frutas, legumes
              </div>
            </div>

            <div className="nutrition-card">
              <div className="nutrition-icon">🥑</div>
              <h4>Gorduras</h4>
              <p><strong>Necessidade:</strong> 4-6% da dieta</p>
              <p>Importantes para absorção de vitaminas e saúde da pele.</p>
              <div className="nutrition-sources">
                <strong>Fontes:</strong> Sementes, nozes (com moderação), óleos vegetais
              </div>
            </div>

            <div className="nutrition-card">
              <div className="nutrition-icon">🥬</div>
              <h4>Fibras</h4>
              <p><strong>Necessidade:</strong> 10-15% da dieta</p>
              <p>Essenciais para saúde digestiva e prevenção de obesidade.</p>
              <div className="nutrition-sources">
                <strong>Fontes:</strong> Legumes, verduras, ração com fibras
              </div>
            </div>

            <div className="nutrition-card">
              <div className="nutrition-icon">💊</div>
              <h4>Vitaminas e Minerais</h4>
              <p><strong>Necessidade:</strong> Variada</p>
              <p>Vitamina D, Cálcio, Fósforo, e outras são essenciais.</p>
              <div className="nutrition-sources">
                <strong>Fontes:</strong> Ração balanceada, alimentos frescos variados
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Quantidade e Frequência</h2>
            <p className="section-description">
              Saber quanto e com que frequência alimentar seus ratos é crucial para 
              manter a saúde e prevenir obesidade.
            </p>
          </div>

          <div className="feeding-schedule">
            <div className="schedule-card">
              <div className="schedule-icon">🍽️</div>
              <h3>Quantidade Diária</h3>
              <div className="schedule-content">
                <div className="schedule-item">
                  <strong>Ratos adultos:</strong> 15-20g de ração por rato por dia
                </div>
                <div className="schedule-item">
                  <strong>Filhotes (3-8 semanas):</strong> Ração à vontade + alimentos frescos
                </div>
                <div className="schedule-item">
                  <strong>Ratos idosos:</strong> 12-15g por rato por dia (menos ativos)
                </div>
                <div className="schedule-item">
                  <strong>Fêmeas prenhes/lactantes:</strong> Ração à vontade + proteína extra
                </div>
              </div>
            </div>

            <div className="schedule-card">
              <div className="schedule-icon">⏰</div>
              <h3>Frequência de Alimentação</h3>
              <div className="schedule-content">
                <div className="schedule-item">
                  <strong>Ração:</strong> Oferecer 2 vezes ao dia (manhã e noite)
                </div>
                <div className="schedule-item">
                  <strong>Alimentos frescos:</strong> 1 vez ao dia, em pequenas quantidades
                </div>
                <div className="schedule-item">
                  <strong>Proteínas:</strong> 2-3 vezes por semana
                </div>
                <div className="schedule-item">
                  <strong>Petiscos:</strong> Com moderação, apenas como recompensa
                </div>
              </div>
            </div>

            <div className="schedule-card">
              <div className="schedule-icon">⚖️</div>
              <h3>Controle de Peso</h3>
              <div className="schedule-content">
                <div className="schedule-item">
                  <strong>Peso ideal machos:</strong> 300-500g
                </div>
                <div className="schedule-item">
                  <strong>Peso ideal fêmeas:</strong> 250-400g
                </div>
                <div className="schedule-item">
                  <strong>Sinal de alerta:</strong> Ganho ou perda de peso súbita
                </div>
                <div className="schedule-item">
                  <strong>Dica:</strong> Pese seus ratos semanalmente para monitorar
                </div>
              </div>
            </div>
          </div>

          <HighlightBox variant="warning" icon="⚠️">
            <p>
              <strong>Atenção:</strong> Nunca deixe ratos sem comida por mais de 12 horas. 
              Ratos têm metabolismo rápido e podem desenvolver problemas de saúde se ficarem 
              sem alimento por muito tempo.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Alimentos Permitidos</h2>
            <p className="section-description">
              Uma dieta variada com alimentos frescos complementa a ração e enriquece 
              a alimentação dos seus ratos.
            </p>
          </div>
          
          <div className="food-grid-modern">
            <div className="food-card">
              <div className="food-header">
                <div className="food-icon">🍎</div>
                <h3>Frutas</h3>
              </div>
              <div className="food-list">
                <div className="food-item">Maçã (sem sementes)</div>
                <div className="food-item">Banana</div>
                <div className="food-item">Uva (sem sementes)</div>
                <div className="food-item">Melão</div>
                <div className="food-item">Melancia</div>
                <div className="food-item">Manga</div>
                <div className="food-item">Pêssego</div>
                <div className="food-item">Pera</div>
                <div className="food-item">Morango</div>
                <div className="food-item">Framboesa</div>
                <div className="food-item">Ameixa</div>
                <div className="food-item">Cereja (sem caroço)</div>
              </div>
              <div className="food-note">
                <strong>⚠️ Nota:</strong> Evite cítricos para machos (ver alimentos proibidos). 
                Ofereça 2-3 vezes por semana em pequenas quantidades.
              </div>
            </div>

            <div className="food-card">
              <div className="food-header">
                <div className="food-icon">🥕</div>
                <h3>Legumes e Verduras</h3>
              </div>
              <div className="food-list">
                <div className="food-item">Brócolis</div>
                <div className="food-item">Couve-flor</div>
                <div className="food-item">Cenoura</div>
                <div className="food-item">Abobrinha</div>
                <div className="food-item">Pepino</div>
                <div className="food-item">Espinafre (moderação)</div>
                <div className="food-item">Alface (moderação)</div>
                <div className="food-item">Ervilha</div>
                <div className="food-item">Milho</div>
                <div className="food-item">Batata doce (cozida)</div>
                <div className="food-item">Abóbora</div>
                <div className="food-item">Rabanete</div>
              </div>
              <div className="food-note">
                <strong>💡 Dica:</strong> Legumes podem ser oferecidos diariamente. 
                Lave bem antes de servir.
              </div>
            </div>

            <div className="food-card">
              <div className="food-header">
                <div className="food-icon">🥩</div>
                <h3>Proteínas</h3>
              </div>
              <div className="food-list">
                <div className="food-item">Ovo cozido (sem sal)</div>
                <div className="food-item">Frango cozido (sem temperos)</div>
                <div className="food-item">Peixe cozido (sem temperos)</div>
                <div className="food-item">Iogurte natural (sem açúcar)</div>
                <div className="food-item">Queijo (moderação)</div>
                <div className="food-item">Insetos desidratados</div>
                <div className="food-item">Tenébrios</div>
                <div className="food-item">Grilos</div>
              </div>
              <div className="food-note">
                <strong>📅 Frequência:</strong> Ofereça proteínas 2-3 vezes por semana. 
                Sempre cozidas e sem temperos.
              </div>
            </div>

            <div className="food-card">
              <div className="food-header">
                <div className="food-icon">🌾</div>
                <h3>Carboidratos e Outros</h3>
              </div>
              <div className="food-list">
                <div className="food-item">Arroz cozido (sem sal)</div>
                <div className="food-item">Massa cozida (sem sal)</div>
                <div className="food-item">Pão integral (moderação)</div>
                <div className="food-item">Nozes (moderação, sem sal)</div>
                <div className="food-item">Sementes de girassol (moderação)</div>
                <div className="food-item">Aveia</div>
                <div className="food-item">Quinoa cozida</div>
              </div>
              <div className="food-note">
                <strong>⚖️ Moderação:</strong> Alimentos ricos em carboidratos devem ser 
                oferecidos com moderação para evitar obesidade.
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Alimentos Proibidos</h2>
            <p className="section-description">
              Alguns alimentos são extremamente perigosos para ratos. Conheça o que 
              <strong> NUNCA</strong> deve ser oferecido.
            </p>
          </div>
          
          <div className="dangerous-foods-modern">
            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Cítricos para Machos</h3>
                <span className="danger-badge">FATAL</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Contêm d-limoneno, que causa danos renais graves 
                  e pode ser fatal em machos.
                </p>
                <div className="danger-list">
                  <strong>Evite:</strong> Laranja, limão, tangerina, toranja, lima
                </div>
                <div className="danger-note">
                  <strong>⚠️ Atenção:</strong> Fêmeas podem consumir cítricos com moderação, 
                  mas é mais seguro evitar completamente.
                </div>
              </div>
            </div>

            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Chocolate</h3>
                <span className="danger-badge">TÓXICO</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Contém teobromina, uma substância tóxica que ratos 
                  não conseguem metabolizar. Pode causar convulsões e morte.
                </p>
                <div className="danger-list">
                  <strong>Evite:</strong> Chocolate amargo, ao leite, branco, cacau em pó
                </div>
              </div>
            </div>

            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Feijão Cru</h3>
                <span className="danger-badge">TÓXICO</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Contém lectinas tóxicas que causam problemas digestivos 
                  graves. Sempre cozinhe bem antes de oferecer.
                </p>
                <div className="danger-list">
                  <strong>Seguro:</strong> Feijão bem cozido (sem sal) pode ser oferecido ocasionalmente
                </div>
              </div>
            </div>

            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Alimentos Processados</h3>
                <span className="danger-badge">PERIGOSO</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Sal, açúcar, conservantes e aditivos são prejudiciais 
                  e podem causar problemas de saúde a longo prazo.
                </p>
                <div className="danger-list">
                  <strong>Evite:</strong> Salgadinhos, doces, biscoitos, alimentos industrializados, 
                  comida humana temperada
                </div>
              </div>
            </div>

            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Alimentos com Cafeína</h3>
                <span className="danger-badge">TÓXICO</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Cafeína é tóxica para ratos e pode causar problemas 
                  cardíacos e neurológicos.
                </p>
                <div className="danger-list">
                  <strong>Evite:</strong> Café, chá preto/verde, refrigerantes, energéticos, 
                  chocolate (também contém cafeína)
                </div>
              </div>
            </div>

            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Alimentos com Álcool</h3>
                <span className="danger-badge">FATAL</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Qualquer quantidade de álcool é extremamente perigosa 
                  e pode ser fatal. Ratos são muito sensíveis ao álcool.
                </p>
                <div className="danger-list">
                  <strong>Evite:</strong> Bebidas alcoólicas, alimentos com álcool, fermentados
                </div>
              </div>
            </div>

            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Alho e Cebola</h3>
                <span className="danger-badge">TÓXICO</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Contêm compostos que podem causar anemia hemolítica 
                  (destruição de glóbulos vermelhos).
                </p>
                <div className="danger-list">
                  <strong>Evite:</strong> Alho, cebola, cebolinha, alho-poró em qualquer forma
                </div>
              </div>
            </div>

            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Abacate</h3>
                <span className="danger-badge">TÓXICO</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Contém persina, uma toxina que pode causar problemas 
                  cardíacos e respiratórios.
                </p>
                <div className="danger-list">
                  <strong>Evite:</strong> Abacate (polpa, caroço, casca)
                </div>
              </div>
            </div>

            <div className="danger-card">
              <div className="danger-header">
                <div className="danger-icon">❌</div>
                <h3>Ruibarbo</h3>
                <span className="danger-badge">TÓXICO</span>
              </div>
              <div className="danger-content">
                <p>
                  <strong>PERIGO:</strong> Contém ácido oxálico que pode causar problemas renais 
                  graves.
                </p>
                <div className="danger-list">
                  <strong>Evite:</strong> Ruibarbo em qualquer forma
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Hidratação</h2>
            <p className="section-description">
              Água limpa e fresca é essencial para a saúde dos seus ratos. Entenda as 
              melhores formas de oferecer água.
            </p>
          </div>
          
          <div className="hydration-comparison-modern">
            <div className="hydration-card good">
              <div className="hydration-header">
                <div className="hydration-icon">💧</div>
                <h3>Bebedouros de Bilha</h3>
                <span className="hydration-badge success">RECOMENDADO</span>
              </div>
              <div className="hydration-pros">
                <h4>✅ Vantagens</h4>
                <ul>
                  <li>Água sempre limpa e fresca</li>
                  <li>Fácil de monitorar consumo</li>
                  <li>Não derrama</li>
                  <li>Higiênico (menos contaminação)</li>
                  <li>Fácil de limpar</li>
                  <li>Previne acidentes</li>
                </ul>
              </div>
              <div className="hydration-recommendation">
                <strong>✅ RECOMENDADO:</strong> Use como fonte principal de água
              </div>
            </div>

            <div className="hydration-card">
              <div className="hydration-header">
                <div className="hydration-icon">🥣</div>
                <h3>Potes de Água</h3>
                <span className="hydration-badge warning">COMPLEMENTO</span>
              </div>
              <div className="hydration-pros">
                <h4>✅ Vantagens</h4>
                <ul>
                  <li>Fácil acesso</li>
                  <li>Mais natural</li>
                  <li>Alguns ratos preferem</li>
                </ul>
              </div>
              <div className="hydration-cons">
                <h4>⚠️ Desvantagens</h4>
                <ul>
                  <li>Água pode ser contaminada rapidamente</li>
                  <li>Pode derramar</li>
                  <li>Substrato pode cair dentro</li>
                  <li>Precisa trocar várias vezes ao dia</li>
                  <li>Menos higiênico</li>
                </ul>
              </div>
              <div className="hydration-recommendation warning">
                <strong>⚠️ ATENÇÃO:</strong> Use apenas como complemento, não como única fonte
              </div>
            </div>
          </div>

          <div className="hydration-tips">
            <h3>Dicas de Hidratação</h3>
            <div className="tips-grid">
              <div className="tip-item">
                <div className="tip-icon">🔄</div>
                <h4>Troca de Água</h4>
                <p>Troque a água diariamente, mesmo que ainda haja água no bebedouro.</p>
              </div>
              <div className="tip-item">
                <div className="tip-icon">🧹</div>
                <h4>Limpeza</h4>
                <p>Limpe o bebedouro semanalmente com água quente e escova. Evite sabão.</p>
              </div>
              <div className="tip-item">
                <div className="tip-icon">👀</div>
                <h4>Monitoramento</h4>
                <p>Observe o consumo diário. Mudanças podem indicar problemas de saúde.</p>
              </div>
              <div className="tip-item">
                <div className="tip-icon">🌡️</div>
                <h4>Temperatura</h4>
                <p>Ofereça água em temperatura ambiente. Evite água muito gelada ou quente.</p>
              </div>
            </div>
          </div>

          <HighlightBox variant="info" icon="💡">
            <p>
              <strong>Recomendação:</strong> Use bebedouros de bilha como fonte principal. 
              Mínimo de 1 bebedouro por rato, idealmente 2. Troque a água diariamente e 
              limpe o bebedouro semanalmente.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Petiscos e Recompensas</h2>
            <p className="section-description">
              Petiscos podem ser usados para treinamento e enriquecimento, mas devem ser 
              oferecidos com moderação.
            </p>
          </div>

          <div className="treats-section">
            <div className="treats-safe">
              <h3>✅ Petiscos Seguros</h3>
              <div className="treats-grid">
                <div className="treat-item">
                  <div className="treat-icon">🥜</div>
                  <h4>Nozes e Sementes</h4>
                  <p>Amendoim, nozes, sementes de girassol (sem sal, com moderação)</p>
                </div>
                <div className="treat-item">
                  <div className="treat-icon">🍪</div>
                  <h4>Petiscos Comerciais</h4>
                  <p>Petiscos específicos para ratos de marcas confiáveis</p>
                </div>
                <div className="treat-item">
                  <div className="treat-icon">🍎</div>
                  <h4>Frutas Secas</h4>
                  <p>Passas, damascos secos (sem açúcar, com moderação)</p>
                </div>
                <div className="treat-item">
                  <div className="treat-icon">🥚</div>
                  <h4>Proteínas</h4>
                  <p>Pequenos pedaços de ovo cozido ou frango (sem temperos)</p>
                </div>
              </div>
            </div>

            <div className="treats-guidelines">
              <h3>📋 Diretrizes para Petiscos</h3>
              <div className="guidelines-list">
                <div className="guideline-item">
                  <strong>Quantidade:</strong> Petiscos não devem ultrapassar 10% da dieta diária
                </div>
                <div className="guideline-item">
                  <strong>Frequência:</strong> Ofereça apenas ocasionalmente, como recompensa
                </div>
                <div className="guideline-item">
                  <strong>Escolha:</strong> Prefira petiscos saudáveis e naturais
                </div>
                <div className="guideline-item">
                  <strong>Monitoramento:</strong> Observe o peso dos ratos ao oferecer petiscos
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Problemas Alimentares Comuns</h2>
            <p className="section-description">
              Identifique e resolva problemas alimentares comuns em ratos.
            </p>
          </div>

          <div className="feeding-problems">
            <div className="problem-item-modern">
              <div className="problem-icon">⚖️</div>
              <h3>Obesidade</h3>
              <div className="problem-solution">
                <p><strong>Causas:</strong> Excesso de comida, petiscos demais, falta de exercício</p>
                <p><strong>Soluções:</strong></p>
                <ul>
                  <li>Reduza a quantidade de ração oferecida</li>
                  <li>Limite petiscos e alimentos ricos em gordura</li>
                  <li>Aumente o tempo de exercício fora da gaiola</li>
                  <li>Ofereça mais alimentos frescos e menos calóricos</li>
                  <li>Consulte um veterinário para plano de dieta</li>
                </ul>
              </div>
            </div>

            <div className="problem-item-modern">
              <div className="problem-icon">📉</div>
              <h3>Perda de Peso</h3>
              <div className="problem-solution">
                <p><strong>Causas:</strong> Doença, estresse, dentes longos, falta de apetite</p>
                <p><strong>Soluções:</strong></p>
                <ul>
                  <li>Consulte um veterinário imediatamente</li>
                  <li>Verifique se os dentes estão normais</li>
                  <li>Ofereça alimentos mais palatáveis e nutritivos</li>
                  <li>Reduza fontes de estresse</li>
                  <li>Monitore a ingestão de água</li>
                </ul>
              </div>
            </div>

            <div className="problem-item-modern">
              <div className="problem-icon">🍽️</div>
              <h3>Seletividade Alimentar</h3>
              <div className="problem-solution">
                <p><strong>Causas:</strong> Mix de sementes permite seleção, preferências individuais</p>
                <p><strong>Soluções:</strong></p>
                <ul>
                  <li>Use ração extrusada para evitar seleção</li>
                  <li>Se usar mix, monitore o que está sendo consumido</li>
                  <li>Ofereça alimentos frescos variados</li>
                  <li>Introduza novos alimentos gradualmente</li>
                </ul>
              </div>
            </div>

            <div className="problem-item-modern">
              <div className="problem-icon">🦷</div>
              <h3>Problemas com Dentes</h3>
              <div className="problem-solution">
                <p><strong>Causas:</strong> Dentes muito longos, má oclusão, falta de desgaste</p>
                <p><strong>Soluções:</strong></p>
                <ul>
                  <li>Ofereça brinquedos para roer (madeira segura)</li>
                  <li>Consulte veterinário para aparar dentes se necessário</li>
                  <li>Ofereça alimentos que exigem mastigação</li>
                  <li>Monitore o crescimento dos dentes regularmente</li>
                </ul>
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

export default Alimentacao

