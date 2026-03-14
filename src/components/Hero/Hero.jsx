import React from 'react'
import "../Hero/Hero.css"

function Hero() {
  const whatsappUrl = "https://wa.me/5492230000000?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20hacer%20un%20pedido%20rápido:";

  return (
    <>
      <section className="hero is-medium custom-hero">
        
        <div className="hero-body has-text-centered is-flex is-flex-direction-column is-justify-content-center"> 
          <h1 className="title has-text-white is-size-1 has-text-weight-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Tu Café y Medialunas en 15 Minutos. Sin Filas.
          </h1>
          
          <p className="subtitle has-text-white is-size-4 mt-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
            Hacé tu pedido rápido, pasá a retirar o te lo llevamos a tu puerta.
          </p>
        </div>

        {/* SOLUCIÓN AQUÍ: Agregamos position: 'relative' y zIndex: 2 al hero-foot */}
        <div className="hero-foot has-text-centered" style={{ paddingBottom: '20px', position: 'relative', zIndex: 2 }}>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button is-success is-large has-text-weight-bold"
            style={{ 
              backgroundColor: '#25D366', 
              color: 'white', 
              padding: '15px 40px', 
              borderRadius: '50px',
              boxShadow: '0 8px 15px rgba(0,0,0,0.3)',
              border: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            👉 Pedir ahora por WhatsApp
          </a>
        </div>

      </section>
    </>
  )
}

export default Hero;