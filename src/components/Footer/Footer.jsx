import React from 'react'
import { Instagram, MapPin, Clock } from 'lucide-react';
function Footer() {
  return (
    <>
      <footer className="footer py-10" style={{ backgroundColor: '#111827' }}>
        <div className="content has-text-centered flex flex-col items-center">
          
          {/* --- NUEVA SECCIÓN DE UBICACIÓN Y HORARIOS --- */}
          {/* SOLUCIÓN: Agregué margin: '0 auto' para que se centre perfectamente */}
          <div className="mb-6" style={{ margin: '0 auto', borderBottom: '1px solid #374151', paddingBottom: '20px', width: '80%', maxWidth: '400px' }}>
            <p className="is-size-5 mb-2 is-flex is-justify-content-center is-align-items-center has-text-weight-bold" style={{ color: 'white' }}>
              <MapPin size={20} style={{ marginRight: '8px', color: '#25D366' }} />
              Güemes 1234, Mar del Plata
            </p>
            <p className="is-size-6 is-flex is-justify-content-center is-align-items-center" style={{ color: '#9CA3AF' }}>
              <Clock size={16} style={{ marginRight: '6px' }} />
              Lunes a Sábados de 9 AM a 8 PM
            </p>
          </div>
          {/* --------------------------------------------- */}

          <p className="mb-5" style={{ color: '#9CA3AF' }}>
            Diseñado por <strong style={{ color: 'white' }}>Suarez Reinoso Guillermo</strong>
          </p>

          <a 
            href="https://www.instagram.com/dev.guillesr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="is-flex is-align-items-center is-justify-content-center is-size-7 has-text-weight-bold"
            style={{ 
              color: 'white', 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#D1D5DB';
              e.currentTarget.querySelector('svg').style.color = '#D1D5DB';
              e.currentTarget.querySelector('span').style.color = '#D1D5DB';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.querySelector('svg').style.color = 'white';
              e.currentTarget.querySelector('span').style.color = 'white';
            }}
          >
            <Instagram size={18} strokeWidth={2} style={{ marginRight: '6px', position: 'relative', top: '-1px', color: 'white', transition: 'color 0.3s ease' }} />
            <span style={{ color: 'white', transition: 'color 0.3s ease' }}>Instagram</span>
          </a>

        </div>
      </footer>
    </>
  )
}

export default Footer