import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import './Artigos.css'

const Artigo1 = () => {
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
    }
  }, [])

  return (
    <>
      <section className="artigo-hero" ref={heroRef}>
        <Container>
          <div className="artigo-hero-content">
            <div className="artigo-category">Cuidados Básicos</div>
            <h1 className="artigo-hero-title">Rato Twister cheira mal? Como evitar odores na gaiola</h1>
            <p className="artigo-hero-meta">
              Publicado em: {new Date().toLocaleDateString('pt-BR')} | 
              Tempo de leitura: 8 minutos
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <article className="artigo">
          <div className="artigo-content" ref={contentRef}>
            <Card>
              <p className="artigo-intro">
                Uma das preocupações mais comuns de quem está pensando em ter um Rato Twister 
                é sobre o cheiro. A boa notícia é que com os cuidados adequados, você pode 
                manter uma gaiola praticamente sem odores desagradáveis! Neste guia completo, 
                você aprenderá tudo sobre prevenção e controle de odores.
              </p>

            <h2>Por que ratos podem cheirar mal?</h2>
            <p>
              Entender a origem dos odores é o primeiro passo para combatê-los. O odor em 
              gaiolas de ratos geralmente vem de várias fontes:
            </p>
            
            <div className="odor-sources">
              <div className="odor-source-card">
                <div className="odor-icon">💧</div>
                <h3>Urina Acumulada</h3>
                <p>
                  A urina de ratos contém amônia, que produz um cheiro forte e característico 
                  quando se acumula. Ratos urinam frequentemente para marcar território, 
                  então a acumulação é comum.
                </p>
                <div className="odor-details">
                  <strong>Por que acontece:</strong> Ratos marcam território com urina, 
                  especialmente machos. Em gaiolas pequenas ou com muitos ratos, a urina 
                  se acumula rapidamente.
                </div>
              </div>

              <div className="odor-source-card">
                <div className="odor-icon">🌿</div>
                <h3>Substrato Saturado</h3>
                <p>
                  Substratos de baixa qualidade ou saturados de urina começam a cheirar 
                  rapidamente. Quando o substrato não consegue mais absorver, a urina 
                  fica exposta.
                </p>
                <div className="odor-details">
                  <strong>Sinais:</strong> Substrato escurecido, úmido ao toque, ou com 
                  manchas amareladas indicam saturação.
                </div>
              </div>

              <div className="odor-source-card">
                <div className="odor-icon">💨</div>
                <h3>Ventilação Inadequada</h3>
                <p>
                  Gaiolas mal ventiladas retêm odores e permitem acúmulo de amônia no ar. 
                  Isso é especialmente problemático em aquários ou gaiolas com poucas aberturas.
                </p>
                <div className="odor-details">
                  <strong>Problema:</strong> Amônia no ar pode causar problemas respiratórios 
                  nos ratos além do odor desagradável.
                </div>
              </div>

              <div className="odor-source-card">
                <div className="odor-icon">🦠</div>
                <h3>Bactérias e Fungos</h3>
                <p>
                  Ambientes úmidos e sujos favorecem o crescimento de bactérias e fungos, 
                  que produzem odores característicos e podem ser prejudiciais à saúde.
                </p>
                <div className="odor-details">
                  <strong>Prevenção:</strong> Limpeza regular e substrato seco previnem 
                  o crescimento de microorganismos.
                </div>
              </div>
            </div>

            <h2>Como evitar odores na gaiola</h2>
            <p>
              A prevenção é sempre melhor que a correção. Siga estas estratégias comprovadas 
              para manter sua gaiola sem odores:
            </p>

            <h3>1. Escolha o substrato certo</h3>
            <p>
              O substrato é a base do controle de odores. Substratos de alta qualidade fazem 
              toda a diferença:
            </p>
            
            <div className="substrate-comparison">
              <div className="substrate-card highlight">
                <div className="substrate-icon">✅</div>
                <h4>Celulose</h4>
                <div className="substrate-pros">
                  <strong>Vantagens:</strong>
                  <ul>
                    <li>Muito absorvente (até 3x seu peso)</li>
                    <li>Excelente controle de odor</li>
                    <li>Sem poeira</li>
                    <li>Seguro para ratos</li>
                    <li>Disponível no Brasil</li>
                  </ul>
                </div>
                <div className="substrate-where">
                  <strong>Onde encontrar:</strong> Pet shops, lojas online (R$ 30-80)
                </div>
                <div className="substrate-recommendation">
                  <strong>✅ RECOMENDADO para o Brasil</strong>
                </div>
              </div>

              <div className="substrate-card">
                <div className="substrate-icon">🌿</div>
                <h4>Hemp (Cânhamo)</h4>
                <div className="substrate-pros">
                  <strong>Vantagens:</strong>
                  <ul>
                    <li>Excelente controle de odor</li>
                    <li>Muito absorvente</li>
                    <li>Sustentável</li>
                    <li>Baixa poeira</li>
                  </ul>
                </div>
                <div className="substrate-where">
                  <strong>Disponibilidade:</strong> Importado, difícil encontrar no Brasil
                </div>
              </div>

              <div className="substrate-card">
                <div className="substrate-icon">🌲</div>
                <h4>Granulado de Madeira</h4>
                <div className="substrate-pros">
                  <strong>Vantagens:</strong>
                  <ul>
                    <li>Absorvente</li>
                    <li>Econômico em grandes quantidades</li>
                    <li>Bom controle de odor</li>
                  </ul>
                </div>
                <div className="substrate-warning">
                  <strong>⚠️ ATENÇÃO:</strong> Apenas madeiras seguras! Evite pinus, 
                  eucalipto e outras madeiras tóxicas.
                </div>
              </div>
            </div>

            <HighlightBox variant="info" icon="💡">
              <p>
                <strong>Dica de Economia:</strong> Evite substratos baratos ou de baixa qualidade. 
                Eles podem parecer econômicos, mas você precisará trocar com mais frequência, 
                acabando por gastar mais. Invista em qualidade!
              </p>
            </HighlightBox>

            <h3>2. Limpeza regular e sistemática</h3>
            <p>
              A frequência de limpeza depende do tamanho da gaiola, número de ratos e tipo de 
              substrato. Crie uma rotina que funcione para você:
            </p>

            <div className="cleaning-schedule">
              <div className="cleaning-card">
                <div className="cleaning-icon">🔄</div>
                <h4>Limpeza Parcial (Diária)</h4>
                <div className="cleaning-steps">
                  <strong>O que fazer:</strong>
                  <ul>
                    <li>Remova áreas molhadas ou sujas</li>
                    <li>Substitua apenas o substrato molhado</li>
                    <li>Limpe potes de comida e água</li>
                    <li>Verifique bebedouros</li>
                  </ul>
                </div>
                <div className="cleaning-time">
                  <strong>⏱️ Tempo:</strong> 5-10 minutos
                </div>
              </div>

              <div className="cleaning-card">
                <div className="cleaning-icon">🧹</div>
                <h4>Limpeza Completa (1-2x por semana)</h4>
                <div className="cleaning-steps">
                  <strong>O que fazer:</strong>
                  <ul>
                    <li>Remova todo o substrato antigo</li>
                    <li>Limpe acessórios (casinhas, brinquedos)</li>
                    <li>Limpe grades e portas</li>
                    <li>Adicione substrato novo</li>
                    <li>Reorganize acessórios</li>
                  </ul>
                </div>
                <div className="cleaning-time">
                  <strong>⏱️ Tempo:</strong> 20-30 minutos
                </div>
              </div>

              <div className="cleaning-card">
                <div className="cleaning-icon">✨</div>
                <h4>Limpeza Profunda (A cada 2-4 semanas)</h4>
                <div className="cleaning-steps">
                  <strong>O que fazer:</strong>
                  <ul>
                    <li>Desmonte a gaiola completamente</li>
                    <li>Lave todas as partes com água e vinagre</li>
                    <li>Deixe secar completamente</li>
                    <li>Substitua substrato e acessórios</li>
                    <li>Monte tudo novamente</li>
                  </ul>
                </div>
                <div className="cleaning-time">
                  <strong>⏱️ Tempo:</strong> 1-2 horas
                </div>
              </div>
            </div>

            <div className="cleaning-tips">
              <h4>💡 Dicas para facilitar a limpeza:</h4>
              <ul>
                <li><strong>Tenha substrato extra:</strong> Mantenha um estoque para não ficar sem</li>
                <li><strong>Use luvas:</strong> Proteja suas mãos durante a limpeza</li>
                <li><strong>Limpe em local arejado:</strong> Preferencialmente ao ar livre ou com janelas abertas</li>
                <li><strong>Crie uma rotina:</strong> Escolha dias fixos para facilitar a organização</li>
                <li><strong>Envolva a família:</strong> Divida as tarefas para não sobrecarregar</li>
              </ul>
            </div>

            <h3>3. Ventilação adequada</h3>
            <p>
              A ventilação é crucial para prevenir acúmulo de amônia e odores. Entenda por quê:
            </p>

            <HighlightBox variant="warning" icon="⚠️">
              <p>
                <strong>NUNCA use aquários ou recipientes fechados!</strong> Eles não permitem 
                circulação de ar adequada, causando acúmulo de amônia que é prejudicial à saúde 
                dos ratos e produz odores fortes.
              </p>
            </HighlightBox>

            <div className="ventilation-tips">
              <h4>Características de uma gaiola bem ventilada:</h4>
              <ul>
                <li><strong>Malha em todos os lados:</strong> Permite circulação de ar 360°</li>
                <li><strong>Espaçamento adequado:</strong> Malha de 0.5-0.8cm é ideal</li>
                <li><strong>Múltiplas aberturas:</strong> Portas e aberturas facilitam ventilação</li>
                <li><strong>Localização:</strong> Coloque em local arejado, não em cantos fechados</li>
              </ul>
            </div>

            <h3>4. Bebedouros e potes limpos</h3>
            <p>
              Bebedouros e potes sujos são fontes de bactérias e odores. Mantenha-os sempre limpos:
            </p>
            <div className="water-care">
              <div className="water-tip">
                <strong>Bebedouros de Bilha:</strong>
                <ul>
                  <li>Limpe semanalmente com água quente e escova</li>
                  <li>Troque a água diariamente</li>
                  <li>Verifique se não há acúmulo de algas ou sujeira</li>
                  <li>Use vinagre para limpeza profunda (enxágue bem)</li>
                </ul>
              </div>
              <div className="water-tip">
                <strong>Potes de Água:</strong>
                <ul>
                  <li>Lave diariamente</li>
                  <li>Verifique se não há substrato dentro</li>
                  <li>Substitua se estiver rachado ou sujo</li>
                </ul>
              </div>
            </div>

            <h3>5. Número adequado de ratos e espaço</h3>
            <p>
              Uma gaiola superlotada produzirá mais urina e fezes, aumentando odores significativamente. 
              O espaço adequado é essencial:
            </p>
            <div className="space-guidelines">
              <div className="space-card">
                <strong>Volume mínimo por rato:</strong> 0,5 m³ (500 litros)
              </div>
              <div className="space-card">
                <strong>Fórmula:</strong> Altura × Largura × Profundidade = Volume total
              </div>
              <div className="space-card warning">
                <strong>⚠️ Atenção:</strong> Nunca tenha apenas 1 rato! O mínimo são 2 ratos, 
                então você precisa de pelo menos 1 m³ de volume.
              </div>
            </div>
            <p>
              <strong>Dica:</strong> Use nossa <Link to="/calculadora">Calculadora de Gaiola</Link> para 
              descobrir quantos ratos cabem na sua gaiola!
            </p>

            <h2>Produtos que ajudam (e os que não ajudam)</h2>
            <p>
              Escolher os produtos certos faz toda a diferença. Alguns ajudam, outros podem 
              ser perigosos ou piorar o problema.
            </p>

            <h3>✅ Produtos úteis e seguros</h3>
            <div className="products-grid">
              <div className="product-card good">
                <div className="product-icon">🍶</div>
                <h4>Vinagre Branco</h4>
                <div className="product-info">
                  <strong>Uso:</strong> Limpeza profunda de gaiolas e acessórios
                  <br />
                  <strong>Como usar:</strong> Dilua 1:1 com água, aplique, deixe agir 10-15 minutos, enxágue bem
                  <br />
                  <strong>Vantagem:</strong> Natural, barato, elimina odores e desinfeta
                  <br />
                  <strong>Onde encontrar:</strong> Supermercados (R$ 3-5)
                </div>
              </div>

              <div className="product-card good">
                <div className="product-icon">🧪</div>
                <h4>Bicarbonato de Sódio</h4>
                <div className="product-info">
                  <strong>Uso:</strong> Neutralizar odores no substrato
                  <br />
                  <strong>Como usar:</strong> Polvilhe uma camada fina sobre o substrato antes de adicionar mais
                  <br />
                  <strong>Vantagem:</strong> Absorve odores, seguro, barato
                  <br />
                  <strong>Onde encontrar:</strong> Farmácias, supermercados (R$ 2-4)
                </div>
              </div>

              <div className="product-card good">
                <div className="product-icon">🧬</div>
                <h4>Produtos Enzimáticos</h4>
                <div className="product-info">
                  <strong>Uso:</strong> Quebrar moléculas de urina na fonte
                  <br />
                  <strong>Como usar:</strong> Aplique em áreas problemáticas, deixe agir conforme instruções
                  <br />
                  <strong>Vantagem:</strong> Elimina odores na origem, não apenas mascara
                  <br />
                  <strong>Onde encontrar:</strong> Pet shops, lojas online (R$ 20-50)
                </div>
              </div>

              <div className="product-card good">
                <div className="product-icon">🧼</div>
                <h4>Sabão Neutro</h4>
                <div className="product-info">
                  <strong>Uso:</strong> Limpeza geral de acessórios
                  <br />
                  <strong>Como usar:</strong> Dilua em água, lave acessórios, enxágue bem
                  <br />
                  <strong>Vantagem:</strong> Remove gordura e sujeira, seguro quando bem enxaguado
                  <br />
                  <strong>Onde encontrar:</strong> Supermercados (R$ 5-10)
                </div>
              </div>
            </div>

            <h3>❌ Produtos a evitar</h3>
            <div className="products-grid">
              <div className="product-card bad">
                <div className="product-icon">☠️</div>
                <h4>Desinfetantes com Fenol</h4>
                <div className="product-info">
                  <strong>Por que evitar:</strong> Extremamente tóxicos para ratos, podem causar problemas respiratórios graves e até morte
                  <br />
                  <strong>Exemplos:</strong> Lysol, alguns desinfetantes genéricos
                </div>
              </div>

              <div className="product-card bad">
                <div className="product-icon">💨</div>
                <h4>Perfumes ou Desodorantes</h4>
                <div className="product-info">
                  <strong>Por que evitar:</strong> Podem irritar o sistema respiratório sensível dos ratos, causando problemas de saúde
                  <br />
                  <strong>Problema:</strong> Apenas mascaram o odor, não resolvem a causa
                </div>
              </div>

              <div className="product-card bad">
                <div className="product-icon">⚠️</div>
                <h4>Produtos com Amônia</h4>
                <div className="product-info">
                  <strong>Por que evitar:</strong> A urina já contém amônia, adicionar mais piora o problema
                  <br />
                  <strong>Efeito:</strong> Pode aumentar o odor ao invés de reduzir
                </div>
              </div>

              <div className="product-card bad">
                <div className="product-icon">🧪</div>
                <h4>Bleach (Água Sanitária)</h4>
                <div className="product-info">
                  <strong>Por que evitar:</strong> Muito forte, pode deixar resíduos tóxicos mesmo após enxágue
                  <br />
                  <strong>Alternativa:</strong> Use vinagre branco que é mais seguro
                </div>
              </div>
            </div>

            <h2>Quando o cheiro pode indicar problemas</h2>
            <p>
              Nem todo odor é normal. Se mesmo com limpeza adequada você notar odores muito fortes, 
              diferentes ou persistentes, pode ser sinal de problemas mais sérios:
            </p>

            <div className="problem-signs">
              <div className="problem-card">
                <div className="problem-icon">🏥</div>
                <h4>Problemas de Saúde</h4>
                <div className="problem-details">
                  <strong>Sinais de alerta:</strong>
                  <ul>
                    <li>Odor muito forte e persistente</li>
                    <li>Urina com cheiro diferente do normal</li>
                    <li>Odor de "peixe" ou "podre"</li>
                    <li>Rato com dificuldade para urinar</li>
                    <li>Sangue na urina</li>
                  </ul>
                  <div className="problem-action">
                    <strong>⚠️ Ação:</strong> Consulte um veterinário de exóticos imediatamente. 
                    Pode ser infecção urinária, pedras nos rins ou outros problemas de saúde.
                  </div>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-icon">📏</div>
                <h4>Gaiola Muito Pequena</h4>
                <div className="problem-details">
                  <strong>Sinais:</strong>
                  <ul>
                    <li>Substrato sempre molhado</li>
                    <li>Odor forte mesmo após limpeza</li>
                    <li>Muitos ratos em pouco espaço</li>
                    <li>Impossível manter limpo</li>
                  </ul>
                  <div className="problem-action">
                    <strong>💡 Solução:</strong> Aumente o tamanho da gaiola ou reduza o número 
                    de ratos. Use nossa <Link to="/calculadora">Calculadora de Gaiola</Link> para verificar.
                  </div>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-icon">💨</div>
                <h4>Ventilação Inadequada</h4>
                <div className="problem-details">
                  <strong>Sinais:</strong>
                  <ul>
                    <li>Odor "pesado" no ar</li>
                    <li>Gaiola sempre úmida</li>
                    <li>Ratos com problemas respiratórios</li>
                    <li>Odor que não sai mesmo após limpeza</li>
                  </ul>
                  <div className="problem-action">
                    <strong>💡 Solução:</strong> Troque para uma gaiola de malha com boa ventilação. 
                    NUNCA use aquários!
                  </div>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-icon">🌿</div>
                <h4>Substrato de Baixa Qualidade</h4>
                <div className="problem-details">
                  <strong>Sinais:</strong>
                  <ul>
                    <li>Substrato não absorve urina</li>
                    <li>Precisa trocar muito frequentemente</li>
                    <li>Odor aparece rapidamente</li>
                    <li>Substrato sempre molhado</li>
                  </ul>
                  <div className="problem-action">
                    <strong>💡 Solução:</strong> Invista em substrato de qualidade como celulose. 
                    Pode parecer mais caro, mas economiza no longo prazo.
                  </div>
                </div>
              </div>
            </div>

            <HighlightBox variant="warning" icon="⚠️">
              <p>
                <strong>Importante:</strong> Se o problema persistir mesmo após seguir todas as 
                recomendações, consulte um veterinário de exóticos. Odores anormais podem ser 
                sinal de problemas de saúde que precisam de tratamento médico.
              </p>
            </HighlightBox>

            <h2>Checklist de Prevenção de Odores</h2>
            <p>
              Use este checklist para garantir que está fazendo tudo certo:
            </p>
            <div className="checklist">
              <div className="checklist-item">
                <input type="checkbox" id="check1" />
                <label htmlFor="check1">Substrato de qualidade (celulose recomendado)</label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="check2" />
                <label htmlFor="check2">Limpeza parcial diária (remover áreas molhadas)</label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="check3" />
                <label htmlFor="check3">Limpeza completa 1-2x por semana</label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="check4" />
                <label htmlFor="check4">Limpeza profunda a cada 2-4 semanas</label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="check5" />
                <label htmlFor="check5">Gaiola de malha com boa ventilação</label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="check6" />
                <label htmlFor="check6">Bebedouros limpos semanalmente</label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="check7" />
                <label htmlFor="check7">Espaço adequado para o número de ratos</label>
              </div>
              <div className="checklist-item">
                <input type="checkbox" id="check8" />
                <label htmlFor="check8">Uso de produtos seguros (vinagre, bicarbonato)</label>
              </div>
            </div>

            <h2>Conclusão</h2>
            <p>
              Ratos Twister <strong>não precisam</strong> cheirar mal! Com substrato adequado, 
              limpeza regular e gaiola bem ventilada, você pode manter um ambiente praticamente 
              sem odores. O segredo está na prevenção e manutenção consistente.
            </p>
            <p>
              Lembre-se: um ambiente limpo e sem odores não é apenas agradável para você, mas 
              também essencial para a saúde e bem-estar dos seus ratos. Ratos são animais muito 
              limpos por natureza, e um ambiente sujo pode causar estresse e problemas de saúde.
            </p>
            <p>
              Se você seguir as recomendações deste guia, terá uma gaiola praticamente sem odores 
              e ratos felizes e saudáveis!
            </p>
          </Card>
        </div>
      </article>
    </Container>
    </>
  )
}

export default Artigo1

