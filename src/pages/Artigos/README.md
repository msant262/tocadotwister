# Como Adicionar um Novo Artigo

Este sistema de artigos é **dinâmico** e fácil de usar! Para adicionar um novo artigo, siga estes passos:

## Passo 1: Criar o Componente do Artigo

Crie um novo arquivo `ArtigoX.tsx` na pasta `src/pages/Artigos/` (onde X é o próximo número).

Exemplo: `Artigo6.tsx`

```tsx
import { useEffect, useRef } from 'react'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import HighlightBox from '../../components/HighlightBox/HighlightBox'
import './Artigos.css'

const Artigo6 = () => {
  // Seu código do artigo aqui
  return (
    // Seu JSX aqui
  )
}

export default Artigo6
```

## Passo 2: Adicionar à Configuração

Abra `artigos.config.ts` e adicione uma nova entrada no array `artigosConfig`:

```typescript
{
  slug: 'meu-novo-artigo',  // URL-friendly, sem espaços
  title: 'Título do Meu Artigo',
  excerpt: 'Breve descrição do que o artigo aborda...',
  category: 'Categoria',  // Use uma categoria existente ou crie uma nova
  readTime: '5 min',  // Tempo estimado de leitura
  featured: false,  // true para destacar na lista
}
```

## Passo 3: Registrar o Componente

Abra `artigos.routes.tsx` e adicione o import e o mapeamento:

```typescript
import Artigo6 from './Artigo6'

const artigoComponents: Record<string, React.ComponentType> = {
  // ... outros artigos
  'meu-novo-artigo': Artigo6,
}
```

## Passo 4: Pronto!

O artigo aparecerá automaticamente na lista de artigos (`/artigos`) e estará acessível em `/artigos/meu-novo-artigo`.

## Dicas

- **Slug**: Use apenas letras minúsculas, números e hífens. Ex: `meu-artigo-legal`
- **Categoria**: Categorias são geradas automaticamente. Use uma existente ou crie uma nova.
- **Featured**: Artigos em destaque aparecem com um badge ⭐ na lista.
- **Filtros**: Os filtros de categoria são gerados automaticamente baseados nas categorias dos artigos.

## Estrutura de Arquivos

```
src/pages/Artigos/
├── artigos.config.ts      # Configuração centralizada (ADICIONE AQUI)
├── artigos.routes.tsx     # Rotas dinâmicas (REGISTRE O COMPONENTE AQUI)
├── ArtigosList.tsx        # Lista de artigos (dinâmica, não precisa editar)
├── ArtigosList.css        # Estilos da lista
├── Artigos.css            # Estilos compartilhados dos artigos
├── Artigo1.tsx           # Componente do artigo 1
├── Artigo2.tsx           # Componente do artigo 2
└── ...                    # Outros artigos
```

## Exemplo Completo

Para adicionar um artigo sobre "Como escolher a gaiola ideal":

1. Criar `Artigo6.tsx` com o conteúdo
2. Adicionar em `artigos.config.ts`:
   ```typescript
   {
     slug: 'escolher-gaiola-ideal',
     title: 'Como escolher a gaiola ideal para seus ratos',
     excerpt: 'Guia completo para escolher a gaiola perfeita...',
     category: 'Habitação',
     readTime: '6 min',
     featured: true,
   }
   ```
3. Adicionar em `artigos.routes.tsx`:
   ```typescript
   import Artigo6 from './Artigo6'
   // ...
   'escolher-gaiola-ideal': Artigo6,
   ```

Pronto! O artigo estará disponível automaticamente.

