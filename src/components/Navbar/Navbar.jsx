import React,{ useState } from 'react'
import "../Navbar/Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
   <nav className="navbar is-fixed-top has-background-white has-text-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">

          
        </a>

        <a 
          role="button" 
          className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
          aria-label="menu" 
          aria-expanded={isActive} 
          data-target="navbarBasicExample"
          onClick={toggleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <NavLink className="navbar-item has-text-black" to="/" end onClick={() => setIsActive(false)}>
            Inicio
          </NavLink>

          <NavLink className="navbar-item has-text-black" to="about" onClick={() => setIsActive(false)}>
            Acerca de nosotros
          </NavLink>

          <NavLink className="navbar-item has-text-black" to="menu" onClick={() => setIsActive(false)}>
            Menu
          </NavLink>
          
          <NavLink className="navbar-item has-text-black" to="contact" onClick={() => setIsActive(false)}>
            Contacto
          </NavLink>

        </div>
      </div>
    </nav>
  )
}

export default Navbar