import React from 'react'
import { Instagram } from 'lucide-react';

function Footer() {
  return (
    <>
      <footer className="footer bg-gray-900 py-10">
        <div className="content has-text-centered flex flex-col items-center">
          
          <p className="text-gray-400 mb-6">
            Diseñado por <strong className="text-white">Suarez Reinoso Guillermo</strong>
          </p>

          <a 
            href="https://www.instagram.com/dev.guillesr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center hover:text-gray-300 transition-all duration-300 text-xs tracking-widest uppercase font-bold"
            style={{ color: 'white' }}
          >
            <Instagram size={18} strokeWidth={2} style={{ marginRight: '6px', position: 'relative', top: '2px', color: 'white' }} />
            <span style={{ color: 'white' }}>Instagram</span>
          </a>

        </div>
      </footer>
    </>
  )
}

export default Footer