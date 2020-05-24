import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <div className="container">
        <Link to='/'>
          <h3>Prodcuts</h3>
        </Link>
      </div>
      <Link to="/productos/nuevo"
        className='btn btn-danger nuevo-post d-block d-dm-inline-block'
      >Agregar Producto &#43;</Link>
    </nav>
  )
}

export default Header