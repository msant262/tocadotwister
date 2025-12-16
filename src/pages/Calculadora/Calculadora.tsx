import { useState } from 'react'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import './Calculadora.css'

const Calculadora = () => {
  const [altura, setAltura] = useState('')
  const [largura, setLargura] = useState('')
  const [profundidade, setProfundidade] = useState('')
  const [resultado, setResultado] = useState<{
    volume: number
    quantidade: number
    recomendacao: string
  } | null>(null)

  const calcular = () => {
    const alt = parseFloat(altura)
    const larg = parseFloat(largura)
    const prof = parseFloat(profundidade)

    if (isNaN(alt) || isNaN(larg) || isNaN(prof) || alt <= 0 || larg <= 0 || prof <= 0) {
      alert('Por favor, preencha todos os campos com valores válidos maiores que zero.')
      return
    }

    // Converter cm para metros e calcular volume em m³
    const volumeM3 = (alt / 100) * (larg / 100) * (prof / 100)
    
    // Volume mínimo por rato: 0,5 m³
    const volumeMinimoPorRato = 0.5
    const quantidade = Math.floor(volumeM3 / volumeMinimoPorRato)

    let recomendacao = ''
    if (quantidade < 2) {
      recomendacao = '⚠️ Esta gaiola é muito pequena! Lembre-se: o mínimo são 2 ratos. Considere uma gaiola maior.'
    } else if (quantidade >= 2 && quantidade <= 4) {
      recomendacao = '✅ Tamanho adequado! Esta gaiola pode acomodar confortavelmente seus ratos.'
    } else {
      recomendacao = '✅ Excelente tamanho! Esta gaiola oferece muito espaço para seus ratos explorarem.'
    }

    setResultado({
      volume: volumeM3,
      quantidade,
      recomendacao,
    })
  }

  const limpar = () => {
    setAltura('')
    setLargura('')
    setProfundidade('')
    setResultado(null)
  }

  return (
    <Container>
      <div className="page-header">
        <h1>Calculadora de Gaiola</h1>
        <p className="page-intro">
          Descubra quantos ratos cabem na sua gaiola baseado no volume disponível
        </p>
      </div>

      <Card>
        <div className="calculadora-form">
          <h2>Dimensões da Gaiola</h2>
          <p className="form-note">
            Digite as dimensões em <strong>centímetros (cm)</strong>
          </p>

          <div className="input-group">
            <label htmlFor="altura">Altura (cm)</label>
            <input
              type="number"
              id="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Ex: 80"
              min="1"
            />
          </div>

          <div className="input-group">
            <label htmlFor="largura">Largura (cm)</label>
            <input
              type="number"
              id="largura"
              value={largura}
              onChange={(e) => setLargura(e.target.value)}
              placeholder="Ex: 50"
              min="1"
            />
          </div>

          <div className="input-group">
            <label htmlFor="profundidade">Profundidade (cm)</label>
            <input
              type="number"
              id="profundidade"
              value={profundidade}
              onChange={(e) => setProfundidade(e.target.value)}
              placeholder="Ex: 50"
              min="1"
            />
          </div>

          <div className="button-group">
            <Button onClick={calcular} size="lg">
              Calcular
            </Button>
            <Button onClick={limpar} variant="outline" size="lg">
              Limpar
            </Button>
          </div>
        </div>

        {resultado && (
          <div className="resultado">
            <h3>Resultado</h3>
            <div className="resultado-info">
              <div className="info-item">
                <span className="label">Volume total:</span>
                <span className="value">{resultado.volume.toFixed(2)} m³</span>
              </div>
              <div className="info-item">
                <span className="label">Quantidade de ratos:</span>
                <span className="value highlight">{resultado.quantidade}</span>
              </div>
            </div>
            <div className="recomendacao">
              <p>{resultado.recomendacao}</p>
            </div>
            <div className="info-box">
              <p>
                <strong>Nota:</strong> O cálculo é baseado no volume mínimo de 0,5 m³ por rato. 
                Lembre-se que o mínimo recomendado são 2 ratos, pois são animais de colônia.
              </p>
            </div>
          </div>
        )}
      </Card>

      <Card>
        <h2>Como funciona?</h2>
        <p>
          A calculadora usa a fórmula de volume (Altura × Largura × Profundidade) 
          para determinar quantos ratos podem viver confortavelmente na gaiola.
        </p>
        <ul>
          <li><strong>Volume mínimo por rato:</strong> 0,5 m³ (500 litros)</li>
          <li><strong>Mínimo de ratos:</strong> 2 (nunca tenha apenas um!)</li>
          <li><strong>Ideal:</strong> 3-4 ratos em uma gaiola adequada</li>
        </ul>
      </Card>
    </Container>
  )
}

export default Calculadora

