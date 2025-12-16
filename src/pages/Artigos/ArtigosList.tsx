import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { artigosConfig, getCategories } from './artigos.config'
import './ArtigosList.css'

type SortOption = 'featured' | 'category' | 'readTime'

const ArtigosList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [artigos, setArtigos] = useState(artigosConfig)
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const categories = ['Todos', ...getCategories()]

  useEffect(() => {
    // Filtrar e ordenar artigos
    let filtered = [...artigosConfig]

    // Filtro por categoria
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(artigo => artigo.category === selectedCategory)
    }

    // Filtro por busca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(artigo => 
        artigo.title.toLowerCase().includes(query) ||
        artigo.excerpt.toLowerCase().includes(query) ||
        artigo.category.toLowerCase().includes(query)
      )
    }

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
        case 'category':
          return a.category.localeCompare(b.category)
        case 'readTime':
          const aTime = parseInt(a.readTime)
          const bTime = parseInt(b.readTime)
          return aTime - bTime
        default:
          return 0
      }
    })

    setArtigos(filtered)
  }, [selectedCategory, searchQuery, sortBy])

  useEffect(() => {
    // Animar hero
    if (heroRef.current) {
      anime({
        targets: heroRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutExpo',
      })
    }

    // Animar cards quando a lista mudar
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.artigo-card')
      anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.9, 1],
        delay: (_el, i) => i * 80,
        duration: 600,
        easing: 'easeOutBack',
      })
    }
  }, [artigos])

  return (
    <>
      <section className="artigos-hero" ref={heroRef}>
        <Container>
          <div className="artigos-hero-content">
            <div className="artigos-hero-icon">📚</div>
            <h1 className="artigos-hero-title">Artigos</h1>
            <p className="artigos-hero-subtitle">
              Guias completos e artigos sobre criação de Ratos Twister
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <div className="artigos-page">
          {/* Barra de Busca e Filtros */}
          <div className="artigos-controls">
            <div className="search-container">
              <div className="search-icon">🔍</div>
              <input
                type="text"
                className="search-input"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpar busca"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="sort-container">
              <label htmlFor="sort-select" className="sort-label">
                Ordenar por:
              </label>
              <select
                id="sort-select"
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="featured">Destaque</option>
                <option value="category">Categoria</option>
                <option value="readTime">Tempo de leitura</option>
              </select>
            </div>
          </div>

          {/* Filtro de Categorias */}
          <div className="artigos-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Contador de Artigos */}
          <div className="artigos-count">
            <span className="count-number">{artigos.length}</span>
            <span className="count-text">
              {artigos.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
              {selectedCategory !== 'Todos' && (
                <span className="count-category"> em "{selectedCategory}"</span>
              )}
              {searchQuery && (
                <span className="count-search"> para "{searchQuery}"</span>
              )}
            </span>
          </div>

          {/* Grid de Artigos */}
          <div className="artigos-grid" ref={cardsRef}>
            {artigos.length > 0 ? (
              artigos.map((artigo) => (
                <Card key={artigo.slug} className={`artigo-card ${artigo.featured ? 'featured' : ''}`}>
                  {artigo.featured && (
                    <div className="artigo-featured-badge">
                      <span className="badge-icon">⭐</span>
                      <span className="badge-text">Destaque</span>
                    </div>
                  )}
                  <div className="artigo-card-header">
                    <span className="artigo-category">{artigo.category}</span>
                    <div className="artigo-meta">
                      <span className="artigo-read-time">⏱️ {artigo.readTime}</span>
                    </div>
                  </div>
                  <h2 className="artigo-title">{artigo.title}</h2>
                  <p className="artigo-excerpt">{artigo.excerpt}</p>
                  <div className="artigo-card-footer">
                    <Button as={Link} to={`/artigos/${artigo.slug}`} variant="outline" className="artigo-button">
                      <span>Ler artigo</span>
                      <span className="button-arrow">→</span>
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <div className="artigos-empty">
                <div className="empty-icon">📝</div>
                <h3>Nenhum artigo encontrado</h3>
                <p>
                  {searchQuery
                    ? `Não encontramos artigos para "${searchQuery}". Tente outra busca.`
                    : `Nenhum artigo encontrado nesta categoria.`}
                </p>
                {(searchQuery || selectedCategory !== 'Todos') && (
                  <button
                    className="reset-filters"
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('Todos')
                    }}
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

export default ArtigosList

