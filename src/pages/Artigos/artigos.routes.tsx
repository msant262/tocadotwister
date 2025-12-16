// Rotas dinâmicas para artigos
// Este arquivo gera as rotas automaticamente baseado na configuração

import React from 'react'
import { Route } from 'react-router-dom'
import { artigosConfig } from './artigos.config'
import Artigo1 from './Artigo1'
import Artigo2 from './Artigo2'
import Artigo3 from './Artigo3'
import Artigo4 from './Artigo4'
import Artigo5 from './Artigo5'

// Mapeamento de slugs para componentes
// Quando adicionar um novo artigo, adicione aqui também!
const artigoComponents: Record<string, React.ComponentType> = {
  'cheira-mal': Artigo1,
  'nao-ter-apenas-um': Artigo2,
  'alimentos-toxicos': Artigo3,
  'custo-brasil': Artigo4,
  'apresentar-rato': Artigo5,
}

// Função para gerar rotas dinamicamente
export const generateArtigoRoutes = (): React.ReactElement[] => {
  return artigosConfig.map((artigo) => {
    const Component = artigoComponents[artigo.slug]
    
    if (!Component) {
      console.warn(`Componente não encontrado para o artigo: ${artigo.slug}`)
      return null
    }

    return (
      <Route
        key={artigo.slug}
        path={`/artigos/${artigo.slug}`}
        element={<Component />}
      />
    )
  }).filter((route): route is React.ReactElement => route !== null)
}

