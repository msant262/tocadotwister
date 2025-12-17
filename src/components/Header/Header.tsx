import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../Container/Container'
import logoRato from '../../img/logoRato.png'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {isMenuOpen && (
        <div className="header-overlay" onClick={closeMenu}></div>
      )}
      <header className="header">
        <Container>
          <div className="header-content">
          <Link to="/" className="header-logo" onClick={closeMenu}>
            <img src={logoRato} alt="Toca do Twister" className="header-logo-img" />
            <h1>Toca do Twister</h1>
          </Link>
          <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link 
              to="/basico" 
              className={isActive('/basico') ? 'active' : ''}
              onClick={closeMenu}
            >
              O Básico
            </Link>
            <Link 
              to="/habitacao" 
              className={isActive('/habitacao') ? 'active' : ''}
              onClick={closeMenu}
            >
              Habitação
            </Link>
            <Link 
              to="/alimentacao" 
              className={isActive('/alimentacao') ? 'active' : ''}
              onClick={closeMenu}
            >
              Alimentação
            </Link>
            <Link 
              to="/enriquecimento" 
              className={isActive('/enriquecimento') ? 'active' : ''}
              onClick={closeMenu}
            >
              Enriquecimento
            </Link>
            <Link 
              to="/brasil-europa" 
              className={isActive('/brasil-europa') ? 'active' : ''}
              onClick={closeMenu}
            >
              Brasil
            </Link>
            <div className="header-dropdown">
              <Link 
                to="/artigos" 
                className={`header-dropdown-toggle ${location.pathname.startsWith('/artigos') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Artigos
              </Link>
              <div className="header-dropdown-menu">
                <Link to="/artigos/cheira-mal" onClick={closeMenu}>Cheira mal?</Link>
                <Link to="/artigos/nao-ter-apenas-um" onClick={closeMenu}>Por que não ter apenas um?</Link>
                <Link to="/artigos/alimentos-toxicos" onClick={closeMenu}>Alimentos tóxicos</Link>
                <Link to="/artigos/custo-brasil" onClick={closeMenu}>Custos no Brasil</Link>
                <Link to="/artigos/apresentar-rato" onClick={closeMenu}>Apresentar novo rato</Link>
              </div>
            </div>
          </nav>
          <button 
            className={`header-menu-toggle ${isMenuOpen ? 'header-menu-toggle-open' : ''}`}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </Container>
    </header>
    </>
  )
}

export default Header

