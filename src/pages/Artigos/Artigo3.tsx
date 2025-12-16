import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import './Artigos.css'

const Artigo3 = () => {
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

      const cards = contentRef.current.querySelectorAll('.toxic-item, .risk-item, .caution-item, .unknown-item')
      anime({
        targets: cards,
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: (_el, i) => 300 + (i * 50),
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
            <div className="artigo-category">Alimentação</div>
            <h1 className="artigo-hero-title">Lista completa de alimentos tóxicos para ratos</h1>
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
                Conhecer os alimentos tóxicos para ratos é essencial para manter seus 
                Twisters seguros e saudáveis. Esta lista completa e atualizada cobre todos 
                os alimentos que você deve evitar, aqueles que requerem atenção especial, 
                e aqueles sobre os quais ainda não temos informações suficientes.
              </p>

              <HighlightBox variant="danger" icon="🚨">
                <p>
                  <strong>EMERGÊNCIA:</strong> Se seu rato ingeriu algo tóxico, procure 
                  um veterinário de exóticos IMEDIATAMENTE. Não espere sintomas aparecerem. 
                  Cada minuto conta em casos de intoxicação.
                </p>
              </HighlightBox>

            <h2>Alimentos Altamente Tóxicos - NUNCA DAR</h2>
            <p>
              Estes alimentos são extremamente perigosos e podem causar morte ou danos graves. 
              <strong> NUNCA ofereça estes alimentos aos seus ratos, em qualquer quantidade.</strong>
            </p>

            <div className="toxic-food-list">
              <div className="toxic-item critical">
                <div className="toxic-icon">🍫</div>
                <h3>Chocolate</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Teobromina</p>
                  <p><strong>Efeitos:</strong> Vômitos, diarreia, convulsões, arritmia cardíaca, morte</p>
                  <p><strong>Tipos:</strong> Chocolate escuro (mais perigoso), chocolate ao leite, chocolate branco</p>
                  <p><strong>Nota:</strong> Não existe quantidade segura. Qualquer quantidade pode ser fatal.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🍊</div>
                <h3>Cítricos para Machos</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> d-limoneno (presente no óleo da casca)</p>
                  <p><strong>Efeitos:</strong> Danos renais graves, insuficiência renal, potencial carcinogênico</p>
                  <p><strong>Alimentos:</strong> Laranja, limão, tangerina, toranja, lima, bergamota</p>
                  <p><strong>⚠️ CRÍTICO:</strong> Machos NUNCA devem consumir. Fêmeas podem com moderação extrema (raramente).</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🧄</div>
                <h3>Alho e Cebola</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Compostos de enxofre (tiosulfato, alicina)</p>
                  <p><strong>Efeitos:</strong> Anemia hemolítica, destruição de glóbulos vermelhos, fraqueza, morte</p>
                  <p><strong>Formas:</strong> Cru, cozido, em pó, desidratado, em temperos</p>
                  <p><strong>Inclui:</strong> Cebola, alho, cebolinha, alho-poró, chalota</p>
                  <p><strong>Nota:</strong> Tóxico em qualquer quantidade. Evite até mesmo traços em alimentos preparados.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">☕</div>
                <h3>Cafeína</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Cafeína</p>
                  <p><strong>Efeitos:</strong> Agitação extrema, convulsões, arritmia cardíaca, hipertermia, morte</p>
                  <p><strong>Alimentos:</strong> Café, chá preto, chá verde, refrigerantes (cola), energéticos, chocolate</p>
                  <p><strong>Nota:</strong> Ratos são extremamente sensíveis à cafeína. Mesmo pequenas quantidades são perigosas.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🍷</div>
                <h3>Álcool</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Etanol</p>
                  <p><strong>Efeitos:</strong> Depressão do sistema nervoso central, coma, insuficiência hepática, morte</p>
                  <p><strong>Fontes:</strong> Bebidas alcoólicas, alimentos fermentados com álcool, extratos alcoólicos</p>
                  <p><strong>Nota:</strong> Qualquer quantidade é perigosa. Ratos não metabolizam álcool adequadamente.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🍬</div>
                <h3>Adoçantes Artificiais</h3>
                <div className="toxic-details">
                  <p><strong>Toxinas:</strong> Xilitol, aspartame, sucralose, sacarina, acessulfame K, stevia, eritritol, neotame</p>
                  <p><strong>Efeitos:</strong> Hipoglicemia grave, insuficiência hepática, danos neurológicos, convulsões, morte</p>
                  <p><strong>Fontes:</strong> Produtos "diet" ou "light", gomas sem açúcar, balas, refrigerantes zero</p>
                  <p><strong>⚠️ IMPORTANTE:</strong> Mesmo adoçantes "naturais" como stevia são tóxicos para ratos. NUNCA dê produtos diet/light.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🫘</div>
                <h3>Feijão Cru</h3>
                <div className="toxic-details">
                  <p><strong>Toxinas:</strong> Lectinas, fitatos</p>
                  <p><strong>Efeitos:</strong> Vômitos, diarreia severa, danos ao trato digestivo, distensão intestinal, obstrução</p>
                  <p><strong>Tipos:</strong> Todos os tipos de feijão cru (preto, carioca, branco, fradinho, etc.)</p>
                  <p><strong>Nota:</strong> Feijão bem cozido é seguro. NUNCA dê feijão cru ou mal cozido.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🥑</div>
                <h3>Abacate (Casca e Caroço)</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Persina</p>
                  <p><strong>Efeitos:</strong> Dificuldade respiratória, acúmulo de líquido no peito, morte</p>
                  <p><strong>Partes Tóxicas:</strong> Casca, caroço, polpa próxima da casca/caroço, folhas e galhos do abacateiro</p>
                  <p><strong>Nota:</strong> A polpa central pode ser oferecida em quantidades muito pequenas e raramente, mas é melhor evitar completamente.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🍎</div>
                <h3>Sementes e Caroços de Frutas</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Amigdalina (libera cianeto quando digerida)</p>
                  <p><strong>Efeitos:</strong> Intoxicação por cianeto, dor abdominal, convulsões, morte</p>
                  <p><strong>Frutas:</strong> Maçã, pera, cereja, pêssego, damasco, nectarina, ameixa</p>
                  <p><strong>Nota:</strong> A fruta em si é segura, mas SEMPRE remova sementes e caroços antes de oferecer.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🌿</div>
                <h3>Ruibarbo</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Ácido oxálico (níveis muito altos)</p>
                  <p><strong>Efeitos:</strong> Intoxicação, problemas renais graves, cálculos renais, insuficiência renal</p>
                  <p><strong>Partes:</strong> Folhas (mais tóxicas), talos (também tóxicos)</p>
                  <p><strong>Nota:</strong> Evite completamente. Não há quantidade segura.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🧀</div>
                <h3>Queijos Azuis</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Roquefortina C (produzida pelo fungo Penicillium roqueforti)</p>
                  <p><strong>Efeitos:</strong> Distúrbios neurológicos, convulsões, problemas digestivos</p>
                  <p><strong>Tipos:</strong> Gorgonzola, Roquefort, Stilton, queijos com fungos azuis</p>
                  <p><strong>Nota:</strong> Tóxico mesmo em pequenas quantidades. Outros queijos podem ser oferecidos com moderação.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🌽</div>
                <h3>Milho Seco Mal Armazenado</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Aflatoxinas (produzidas por fungos Aspergillus)</p>
                  <p><strong>Efeitos:</strong> Danos hepáticos graves, câncer, morte</p>
                  <p><strong>Causa:</strong> Armazenamento inadequado que permite crescimento de fungos</p>
                  <p><strong>Nota:</strong> Milho fresco é seguro. Evite milho seco que possa estar mofado ou mal armazenado.</p>
                </div>
              </div>

              <div className="toxic-item critical">
                <div className="toxic-icon">🍅</div>
                <h3>Folhas e Caules de Tomate e Batata</h3>
                <div className="toxic-details">
                  <p><strong>Toxina:</strong> Solanina</p>
                  <p><strong>Efeitos:</strong> Problemas digestivos, fraqueza, confusão, em grandes quantidades pode ser fatal</p>
                  <p><strong>Partes Tóxicas:</strong> Folhas, caules, brotos, frutos verdes de tomate</p>
                  <p><strong>Nota:</strong> Tomate maduro e batata cozida são seguros. Batata verde também contém solanina.</p>
                </div>
              </div>
            </div>

            <h2>Alimentos com Potencial Risco - EVITAR ou EXTREMO CUIDADO</h2>
            <p>
              Estes alimentos podem ser perigosos em certas situações ou quantidades. É melhor evitar, 
              mas se oferecer, faça com extremo cuidado e moderação.
            </p>

            <div className="toxic-food-list">
              <div className="risk-item">
                <div className="risk-icon">⚠️</div>
                <h3>Cítricos para Fêmeas</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Irritação da mucosa gástrica devido à acidez</p>
                  <p><strong>Quando:</strong> Consumo excessivo ou frequente</p>
                  <p><strong>Recomendação:</strong> Evitar ou oferecer muito raramente e em quantidades mínimas</p>
                  <p><strong>Nota:</strong> Machos NUNCA devem consumir (ver seção de alimentos tóxicos).</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🥭</div>
                <h3>Manga (Especialmente para Machos)</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> d-limoneno na casca (potencial carcinogênico para machos)</p>
                  <p><strong>Quando:</strong> Consumo excessivo, especialmente da casca</p>
                  <p><strong>Recomendação:</strong> Oferecer apenas a polpa, raramente, e em pequenas quantidades</p>
                  <p><strong>Nota:</strong> Remova sempre a casca antes de oferecer.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🧅</div>
                <h3>Cebola e Cebolinha (Pequenas Quantidades)</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Anemia hemolítica em grandes quantidades</p>
                  <p><strong>Quando:</strong> Consumo frequente ou em grandes quantidades</p>
                  <p><strong>Recomendação:</strong> Evitar completamente. Pequenas quantidades acidentais geralmente não causam problemas, mas não ofereça intencionalmente.</p>
                  <p><strong>Nota:</strong> Melhor evitar completamente para segurança.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🥬</div>
                <h3>Couve-de-Bruxelas e Repolho Roxo</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Antinutrientes que destroem tiamina (vitamina B1), gases, desconforto abdominal</p>
                  <p><strong>Quando:</strong> Consumo frequente ou em grandes quantidades</p>
                  <p><strong>Recomendação:</strong> Evitar ou oferecer muito raramente e em quantidades muito pequenas</p>
                  <p><strong>Nota:</strong> Repolho verde comum pode causar gases, mas é menos problemático.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🌶️</div>
                <h3>Gengibre e Pimentas</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Arritmia cardíaca, irritação gastrointestinal, sensação de queimação</p>
                  <p><strong>Quando:</strong> Qualquer quantidade significativa</p>
                  <p><strong>Recomendação:</strong> Evitar completamente</p>
                  <p><strong>Nota:</strong> São alimentos termogênicos que podem causar problemas cardíacos em ratos.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🥩</div>
                <h3>Carnes Gordurosas</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Diarreia, pele oleosa, doenças hepáticas, obesidade, maior predisposição a tumores</p>
                  <p><strong>Quando:</strong> Consumo frequente ou em grandes quantidades</p>
                  <p><strong>Recomendação:</strong> Evitar carnes gordurosas. Se oferecer carne, que seja magra, cozida, sem sal, e muito raramente.</p>
                  <p><strong>Nota:</strong> Ratos não metabolizam bem gorduras de origem animal.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🍯</div>
                <h3>Alimentos Pegajosos (Risco de Engasgo)</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Engasgo, asfixia, morte</p>
                  <p><strong>Alimentos:</strong> Manteiga de amendoim (espessa), doces pastosos, jaca, queijo derretido, marshmallows</p>
                  <p><strong>Recomendação:</strong> Evitar completamente ou diluir muito (ex: manteiga de amendoim diluída com água)</p>
                  <p><strong>Nota:</strong> Ratos podem engasgar facilmente com alimentos que aderem à garganta.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🌳</div>
                <h3>Jaca</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Alto risco de engasgo e asfixia devido à textura</p>
                  <p><strong>Quando:</strong> Qualquer quantidade</p>
                  <p><strong>Recomendação:</strong> Evitar completamente</p>
                  <p><strong>Nota:</strong> A textura pegajosa e fibrosa da jaca pode causar obstrução das vias aéreas.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🧂</div>
                <h3>Alimentos com Muito Sal</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Intoxicação por íons de sódio, desidratação, problemas renais, vômitos, diarreia, tremores, convulsões</p>
                  <p><strong>Quando:</strong> Consumo de alimentos salgados</p>
                  <p><strong>Recomendação:</strong> Evitar completamente alimentos salgados</p>
                  <p><strong>Nota:</strong> Ratos são muito sensíveis ao sal. Alimentos processados geralmente contêm sal excessivo.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🍬</div>
                <h3>Alimentos com Muito Açúcar</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Obesidade, resistência à insulina, diabetes, problemas dentários, distúrbios metabólicos</p>
                  <p><strong>Quando:</strong> Consumo frequente ou em grandes quantidades</p>
                  <p><strong>Recomendação:</strong> Evitar doces e alimentos açucarados. Frutas naturais são preferíveis.</p>
                  <p><strong>Nota:</strong> Ratos adoram açúcar, mas é prejudicial à saúde deles.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🦗</div>
                <h3>Insetos Selvagens</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Parasitas, doenças, contaminação por pesticidas</p>
                  <p><strong>Quando:</strong> Insetos capturados na natureza</p>
                  <p><strong>Recomendação:</strong> Evitar completamente. Se oferecer insetos, que sejam de fontes confiáveis (pet shops).</p>
                  <p><strong>Nota:</strong> Insetos de criação são seguros, mas selvagens podem transmitir doenças.</p>
                </div>
              </div>

              <div className="risk-item">
                <div className="risk-icon">🥣</div>
                <h3>Granola, Muesli e Mixes de Grãos para Humanos</h3>
                <div className="risk-details">
                  <p><strong>Risco:</strong> Geralmente contêm adoçantes artificiais (extremamente tóxicos), sal, açúcar</p>
                  <p><strong>Quando:</strong> Qualquer produto industrializado</p>
                  <p><strong>Recomendação:</strong> Evitar completamente. Prepare um mix caseiro sem aditivos se quiser oferecer.</p>
                  <p><strong>Nota:</strong> Mesmo versões "sem açúcar" costumam conter adoçantes artificiais tóxicos.</p>
                </div>
              </div>
            </div>

            <h2>Alimentos que Requerem Atenção - MODERAÇÃO</h2>
            <p>
              Estes alimentos são geralmente seguros, mas requerem moderação e atenção. Podem causar 
              problemas se oferecidos em excesso ou com frequência.
            </p>

            <div className="toxic-food-list">
              <div className="caution-item">
                <div className="caution-icon">🥬</div>
                <h3>Espinafre</h3>
                <div className="caution-details">
                  <p><strong>Preocupação:</strong> Ácido oxálico (pode interferir na absorção de cálcio)</p>
                  <p><strong>Recomendação:</strong> Oferecer ocasionalmente e em pequenas quantidades</p>
                  <p><strong>Nota:</strong> Não é tóxico, mas o excesso pode causar problemas renais a longo prazo.</p>
                </div>
              </div>

              <div className="caution-item">
                <div className="caution-icon">🥦</div>
                <h3>Brócolis e Repolho</h3>
                <div className="caution-details">
                  <p><strong>Preocupação:</strong> Podem causar gases e desconforto abdominal</p>
                  <p><strong>Recomendação:</strong> Oferecer em pequenas quantidades e observar reações</p>
                  <p><strong>Nota:</strong> Geralmente seguros, mas alguns ratos são mais sensíveis a gases.</p>
                </div>
              </div>

              <div className="caution-item">
                <div className="caution-icon">🥛</div>
                <h3>Laticínios</h3>
                <div className="caution-details">
                  <p><strong>Preocupação:</strong> Alguns ratos são intolerantes à lactose</p>
                  <p><strong>Recomendação:</strong> Oferecer em pequenas quantidades e observar. Queijos duros são geralmente melhor tolerados.</p>
                  <p><strong>Nota:</strong> Evite queijos azuis (ver seção de alimentos tóxicos).</p>
                </div>
              </div>

              <div className="caution-item">
                <div className="caution-icon">🥜</div>
                <h3>Nozes e Sementes</h3>
                <div className="caution-details">
                  <p><strong>Preocupação:</strong> Alto teor de gordura, podem causar obesidade</p>
                  <p><strong>Recomendação:</strong> Oferecer como petisco ocasional, em pequenas quantidades</p>
                  <p><strong>Nota:</strong> Sementes de abóbora são nutritivas e geralmente bem toleradas.</p>
                </div>
              </div>

              <div className="caution-item">
                <div className="caution-icon">🍞</div>
                <h3>Pão e Massas</h3>
                <div className="caution-details">
                  <p><strong>Preocupação:</strong> Baixo valor nutricional, podem causar gases, inchaço, ganho de peso</p>
                  <p><strong>Recomendação:</strong> Evitar ou oferecer muito raramente como petisco</p>
                  <p><strong>Nota:</strong> Não são tóxicos, mas não oferecem benefícios nutricionais significativos.</p>
                </div>
              </div>

              <div className="caution-item">
                <div className="caution-icon">🍇</div>
                <h3>Uvas e Passas</h3>
                <div className="caution-details">
                  <p><strong>Preocupação:</strong> Podem causar insuficiência renal em alguns roedores (controvérsia)</p>
                  <p><strong>Recomendação:</strong> Oferecer com moderação e observar. Alguns tutores evitam completamente.</p>
                  <p><strong>Nota:</strong> Há controvérsia sobre a segurança. Alguns estudos sugerem risco, outros não.</p>
                </div>
              </div>
            </div>

            <h2>Alimentos com Informações Insuficientes</h2>
            <p>
              Estes são alimentos sobre os quais não temos informações científicas suficientes ou há 
              controvérsia na comunidade. <strong>Recomendação: evitar até ter certeza da segurança.</strong>
            </p>

            <div className="toxic-food-list">
              <div className="unknown-item">
                <div className="unknown-icon">❓</div>
                <h3>Frutas Exóticas Não Comuns</h3>
                <div className="unknown-details">
                  <p><strong>Exemplos:</strong> Rambutã, lichia, durian, fruta-do-conde, pitaya</p>
                  <p><strong>Recomendação:</strong> Evitar até encontrar informações confiáveis sobre segurança</p>
                  <p><strong>Nota:</strong> Quando em dúvida, sempre pesquise antes de oferecer.</p>
                </div>
              </div>

              <div className="unknown-item">
                <div className="unknown-icon">❓</div>
                <h3>Vegetais Não Comuns</h3>
                <div className="unknown-details">
                  <p><strong>Exemplos:</strong> Alguns vegetais asiáticos, raízes exóticas</p>
                  <p><strong>Recomendação:</strong> Pesquisar especificamente antes de oferecer</p>
                  <p><strong>Nota:</strong> Muitos vegetais são seguros, mas alguns podem ter compostos desconhecidos.</p>
                </div>
              </div>

              <div className="unknown-item">
                <div className="unknown-icon">❓</div>
                <h3>Suplementos e Vitaminas</h3>
                <div className="unknown-details">
                  <p><strong>Preocupação:</strong> Dosagem e necessidade não são claras sem orientação veterinária</p>
                  <p><strong>Recomendação:</strong> NUNCA ofereça suplementos sem orientação de veterinário especializado</p>
                  <p><strong>Nota:</strong> Suplementos podem ser perigosos se dados incorretamente. Consulte sempre um veterinário.</p>
                </div>
              </div>

              <div className="unknown-item">
                <div className="unknown-icon">❓</div>
                <h3>Alimentos Processados Específicos</h3>
                <div className="unknown-details">
                  <p><strong>Exemplos:</strong> Novos produtos industrializados, alimentos com ingredientes desconhecidos</p>
                  <p><strong>Recomendação:</strong> Evitar alimentos processados. Prefira sempre alimentos naturais e frescos.</p>
                  <p><strong>Nota:</strong> Quando em dúvida sobre ingredientes, não ofereça.</p>
                </div>
              </div>
            </div>

            <h2>O que fazer em caso de ingestão acidental?</h2>
            <p>
              Se seu rato ingeriu algo tóxico, aja rapidamente. Cada minuto conta:
            </p>

            <div className="emergency-steps">
              <div className="emergency-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Mantenha a Calma</h3>
                  <p>Não entre em pânico. Você precisa pensar claramente para ajudar seu rato.</p>
                </div>
              </div>

              <div className="emergency-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Identifique o Alimento</h3>
                  <p>Saiba exatamente o que foi ingerido, em que quantidade e há quanto tempo.</p>
                </div>
              </div>

              <div className="emergency-step critical">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Contate Veterinário IMEDIATAMENTE</h3>
                  <p>Não espere sintomas aparecerem. Ligue para um veterinário de exóticos AGORA. 
                  Se não houver um disponível, ligue para qualquer veterinário e explique a urgência.</p>
                </div>
              </div>

              <div className="emergency-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>NÃO Induza Vômito</h3>
                  <p>A menos que o veterinário instrua especificamente. Alguns alimentos podem 
                  causar mais dano ao voltar.</p>
                </div>
              </div>

              <div className="emergency-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Monitore o Rato</h3>
                  <p>Observe comportamento, apetite, fezes, respiração. Anote tudo para informar o veterinário.</p>
                </div>
              </div>

              <div className="emergency-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Mantenha o Rato Confortável</h3>
                  <p>Mantenha-o aquecido, calmo e com acesso a água fresca (se não estiver vomitando).</p>
                </div>
              </div>
            </div>

            <HighlightBox variant="danger" icon="🚨">
              <p>
                <strong>NÚMERO DE EMERGÊNCIA:</strong> Tenha sempre o número de um veterinário de 
                exóticos salvo no seu telefone. Em caso de emergência, cada segundo conta.
              </p>
            </HighlightBox>

            <h2>Sintomas de Intoxicação</h2>
            <p>
              Se você notar qualquer um destes sintomas após ingestão de alimento suspeito, 
              procure veterinário IMEDIATAMENTE:
            </p>

            <div className="symptoms-grid">
              <div className="symptom-card severe">
                <div className="symptom-icon">🚨</div>
                <h3>Sintomas Graves (Emergência)</h3>
                <ul>
                  <li>Convulsões</li>
                  <li>Dificuldade respiratória</li>
                  <li>Perda de consciência</li>
                  <li>Arritmia cardíaca (batimentos irregulares)</li>
                  <li>Paralisia ou fraqueza extrema</li>
                </ul>
              </div>

              <div className="symptom-card moderate">
                <div className="symptom-icon">⚠️</div>
                <h3>Sintomas Moderados (Urgente)</h3>
                <ul>
                  <li>Vômitos persistentes</li>
                  <li>Diarreia severa</li>
                  <li>Letargia extrema</li>
                  <li>Perda de apetite completa</li>
                  <li>Tremores ou espasmos</li>
                </ul>
              </div>

              <div className="symptom-card mild">
                <div className="symptom-icon">👀</div>
                <h3>Sintomas Leves (Monitorar)</h3>
                <ul>
                  <li>Náusea ou vômito ocasional</li>
                  <li>Diarreia leve</li>
                  <li>Letargia leve</li>
                  <li>Redução de apetite</li>
                  <li>Comportamento estranho ou desorientado</li>
                </ul>
              </div>
            </div>

            <HighlightBox variant="warning" icon="⚠️">
              <p>
                <strong>IMPORTANTE:</strong> Mesmo sintomas leves podem progredir rapidamente. 
                Não espere para ver se piora. Procure orientação veterinária imediatamente.
              </p>
            </HighlightBox>

            <h2>Prevenção: Como Evitar Intoxicação</h2>
            <p>
              A melhor forma de lidar com intoxicação é preveni-la. Siga estas práticas:
            </p>

            <div className="prevention-tips">
              <div className="prevention-card">
                <div className="prevention-icon">🔍</div>
                <h3>Pesquise Antes de Dar</h3>
                <p>
                  Quando em dúvida sobre qualquer alimento, <strong>NÃO dê</strong>. 
                  Pesquise primeiro ou consulte um veterinário.
                </p>
              </div>

              <div className="prevention-card">
                <div className="prevention-icon">🔒</div>
                <h3>Mantenha Alimentos Tóxicos Fora do Alcance</h3>
                <p>
                  Ratos são curiosos e exploradores. Mantenha alimentos perigosos em locais 
                  inacessíveis, especialmente durante tempo fora da gaiola.
                </p>
              </div>

              <div className="prevention-card">
                <div className="prevention-icon">👨‍👩‍👧‍👦</div>
                <h3>Eduque Toda a Família</h3>
                <p>
                  Todos que interagem com os ratos devem saber o que é seguro e o que não é. 
                  Crianças especialmente precisam de supervisão.
                </p>
              </div>

              <div className="prevention-card">
                <div className="prevention-icon">📋</div>
                <h3>Tenha uma Lista de Referência</h3>
                <p>
                  Mantenha esta lista acessível (impressa ou salva no celular) para consulta rápida.
                </p>
              </div>

              <div className="prevention-card">
                <div className="prevention-icon">🍽️</div>
                <h3>Prepare Alimentos Separadamente</h3>
                <p>
                  Quando preparar comida para os ratos, use tábuas e utensílios separados para 
                  evitar contaminação cruzada com alimentos tóxicos.
                </p>
              </div>

              <div className="prevention-card">
                <div className="prevention-icon">🏥</div>
                <h3>Tenha Contato de Veterinário</h3>
                <p>
                  Tenha sempre o número de um veterinário de exóticos salvo. Em emergências, 
                  você não quer perder tempo procurando.
                </p>
              </div>
            </div>

            <h2>Alimentos Processados e Industrializados</h2>
            <p>
              Alimentos processados para humanos geralmente contêm ingredientes perigosos para ratos:
            </p>

            <div className="processed-warning">
              <div className="processed-item">
                <div className="processed-icon">🧂</div>
                <h3>Sal Excessivo</h3>
                <p>Causa desidratação, problemas renais, hipertensão, intoxicação por sódio</p>
              </div>

              <div className="processed-item">
                <div className="processed-icon">🍬</div>
                <h3>Açúcar Excessivo</h3>
                <p>Obesidade, diabetes, problemas dentários, distúrbios metabólicos</p>
              </div>

              <div className="processed-item">
                <div className="processed-icon">🧪</div>
                <h3>Conservantes e Aditivos</h3>
                <p>Muitos são tóxicos para ratos, podem causar reações alérgicas, problemas digestivos</p>
              </div>

              <div className="processed-item">
                <div className="processed-icon">🌶️</div>
                <h3>Temperos e Condimentos</h3>
                <p>Podem conter alho, cebola, ou outros ingredientes tóxicos</p>
              </div>
            </div>

            <HighlightBox variant="warning" icon="⚠️">
              <p>
                <strong>Evite:</strong> Salgadinhos, doces, alimentos industrializados, fast food, 
                comidas com temperos fortes, produtos "diet" ou "light" (contêm adoçantes artificiais), 
                alimentos enlatados com muito sal ou conservantes.
              </p>
            </HighlightBox>

            <h2>Regra de Ouro</h2>
            <p>
              Quando se trata de alimentação de ratos, há uma regra simples e importante:
            </p>

            <HighlightBox variant="info" icon="💡">
              <p>
                <strong>"Quando em dúvida, não dê."</strong> É sempre melhor errar por excesso de 
                cautela do que colocar a vida do seu rato em risco. Se você não tem certeza absoluta 
                de que um alimento é seguro, não ofereça.
              </p>
            </HighlightBox>

            <h2>Conclusão</h2>
            <p>
              Conhecer os alimentos tóxicos é fundamental para a segurança dos seus ratos. Esta lista 
              foi compilada com base em pesquisas científicas e experiências da comunidade de tutores 
              de ratos ao redor do mundo.
            </p>
            <p>
              Lembre-se: <strong>a prevenção é sempre melhor que o tratamento.</strong> Quando em dúvida, 
              sempre pesquise ou consulte um veterinário especializado em animais exóticos antes de 
              oferecer qualquer alimento novo.
            </p>
            <p>
              Mantenha esta lista acessível e compartilhe com outros tutores. Juntos, podemos manter 
              nossos Twisters seguros e saudáveis!
            </p>

            <HighlightBox variant="success" icon="✅">
              <p>
                <strong>Dica Final:</strong> Para mais informações sobre alimentação adequada para ratos, 
                consulte nosso artigo sobre <Link to="/alimentacao">Alimentação e Nutrição</Link>.
              </p>
            </HighlightBox>
          </Card>
        </div>
      </article>
    </Container>
    </>
  )
}

export default Artigo3

