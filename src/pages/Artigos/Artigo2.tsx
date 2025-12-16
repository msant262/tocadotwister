import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import './Artigos.css'

const Artigo2 = () => {
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
      const sections = contentRef.current.querySelectorAll('h2, h3')
      anime({
        targets: sections,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: (_el, i) => i * 100,
        duration: 600,
        easing: 'easeOutExpo',
      })

      const cards = contentRef.current.querySelectorAll('.consequence-card, .behavior-card, .group-size-card')
      anime({
        targets: cards,
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
      <section className="artigo-hero" ref={heroRef}>
        <Container>
          <div className="artigo-hero-content">
            <div className="artigo-category">Comportamento</div>
            <h1 className="artigo-hero-title">Por que não posso ter apenas um rato Twister?</h1>
            <p className="artigo-hero-meta">
              Publicado em: {new Date().toLocaleDateString('pt-BR')} | 
              Tempo de leitura: 7 minutos
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <article className="artigo">
          <div className="artigo-content" ref={contentRef}>
            <Card>
              <p className="artigo-intro">
                Esta é a <strong>Regra de Ouro</strong> da criação de Ratos Twister: 
                <strong> NUNCA tenha apenas um rato.</strong> Mas por quê? Vamos entender 
                a ciência e o comportamento por trás dessa regra fundamental que é essencial 
                para o bem-estar dos seus ratos.
              </p>

              <HighlightBox variant="warning" icon="⚠️">
                <p>
                  <strong>IMPORTANTE:</strong> Ratos são animais de colônia. Ter apenas um 
                  rato é considerado maus-tratos em muitos países e pode causar sofrimento grave. 
                  Esta não é uma recomendação opcional - é uma necessidade absoluta para o 
                  bem-estar dos ratos.
                </p>
              </HighlightBox>

            <h2>Ratos são animais de colônia</h2>
            <p>
              Ratos evoluíram para viver em grupos. Na natureza, eles vivem em colônias 
              complexas com hierarquias sociais, comunicação constante e comportamentos 
              cooperativos. Quando isolados, sofrem profundamente.
            </p>

            <div className="colony-info">
              <div className="colony-card">
                <div className="colony-icon">🏛️</div>
                <h3>Estrutura Social</h3>
                <p>
                  Ratos selvagens vivem em colônias de 10-200 indivíduos com hierarquias 
                  complexas, divisão de tarefas e cooperação para sobrevivência.
                </p>
              </div>

              <div className="colony-card">
                <div className="colony-icon">💬</div>
                <h3>Comunicação Constante</h3>
                <p>
                  Ratos se comunicam 24/7 através de ultrassons, cheiros, toques e 
                  comportamentos. Um rato solitário não tem ninguém para se comunicar.
                </p>
              </div>

              <div className="colony-card">
                <div className="colony-icon">🤝</div>
                <h3>Cooperação</h3>
                <p>
                  Ratos trabalham juntos para encontrar comida, cuidar dos filhotes, 
                  se aquecer e se proteger. Isolamento remove essas necessidades básicas.
                </p>
              </div>
            </div>

            <h2>Consequências da solidão</h2>
            <p>
              A solidão em ratos não é apenas tristeza - é um sofrimento profundo que afeta 
              física e mentalmente. Veja o que acontece quando um rato é mantido sozinho:
            </p>

            <div className="consequences-grid">
              <div className="consequence-card critical">
                <div className="consequence-icon">😔</div>
                <h3>1. Depressão e Ansiedade</h3>
                <p>
                  Ratos solitários desenvolvem comportamentos similares à depressão humana:
                </p>
                <div className="consequence-list">
                  <ul>
                    <li>Perda de interesse em atividades</li>
                    <li>Redução de apetite</li>
                    <li>Comportamento apático</li>
                    <li>Alterações no sono</li>
                    <li>Isolamento social (mesmo quando você tenta interagir)</li>
                    <li>Redução de exploração e curiosidade</li>
                  </ul>
                </div>
                <div className="consequence-note">
                  <strong>Estudos científicos:</strong> Pesquisas mostram que ratos solitários 
                  têm níveis elevados de cortisol (hormônio do estresse) e alterações 
                  neurológicas similares à depressão humana.
                </div>
              </div>

              <div className="consequence-card critical">
                <div className="consequence-icon">⚠️</div>
                <h3>2. Comportamentos Destrutivos</h3>
                <p>
                  Ratos solitários podem desenvolver comportamentos compulsivos e destrutivos:
                </p>
                <div className="consequence-list">
                  <ul>
                    <li>
                      <strong>Roer excessivo:</strong> Podem roer barras da gaiola obsessivamente, 
                      causando ferimentos nas patas e dentes
                    </li>
                    <li>
                      <strong>Auto-mutilação:</strong> Em casos extremos, podem se morder até 
                      causar feridas graves
                    </li>
                    <li>
                      <strong>Comportamento agressivo:</strong> Podem se tornar agressivos com 
                      humanos ou outros animais
                    </li>
                    <li>
                      <strong>Hiperatividade:</strong> Movimentos repetitivos e sem propósito
                    </li>
                    <li>
                      <strong>Destruição de objetos:</strong> Destroem tudo na gaiola por frustração
                    </li>
                  </ul>
                </div>
              </div>

              <div className="consequence-card critical">
                <div className="consequence-icon">🏥</div>
                <h3>3. Problemas de Saúde Física</h3>
                <p>
                  O estresse crônico da solidão enfraquece o sistema imunológico e causa 
                  problemas físicos:
                </p>
                <div className="consequence-list">
                  <ul>
                    <li>Doenças respiratórias mais frequentes</li>
                    <li>Infecções recorrentes</li>
                    <li>Tumores (o estresse crônico aumenta significativamente o risco)</li>
                    <li>Problemas digestivos</li>
                    <li>Queda de pelos (alopecia por estresse)</li>
                    <li>Ganho ou perda de peso anormal</li>
                  </ul>
                </div>
                <div className="consequence-note">
                  <strong>Fato:</strong> O estresse crônico é um dos principais fatores de risco 
                  para doenças em ratos, e a solidão é uma das maiores fontes de estresse.
                </div>
              </div>

              <div className="consequence-card critical">
                <div className="consequence-icon">⏳</div>
                <h3>4. Expectativa de Vida Reduzida</h3>
                <p>
                  Estudos científicos mostram que ratos solitários tendem a viver significativamente 
                  menos que ratos em grupos, mesmo com cuidados veterinários adequados.
                </p>
                <div className="consequence-stats">
                  <div className="stat-item">
                    <div className="stat-value">-30%</div>
                    <div className="stat-label">Redução média na expectativa de vida</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">2x</div>
                    <div className="stat-label">Maior risco de doenças graves</div>
                  </div>
                </div>
                <div className="consequence-note">
                  <strong>Pesquisa:</strong> Estudos comparativos mostram que ratos em grupos 
                  vivem em média 30% mais tempo e têm melhor qualidade de vida.
                </div>
              </div>
            </div>

            <h2>O que os ratos fazem juntos?</h2>
            <p>
              Ratos em grupos desenvolvem comportamentos sociais complexos e essenciais que 
              não podem ser replicados por interação humana:
            </p>

            <div className="behaviors-grid">
              <div className="behavior-card">
                <div className="behavior-icon">🪞</div>
                <h3>Grooming Mútuo</h3>
                <p>
                  Ratos passam horas cuidando uns dos outros, limpando e acariciando. 
                  Este comportamento:
                </p>
                <ul>
                  <li>Fortalece vínculos sociais</li>
                  <li>Reduz estresse</li>
                  <li>Mantém a higiene</li>
                  <li>É uma forma de comunicação</li>
                </ul>
                <div className="behavior-note">
                  <strong>Importante:</strong> Humanos não podem substituir este comportamento. 
                  É específico da espécie.
                </div>
              </div>

              <div className="behavior-card">
                <div className="behavior-icon">🎮</div>
                <h3>Brincadeiras</h3>
                <p>
                  Ratos brincam juntos de formas que humanos não podem replicar:
                </p>
                <ul>
                  <li>Correm e perseguem uns aos outros</li>
                  <li>Brincam de "lutar" (wrestling)</li>
                  <li>Exploram juntos</li>
                  <li>Compartilham brinquedos</li>
                </ul>
                <div className="behavior-note">
                  <strong>Benefício:</strong> Brincadeiras reduzem estresse e promovem 
                  bem-estar mental.
                </div>
              </div>

              <div className="behavior-card">
                <div className="behavior-icon">🛏️</div>
                <h3>Dormir Juntos</h3>
                <p>
                  Ratos formam "pilhas" ou "cuddles" para:
                </p>
                <ul>
                  <li>Se aquecerem (termorregulação)</li>
                  <li>Se sentirem seguros</li>
                  <li>Manter contato físico constante</li>
                  <li>Reduzir ansiedade</li>
                </ul>
                <div className="behavior-note">
                  <strong>Fato:</strong> Ratos solitários têm padrões de sono alterados e 
                  dormem menos profundamente.
                </div>
              </div>

              <div className="behavior-card">
                <div className="behavior-icon">📡</div>
                <h3>Comunicação Ultrassônica</h3>
                <p>
                  Ratos se comunicam através de ultrassons (inaudíveis para humanos):
                </p>
                <ul>
                  <li>Chamados de felicidade (50kHz)</li>
                  <li>Chamados de alarme (22kHz)</li>
                  <li>Comunicação durante brincadeiras</li>
                  <li>Vocalizações sociais complexas</li>
                </ul>
                <div className="behavior-note">
                  <strong>Ciência:</strong> Ratos solitários emitem menos chamados de felicidade 
                  e mais chamados de angústia.
                </div>
              </div>

              <div className="behavior-card">
                <div className="behavior-icon">👑</div>
                <h3>Hierarquia Social</h3>
                <p>
                  Ratos estabelecem relações sociais complexas:
                </p>
                <ul>
                  <li>Relações de dominância e submissão</li>
                  <li>Alianças e amizades</li>
                  <li>Resolução de conflitos</li>
                  <li>Cooperação em tarefas</li>
                </ul>
                <div className="behavior-note">
                  <strong>Importante:</strong> Esta estrutura social é essencial para o 
                  bem-estar mental dos ratos.
                </div>
              </div>

              <div className="behavior-card">
                <div className="behavior-icon">🍽️</div>
                <h3>Alimentação Social</h3>
                <p>
                  Ratos comem melhor quando estão em grupo:
                </p>
                <ul>
                  <li>Compartilham descobertas de comida</li>
                  <li>Comem juntos (comportamento natural)</li>
                  <li>Aprendem uns com os outros</li>
                  <li>Sentem-se mais seguros para explorar</li>
                </ul>
              </div>
            </div>

            <h2>Quantos ratos ter?</h2>
            <p>
              Entenda qual é o número ideal de ratos para garantir o bem-estar do grupo:
            </p>

            <div className="group-sizes-rows">
              <div className="group-size-row minimum">
                <div className="size-row-left">
                  <div className="size-number">1.</div>
                  <div className="size-title-text">
                    <h3>Mínimo Absoluto: 2 Ratos</h3>
                    <p>
                      <strong>O mínimo necessário</strong> para evitar solidão. Funciona, mas 
                      não é ideal.
                    </p>
                  </div>
                </div>
                <div className="size-row-middle">
                  <strong>✅ Vantagens:</strong>
                  <ul>
                    <li>Evita solidão</li>
                    <li>Permite interação social básica</li>
                    <li>Mais acessível financeiramente</li>
                    <li>Requer menos espaço</li>
                  </ul>
                </div>
                <div className="size-row-right">
                  <strong>⚠️ Desvantagens:</strong>
                  <ul>
                    <li>Se um morrer, o outro fica sozinho</li>
                    <li>Menos dinâmicas sociais</li>
                    <li>Mais dependência entre os dois</li>
                  </ul>
                </div>
              </div>

              <div className="group-size-row ideal highlight">
                <div className="size-row-left">
                  <div className="size-number">2.</div>
                  <div className="size-title-text">
                    <h3>Ideal: 3-4 Ratos</h3>
                    <p>
                      <strong>O número ideal</strong> para bem-estar, dinâmicas sociais e segurança.
                    </p>
                    <div className="size-recommendation">
                      <strong>⭐ RECOMENDADO:</strong> Este é o número ideal para a maioria 
                      dos tutores!
                    </div>
                  </div>
                </div>
                <div className="size-row-middle">
                  <strong>✅ Vantagens:</strong>
                  <ul>
                    <li>Se um morrer, os outros ainda têm companhia</li>
                    <li>Dinâmicas sociais mais complexas</li>
                    <li>Melhor distribuição de atenção</li>
                    <li>Grupos mais estáveis</li>
                    <li>Menos estresse individual</li>
                    <li>Melhor qualidade de vida</li>
                  </ul>
                </div>
                <div className="size-row-right">
                  <p className="no-disadvantages">Sem desvantagens significativas quando há espaço adequado.</p>
                </div>
              </div>

              <div className="group-size-row larger">
                <div className="size-row-left">
                  <div className="size-number">3.</div>
                  <div className="size-title-text">
                    <h3>Grupos Maiores: 5+ Ratos</h3>
                    <p>
                      <strong>Funcionam bem</strong> se você tiver espaço adequado e recursos.
                    </p>
                    <div className="size-note">
                      <strong>💡 Dica:</strong> Use nossa <Link to="/calculadora">Calculadora de Gaiola</Link> para 
                      verificar se você tem espaço suficiente!
                    </div>
                  </div>
                </div>
                <div className="size-row-middle">
                  <strong>✅ Vantagens:</strong>
                  <ul>
                    <li>Dinâmicas sociais muito ricas</li>
                    <li>Máxima estabilidade do grupo</li>
                    <li>Muito enriquecimento social</li>
                  </ul>
                </div>
                <div className="size-row-right">
                  <strong>⚠️ Requisitos:</strong>
                  <ul>
                    <li>Muito espaço (gaiola grande)</li>
                    <li>Custos maiores</li>
                    <li>Mais tempo de cuidado</li>
                    <li>Pode ser mais difícil gerenciar</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>E se eu passar muito tempo com meu rato?</h2>
            <p>
              Esta é uma pergunta comum, mas a resposta é clara: <strong>não é suficiente.</strong> 
              Por mais que você ame seu rato e passe tempo com ele, há coisas que você simplesmente 
              não pode fazer:
            </p>

            <div className="human-limitations">
              <div className="limitation-card">
                <div className="limitation-icon">❌</div>
                <h3>O que humanos NÃO podem fazer</h3>
                <div className="limitation-list">
                  <div className="limitation-item">
                    <strong>Dormir com ele na gaiola:</strong> Ratos precisam de companhia 
                    durante a noite, quando você está dormindo.
                  </div>
                  <div className="limitation-item">
                    <strong>Comunicar-se na linguagem dele:</strong> Ratos usam ultrassons e 
                    comportamentos específicos que humanos não podem replicar.
                  </div>
                  <div className="limitation-item">
                    <strong>Brincar como outro rato:</strong> Brincadeiras entre ratos envolvem 
                    perseguições, lutas simuladas e comportamentos específicos da espécie.
                  </div>
                  <div className="limitation-item">
                    <strong>Estar presente 24 horas por dia:</strong> Mesmo que você trabalhe 
                    em casa, você não pode estar sempre disponível.
                  </div>
                  <div className="limitation-item">
                    <strong>Fornecer grooming mútuo:</strong> Ratos passam horas cuidando uns 
                    dos outros de formas que humanos não podem replicar.
                  </div>
                  <div className="limitation-item">
                    <strong>Entender necessidades sociais:</strong> Humanos não podem entender 
                    completamente as necessidades sociais complexas dos ratos.
                  </div>
                </div>
              </div>

              <div className="limitation-card highlight">
                <div className="limitation-icon">✅</div>
                <h3>O que humanos PODEM fazer</h3>
                <div className="limitation-list">
                  <div className="limitation-item">
                    <strong>Fornecer cuidados básicos:</strong> Alimentação, limpeza, cuidados 
                    veterinários.
                  </div>
                  <div className="limitation-item">
                    <strong>Interagir e brincar:</strong> Interação humana é importante, mas 
                    complementa, não substitui, a interação entre ratos.
                  </div>
                  <div className="limitation-item">
                    <strong>Prover enriquecimento:</strong> Brinquedos, atividades, exploração.
                  </div>
                  <div className="limitation-item">
                    <strong>Garantir companhia da mesma espécie:</strong> Esta é a coisa mais 
                    importante que você pode fazer!
                  </div>
                </div>
              </div>
            </div>

            <HighlightBox variant="info" icon="💡">
              <p>
                <strong>Lembre-se:</strong> Humanos e ratos são espécies diferentes. Seu rato 
                precisa de companhia da mesma espécie para ser verdadeiramente feliz. Sua 
                interação é valiosa e importante, mas não substitui a necessidade fundamental 
                de ter outros ratos como companheiros.
              </p>
            </HighlightBox>

            <h2>E se eu não puder ter mais de um?</h2>
            <p>
              Esta é uma questão importante que precisa ser abordada com honestidade:
            </p>

            <div className="alternatives-rows">
              <div className="alternative-row warning">
                <div className="alt-row-left">
                  <div className="alt-number">1.</div>
                  <div className="alt-title-text">
                    <h3>A Resposta Direta</h3>
                    <p>
                      Se você realmente não pode ter pelo menos 2 ratos (por questões de espaço, 
                      custo ou outras limitações), então <strong>não deve ter ratos.</strong>
                    </p>
                  </div>
                </div>
                <div className="alt-row-middle">
                  <div className="alt-reason">
                    <strong>Por quê?</strong> É melhor não ter nenhum do que ter um rato solitário 
                    sofrendo. Ter um rato sozinho é considerado maus-tratos e causa sofrimento 
                    grave e desnecessário.
                  </div>
                </div>
                <div className="alt-row-right">
                  <div className="alt-icon">🚫</div>
                </div>
              </div>

              <div className="alternative-row">
                <div className="alt-row-left">
                  <div className="alt-number">2.</div>
                  <div className="alt-title-text">
                    <h3>Alternativas</h3>
                    <p>
                      Se você não pode ter pelo menos 2 ratos, considere outras opções de pets:
                    </p>
                  </div>
                </div>
                <div className="alt-row-middle">
                  <div className="alternative-options">
                    <div className="option-item">
                      <strong>Hamsters:</strong> Podem viver sozinhos (embora alguns se beneficiem 
                      de companhia). São menores e requerem menos espaço.
                    </div>
                    <div className="option-item">
                      <strong>Porquinhos-da-índia:</strong> Também são sociais, mas têm necessidades 
                      diferentes. Requerem pelo menos 2 também.
                    </div>
                    <div className="option-item">
                      <strong>Outros pets solitários:</strong> Considere pets que realmente podem 
                      viver sozinhos se essa é sua limitação.
                    </div>
                  </div>
                </div>
                <div className="alt-row-right">
                  <div className="alt-icon">🐹</div>
                </div>
              </div>

              <div className="alternative-row highlight">
                <div className="alt-row-left">
                  <div className="alt-number">3.</div>
                  <div className="alt-title-text">
                    <h3>Planejamento</h3>
                    <p>
                      Antes de adotar qualquer pet, planeje:
                    </p>
                  </div>
                </div>
                <div className="alt-row-middle">
                  <div className="planning-checklist">
                    <div className="plan-item">✅ Espaço adequado para o número mínimo</div>
                    <div className="plan-item">✅ Recursos financeiros para cuidados</div>
                    <div className="plan-item">✅ Tempo para cuidados adequados</div>
                    <div className="plan-item">✅ Compromisso com o bem-estar do animal</div>
                  </div>
                </div>
                <div className="alt-row-right">
                  <div className="alt-icon">💡</div>
                  <div className="alternative-note">
                    <strong>Dica:</strong> Use nossa <Link to="/quiz">Quiz "Você está pronto?"</Link> para 
                    avaliar se você está preparado para ter ratos!
                  </div>
                </div>
              </div>
            </div>

            <h2>Sinais de que um rato está sofrendo por solidão</h2>
            <p>
              É importante reconhecer os sinais de que um rato está sofrendo por falta de companhia. 
              Muitos tutores não percebem esses sinais porque ratos são muito bons em esconder sofrimento:
            </p>

            <div className="loneliness-signs">
              <div className="sign-card behavioral">
                <div className="sign-icon">😔</div>
                <h3>Sinais Comportamentais</h3>
                <ul>
                  <li><strong>Apatia:</strong> Perda de interesse em atividades, brinquedos e exploração</li>
                  <li><strong>Isolamento:</strong> Fica escondido na gaiola, evita interação</li>
                  <li><strong>Roer excessivo:</strong> Rói barras da gaiola obsessivamente</li>
                  <li><strong>Hiperatividade:</strong> Movimentos repetitivos sem propósito</li>
                  <li><strong>Agressividade:</strong> Pode se tornar agressivo com humanos</li>
                  <li><strong>Auto-mutilação:</strong> Em casos extremos, pode se morder</li>
                </ul>
              </div>

              <div className="sign-card physical">
                <div className="sign-icon">🏥</div>
                <h3>Sinais Físicos</h3>
                <ul>
                  <li><strong>Queda de pelos:</strong> Alopecia por estresse</li>
                  <li><strong>Perda ou ganho de peso:</strong> Alterações no apetite</li>
                  <li><strong>Doenças recorrentes:</strong> Sistema imunológico enfraquecido</li>
                  <li><strong>Problemas respiratórios:</strong> Mais frequentes em ratos solitários</li>
                  <li><strong>Alterações no sono:</strong> Padrões de sono irregulares</li>
                  <li><strong>Redução de atividade:</strong> Menos movimento e exploração</li>
                </ul>
              </div>

              <div className="sign-card emotional">
                <div className="sign-icon">💔</div>
                <h3>Sinais Emocionais</h3>
                <ul>
                  <li><strong>Menos vocalizações:</strong> Emite menos chamados de felicidade</li>
                  <li><strong>Redução de grooming:</strong> Menos cuidado pessoal</li>
                  <li><strong>Falta de curiosidade:</strong> Não explora novos objetos</li>
                  <li><strong>Comportamento estereotipado:</strong> Movimentos repetitivos</li>
                  <li><strong>Redução de interação:</strong> Evita contato com humanos</li>
                  <li><strong>Expressão "triste":</strong> Postura corporal indicando sofrimento</li>
                </ul>
              </div>
            </div>

            <HighlightBox variant="warning" icon="⚠️">
              <p>
                <strong>Importante:</strong> Se você notar qualquer um desses sinais em um rato solitário, 
                a solução é adicionar pelo menos um companheiro. Muitos desses sinais desaparecem 
                rapidamente quando o rato recebe companhia adequada.
              </p>
            </HighlightBox>

            <h2>Estudos Científicos</h2>
            <p>
              A necessidade de companhia em ratos não é apenas uma opinião - é apoiada por evidências 
              científicas sólidas:
            </p>

            <div className="studies-section">
              <div className="study-card">
                <div className="study-icon">🔬</div>
                <h3>Estudos sobre Depressão</h3>
                <p>
                  Pesquisas mostram que ratos isolados desenvolvem comportamentos similares à depressão 
                  humana, incluindo:
                </p>
                <ul>
                  <li>Redução de atividade exploratória</li>
                  <li>Alterações nos níveis de neurotransmissores (serotonina, dopamina)</li>
                  <li>Comportamentos de desesperança aprendida</li>
                  <li>Respostas reduzidas a estímulos positivos</li>
                </ul>
              </div>

              <div className="study-card">
                <div className="study-icon">📊</div>
                <h3>Estudos sobre Longevidade</h3>
                <p>
                  Estudos comparativos mostram diferenças significativas entre ratos solitários e 
                  ratos em grupos:
                </p>
                <ul>
                  <li>Ratos em grupos vivem em média 30% mais tempo</li>
                  <li>Menor incidência de doenças graves</li>
                  <li>Melhor função imunológica</li>
                  <li>Menor estresse crônico</li>
                </ul>
              </div>

              <div className="study-card">
                <div className="study-icon">🧠</div>
                <h3>Estudos sobre Comportamento Social</h3>
                <p>
                  Pesquisas sobre comportamento social em ratos demonstram:
                </p>
                <ul>
                  <li>Ratos têm sistemas sociais complexos com hierarquias</li>
                  <li>Comunicação através de ultrassons (50kHz para felicidade, 22kHz para angústia)</li>
                  <li>Ratos solitários emitem mais chamados de angústia</li>
                  <li>Comportamentos sociais são essenciais para bem-estar</li>
                </ul>
              </div>

              <div className="study-card">
                <div className="study-icon">💉</div>
                <h3>Estudos sobre Saúde Física</h3>
                <p>
                  O estresse da solidão afeta diretamente a saúde física:
                </p>
                <ul>
                  <li>Níveis elevados de cortisol (hormônio do estresse)</li>
                  <li>Sistema imunológico enfraquecido</li>
                  <li>Maior suscetibilidade a infecções</li>
                  <li>Maior risco de desenvolvimento de tumores</li>
                </ul>
              </div>
            </div>

            <h2>Como introduzir um segundo rato</h2>
            <p>
              Se você já tem um rato solitário, não é tarde demais! Você pode e deve adicionar um 
              companheiro. A introdução deve ser feita cuidadosamente:
            </p>

            <div className="introduction-tips">
              <div className="tip-card">
                <div className="tip-icon">1️⃣</div>
                <h3>Escolha o Companheiro Certo</h3>
                <ul>
                  <li>Prefira ratos da mesma idade ou mais jovens</li>
                  <li>Evite introduzir ratos muito mais velhos</li>
                  <li>Considere o temperamento (mas não desista se houver desafios)</li>
                  <li>Ratos machos geralmente aceitam melhor outros machos jovens</li>
                </ul>
              </div>

              <div className="tip-card">
                <div className="tip-icon">2️⃣</div>
                <h3>Quarentena Inicial</h3>
                <ul>
                  <li>Mantenha o novo rato em quarentena por 2-3 semanas</li>
                  <li>Isso previne transmissão de doenças</li>
                  <li>Permite que ambos se acostumem com os cheiros</li>
                  <li>Observe a saúde do novo rato durante este período</li>
                </ul>
              </div>

              <div className="tip-card">
                <div className="tip-icon">3️⃣</div>
                <h3>Introdução Gradual</h3>
                <ul>
                  <li>Comece com gaiolas separadas lado a lado</li>
                  <li>Permita que se vejam e cheirem através das grades</li>
                  <li>Troque itens entre as gaiolas para troca de cheiros</li>
                  <li>Após alguns dias, tente introdução em área neutra</li>
                </ul>
              </div>

              <div className="tip-card">
                <div className="tip-icon">4️⃣</div>
                <h3>Supervisão e Paciência</h3>
                <ul>
                  <li>Supervise todas as interações iniciais</li>
                  <li>Espere algum comportamento de dominância (normal)</li>
                  <li>Separe apenas se houver agressão real (mordidas que sangram)</li>
                  <li>Seja paciente - pode levar semanas para estabelecer hierarquia</li>
                </ul>
              </div>
            </div>

            <HighlightBox variant="info" icon="📖">
              <p>
                <strong>Guia Completo:</strong> Para um guia detalhado passo a passo sobre como 
                introduzir um novo rato ao grupo, consulte nosso artigo 
                <Link to="/artigos/apresentar-rato"> "Como apresentar um rato novo para o grupo"</Link>.
              </p>
            </HighlightBox>

            <h2>Mitos Comuns</h2>
            <p>
              Vamos desmistificar algumas crenças comuns sobre ter apenas um rato:
            </p>

            <div className="myths-section">
              <div className="myth-card">
                <div className="myth-icon">❌</div>
                <h3>"Meu rato parece feliz sozinho"</h3>
                <div className="myth-explanation">
                  <p>
                    <strong>Realidade:</strong> Ratos são muito bons em esconder sofrimento. 
                    Comportamentos aparentemente "normais" podem mascarar depressão e ansiedade. 
                    A ausência de sinais óbvios não significa bem-estar.
                  </p>
                </div>
              </div>

              <div className="myth-card">
                <div className="myth-icon">❌</div>
                <h3>"Ele é muito agressivo com outros ratos"</h3>
                <div className="myth-explanation">
                  <p>
                    <strong>Realidade:</strong> Muitas vezes, agressividade é resultado de 
                    introdução inadequada ou falta de socialização. Com métodos corretos de 
                    introdução, a maioria dos ratos pode viver em grupo. Consulte um veterinário 
                    ou especialista se houver problemas.
                  </p>
                </div>
              </div>

              <div className="myth-card">
                <div className="myth-icon">❌</div>
                <h3>"Eu passo muito tempo com ele"</h3>
                <div className="myth-explanation">
                  <p>
                    <strong>Realidade:</strong> Como explicado acima, interação humana não 
                    substitui interação entre ratos. São necessidades diferentes e 
                    complementares, não substitutas.
                  </p>
                </div>
              </div>

              <div className="myth-card">
                <div className="myth-icon">❌</div>
                <h3>"É muito caro ter dois"</h3>
                <div className="myth-explanation">
                  <p>
                    <strong>Realidade:</strong> O custo adicional de um segundo rato é mínimo 
                    comparado ao custo inicial. A maior parte dos custos (gaiola, acessórios) 
                    é compartilhada. Se o custo é uma limitação real, considere se você tem 
                    recursos para cuidar adequadamente de qualquer pet.
                  </p>
                </div>
              </div>
            </div>

            <h2>Conclusão</h2>
            <p>
              Ter apenas um rato Twister é cruel e causa sofrimento desnecessário. Ratos são 
              animais de colônia que precisam de companhia da mesma espécie para serem saudáveis 
              e felizes. O mínimo são 2 ratos, mas 3-4 é ideal.
            </p>
            <p>
              Se você não pode ter pelo menos 2 ratos, considere uma espécie diferente de pet 
              que seja adequada para suas circunstâncias. Ter um pet é um compromisso com o 
              bem-estar dele - faça a escolha certa para o animal, não apenas para você.
            </p>

            <HighlightBox variant="warning" icon="⚠️">
              <p>
                <strong>Lembre-se:</strong> Esta não é uma recomendação opcional ou uma preferência. 
                É uma necessidade absoluta para o bem-estar dos ratos. Se você não pode fornecer 
                pelo menos 2 ratos, não deve ter ratos. O bem-estar do animal deve sempre vir 
                em primeiro lugar.
              </p>
            </HighlightBox>
          </Card>
        </div>
      </article>
    </Container>
    </>
  )
}

export default Artigo2

