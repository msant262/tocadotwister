import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import './Artigos.css'

const Artigo5 = () => {
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

      const cards = contentRef.current.querySelectorAll('.phase-card, .method-card, .problem-card, .success-card')
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
            <h1 className="artigo-hero-title">Como apresentar um rato novo para o grupo</h1>
            <p className="artigo-hero-meta">
              Publicado em: {new Date().toLocaleDateString('pt-BR')} | 
              Tempo de leitura: 10 minutos
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <article className="artigo">
          <div className="artigo-content" ref={contentRef}>
            <Card>
              <p className="artigo-intro">
                Introduzir um novo rato a um grupo existente requer paciência, técnica e 
                conhecimento. Fazer isso corretamente evita brigas, estresse e ferimentos. 
                Este guia completo passo a passo ensina métodos seguros de introdução, 
                baseados em experiências da comunidade internacional de tutores de ratos.
              </p>

              <HighlightBox variant="warning" icon="⚠️">
                <p>
                  <strong>IMPORTANTE:</strong> Introduções podem levar de alguns dias a várias 
                  semanas. Não tenha pressa! Uma introdução bem feita é fundamental para o 
                  bem-estar de todos os ratos envolvidos.
                </p>
              </HighlightBox>

            <h2>Por que Introduções são Necessárias?</h2>
            <p>
              Ratos são animais sociais que vivem em grupos, mas também são territoriais. 
              Quando um novo rato é introduzido sem preparação adequada, o grupo existente 
              pode vê-lo como uma ameaça ao seu território e hierarquia.
            </p>

            <div className="why-introduction">
              <div className="why-card">
                <div className="why-icon">🏠</div>
                <h3>Territorialidade</h3>
                <p>
                  Ratos estabelecem territórios e hierarquias. Um novo rato pode ser visto 
                  como invasor, desencadeando comportamentos defensivos.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">👑</div>
                <h3>Hierarquia Social</h3>
                <p>
                  Grupos de ratos têm hierarquias estabelecidas. Um novo membro precisa ser 
                  integrado gradualmente para não desestabilizar a ordem social.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">🦠</div>
                <h3>Saúde</h3>
                <p>
                  Quarentena é essencial para prevenir transmissão de doenças. Um rato novo 
                  pode carregar patógenos que o grupo existente não tem imunidade.
                </p>
              </div>
            </div>

            <h3>Consequências de uma Introdução Mal Feita</h3>
            <div className="consequences-grid">
              <div className="consequence-item severe">
                <div className="consequence-icon">🩸</div>
                <h4>Brigas Graves e Ferimentos</h4>
                <p>
                  Ratos podem se ferir seriamente em brigas. Ferimentos podem infeccionar e 
                  requerer tratamento veterinário caro.
                </p>
              </div>

              <div className="consequence-item severe">
                <div className="consequence-icon">😰</div>
                <h4>Estresse Crônico</h4>
                <p>
                  Estresse constante enfraquece o sistema imunológico, aumenta risco de 
                  doenças e reduz qualidade de vida.
                </p>
              </div>

              <div className="consequence-item severe">
                <div className="consequence-icon">🚫</div>
                <h4>Rejeição Permanente</h4>
                <p>
                  Se a introdução falhar completamente, os ratos podem nunca aceitar o novo 
                  membro, necessitando separação permanente.
                </p>
              </div>

              <div className="consequence-item moderate">
                <div className="consequence-icon">🏥</div>
                <h4>Custos Veterinários</h4>
                <p>
                  Ferimentos e estresse podem resultar em custos veterinários altos que 
                  poderiam ter sido evitados.
                </p>
              </div>
            </div>

            <h2>Preparação Antes da Introdução</h2>
            <p>
              A preparação adequada é fundamental para o sucesso da introdução. Não pule 
              nenhuma etapa!
            </p>

            <div className="preparation-steps">
              <div className="prep-card critical">
                <div className="prep-number">1</div>
                <div className="prep-content">
                  <h3>Quarentena (OBRIGATÓRIA)</h3>
                  <div className="prep-details">
                    <div className="prep-duration">
                      <strong>Duração:</strong> Mínimo de 2-3 semanas (recomendado: 3 semanas)
                    </div>
                    <div className="prep-why">
                      <strong>Por quê:</strong> Garantir que o novo rato não está doente e não 
                      transmitirá doenças ao grupo existente. Muitas doenças têm período de 
                      incubação de 1-2 semanas.
                    </div>
                    <div className="prep-checklist">
                      <strong>Checklist de Quarentena:</strong>
                      <ul>
                        <li>Mantenha o novo rato em gaiola separada (em outro cômodo, se possível)</li>
                        <li>Lave as mãos entre interações com cada grupo</li>
                        <li>Use roupas diferentes ou troque de roupa entre interações</li>
                        <li>Monitore saúde do novo rato diariamente</li>
                        <li>Observe: apetite, fezes, respiração, comportamento</li>
                        <li>Consulte veterinário ANTES de iniciar introdução</li>
                        <li>Não compartilhe itens entre gaiolas durante quarentena</li>
                      </ul>
                    </div>
                    <div className="prep-warning">
                      <strong>⚠️ NUNCA pule a quarentena!</strong> Uma doença transmitida pode 
                      afetar todo o grupo e custar muito mais caro que esperar algumas semanas.
                    </div>
                  </div>
                </div>
              </div>

              <div className="prep-card">
                <div className="prep-number">2</div>
                <div className="prep-content">
                  <h3>Idade e Sexo - Compatibilidade</h3>
                  <div className="prep-details">
                    <div className="compatibility-table">
                      <div className="compat-table-header">
                        <div className="compat-header-col compat-header-title">Categoria</div>
                        <div className="compat-header-col compat-header-desc">Descrição</div>
                        <div className="compat-header-col compat-header-list">Exemplos</div>
                      </div>
                      
                      <div className="compat-table-row easy">
                        <div className="compat-table-cell compat-cell-title">
                          <div className="compat-icon">✅</div>
                          <h4>Fácil de Introduzir</h4>
                        </div>
                        <div className="compat-table-cell compat-cell-desc">
                          <p>Ratos mais jovens e grupos flexíveis que geralmente aceitam novos membros sem grandes problemas.</p>
                        </div>
                        <div className="compat-table-cell compat-cell-list">
                          <ul>
                            <li><strong>Filhotes (4-8 semanas):</strong> Mais fáceis, ainda não estabeleceram hierarquia forte</li>
                            <li><strong>Fêmeas jovens:</strong> Geralmente aceitam novos membros mais facilmente</li>
                            <li><strong>Grupos jovens:</strong> Ratos jovens juntos são mais flexíveis</li>
                          </ul>
                        </div>
                      </div>

                      <div className="compat-table-row moderate">
                        <div className="compat-table-cell compat-cell-title">
                          <div className="compat-icon">⚠️</div>
                          <h4>Moderado</h4>
                        </div>
                        <div className="compat-table-cell compat-cell-desc">
                          <p>Ratos adultos ou grupos pequenos que podem aceitar novos membros, mas requerem mais cuidado e paciência.</p>
                        </div>
                        <div className="compat-table-cell compat-cell-list">
                          <ul>
                            <li><strong>Fêmeas adultas:</strong> Podem ser territorial, mas geralmente aceitam</li>
                            <li><strong>Machos jovens:</strong> Podem funcionar, mas requerem mais cuidado</li>
                            <li><strong>Grupos pequenos (2-3):</strong> Mais fácil que grupos grandes</li>
                          </ul>
                        </div>
                      </div>

                      <div className="compat-table-row difficult">
                        <div className="compat-table-cell compat-cell-title">
                          <div className="compat-icon">❌</div>
                          <h4>Difícil</h4>
                        </div>
                        <div className="compat-table-cell compat-cell-desc">
                          <p>Ratos adultos, especialmente machos, ou que viveram sozinhos por muito tempo. Requerem muito cuidado e podem não aceitar novos membros.</p>
                        </div>
                        <div className="compat-table-cell compat-cell-list">
                          <ul>
                            <li><strong>Machos adultos:</strong> Muito territorial, especialmente se solitário há tempo</li>
                            <li><strong>Ratos idosos:</strong> Podem ser menos tolerantes</li>
                            <li><strong>Ratos que viveram sozinhos:</strong> Podem ter dificuldade em aceitar outros</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <HighlightBox variant="danger" icon="🚫">
                      <p>
                        <strong>NUNCA misture machos e fêmeas</strong> (a menos que castrados). 
                        Isso resultará em reprodução descontrolada. Machos castrados podem viver 
                        com fêmeas, mas a castração deve ser feita por veterinário experiente.
                      </p>
                    </HighlightBox>
                  </div>
                </div>
              </div>

              <div className="prep-card">
                <div className="prep-number">3</div>
                <div className="prep-content">
                  <h3>Espaço Adequado</h3>
                  <div className="prep-details">
                    <p>
                      Certifique-se de que a gaiola final é grande o suficiente para todos os ratos. 
                      Espaço inadequado aumenta tensão, estresse e brigas.
                    </p>
                    <div className="space-requirements">
                      <div className="space-item">
                        <strong>2 ratos:</strong> Mínimo 0,5 m² de área de piso
                      </div>
                      <div className="space-item">
                        <strong>3 ratos:</strong> Mínimo 0,7 m² de área de piso
                      </div>
                      <div className="space-item">
                        <strong>4 ratos:</strong> Mínimo 1,0 m² de área de piso
                      </div>
                      <div className="space-item">
                        <strong>5+ ratos:</strong> Adicione 0,2 m² por rato adicional
                      </div>
                    </div>
                    <div className="space-tip">
                      <strong>💡 Dica:</strong> Use nossa <Link to="/calculadora">Calculadora de Gaiola</Link> para 
                      verificar se você tem espaço suficiente antes de introduzir um novo rato!
                    </div>
                  </div>
                </div>
              </div>

              <div className="prep-card">
                <div className="prep-number">4</div>
                <div className="prep-content">
                  <h3>Equipamentos Necessários</h3>
                  <div className="prep-details">
                    <div className="equipment-list">
                      <div className="equipment-item">
                        <strong>Gaiola de quarentena:</strong> Separada, completa com acessórios
                      </div>
                      <div className="equipment-item">
                        <strong>Gaiola de backup:</strong> Para separação de emergência
                      </div>
                      <div className="equipment-item">
                        <strong>Área neutra:</strong> Banheira, mesa grande, ou área limpa
                      </div>
                      <div className="equipment-item">
                        <strong>Luvas de proteção:</strong> Para separar em caso de brigas
                      </div>
                      <div className="equipment-item">
                        <strong>Toalhas/panos:</strong> Para criar barreiras visuais se necessário
                      </div>
                      <div className="equipment-item">
                        <strong>Petiscos:</strong> Para distrair e criar associações positivas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Métodos de Introdução</h2>
            <p>
              Existem diferentes métodos de introdução. O método mais comum e recomendado é 
              o <strong>Método de Território Neutro</strong>, mas também existem métodos alternativos 
              para situações específicas.
            </p>

            <div className="method-selection">
              <div className="method-card primary">
                <div className="method-icon">⭐</div>
                <h3>Método de Território Neutro</h3>
                <p>
                  <strong>Recomendado para:</strong> Maioria dos casos, especialmente fêmeas e grupos jovens.
                </p>
                <p>
                  <strong>Vantagens:</strong> Mais seguro, permite supervisão constante, taxa de sucesso alta.
                </p>
              </div>

              <div className="method-card">
                <div className="method-icon">🔄</div>
                <h3>Método Carrier</h3>
                <p>
                  <strong>Recomendado para:</strong> Ratos muito agressivos ou que rejeitaram método neutro.
                </p>
                <p>
                  <strong>Vantagens:</strong> Espaço confinado reduz agressão, força proximidade controlada.
                </p>
              </div>

              <div className="method-card">
                <div className="method-icon">🏠</div>
                <h3>Método de Gaiola Dividida</h3>
                <p>
                  <strong>Recomendado para:</strong> Ratos muito tímidos ou quando não há área neutra disponível.
                </p>
                <p>
                  <strong>Vantagens:</strong> Permite interação através de grade, menos estressante inicialmente.
                </p>
              </div>
            </div>

            <h2>Método de Território Neutro - Passo a Passo</h2>
            <p>
              Este é o método mais seguro e recomendado. Siga cada fase cuidadosamente e não 
              avance para a próxima fase até que a atual esteja completamente bem-sucedida.
            </p>

            <div className="phases-timeline">
              <div className="phase-card">
                <div className="phase-header">
                  <div className="phase-number">1</div>
                  <div className="phase-title">
                    <h3>Troca de Cheiros</h3>
                    <span className="phase-duration">2-5 dias</span>
                  </div>
                </div>
                <div className="phase-content">
                  <p>
                    <strong>Objetivo:</strong> Permitir que os ratos se acostumem com o cheiro uns dos outros 
                    sem contato direto, reduzindo a resposta de "invasor" quando se encontrarem.
                  </p>
                  <div className="phase-steps">
                    <div className="phase-step">
                      <strong>Passo 1:</strong> Troque itens entre as gaiolas diariamente:
                      <ul>
                        <li>Brinquedos (especialmente de tecido ou madeira)</li>
                        <li>Tecidos/panos usados como cama</li>
                        <li>Substrato levemente usado</li>
                        <li>Itens de papelão que os ratos usaram</li>
                      </ul>
                    </div>
                    <div className="phase-step">
                      <strong>Passo 2:</strong> Monitore reações:
                      <ul>
                        <li>Se os ratos ignoram os itens: ✅ Bom sinal, prossiga</li>
                        <li>Se os ratos cheiram intensamente: ✅ Normal, continue</li>
                        <li>Se os ratos mordem/atacam os itens: ⚠️ Espere mais tempo</li>
                        <li>Se os ratos evitam completamente: ⚠️ Espere mais tempo</li>
                      </ul>
                    </div>
                    <div className="phase-step">
                      <strong>Passo 3:</strong> Quando os ratos parecerem acostumados com os cheiros 
                      (não reagem negativamente), prossiga para a Fase 2.
                    </div>
                  </div>
                  <div className="phase-tip">
                    <strong>💡 Dica:</strong> Você pode esfregar um pano em um rato e colocar na gaiola 
                    do outro para acelerar o processo de familiarização.
                  </div>
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <div className="phase-number">2</div>
                  <div className="phase-title">
                    <h3>Primeira Introdução em Território Neutro</h3>
                    <span className="phase-duration">10-15 minutos</span>
                  </div>
                </div>
                <div className="phase-content">
                  <p>
                    <strong>Objetivo:</strong> Permitir primeiro contato físico em ambiente que nenhum rato 
                    considera "seu", reduzindo agressão territorial.
                  </p>
                  <div className="phase-steps">
                    <div className="phase-step">
                      <strong>Escolha do Local Neutro:</strong>
                      <ul>
                        <li>Banheira vazia (recomendado - fácil de limpar, sem cantos escondidos)</li>
                        <li>Mesa grande e limpa</li>
                        <li>Área do chão limpa e desinfetada</li>
                        <li>Box de transporte grande</li>
                        <li><strong>NUNCA use:</strong> A gaiola de qualquer um dos ratos, mesmo que limpa</li>
                      </ul>
                    </div>
                    <div className="phase-step">
                      <strong>Preparação:</strong>
                      <ul>
                        <li>Limpe e desinfete completamente o local</li>
                        <li>Coloque alguns brinquedos neutros (não usados por nenhum rato)</li>
                        <li>Tenha petiscos prontos para distrair</li>
                        <li>Tenha luvas e toalhas prontas para separação de emergência</li>
                        <li>Certifique-se de ter tempo suficiente (não tenha pressa!)</li>
                      </ul>
                    </div>
                    <div className="phase-step">
                      <strong>Execução:</strong>
                      <ol>
                        <li>Coloque todos os ratos juntos no local neutro ao mesmo tempo</li>
                        <li><strong>SUPERVISE CONSTANTEMENTE!</strong> Não os deixe sozinhos nem por um segundo</li>
                        <li>Permita interação por 10-15 minutos (ou menos se houver problemas)</li>
                        <li>Observe comportamentos cuidadosamente</li>
                        <li>Separe imediatamente se houver brigas sérias</li>
                      </ol>
                    </div>
                  </div>

                  <div className="behavior-table">
                    <div className="behavior-table-header">
                      <div className="behavior-header-col behavior-header-normal">✅ Comportamentos Normais<br/>(NÃO separe)</div>
                      <div className="behavior-header-col behavior-header-warning">⚠️ Sinais de Alerta<br/>(Monitore de perto)</div>
                      <div className="behavior-header-col behavior-header-danger">🩸 SEPARE IMEDIATAMENTE<br/>(Sinais de Perigo)</div>
                    </div>
                    
                    <div className="behavior-table-row">
                      <div className="behavior-table-cell behavior-cell-normal">
                        <div className="behavior-mobile-title">✅ Comportamentos Normais (NÃO separe)</div>
                        <ul>
                          <li><strong>Cheirar:</strong> Ratos cheiram uns aos outros intensamente - normal</li>
                          <li><strong>Montar:</strong> Estabelecimento de hierarquia - normal, mesmo que pareça agressivo</li>
                          <li><strong>Peidos (squeaks):</strong> Sons de alerta ou protesto - não necessariamente agressão</li>
                          <li><strong>Perseguições leves:</strong> Seguir o outro rato - normal se não for constante</li>
                          <li><strong>Boxing:</strong> Ratos ficam de pé e "boxeiam" - teste de força, geralmente normal</li>
                          <li><strong>Grooming forçado:</strong> Um rato limpa o outro mesmo que ele não queira - estabelecimento de hierarquia</li>
                        </ul>
                      </div>

                      <div className="behavior-table-cell behavior-cell-warning">
                        <div className="behavior-mobile-title">⚠️ Sinais de Alerta (Monitore de perto)</div>
                        <ul>
                          <li>Perseguições constantes sem parar</li>
                          <li>Um rato fica completamente imóvel e aterrorizado</li>
                          <li>Pelos arrepiados constantemente</li>
                          <li>Gritos frequentes</li>
                        </ul>
                      </div>

                      <div className="behavior-table-cell behavior-cell-danger">
                        <div className="behavior-mobile-title">🩸 SEPARE IMEDIATAMENTE (Sinais de Perigo)</div>
                        <ul>
                          <li><strong>Sangue:</strong> Qualquer ferimento que sangre</li>
                          <li><strong>Brigas em bola:</strong> Ratos se enrolam e lutam agressivamente</li>
                          <li><strong>Perseguições agressivas sem parar:</strong> Um rato persegue o outro sem parar, tentando morder</li>
                          <li><strong>Terror extremo:</strong> Um rato fica completamente paralisado de medo</li>
                          <li><strong>Ferimentos visíveis:</strong> Cortes, arranhões profundos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <div className="phase-number">3</div>
                  <div className="phase-title">
                    <h3>Sessões Repetidas</h3>
                    <span className="phase-duration">3-10 dias</span>
                  </div>
                </div>
                <div className="phase-content">
                  <p>
                    <strong>Objetivo:</strong> Repetir encontros no território neutro até que as interações 
                    estejam calmas e os ratos se acostumem uns com os outros.
                  </p>
                  <div className="phase-steps">
                    <div className="phase-step">
                      <strong>Frequência:</strong> Diariamente, preferencialmente no mesmo horário
                    </div>
                    <div className="phase-step">
                      <strong>Progressão de Tempo:</strong>
                      <ul>
                        <li><strong>Dia 1-2:</strong> 10-15 minutos</li>
                        <li><strong>Dia 3-4:</strong> 20-30 minutos (se tudo estiver bem)</li>
                        <li><strong>Dia 5-7:</strong> 30-45 minutos (se tudo estiver bem)</li>
                        <li><strong>Dia 8+:</strong> Até 1 hora (se tudo estiver bem)</li>
                      </ul>
                    </div>
                    <div className="phase-step">
                      <strong>Quando Avançar:</strong> Quando as interações estiverem calmas:
                      <ul>
                        <li>Ratos interagem sem agressão constante</li>
                        <li>Podem estar próximos sem brigar</li>
                        <li>Comportamentos de hierarquia são aceitos (montar, grooming forçado)</li>
                        <li>Não há sinais de terror ou estresse extremo</li>
                      </ul>
                    </div>
                    <div className="phase-step">
                      <strong>Se Houver Problemas:</strong>
                      <ul>
                        <li>Volte para sessões mais curtas</li>
                        <li>Espere mais tempo entre sessões</li>
                        <li>Considere voltar para a Fase 1 (troca de cheiros)</li>
                        <li>Não tenha pressa - introduções podem levar semanas!</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <div className="phase-number">4</div>
                  <div className="phase-title">
                    <h3>Gaiola Limpa (Transição Final)</h3>
                    <span className="phase-duration">Permanente</span>
                  </div>
                </div>
                <div className="phase-content">
                  <p>
                    <strong>Objetivo:</strong> Mover todos os ratos para a gaiola final em ambiente 
                    completamente neutro (sem cheiros de qualquer rato).
                  </p>
                  <div className="phase-steps">
                    <div className="phase-step">
                      <strong>Preparação da Gaiola (CRÍTICO):</strong>
                      <ol>
                        <li><strong>Remova TODOS os ratos</strong> da gaiola (coloque em gaiolas temporárias)</li>
                        <li><strong>Limpe completamente:</strong>
                          <ul>
                            <li>Lave todas as barras, plataformas, acessórios</li>
                            <li>Use desinfetante seguro para roedores (vinagre diluído ou produto específico)</li>
                            <li>Remova TODO o substrato antigo</li>
                            <li>Lave todos os brinquedos e acessórios</li>
                          </ul>
                        </li>
                        <li><strong>Reorganize completamente:</strong>
                          <ul>
                            <li>Mude posição de todas as plataformas</li>
                            <li>Coloque acessórios em lugares diferentes</li>
                            <li>Use substrato novo</li>
                            <li>Adicione brinquedos novos ou completamente limpos</li>
                          </ul>
                        </li>
                        <li><strong>Objetivo:</strong> A gaiola deve parecer completamente nova, sem cheiro de nenhum rato</li>
                      </ol>
                    </div>
                    <div className="phase-step">
                      <strong>Colocação dos Ratos:</strong>
                      <ol>
                        <li>Coloque TODOS os ratos juntos na gaiola limpa ao mesmo tempo</li>
                        <li><strong>SUPERVISE CONSTANTEMENTE nas primeiras 2-4 horas</strong></li>
                        <li>Monitore de perto nas primeiras 24 horas</li>
                        <li>Verifique várias vezes ao dia na primeira semana</li>
                      </ol>
                    </div>
                    <div className="phase-step">
                      <strong>O que Esperar:</strong>
                      <ul>
                        <li>Ratos podem explorar a gaiola juntos</li>
                        <li>Pode haver alguma montagem/hierarquia inicial - normal</li>
                        <li>Ratos podem dormir juntos - excelente sinal!</li>
                        <li>Ratos podem comer juntos - excelente sinal!</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-warning">
                    <strong>⚠️ IMPORTANTE:</strong> Se houver brigas sérias na gaiola, separe imediatamente 
                    e volte para a Fase 3. Não force a permanência juntos se houver agressão real.
                  </div>
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <div className="phase-number">5</div>
                  <div className="phase-title">
                    <h3>Monitoramento Contínuo</h3>
                    <span className="phase-duration">2-4 semanas</span>
                  </div>
                </div>
                <div className="phase-content">
                  <p>
                    <strong>Objetivo:</strong> Garantir que a introdução foi bem-sucedida e que todos 
                    os ratos estão saudáveis e felizes juntos.
                  </p>
                  <div className="monitoring-checklist">
                    <div className="monitor-item">
                      <strong>✅ Verificações Diárias:</strong>
                      <ul>
                        <li>Todos os ratos estão comendo normalmente?</li>
                        <li>Todos os ratos estão bebendo água?</li>
                        <li>Há sinais de ferimentos?</li>
                        <li>Ratos estão interagindo socialmente (dormindo juntos, grooming)?</li>
                        <li>Não há sinais de estresse extremo?</li>
                      </ul>
                    </div>
                    <div className="monitor-item">
                      <strong>✅ Sinais de Sucesso:</strong>
                      <ul>
                        <li>Ratos dormem juntos em pilha</li>
                        <li>Ratos fazem grooming uns nos outros</li>
                        <li>Ratos brincam juntos</li>
                        <li>Ratos comem juntos sem competição agressiva</li>
                        <li>Hierarquia está estabelecida sem violência</li>
                        <li>Todos os ratos parecem relaxados e felizes</li>
                      </ul>
                    </div>
                    <div className="monitor-item">
                      <strong>⚠️ Sinais de Problema:</strong>
                      <ul>
                        <li>Um rato está sempre isolado</li>
                        <li>Brigas frequentes (não apenas montagem/hierarquia)</li>
                        <li>Um rato não está comendo</li>
                        <li>Ferimentos aparecem</li>
                        <li>Um rato parece constantemente estressado/amedrontado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Métodos Alternativos</h2>
            <p>
              Se o Método de Território Neutro não funcionar ou não for adequado para sua situação, 
              existem métodos alternativos:
            </p>

            <div className="alternative-methods">
              <div className="method-card detailed">
                <h3>🔄 Método Carrier</h3>
                <p>
                  <strong>Quando usar:</strong> Ratos muito agressivos, rejeição do método neutro, 
                  ou quando você precisa de mais controle.
                </p>
                <div className="method-steps">
                  <ol>
                    <li>Coloque todos os ratos juntos em um transportador/carrier pequeno</li>
                    <li>O espaço confinado reduz agressão (não há espaço para perseguição)</li>
                    <li>Mantenha por 15-30 minutos, supervisionando constantemente</li>
                    <li>Se estiver calmo, mova para um carrier maior ou área neutra</li>
                    <li>Progressivamente aumente o espaço conforme os ratos se acostumam</li>
                  </ol>
                </div>
                <div className="method-warning">
                  <strong>⚠️ Cuidado:</strong> Espaço muito pequeno pode causar estresse. Use apenas 
                  por períodos curtos e monitore constantemente.
                </div>
              </div>

              <div className="method-card detailed">
                <h3>🏠 Método de Gaiola Dividida</h3>
                <p>
                  <strong>Quando usar:</strong> Ratos muito tímidos, quando não há área neutra disponível, 
                  ou para introduções muito difíceis.
                </p>
                <div className="method-steps">
                  <ol>
                    <li>Divida a gaiola final com uma grade (que permita cheiros e contato limitado)</li>
                    <li>Coloque ratos em lados opostos</li>
                    <li>Permita que se acostumem por alguns dias</li>
                    <li>Troque os lados diariamente (para que ambos explorem ambos os lados)</li>
                    <li>Quando estiverem calmos, remova a divisória em território neutro (gaiola limpa)</li>
                  </ol>
                </div>
                <div className="method-tip">
                  <strong>💡 Dica:</strong> Você pode usar uma grade de arame ou uma divisória de acrílico 
                  com pequenos furos. Certifique-se de que os ratos não podem passar pela divisória.
                </div>
              </div>
            </div>

            <h2>Problemas Comuns e Soluções</h2>
            <p>
              Introduções nem sempre são lineares. Aqui estão problemas comuns e como resolvê-los:
            </p>

            <div className="problems-grid">
              <div className="problem-card">
                <div className="problem-icon">⚔️</div>
                <h3>Brigas Constantes</h3>
                <div className="problem-solution">
                  <p><strong>Causas possíveis:</strong></p>
                  <ul>
                    <li>Avanceu muito rápido nas fases</li>
                    <li>Ratos incompatíveis (idade, personalidade)</li>
                    <li>Espaço inadequado</li>
                    <li>Gaiola não estava suficientemente limpa</li>
                  </ul>
                  <p><strong>Soluções:</strong></p>
                  <ul>
                    <li>Volte para a fase anterior imediatamente</li>
                    <li>Espere mais tempo antes de tentar novamente</li>
                    <li>Considere se os ratos são compatíveis</li>
                    <li>Verifique se há espaço suficiente</li>
                    <li>Não tenha pressa - introduções podem levar semanas ou meses</li>
                  </ul>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-icon">🏃</div>
                <h3>Um Rato Está Sendo Perseguido</h3>
                <div className="problem-solution">
                  <p><strong>Causas possíveis:</strong></p>
                  <ul>
                    <li>Hierarquia não estabelecida</li>
                    <li>Rato perseguido é muito tímido ou novo</li>
                    <li>Incompatibilidade de personalidade</li>
                    <li>Rato perseguidor é muito dominante</li>
                  </ul>
                  <p><strong>Soluções:</strong></p>
                  <ul>
                    <li>Separe temporariamente</li>
                    <li>Tente novamente em alguns dias ou semanas</li>
                    <li>Considere introduzir um terceiro rato (às vezes ajuda)</li>
                    <li>Use método carrier para forçar proximidade controlada</li>
                    <li>Se persistir, pode ser incompatibilidade permanente</li>
                  </ul>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-icon">🚫</div>
                <h3>Rejeição Completa</h3>
                <div className="problem-solution">
                  <p><strong>Causas possíveis:</strong></p>
                  <ul>
                    <li>Ratos simplesmente não são compatíveis</li>
                    <li>Idade ou sexo incompatíveis</li>
                    <li>Um rato viveu sozinho por muito tempo</li>
                    <li>Trauma ou experiência negativa anterior</li>
                  </ul>
                  <p><strong>Soluções:</strong></p>
                  <ul>
                    <li>Alguns ratos simplesmente não se dão bem - isso é normal</li>
                    <li>Considere manter gaiolas separadas lado a lado (para socialização visual)</li>
                    <li>Considere introduzir um rato diferente</li>
                    <li>Consulte tutores experientes ou veterinário</li>
                    <li>Às vezes, tempo e paciência resolvem (mas nem sempre)</li>
                  </ul>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-icon">😰</div>
                <h3>Um Rato Está Muito Estressado</h3>
                <div className="problem-solution">
                  <p><strong>Sinais:</strong></p>
                  <ul>
                    <li>Rato fica imóvel e aterrorizado</li>
                    <li>Não come ou bebe</li>
                    <li>Pelos constantemente arrepiados</li>
                    <li>Evita completamente os outros ratos</li>
                  </ul>
                  <p><strong>Soluções:</strong></p>
                  <ul>
                    <li>Separe imediatamente</li>
                    <li>Dê tempo para o rato se recuperar (dias ou semanas)</li>
                    <li>Considere se a introdução é apropriada para este rato</li>
                    <li>Tente método mais gradual (gaiola dividida)</li>
                    <li>Consulte veterinário se o estresse persistir</li>
                  </ul>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-icon">⏰</div>
                <h3>Introdução Está Levando Muito Tempo</h3>
                <div className="problem-solution">
                  <p><strong>Normal:</strong></p>
                  <ul>
                    <li>Introduções podem levar de 1 semana a vários meses</li>
                    <li>Machos adultos podem levar 2-3 meses</li>
                    <li>Ratos idosos podem ser mais difíceis</li>
                  </ul>
                  <p><strong>Quando se preocupar:</strong></p>
                  <ul>
                    <li>Após 3-4 meses sem progresso</li>
                    <li>Se houver ferimentos constantes</li>
                    <li>Se um rato está sofrendo claramente</li>
                  </ul>
                  <p><strong>Soluções:</strong></p>
                  <ul>
                    <li>Paciência é fundamental - não desista muito cedo</li>
                    <li>Considere métodos alternativos</li>
                    <li>Consulte tutores experientes</li>
                    <li>Às vezes, separação permanente é a melhor opção</li>
                  </ul>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-icon">🩸</div>
                <h3>Ferimentos Ocorrem</h3>
                <div className="problem-solution">
                  <p><strong>Ação Imediata:</strong></p>
                  <ul>
                    <li>Separe os ratos imediatamente</li>
                    <li>Trate ferimentos (limpeza, desinfecção)</li>
                    <li>Consulte veterinário se necessário</li>
                  </ul>
                  <p><strong>Próximos Passos:</strong></p>
                  <ul>
                    <li>Espere pelo menos 1-2 semanas antes de tentar novamente</li>
                    <li>Analise o que causou a briga</li>
                    <li>Considere se os ratos são compatíveis</li>
                    <li>Tente método diferente na próxima tentativa</li>
                    <li>Se ferimentos graves ocorrerem novamente, considere separação permanente</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Sinais de Sucesso</h2>
            <p>
              Como saber se a introdução foi bem-sucedida? Aqui estão os sinais claros:
            </p>

            <div className="success-signs">
              <div className="success-card excellent">
                <div className="success-icon">🌟</div>
                <h3>Sinais Excelentes</h3>
                <ul>
                  <li>Ratos dormem juntos em pilha (cuddle puddle)</li>
                  <li>Ratos fazem grooming mútuo (limpeza social)</li>
                  <li>Ratos brincam juntos sem agressão</li>
                  <li>Ratos comem juntos sem competição agressiva</li>
                  <li>Todos os ratos parecem relaxados e felizes</li>
                </ul>
              </div>

              <div className="success-card good">
                <div className="success-icon">✅</div>
                <h3>Sinais Bons</h3>
                <ul>
                  <li>Ratos podem estar próximos sem brigar</li>
                  <li>Hierarquia está estabelecida sem violência</li>
                  <li>Ratos compartilham recursos (comida, água, brinquedos)</li>
                  <li>Não há sinais de estresse extremo</li>
                  <li>Ratos exploram a gaiola juntos</li>
                </ul>
              </div>

              <div className="success-card acceptable">
                <div className="success-icon">👍</div>
                <h3>Sinais Aceitáveis</h3>
                <ul>
                  <li>Ratos toleram a presença uns dos outros</li>
                  <li>Brigas são raras e não resultam em ferimentos</li>
                  <li>Ratos podem dormir próximos (mesmo que não juntos)</li>
                  <li>Não há terror ou estresse constante</li>
                  <li>Ratos podem coexistir pacificamente</li>
                </ul>
              </div>
            </div>

            <h2>Dicas para Sucesso</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">⏳</div>
                <h3>Paciência é Fundamental</h3>
                <p>
                  Introduções podem levar semanas ou meses. Não tenha pressa! Uma introdução 
                  bem feita vale a espera.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">🚫</div>
                <h3>Nunca Force</h3>
                <p>
                  Se não está funcionando, dê mais tempo. Forçar uma introdução pode resultar 
                  em problemas permanentes.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">👀</div>
                <h3>Supervise Sempre</h3>
                <p>
                  Nunca deixe ratos não introduzidos sozinhos. Brigas podem escalar rapidamente 
                  e resultar em ferimentos graves.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">🏠</div>
                <h3>Tenha Backup</h3>
                <p>
                  Sempre tenha uma gaiola de backup pronta para separação de emergência. 
                  Melhor prevenir que remediar.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">👥</div>
                <h3>Consulte a Comunidade</h3>
                <p>
                  Grupos de tutores podem ter dicas específicas para sua situação. Não hesite 
                  em pedir ajuda!
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">📝</div>
                <h3>Documente o Processo</h3>
                <p>
                  Anote o que funciona e o que não funciona. Isso ajuda a ajustar o método e 
                  pode ajudar outros tutores.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">🍎</div>
                <h3>Use Petiscos Positivos</h3>
                <p>
                  Petiscos durante introduções criam associações positivas. Use alimentos que 
                  todos os ratos gostam.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">🧹</div>
                <h3>Limpeza é Crítica</h3>
                <p>
                  A gaiola final deve estar completamente limpa e sem cheiros. Isso é fundamental 
                  para o sucesso da Fase 4.
                </p>
              </div>
            </div>

            <h2>Quando Procurar Ajuda</h2>
            <p>
              Não hesite em procurar ajuda! Introduções podem ser desafiadoras e é melhor pedir 
              ajuda do que arriscar a segurança dos ratos.
            </p>

            <div className="help-scenarios">
              <div className="help-card urgent">
                <div className="help-icon">🆘</div>
                <h3>Procure Ajuda Imediata Se:</h3>
                <ul>
                  <li>Brigas resultam em ferimentos sérios ou sangramento</li>
                  <li>Um rato está claramente sofrendo ou aterrorizado</li>
                  <li>Você não sabe como separar ratos brigando com segurança</li>
                  <li>Há sinais de doença ou problemas de saúde</li>
                </ul>
              </div>

              <div className="help-card important">
                <div className="help-icon">⚠️</div>
                <h3>Considere Procurar Ajuda Se:</h3>
                <ul>
                  <li>Após várias semanas, ainda não há progresso</li>
                  <li>Você não tem certeza se o comportamento é normal</li>
                  <li>Ferimentos menores ocorrem repetidamente</li>
                  <li>Um rato está constantemente isolado ou estressado</li>
                  <li>Você tentou múltiplos métodos sem sucesso</li>
                </ul>
              </div>

              <div className="help-card">
                <div className="help-icon">💬</div>
                <h3>Onde Procurar Ajuda:</h3>
                <ul>
                  <li><strong>Grupos de tutores:</strong> Facebook, Reddit, fóruns especializados</li>
                  <li><strong>Veterinário:</strong> Especializado em animais exóticos/roedores</li>
                  <li><strong>Resgates:</strong> Organizações de resgate podem ter experiência</li>
                  <li><strong>Comunidades online:</strong> Fóruns internacionais têm muita experiência</li>
                </ul>
              </div>
            </div>

            <h2>Conclusão</h2>
            <p>
              Introduzir um novo rato a um grupo existente é um processo que requer paciência, 
              técnica, conhecimento e supervisão constante. Siga as fases gradualmente, não tenha 
              pressa, e sempre priorize a segurança e bem-estar de todos os ratos envolvidos.
            </p>
            <p>
              Uma introdução bem feita resulta em um grupo feliz, harmonioso e socialmente 
              enriquecido. Uma introdução mal feita pode resultar em ferimentos, estresse crônico, 
              e problemas permanentes que podem exigir separação permanente.
            </p>

            <HighlightBox variant="info" icon="💡">
              <p>
                <strong>Lembre-se:</strong> Cada grupo de ratos é único. O que funciona para alguns 
                pode não funcionar para outros. Adapte o método conforme necessário, mas sempre 
                priorize a segurança dos ratos. Quando em dúvida, espere mais tempo ou procure ajuda. 
                Não há vergonha em pedir ajuda - é um sinal de responsabilidade!
              </p>
            </HighlightBox>

            <div className="related-resources">
              <h3>Recursos Relacionados</h3>
              <ul>
                <li>
                  <Link to="/artigos/por-que-nao-posso-ter-apenas-um-rato-twister">
                    Por que não posso ter apenas um rato Twister?
                  </Link>
                </li>
                <li>
                  <Link to="/habitação">Habitação - A Gaiola Ideal</Link>
                </li>
                <li>
                  <Link to="/calculadora">Calculadora de Gaiola</Link>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </article>
    </Container>
    </>
  )
}

export default Artigo5

