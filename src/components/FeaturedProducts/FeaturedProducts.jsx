import React,{useState} from 'react'
import FoodPicture from "../../../public/pictures/food.jpg";
import CafeCroissantPicture from "../../../public/pictures/cafecroissant.jpg";
import Croissant from "../../../public/pictures/croissant.jpg";
import PersonasPicture from "../../../public/pictures/personas.jpg";
import VariedadPicture from "../../../public/pictures/variedad.jpg";

function FeaturedProducts() {
  
  // Array usando TUS variables exactas
  const productos = [
    { 
      id: 1, src: CafeCroissantPicture, 
      titulo: 'Combo Despertar', precio: '$4.500',
      descripcion: 'Café de especialidad + 2 Medialunas calientes.',
      wsText: 'Hola, quiero pedir el Combo Despertar de $4.500.'
    },
    { 
      id: 2, src: Croissant, 
      titulo: 'Croissant Premium', precio: '$5.200',
      descripcion: 'Croissant gigante relleno de jamón y queso, tostado.',
      wsText: 'Hola, quiero pedir el Croissant Premium de $5.200.'
    },
    { 
      id: 3, src: FoodPicture, 
      titulo: 'Brunch Completo', precio: '$14.000',
      descripcion: 'Ideal para compartir. Incluye infusiones y pastelería.',
      wsText: 'Hola, quiero pedir el Brunch Completo de $14.000.'
    },
    { 
      id: 4, src: PersonasPicture, 
      titulo: 'Tostado Clásico', precio: '$6.800',
      descripcion: 'En pan de masa madre, jamón natural y queso fundido.',
      wsText: 'Hola, quiero pedir el Tostado Clásico de $6.800.'
    },
    { 
      id: 5, src: VariedadPicture, 
      titulo: 'Degustación Dulce', precio: '$9.500',
      descripcion: 'Selección de nuestras 4 mejores porciones de torta.',
      wsText: 'Hola, quiero pedir la Degustación Dulce de $9.500.'
    }
  ];

  const numeroTelefono = "549222222222222"; // Cambiar por el del cliente

  return (
    // CAMBIO CLAVE: Usamos "has-background-white" para forzar el blanco puro
    <section className="section is-medium has-background-white">
      <div className="container">
        
        <div className="has-text-centered mb-6">
          {/* Título en negro absoluto */}
          <h2 className="title is-3 has-text-black has-text-weight-bold">Nuestros Clásicos</h2>
          <p className="subtitle is-5 has-text-grey mt-2">Los más elegidos, listos para vos.</p>
        </div>

        <div className="columns is-centered">
          <div className="column is-10-desktop">
            
            <div className="columns is-multiline is-centered">
              
              {productos.map((producto) => (
                <div key={producto.id} className="column is-12-mobile is-6-tablet is-4-desktop mb-4">
                  
                  {/* Aseguramos que la tarjeta también tenga fondo blanco por si acaso */}
                  <div className="card h-100 is-flex is-flex-direction-column has-background-white" style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eee', overflow: 'hidden' }}>
                    
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={producto.src} alt={producto.titulo} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                      </figure>
                    </div>
                    
                    <div className="card-content has-text-centered is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-space-between p-4">
                      
                      <div>
                        {/* Nombre del producto en negro */}
                        <h3 className="title is-5 has-text-black mb-1">{producto.titulo}</h3>
                        <p className="has-text-grey is-size-6 mb-3" style={{ lineHeight: '1.4' }}>{producto.descripcion}</p>
                      </div>
                      
                      <div>
                        {/* PRECIO en negro absoluto para que resalte bien */}
                        <p className="title is-4 has-text-black mb-3">{producto.precio}</p>
                        
                        <a 
                          href={`https://wa.me/${numeroTelefono}?text=${encodeURIComponent(producto.wsText)}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="button is-fullwidth has-text-weight-bold"
                          style={{ backgroundColor: '#25D366', color: 'white', borderRadius: '8px', border: 'none', transition: 'all 0.3s ease' }}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                          Pedir este
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FeaturedProducts;