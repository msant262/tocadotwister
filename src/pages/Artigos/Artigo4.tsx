import { useEffect, useRef } from 'react'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import './Artigos.css'

const Artigo4 = () => {
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

      const tables = contentRef.current.querySelectorAll('.cost-table')
      anime({
        targets: tables,
        opacity: [0, 1],
        scale: [0.95, 1],
        delay: 300,
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
            <div className="artigo-category">Guia Financeiro</div>
            <h1 className="artigo-hero-title">Quanto custa ter um rato Twister no Brasil?</h1>
            <p className="artigo-hero-meta">
              Publicado em: {new Date().toLocaleDateString('pt-BR')} | 
              Tempo de leitura: 6 minutos
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <article className="artigo">
          <div className="artigo-content" ref={contentRef}>
            <Card>
              <p className="artigo-intro">
                Ter um Rato Twister envolve custos mensais e iniciais que precisam ser 
                planejados. Esta tabela completa e atualizada com preços do mercado brasileiro 
                ajuda você a planejar financeiramente antes de adotar seus ratos e durante 
                toda a vida deles.
              </p>

              <HighlightBox variant="warning" icon="⚠️">
                <p>
                  <strong>Lembre-se:</strong> O mínimo são 2 ratos! Todos os custos devem 
                  ser calculados para pelo menos 2 ratos. Os valores abaixo são baseados em 
                  pesquisas de mercado (Cobasi, Petz, Amazon, Mercado Livre) e podem variar 
                  conforme região e época do ano.
                </p>
              </HighlightBox>

            <h2>Custos Iniciais (Investimento Único)</h2>
            <p>
              Estes são os custos que você terá uma única vez ao montar o habitat para seus ratos. 
              Investir em qualidade desde o início pode economizar dinheiro a longo prazo.
            </p>

            <div className="cost-table">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Econômico</th>
                    <th>Médio</th>
                    <th>Premium</th>
                    <th>Observações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Gaiola (para 2-3 ratos)</strong></td>
                    <td>R$ 250</td>
                    <td>R$ 450</td>
                    <td>R$ 900</td>
                    <td>Gaiolas maiores são mais caras mas duram anos</td>
                  </tr>
                  <tr>
                    <td>Bebedouros (2 unidades)</td>
                    <td>R$ 35</td>
                    <td>R$ 60</td>
                    <td>R$ 100</td>
                    <td>Bebedouros de vidro duram mais</td>
                  </tr>
                  <tr>
                    <td>Potes de comida (2 unidades)</td>
                    <td>R$ 25</td>
                    <td>R$ 50</td>
                    <td>R$ 80</td>
                    <td>Potes pesados evitam que virem</td>
                  </tr>
                  <tr>
                    <td>Brinquedos e enriquecimento inicial</td>
                    <td>R$ 60</td>
                    <td>R$ 180</td>
                    <td>R$ 350</td>
                    <td>Roda, túneis, cordas, brinquedos interativos</td>
                  </tr>
                  <tr>
                    <td>Tocas e esconderijos</td>
                    <td>R$ 50</td>
                    <td>R$ 120</td>
                    <td>R$ 250</td>
                    <td>Mínimo 2-3 esconderijos por rato</td>
                  </tr>
                  <tr>
                    <td>Redes e plataformas</td>
                    <td>R$ 40</td>
                    <td>R$ 100</td>
                    <td>R$ 200</td>
                    <td>Redes de tecido e plataformas de madeira</td>
                  </tr>
                  <tr>
                    <td>Substrato inicial (1 mês)</td>
                    <td>R$ 40</td>
                    <td>R$ 70</td>
                    <td>R$ 120</td>
                    <td>Celulose, papel reciclado ou maravalha</td>
                  </tr>
                  <tr>
                    <td>Primeira consulta veterinária</td>
                    <td>R$ 120</td>
                    <td>R$ 250</td>
                    <td>R$ 450</td>
                    <td>Check-up inicial e orientações</td>
                  </tr>
                  <tr>
                    <td>Kit de limpeza inicial</td>
                    <td>R$ 30</td>
                    <td>R$ 60</td>
                    <td>R$ 100</td>
                    <td>Escovas, produtos de limpeza seguros</td>
                  </tr>
                  <tr className="total-row">
                    <td><strong>TOTAL INICIAL</strong></td>
                    <td><strong>R$ 650</strong></td>
                    <td><strong>R$ 1.340</strong></td>
                    <td><strong>R$ 2.550</strong></td>
                    <td>Investimento único</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cost-breakdown">
              <div className="breakdown-card">
                <div className="breakdown-icon">💰</div>
                <h3>Opção Econômica (R$ 650)</h3>
                <p>
                  Para quem precisa economizar mas ainda quer qualidade. Inclui gaiola básica 
                  adequada, acessórios essenciais e consulta veterinária inicial. Funcional, 
                  mas pode precisar de upgrades futuros.
                </p>
              </div>

              <div className="breakdown-card highlight">
                <div className="breakdown-icon">⭐</div>
                <h3>Opção Recomendada (R$ 1.340)</h3>
                <p>
                  <strong>RECOMENDADO:</strong> Equilíbrio perfeito entre custo e qualidade. 
                  Gaiola adequada que durará anos, acessórios de boa qualidade e tudo que 
                  seus ratos precisam para serem felizes e saudáveis.
                </p>
              </div>

              <div className="breakdown-card">
                <div className="breakdown-icon">👑</div>
                <h3>Opção Premium (R$ 2.550)</h3>
                <p>
                  Para quem quer o melhor de tudo. Gaiola grande e de alta qualidade, 
                  acessórios premium, brinquedos variados e consulta veterinária completa. 
                  Investimento que dura muitos anos.
                </p>
              </div>
            </div>

            <h2>Custos Mensais Recorrentes</h2>
            <p>
              Estes são os custos que você terá todos os meses. Os valores variam conforme 
              a qualidade dos produtos e a região do Brasil. Valores baseados em pesquisas 
              de mercado atualizadas.
            </p>

            <div className="cost-table">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Econômico</th>
                    <th>Médio</th>
                    <th>Premium</th>
                    <th>Detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Ração (2 ratos)</strong></td>
                    <td>R$ 50</td>
                    <td>R$ 90</td>
                    <td>R$ 160</td>
                    <td>1-2kg/mês conforme qualidade</td>
                  </tr>
                  <tr>
                    <td>Substrato (celulose/papel)</td>
                    <td>R$ 35</td>
                    <td>R$ 70</td>
                    <td>R$ 120</td>
                    <td>Troca semanal ou conforme uso</td>
                  </tr>
                  <tr>
                    <td>Frutas e vegetais frescos</td>
                    <td>R$ 25</td>
                    <td>R$ 50</td>
                    <td>R$ 90</td>
                    <td>Pequenas porções diárias</td>
                  </tr>
                  <tr>
                    <td>Petiscos e recompensas</td>
                    <td>R$ 15</td>
                    <td>R$ 35</td>
                    <td>R$ 60</td>
                    <td>Petiscos comerciais ou naturais</td>
                  </tr>
                  <tr>
                    <td>Brinquedos e enriquecimento</td>
                    <td>R$ 15</td>
                    <td>R$ 40</td>
                    <td>R$ 80</td>
                    <td>Novos brinquedos mensais</td>
                  </tr>
                  <tr>
                    <td>Produtos de limpeza</td>
                    <td>R$ 15</td>
                    <td>R$ 30</td>
                    <td>R$ 50</td>
                    <td>Produtos seguros para roedores</td>
                  </tr>
                  <tr>
                    <td>Reposição de acessórios</td>
                    <td>R$ 10</td>
                    <td>R$ 25</td>
                    <td>R$ 50</td>
                    <td>Redes, brinquedos quebrados, etc.</td>
                  </tr>
                  <tr className="total-row">
                    <td><strong>TOTAL MENSAL</strong></td>
                    <td><strong>R$ 165</strong></td>
                    <td><strong>R$ 340</strong></td>
                    <td><strong>R$ 610</strong></td>
                    <td>Custo recorrente</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="monthly-details">
              <div className="detail-card">
                <h3>💡 Dica de Economia</h3>
                <p>
                  Comprar ração e substrato em quantidades maiores (pacotes grandes) pode 
                  reduzir o custo mensal em até 20-30%. Muitas lojas oferecem descontos 
                  para compras em volume.
                </p>
              </div>

              <div className="detail-card">
                <h3>📊 Variação Regional</h3>
                <p>
                  Os preços podem variar significativamente entre regiões. Grandes centros 
                  urbanos tendem a ter preços mais altos. Considere comprar online quando 
                  possível para comparar preços.
                </p>
              </div>
            </div>

            <h2>Custos Ocasionais (Saúde e Emergências)</h2>
            <p>
              Estes custos não são mensais, mas podem surgir a qualquer momento. É essencial 
              estar preparado financeiramente para emergências veterinárias.
            </p>

            <div className="cost-table">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Econômico</th>
                    <th>Médio</th>
                    <th>Premium</th>
                    <th>Frequência</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Consulta veterinária regular</strong></td>
                    <td>R$ 120</td>
                    <td>R$ 250</td>
                    <td>R$ 450</td>
                    <td>1-2x/ano (preventivo)</td>
                  </tr>
                  <tr>
                    <td>Medicamentos básicos</td>
                    <td>R$ 60</td>
                    <td>R$ 150</td>
                    <td>R$ 300</td>
                    <td>Conforme necessidade</td>
                  </tr>
                  <tr>
                    <td>Antibióticos</td>
                    <td>R$ 80</td>
                    <td>R$ 180</td>
                    <td>R$ 350</td>
                    <td>Em caso de infecção</td>
                  </tr>
                  <tr>
                    <td>Exames básicos (sangue, fezes)</td>
                    <td>R$ 150</td>
                    <td>R$ 300</td>
                    <td>R$ 500</td>
                    <td>Anual ou conforme necessidade</td>
                  </tr>
                  <tr>
                    <td>Raio-X</td>
                    <td>R$ 120</td>
                    <td>R$ 250</td>
                    <td>R$ 400</td>
                    <td>Conforme necessidade</td>
                  </tr>
                  <tr>
                    <td>Ultrassom</td>
                    <td>R$ 200</td>
                    <td>R$ 400</td>
                    <td>R$ 700</td>
                    <td>Conforme necessidade</td>
                  </tr>
                  <tr>
                    <td>Cirurgia simples</td>
                    <td>R$ 600</td>
                    <td>R$ 1.500</td>
                    <td>R$ 3.000</td>
                    <td>Remoção de tumor, etc.</td>
                  </tr>
                  <tr>
                    <td>Cirurgia complexa</td>
                    <td>R$ 1.200</td>
                    <td>R$ 2.500</td>
                    <td>R$ 5.000</td>
                    <td>Emergências graves</td>
                  </tr>
                  <tr>
                    <td>Internação (diária)</td>
                    <td>R$ 150</td>
                    <td>R$ 300</td>
                    <td>R$ 500</td>
                    <td>Conforme necessidade</td>
                  </tr>
                  <tr>
                    <td>Eutanásia (se necessário)</td>
                    <td>R$ 100</td>
                    <td>R$ 200</td>
                    <td>R$ 350</td>
                    <td>Quando necessário</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <HighlightBox variant="warning" icon="⚠️">
              <p>
                <strong>IMPORTANTE:</strong> Ratos podem desenvolver problemas de saúde que 
                requerem tratamento imediato. Tumores, infecções respiratórias e outras 
                condições são comuns. Sempre tenha um fundo de emergência disponível.
              </p>
            </HighlightBox>

            <h2>Custos por Categoria Detalhados</h2>
            <p>
              Vamos detalhar cada categoria de custo para você entender melhor onde seu 
              dinheiro será investido:
            </p>

            <div className="category-breakdown">
              <div className="category-card">
                <div className="category-icon">🏠</div>
                <h3>Habitação e Acessórios</h3>
                <div className="category-items">
                  <div className="category-item">
                    <strong>Gaiola:</strong> R$ 250-900 (investimento único, dura anos)
                  </div>
                  <div className="category-item">
                    <strong>Bebedouros:</strong> R$ 35-100 (duram muito tempo)
                  </div>
                  <div className="category-item">
                    <strong>Potes:</strong> R$ 25-80 (duram muito tempo)
                  </div>
                  <div className="category-item">
                    <strong>Redes e plataformas:</strong> R$ 40-200 (precisam reposição ocasional)
                  </div>
                  <div className="category-item">
                    <strong>Tocas:</strong> R$ 50-250 (duram bem se de qualidade)
                  </div>
                </div>
                <div className="category-tip">
                  <strong>💡 Dica:</strong> Invista em uma gaiola grande desde o início. 
                  É mais caro, mas evita necessidade de upgrade futuro.
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">🍽️</div>
                <h3>Alimentação</h3>
                <div className="category-items">
                  <div className="category-item">
                    <strong>Ração:</strong> R$ 50-160/mês (varia conforme qualidade e marca)
                  </div>
                  <div className="category-item">
                    <strong>Frutas/Vegetais:</strong> R$ 25-90/mês (compre da estação para economizar)
                  </div>
                  <div className="category-item">
                    <strong>Petiscos:</strong> R$ 15-60/mês (podem ser caseiros)
                  </div>
                </div>
                <div className="category-tip">
                  <strong>💡 Dica:</strong> Ração de qualidade previne problemas de saúde 
                  que custam muito mais caro no veterinário.
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">🧹</div>
                <h3>Manutenção e Limpeza</h3>
                <div className="category-items">
                  <div className="category-item">
                    <strong>Substrato:</strong> R$ 35-120/mês (maior custo mensal)
                  </div>
                  <div className="category-item">
                    <strong>Produtos limpeza:</strong> R$ 15-50/mês
                  </div>
                  <div className="category-item">
                    <strong>Reposição acessórios:</strong> R$ 10-50/mês
                  </div>
                </div>
                <div className="category-tip">
                  <strong>💡 Dica:</strong> Compre substrato em pacotes grandes. É mais 
                  barato por kg e dura mais tempo.
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">🎮</div>
                <h3>Enriquecimento e Brinquedos</h3>
                <div className="category-items">
                  <div className="category-item">
                    <strong>Brinquedos iniciais:</strong> R$ 60-350 (investimento único)
                  </div>
                  <div className="category-item">
                    <strong>Brinquedos mensais:</strong> R$ 15-80/mês
                  </div>
                  <div className="category-item">
                    <strong>DIY:</strong> R$ 0-20/mês (materiais para fazer brinquedos)
                  </div>
                </div>
                <div className="category-tip">
                  <strong>💡 Dica:</strong> Muitos brinquedos podem ser feitos em casa com 
                  papelão, rolos de papel higiênico e outros materiais seguros.
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">🏥</div>
                <h3>Saúde e Veterinária</h3>
                <div className="category-items">
                  <div className="category-item">
                    <strong>Consulta preventiva:</strong> R$ 120-450 (1-2x/ano)
                  </div>
                  <div className="category-item">
                    <strong>Medicamentos:</strong> R$ 60-350 (conforme necessidade)
                  </div>
                  <div className="category-item">
                    <strong>Exames:</strong> R$ 150-500 (anual ou conforme necessidade)
                  </div>
                  <div className="category-item">
                    <strong>Emergências:</strong> R$ 500-5.000+ (imprevisível)
                  </div>
                </div>
                <div className="category-tip">
                  <strong>💡 Dica:</strong> Consultas preventivas são mais baratas que 
                  tratar doenças. Invista em prevenção!
                </div>
              </div>
            </div>

            <h2>Como Economizar Sem Comprometer a Qualidade</h2>
            <p>
              É possível reduzir custos sem comprometer o bem-estar dos seus ratos. Aqui estão 
              estratégias comprovadas:
            </p>

            <div className="saving-strategies">
              <div className="strategy-card">
                <div className="strategy-icon">🎨</div>
                <h3>Brinquedos DIY (Faça Você Mesmo)</h3>
                <div className="strategy-content">
                  <p><strong>Economia:</strong> R$ 30-80/mês</p>
                  <p><strong>Ideias:</strong></p>
                  <ul>
                    <li>Rolos de papel higiênico (túneis)</li>
                    <li>Caixas de papelão (esconderijos)</li>
                    <li>Cordas de algodão (escalada)</li>
                    <li>Papel picado (forrageamento)</li>
                    <li>Potes de plástico (brinquedos interativos)</li>
                  </ul>
                  <div className="strategy-note">
                    <strong>💡 Dica:</strong> Ratos adoram brinquedos simples! Não precisa 
                    gastar muito em brinquedos caros.
                  </div>
                </div>
              </div>

              <div className="strategy-card">
                <div className="strategy-icon">📦</div>
                <h3>Compras em Volume</h3>
                <div className="strategy-content">
                  <p><strong>Economia:</strong> 15-30% em ração e substrato</p>
                  <p><strong>Onde:</strong></p>
                  <ul>
                    <li>Pacotes grandes de ração (5-10kg)</li>
                    <li>Substrato em sacos grandes</li>
                    <li>Compras online (Amazon, Mercado Livre)</li>
                    <li>Promoções em pet shops</li>
                  </ul>
                  <div className="strategy-note">
                    <strong>💡 Dica:</strong> Armazene corretamente para manter qualidade. 
                    Ração em potes herméticos, substrato em local seco.
                  </div>
                </div>
              </div>

              <div className="strategy-card">
                <div className="strategy-icon">🥬</div>
                <h3>Frutas e Vegetais da Estação</h3>
                <div className="strategy-content">
                  <p><strong>Economia:</strong> 30-50% comparado a fora de estação</p>
                  <p><strong>Vantagens:</strong></p>
                  <ul>
                    <li>Mais baratos</li>
                    <li>Mais frescos</li>
                    <li>Melhor qualidade nutricional</li>
                    <li>Variedade ao longo do ano</li>
                  </ul>
                  <div className="strategy-note">
                    <strong>💡 Dica:</strong> Compre em feiras livres ou hortifrúti. 
                    Geralmente mais barato que supermercados.
                  </div>
                </div>
              </div>

              <div className="strategy-card">
                <div className="strategy-icon">🧹</div>
                <h3>Limpeza Preventiva</h3>
                <div className="strategy-content">
                  <p><strong>Economia:</strong> Evita custos veterinários altos</p>
                  <p><strong>Práticas:</strong></p>
                  <ul>
                    <li>Limpeza diária rápida (5 minutos)</li>
                    <li>Limpeza completa semanal</li>
                    <li>Troca de substrato regular</li>
                    <li>Ventilação adequada</li>
                  </ul>
                  <div className="strategy-note">
                    <strong>💡 Dica:</strong> Prevenção é sempre mais barata que tratamento. 
                    Uma consulta preventiva custa muito menos que tratar uma doença.
                  </div>
                </div>
              </div>

              <div className="strategy-card">
                <div className="strategy-icon">🛒</div>
                <h3>Comparação de Preços</h3>
                <div className="strategy-content">
                  <p><strong>Economia:</strong> 10-25% em compras</p>
                  <p><strong>Onde comparar:</strong></p>
                  <ul>
                    <li>Cobasi vs Petz vs Amazon</li>
                    <li>Mercado Livre (vendedores confiáveis)</li>
                    <li>Pet shops locais (podem ter promoções)</li>
                    <li>Compras online (frete grátis)</li>
                  </ul>
                  <div className="strategy-note">
                    <strong>💡 Dica:</strong> Use aplicativos de comparação de preços. 
                    Às vezes a diferença é significativa!
                  </div>
                </div>
              </div>

              <div className="strategy-card">
                <div className="strategy-icon">👥</div>
                <h3>Compras em Grupo</h3>
                <div className="strategy-content">
                  <p><strong>Economia:</strong> 10-20% em compras grandes</p>
                  <p><strong>Como:</strong></p>
                  <ul>
                    <li>Organize compras coletivas com outros tutores</li>
                    <li>Divida pacotes grandes</li>
                    <li>Negocie descontos em pet shops</li>
                    <li>Compartilhe frete em compras online</li>
                  </ul>
                  <div className="strategy-note">
                    <strong>💡 Dica:</strong> Participe de grupos de tutores de ratos nas 
                    redes sociais para organizar compras coletivas.
                  </div>
                </div>
              </div>
            </div>

            <h2>Onde NÃO Economizar</h2>
            <p>
              Algumas coisas são essenciais e economizar nelas pode custar muito mais caro 
              a longo prazo:
            </p>

            <div className="no-save-section">
              <div className="no-save-card critical">
                <div className="no-save-icon">🏥</div>
                <h3>Veterinário de Exóticos</h3>
                <p>
                  <strong>Por quê:</strong> Ratos precisam de veterinário especializado. 
                  Veterinários de cães/gatos podem não ter conhecimento adequado.
                </p>
                <p>
                  <strong>Custo de economizar:</strong> Diagnóstico errado, tratamento 
                  inadequado, perda do animal.
                </p>
                <p>
                  <strong>Recomendação:</strong> Sempre tenha um veterinário de exóticos 
                  identificado ANTES de precisar.
                </p>
              </div>

              <div className="no-save-card critical">
                <div className="no-save-icon">🏠</div>
                <h3>Gaiola Adequada</h3>
                <p>
                  <strong>Por quê:</strong> Gaiola pequena causa estresse, problemas de 
                  comportamento e saúde.
                </p>
                <p>
                  <strong>Custo de economizar:</strong> Problemas de saúde, necessidade de 
                  upgrade futuro (gastando duas vezes).
                </p>
                <p>
                  <strong>Recomendação:</strong> Invista em uma gaiola adequada desde o início. 
                  É um investimento que dura anos.
                </p>
              </div>

              <div className="no-save-card critical">
                <div className="no-save-icon">🌾</div>
                <h3>Substrato de Qualidade</h3>
                <p>
                  <strong>Por quê:</strong> Substratos baratos (serragem de pinho/cedro) podem 
                  causar problemas respiratórios graves.
                </p>
                <p>
                  <strong>Custo de economizar:</strong> Problemas respiratórios crônicos, 
                  custos veterinários altos, sofrimento do animal.
                </p>
                <p>
                  <strong>Recomendação:</strong> Use substratos seguros: celulose, papel 
                  reciclado, ou maravalha de álamo.
                </p>
              </div>

              <div className="no-save-card critical">
                <div className="no-save-icon">🍽️</div>
                <h3>Ração de Qualidade</h3>
                <p>
                  <strong>Por quê:</strong> Ração ruim causa deficiências nutricionais, 
                  problemas de saúde, menor expectativa de vida.
                </p>
                <p>
                  <strong>Custo de economizar:</strong> Problemas de saúde a longo prazo, 
                  custos veterinários, menor qualidade de vida.
                </p>
                <p>
                  <strong>Recomendação:</strong> Invista em ração de boa qualidade. É a base 
                  da saúde dos seus ratos.
                </p>
              </div>

              <div className="no-save-card">
                <div className="no-save-icon">💧</div>
                <h3>Bebedouros de Qualidade</h3>
                <p>
                  <strong>Por quê:</strong> Bebedouros baratos podem vazar, quebrar facilmente, 
                  ou não funcionar adequadamente.
                </p>
                  <p>
                  <strong>Custo de economizar:</strong> Necessidade de reposição frequente, 
                  risco de desidratação.
                </p>
                <p>
                  <strong>Recomendação:</strong> Bebedouros de vidro ou plástico de qualidade 
                  duram muito tempo.
                </p>
              </div>
            </div>

            <h2>Comparação: Custos ao Longo da Vida</h2>
            <p>
              Vamos calcular o custo total ao longo da vida útil média de um rato (2-3 anos), 
              considerando 2 ratos:
            </p>

            <div className="lifetime-costs">
              <div className="lifetime-card">
                <h3>Opção Econômica (2 anos)</h3>
                <div className="lifetime-breakdown">
                  <div className="lifetime-item">
                    <span>Custo Inicial:</span>
                    <strong>R$ 650</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Custo Mensal (24 meses):</span>
                    <strong>R$ 3.960</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Consultas Preventivas (4x):</span>
                    <strong>R$ 480</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Emergências Estimadas:</span>
                    <strong>R$ 500</strong>
                  </div>
                  <div className="lifetime-total">
                    <span>TOTAL (2 anos):</span>
                    <strong>R$ 5.590</strong>
                  </div>
                  <div className="lifetime-monthly">
                    <span>Custo médio mensal:</span>
                    <strong>R$ 233</strong>
                  </div>
                </div>
              </div>

              <div className="lifetime-card highlight">
                <h3>Opção Recomendada (2 anos)</h3>
                <div className="lifetime-breakdown">
                  <div className="lifetime-item">
                    <span>Custo Inicial:</span>
                    <strong>R$ 1.340</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Custo Mensal (24 meses):</span>
                    <strong>R$ 8.160</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Consultas Preventivas (4x):</span>
                    <strong>R$ 1.000</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Emergências Estimadas:</span>
                    <strong>R$ 1.000</strong>
                  </div>
                  <div className="lifetime-total">
                    <span>TOTAL (2 anos):</span>
                    <strong>R$ 11.500</strong>
                  </div>
                  <div className="lifetime-monthly">
                    <span>Custo médio mensal:</span>
                    <strong>R$ 479</strong>
                  </div>
                </div>
              </div>

              <div className="lifetime-card">
                <h3>Opção Premium (2 anos)</h3>
                <div className="lifetime-breakdown">
                  <div className="lifetime-item">
                    <span>Custo Inicial:</span>
                    <strong>R$ 2.550</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Custo Mensal (24 meses):</span>
                    <strong>R$ 14.640</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Consultas Preventivas (4x):</span>
                    <strong>R$ 1.800</strong>
                  </div>
                  <div className="lifetime-item">
                    <span>Emergências Estimadas:</span>
                    <strong>R$ 2.000</strong>
                  </div>
                  <div className="lifetime-total">
                    <span>TOTAL (2 anos):</span>
                    <strong>R$ 20.990</strong>
                  </div>
                  <div className="lifetime-monthly">
                    <span>Custo médio mensal:</span>
                    <strong>R$ 875</strong>
                  </div>
                </div>
              </div>
            </div>

            <h2>Fundo de Emergência</h2>
            <p>
              Ratos podem desenvolver problemas de saúde que requerem tratamento imediato. 
              É essencial ter um fundo de emergência disponível:
            </p>

            <div className="emergency-fund">
              <div className="fund-card minimum">
                <div className="fund-icon">💰</div>
                <h3>Fundo Mínimo</h3>
                <div className="fund-amount">R$ 1.000 - R$ 1.500</div>
                <p>
                  Cobre consultas de emergência, exames básicos e medicamentos simples. 
                  Adequado para tutores que podem arcar com custos adicionais se necessário.
                </p>
              </div>

              <div className="fund-card recommended highlight">
                <div className="fund-icon">⭐</div>
                <h3>Fundo Recomendado</h3>
                <div className="fund-amount">R$ 2.000 - R$ 3.000</div>
                <p>
                  <strong>RECOMENDADO:</strong> Cobre a maioria das emergências, incluindo 
                  cirurgias simples, exames e tratamentos. Dá tranquilidade para lidar com 
                  imprevistos.
                </p>
              </div>

              <div className="fund-card ideal">
                <div className="fund-icon">🛡️</div>
                <h3>Fundo Ideal</h3>
                <div className="fund-amount">R$ 3.000 - R$ 5.000</div>
                <p>
                  Cobre praticamente qualquer emergência, incluindo cirurgias complexas e 
                  tratamentos prolongados. Máxima segurança financeira.
                </p>
              </div>
            </div>

            <HighlightBox variant="warning" icon="⚠️">
              <p>
                <strong>IMPORTANTE:</strong> Este fundo deve estar disponível ANTES de adotar 
                os ratos. Emergências veterinárias não esperam. Não adote se não tiver como 
                cobrir custos de emergência.
              </p>
            </HighlightBox>

            <h2>Custos Adicionais a Considerar</h2>
            <p>
              Além dos custos básicos, há outros gastos que podem surgir:
            </p>

            <div className="additional-costs">
              <div className="additional-card">
                <div className="additional-icon">🚗</div>
                <h3>Transporte</h3>
                <p>
                  <strong>Custo:</strong> R$ 20-100/consulta</p>
                <p>
                  Transporte para veterinário, especialmente em emergências. Considere 
                  aplicativos de transporte ou ter um plano de transporte próprio.
                </p>
              </div>

              <div className="additional-card">
                <div className="additional-icon">🏨</div>
                <h3>Pet Sitter / Cuidados</h3>
                <p>
                  <strong>Custo:</strong> R$ 30-100/dia</p>
                <p>
                  Se você viajar, precisará de alguém para cuidar dos ratos. Alguns tutores 
                  preferem levar os ratos, outros contratam pet sitters.
                </p>
              </div>

              <div className="additional-card">
                <div className="additional-icon">📚</div>
                <h3>Educação e Recursos</h3>
                <p>
                  <strong>Custo:</strong> R$ 0-200 (opcional)</p>
                <p>
                  Livros, cursos online, consultas com especialistas. Não é essencial, mas 
                  pode melhorar muito os cuidados.
                </p>
              </div>

              <div className="additional-card">
                <div className="additional-icon">🎁</div>
                <h3>Melhorias e Upgrades</h3>
                <p>
                  <strong>Custo:</strong> Variável</p>
                <p>
                  Novos acessórios, melhorias na gaiola, brinquedos especiais. Não é 
                  obrigatório, mas melhora a qualidade de vida.
                </p>
              </div>
            </div>

            <h2>Comparação com Outros Pets</h2>
            <p>
              Para contexto, vamos comparar os custos de ratos com outros pets comuns:
            </p>

            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Pet</th>
                    <th>Custo Inicial</th>
                    <th>Custo Mensal</th>
                    <th>Observações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Ratos (2)</strong></td>
                    <td>R$ 650-2.550</td>
                    <td>R$ 165-610</td>
                    <td>Requerem pelo menos 2</td>
                  </tr>
                  <tr>
                    <td>Hamster</td>
                    <td>R$ 300-800</td>
                    <td>R$ 80-200</td>
                    <td>Pode viver sozinho</td>
                  </tr>
                  <tr>
                    <td>Porquinho-da-índia (2)</td>
                    <td>R$ 800-2.000</td>
                    <td>R$ 200-500</td>
                    <td>Também requerem pelo menos 2</td>
                  </tr>
                  <tr>
                    <td>Cão (pequeno)</td>
                    <td>R$ 1.500-5.000</td>
                    <td>R$ 300-800</td>
                    <td>Maior custo inicial</td>
                  </tr>
                  <tr>
                    <td>Gato</td>
                    <td>R$ 800-3.000</td>
                    <td>R$ 200-600</td>
                    <td>Custos variam muito</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="comparison-note">
              <p>
                <strong>Nota:</strong> Ratos têm custos moderados comparados a outros pets. 
                O custo inicial pode ser menor que cães/gatos, mas os custos mensais são 
                similares quando consideramos que precisam de pelo menos 2.
              </p>
            </div>

            <h2>Planejamento Financeiro</h2>
            <p>
              Antes de adotar, faça um planejamento financeiro realista:
            </p>

            <div className="planning-checklist">
              <div className="plan-item">
                <div className="plan-check">✅</div>
                <div className="plan-text">
                  <strong>Custo Inicial:</strong> Tenha pelo menos R$ 1.000-1.500 disponíveis 
                  para o investimento inicial (opção recomendada).
                </div>
              </div>

              <div className="plan-item">
                <div className="plan-check">✅</div>
                <div className="plan-text">
                  <strong>Custo Mensal:</strong> Reserve R$ 300-400/mês para custos recorrentes 
                  (opção recomendada).
                </div>
              </div>

              <div className="plan-item">
                <div className="plan-check">✅</div>
                <div className="plan-text">
                  <strong>Fundo de Emergência:</strong> Mantenha R$ 2.000-3.000 disponíveis 
                  para emergências veterinárias.
                </div>
              </div>

              <div className="plan-item">
                <div className="plan-check">✅</div>
                <div className="plan-text">
                  <strong>Veterinário:</strong> Identifique um veterinário de exóticos ANTES 
                  de adotar e saiba os custos de consulta.
                </div>
              </div>

              <div className="plan-item">
                <div className="plan-check">✅</div>
                <div className="plan-text">
                  <strong>Orçamento Anual:</strong> Planeje para pelo menos R$ 4.000-6.000/ano 
                  (sem emergências) para 2 ratos.
                </div>
              </div>
            </div>

            <h2>Resumo Financeiro Completo</h2>
            <div className="summary-complete">
              <div className="summary-section">
                <h3>💰 Custo Inicial (Uma Vez)</h3>
                <div className="summary-values">
                  <div className="summary-value">
                    <span>Econômico:</span>
                    <strong>R$ 650</strong>
                  </div>
                  <div className="summary-value">
                    <span>Recomendado:</span>
                    <strong>R$ 1.340</strong>
                  </div>
                  <div className="summary-value">
                    <span>Premium:</span>
                    <strong>R$ 2.550</strong>
                  </div>
                </div>
              </div>

              <div className="summary-section">
                <h3>📅 Custo Mensal Recorrente</h3>
                <div className="summary-values">
                  <div className="summary-value">
                    <span>Econômico:</span>
                    <strong>R$ 165</strong>
                  </div>
                  <div className="summary-value">
                    <span>Recomendado:</span>
                    <strong>R$ 340</strong>
                  </div>
                  <div className="summary-value">
                    <span>Premium:</span>
                    <strong>R$ 610</strong>
                  </div>
                </div>
              </div>

              <div className="summary-section">
                <h3>📊 Custo Anual (Sem Emergências)</h3>
                <div className="summary-values">
                  <div className="summary-value">
                    <span>Econômico:</span>
                    <strong>R$ 1.980</strong>
                  </div>
                  <div className="summary-value">
                    <span>Recomendado:</span>
                    <strong>R$ 4.080</strong>
                  </div>
                  <div className="summary-value">
                    <span>Premium:</span>
                    <strong>R$ 7.320</strong>
                  </div>
                </div>
              </div>

              <div className="summary-section">
                <h3>🏥 Fundo de Emergência Recomendado</h3>
                <div className="summary-values">
                  <div className="summary-value highlight">
                    <span>Recomendado:</span>
                    <strong>R$ 2.000 - R$ 3.000</strong>
                  </div>
                </div>
              </div>
            </div>

            <h2>Conclusão</h2>
            <p>
              Ter ratos Twister tem custos significativos, especialmente considerando que você 
              precisa de pelo menos 2 ratos. Os custos variam conforme a qualidade dos produtos 
              escolhidos e a região do Brasil.
            </p>
            <p>
              <strong>Planeje financeiramente antes de adotar</strong> e esteja preparado para 
              custos inesperados. O investimento vale a pena pelo amor, companheirismo e alegria 
              que esses animais incríveis proporcionam!
            </p>
            <p>
              Lembre-se: <strong>não adote se não tiver condições financeiras</strong> de 
              proporcionar cuidados adequados, incluindo emergências veterinárias. O bem-estar 
              dos animais deve sempre vir em primeiro lugar.
            </p>

            <HighlightBox variant="success" icon="✅">
              <p>
                <strong>Dica Final:</strong> Se você está começando, comece com a opção 
                recomendada. É um bom equilíbrio entre custo e qualidade. Você sempre pode 
                fazer upgrades futuros conforme sua situação financeira melhorar.
              </p>
            </HighlightBox>
          </Card>
        </div>
      </article>
    </Container>
    </>
  )
}

export default Artigo4

