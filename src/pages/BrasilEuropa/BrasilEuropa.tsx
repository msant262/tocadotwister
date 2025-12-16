import { useEffect, useRef } from 'react'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import '../../styles/shared.css'
import './BrasilEuropa.css'

const BrasilEuropa = () => {
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

      const resourceCards = contentRef.current.querySelectorAll('.resource-card')
      anime({
        targets: resourceCards,
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
      <section className="brasil-hero" ref={heroRef}>
        <Container>
          <div className="brasil-hero-content">
            <h1 className="brasil-hero-title">Brasil</h1>
            <p className="brasil-hero-subtitle">
              Guia completo de recursos, produtos e serviços disponíveis no Brasil para seus ratos
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <div ref={contentRef} className="brasil-page-content">

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Gaiolas no Brasil</h2>
            <p className="section-description">
              Encontre a gaiola perfeita para seus ratos usando recursos disponíveis no mercado brasileiro.
            </p>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">🛒</div>
              <h3>Onde Comprar</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Pet Shops Físicos:</strong>
                  <ul>
                    <li>Petz</li>
                    <li>Cobasi</li>
                    <li>Pet Center</li>
                    <li>Lojas locais especializadas</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Lojas Online:</strong>
                  <ul>
                    <li>Mercado Livre</li>
                    <li>Amazon Brasil</li>
                    <li>Americanas</li>
                    <li>Magazine Luiza</li>
                    <li>Shopee</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🏠</div>
              <h3>Tipos de Gaiolas Disponíveis</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Gaiolas de Malha Fina:</strong>
                  <ul>
                    <li>Preço: R$ 200-600</li>
                    <li>Malha: 0.6-0.8cm (pode precisar adaptação)</li>
                    <li>Múltiplos níveis disponíveis</li>
                    <li>Fácil de encontrar</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Gaiolas para Hamsters/Coelhos:</strong>
                  <ul>
                    <li>Podem ser adaptadas para ratos</li>
                    <li>Verificar tamanho da malha</li>
                    <li>Preços variados</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card highlight">
              <div className="resource-icon">🔧</div>
              <h3>Adaptações Criativas</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Opção 1: Reforçar Malha</strong>
                  <p>Use tela de arame fino (0.5cm) para reforçar gaiolas com malha grande. Disponível em lojas de construção.</p>
                </div>
                <div className="resource-item">
                  <strong>Opção 2: Adaptar Móveis</strong>
                  <p>Transforme estantes ou armários em gaiolas grandes usando telas. Muito espaço por preço menor!</p>
                </div>
                <div className="resource-item">
                  <strong>Opção 3: Gaiolas Modulares</strong>
                  <p>Combine múltiplas gaiolas pequenas conectadas com túneis para criar um habitat grande.</p>
                </div>
              </div>
            </div>
          </div>

          <HighlightBox variant="info" icon="💡">
            <p>
              <strong>Dica:</strong> Sempre verifique o tamanho da malha antes de comprar. 
              Ratos podem escapar por malhas maiores que 1cm. Se necessário, use tela de arame 
              fino para reforçar.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Substratos no Brasil</h2>
            <p className="section-description">
              Encontre os melhores substratos disponíveis no mercado brasileiro para seus ratos.
            </p>
          </div>

          <div className="resources-grid">
            <div className="resource-card highlight">
              <div className="resource-icon">✅</div>
              <h3>Celulose</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Características:</strong>
                  <ul>
                    <li>Muito absorvente</li>
                    <li>Controle de odor bom</li>
                    <li>Sem poeira</li>
                    <li>Seguro para ratos</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Onde encontrar:</strong>
                  <ul>
                    <li>Pet shops físicos e online</li>
                    <li>Marcas: Chipsi, Carefresh (importado)</li>
                    <li>Preço: R$ 30-80 por pacote</li>
                  </ul>
                </div>
                <div className="resource-recommendation">
                  <strong>✅ RECOMENDADO:</strong> Excelente opção brasileira!
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🌲</div>
              <h3>Granulado de Madeira</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Características:</strong>
                  <ul>
                    <li>Absorvente</li>
                    <li>Controle de odor bom</li>
                    <li>Econômico em grandes quantidades</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Onde encontrar:</strong>
                  <ul>
                    <li>Pet shops</li>
                    <li>Lojas de ração</li>
                    <li>Preço: R$ 20-50 por saco</li>
                  </ul>
                </div>
                <div className="resource-warning">
                  <strong>⚠️ ATENÇÃO:</strong> Apenas madeiras seguras! Evite pinus, eucalipto e outras madeiras tóxicas.
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">📄</div>
              <h3>Outras Opções</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Maravalha (Madeira Segura):</strong>
                  <ul>
                    <li>Disponível em pet shops</li>
                    <li>Econômica</li>
                    <li>Verificar tipo de madeira</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Papel Picado:</strong>
                  <ul>
                    <li>Faça você mesmo</li>
                    <li>Use papel sem tinta</li>
                    <li>Econômico e seguro</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Substratos de Papel Reciclado:</strong>
                  <ul>
                    <li>Disponíveis em pet shops</li>
                    <li>Ecológicos</li>
                    <li>Boa absorção</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Ração e Alimentação no Brasil</h2>
            <p className="section-description">
              Encontre rações e alimentos adequados para seus ratos no mercado brasileiro.
            </p>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">🍽️</div>
              <h3>Rações Disponíveis</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Rações para Hamsters/Coelhos:</strong>
                  <ul>
                    <li>Podem ser usadas para ratos</li>
                    <li>Verificar composição</li>
                    <li>Evitar rações com muitos açúcares</li>
                    <li>Marcas: Nutrópica, Golden, Friskies</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Rações Importadas:</strong>
                  <ul>
                    <li>Science Selective (encontrada em alguns pet shops)</li>
                    <li>Oxbow (rara, mas disponível online)</li>
                    <li>Preços mais altos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card highlight">
              <div className="resource-icon">🍎</div>
              <h3>Alimentos Frescos</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Vantagem do Brasil:</strong>
                  <p>Grande variedade de frutas e legumes frescos disponíveis o ano todo!</p>
                </div>
                <div className="resource-item">
                  <strong>Onde comprar:</strong>
                  <ul>
                    <li>Feiras livres (melhor preço)</li>
                    <li>Sacolões</li>
                    <li>Supermercados</li>
                    <li>Hortifruti</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Frutas e Legumes Locais:</strong>
                  <ul>
                    <li>Banana (muito barata)</li>
                    <li>Mamão</li>
                    <li>Abóbora</li>
                    <li>Brócolis</li>
                    <li>Cenoura</li>
                    <li>E muitos outros!</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🥜</div>
              <h3>Petiscos e Suplementos</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Petiscos Comerciais:</strong>
                  <ul>
                    <li>Disponíveis em pet shops</li>
                    <li>Verificar ingredientes</li>
                    <li>Usar com moderação</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Petiscos Naturais:</strong>
                  <ul>
                    <li>Nozes e sementes (feiras e supermercados)</li>
                    <li>Frutas secas</li>
                    <li>Ovos cozidos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <HighlightBox variant="info" icon="💡">
            <p>
              <strong>Dica:</strong> Como rações específicas para ratos são raras no Brasil, 
              complemente a dieta com alimentos frescos variados. Isso compensa qualquer 
              deficiência nutricional e é muito mais barato!
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Brinquedos e Acessórios</h2>
            <p className="section-description">
              Encontre ou crie brinquedos e acessórios para enriquecer o ambiente dos seus ratos.
            </p>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">🛒</div>
              <h3>Onde Comprar</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Pet Shops:</strong>
                  <ul>
                    <li>Brinquedos para hamsters/coelhos</li>
                    <li>Rede de descanso</li>
                    <li>Casinhas</li>
                    <li>Escadas e túneis</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Lojas Online:</strong>
                  <ul>
                    <li>Mercado Livre</li>
                    <li>Shopee</li>
                    <li>Amazon Brasil</li>
                    <li>Lojas especializadas em pets</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card highlight">
              <div className="resource-icon">🛠️</div>
              <h3>DIY - Faça Você Mesmo</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Materiais Baratos no Brasil:</strong>
                  <ul>
                    <li>Rolos de papel higiênico (grátis!)</li>
                    <li>Caixas de papelão (supermercados)</li>
                    <li>Cordas de algodão (lojas de tecido)</li>
                    <li>Madeira (lojas de construção)</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Onde Encontrar Materiais:</strong>
                  <ul>
                    <li>Lojas de R$ 1,99</li>
                    <li>Lojas de construção</li>
                    <li>Lojas de tecido</li>
                    <li>Reciclagem doméstica</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🏪</div>
              <h3>Lojas Especializadas</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Lojas de Artesanato:</strong>
                  <ul>
                    <li>Materiais para DIY</li>
                    <li>Cordas e tecidos</li>
                    <li>Ferramentas básicas</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Lojas de Construção:</strong>
                  <ul>
                    <li>Telas de arame</li>
                    <li>Madeira segura</li>
                    <li>Ferramentas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Veterinários no Brasil</h2>
            <p className="section-description">
              Encontre veterinários especializados em animais exóticos e pequenos mamíferos no Brasil.
            </p>
          </div>

          <div className="resources-grid">
            <div className="resource-card warning">
              <div className="resource-icon">⚠️</div>
              <h3>Situação no Brasil</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Desafios:</strong>
                  <ul>
                    <li>Veterinários de exóticos são <strong>raros</strong></li>
                    <li>Muitos veterinários não têm experiência com ratos</li>
                    <li>Pode ser difícil encontrar profissionais qualificados</li>
                    <li>Custos podem ser altos</li>
                    <li>Concentrados em grandes centros urbanos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">🔍</div>
              <h3>Como Encontrar</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Grupos e Comunidades:</strong>
                  <ul>
                    <li>Grupos no Facebook</li>
                    <li>Grupos no WhatsApp</li>
                    <li>Fóruns online</li>
                    <li>Redes sociais de tutores</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Pesquisa Online:</strong>
                  <ul>
                    <li>Busque por "veterinário exóticos [sua cidade]"</li>
                    <li>Consulte CRMV do seu estado</li>
                    <li>Peça recomendações em grupos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card highlight">
              <div className="resource-icon">💡</div>
              <h3>Dicas Importantes</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Antes de Precisar:</strong>
                  <ul>
                    <li>Identifique um veterinário ANTES de precisar</li>
                    <li>Salve contatos de emergência</li>
                    <li>Visite a clínica antes de uma emergência</li>
                    <li>Pergunte sobre experiência com ratos</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Em Emergências:</strong>
                  <ul>
                    <li>Tenha contato salvo no celular</li>
                    <li>Saiba o endereço da clínica</li>
                    <li>Tenha transporte preparado</li>
                    <li>Mantenha kit de emergência em casa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <HighlightBox variant="warning" icon="⚠️">
            <p>
              <strong>CRÍTICO:</strong> Sempre tenha um veterinário de exóticos identificado 
              ANTES de precisar! Emergências acontecem e você não quer perder tempo procurando. 
              Pesquise na sua região e mantenha contato salvo.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Comunidade e Recursos Online</h2>
            <p className="section-description">
              Conecte-se com outros tutores de ratos no Brasil e acesse recursos úteis.
            </p>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">👥</div>
              <h3>Grupos e Comunidades</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Facebook:</strong>
                  <ul>
                    <li>Grupos de tutores de ratos</li>
                    <li>Grupos regionais</li>
                    <li>Compartilhamento de experiências</li>
                    <li>Recomendações de produtos e veterinários</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>WhatsApp:</strong>
                  <ul>
                    <li>Grupos locais</li>
                    <li>Suporte rápido</li>
                    <li>Compartilhamento de dicas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-icon">📚</div>
              <h3>Recursos Online</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Conteúdo em Português:</strong>
                  <ul>
                    <li>Sites especializados</li>
                    <li>Blogs de tutores</li>
                    <li>Vídeos no YouTube</li>
                    <li>Fóruns e comunidades</li>
                  </ul>
                </div>
                <div className="resource-item">
                  <strong>Conteúdo em Inglês (traduzir):</strong>
                  <ul>
                    <li>Recursos europeus e americanos</li>
                    <li>Guias completos</li>
                    <li>Pesquisas científicas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resource-card highlight">
              <div className="resource-icon">🤝</div>
              <h3>Benefícios da Comunidade</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>O que você ganha:</strong>
                  <ul>
                    <li>Dicas específicas para o Brasil</li>
                    <li>Recomendações de produtos locais</li>
                    <li>Indicações de veterinários</li>
                    <li>Suporte emocional</li>
                    <li>Compartilhamento de experiências</li>
                    <li>Alertas sobre produtos perigosos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Custos no Brasil</h2>
            <p className="section-description">
              Entenda os custos de manter ratos no Brasil e como economizar.
            </p>
          </div>

          <div className="costs-breakdown">
            <div className="cost-item-modern">
              <div className="cost-icon">🏠</div>
              <h3>Gaiola</h3>
              <div className="cost-range">R$ 200 - 600</div>
              <p>Depende do tamanho e qualidade. Adaptações criativas podem reduzir custos.</p>
            </div>

            <div className="cost-item-modern">
              <div className="cost-icon">🌿</div>
              <h3>Substrato (mensal)</h3>
              <div className="cost-range">R$ 30 - 80</div>
              <p>Celulose é a melhor opção. Comprar em grandes quantidades economiza.</p>
            </div>

            <div className="cost-item-modern">
              <div className="cost-icon">🍽️</div>
              <h3>Ração (mensal)</h3>
              <div className="cost-range">R$ 20 - 60</div>
              <p>Ração para hamsters/coelhos. Alimentos frescos complementam e são baratos.</p>
            </div>

            <div className="cost-item-modern">
              <div className="cost-icon">🎪</div>
              <h3>Brinquedos e Acessórios</h3>
              <div className="cost-range">R$ 0 - 200</div>
              <p>DIY pode ser quase grátis! Materiais reciclados são ótimos.</p>
            </div>

            <div className="cost-item-modern">
              <div className="cost-icon">👨‍⚕️</div>
              <h3>Consulta Veterinária</h3>
              <div className="cost-range">R$ 100 - 300</div>
              <p>Varia muito por região. Emergências podem custar mais.</p>
            </div>

            <div className="cost-item-modern">
              <div className="cost-icon">💊</div>
              <h3>Medicamentos e Tratamentos</h3>
              <div className="cost-range">R$ 50 - 500+</div>
              <p>Depende do problema. Alguns medicamentos são caros.</p>
            </div>
          </div>

          <HighlightBox variant="info" icon="💰">
            <p>
              <strong>Dica de Economia:</strong> Use criatividade e DIY para reduzir custos! 
              Brinquedos caseiros, adaptações de gaiolas e alimentos frescos de feiras podem 
              economizar muito dinheiro sem comprometer a qualidade de vida dos seus ratos.
            </p>
          </HighlightBox>
        </Card>
      </section>

      <section className="content-section">
        <Card>
          <div className="section-header-modern">
            <h2>Dicas para Aproveitar o Melhor do Brasil</h2>
            <p className="section-description">
              Aproveite as vantagens do mercado brasileiro para criar o melhor ambiente para seus ratos.
            </p>
          </div>

          <div className="tips-grid-modern">
            <div className="tip-card">
              <div className="tip-icon">🛒</div>
              <h3>Compare Preços</h3>
              <p>
                Compare preços entre diferentes lojas e plataformas online. Mercado Livre, 
                Shopee e Amazon podem ter preços diferentes para o mesmo produto.
              </p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">🌾</div>
              <h3>Aproveite Feiras Livres</h3>
              <p>
                Feiras livres oferecem frutas e legumes frescos a preços muito menores que 
                supermercados. Perfeito para complementar a dieta dos ratos!
              </p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">🛠️</div>
              <h3>Seja Criativo</h3>
              <p>
                Use materiais reciclados e faça brinquedos DIY. É econômico, divertido e 
                permite personalização total para seus ratos.
              </p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">👥</div>
              <h3>Participe de Grupos</h3>
              <p>
                Grupos brasileiros compartilham dicas específicas para nossa realidade, 
                recomendações de produtos locais e indicações de veterinários.
              </p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">📦</div>
              <h3>Compre em Quantidade</h3>
              <p>
                Substratos e rações comprados em grandes quantidades saem mais baratos. 
                Organize-se com outros tutores para compras coletivas.
              </p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">✅</div>
              <h3>Priorize o Essencial</h3>
              <p>
                Foque no que é realmente importante: espaço adequado, alimentação balanceada, 
                enriquecimento e cuidados veterinários. O resto é complemento.
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

export default BrasilEuropa
