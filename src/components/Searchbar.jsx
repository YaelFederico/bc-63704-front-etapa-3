import { Link } from 'react-router-dom'
import './Searchbar.scss'



import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbar = () => {
  return (
    <div className="search-bar"> 
      <div className="search-bar__logo-container"><img src="" alt="" /></div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label"><img className='lupa' src="/img/lupa.png" alt="" /></label>
        <input type="search" className="search-bar__form-search" id="busqueda" />
        <input type="submit" className="search-bar__form-submit" value="Buscar" />
      </form>
      <Link className="search-bar__carrito-container" to="/carrito"><img className='carrito' src="/img/carrito.png" alt="" /></Link>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div> 

  )
}

export default Searchbar

