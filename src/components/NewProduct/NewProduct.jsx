import React from 'react'
import Food from "../../../public/pictures/food.jpg"


function NewProduct() {
  // Preparamos el enlace directo para que te pidan esta merienda
  const numeroTelefono = "5492236811353";
  const mensaje = "Hola, ¡quiero pedir la Nueva Merienda Tentación!";
  const whatsappUrl = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <>
    <section className="section">
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12-mobile is-6-tablet has-text-black">
          <h1 className="title has-text-black">Nuevo producto</h1>
          <h2 className="subtitle has-text-black">
            ¡Descubrí la Nueva Merienda Tentación!
          </h2>
          {/* Agregué un mb-5 (margin-bottom) para separar el texto del botón */}
          <p className='has-text-black mb-5'>
            Deliciosas medialunas recién horneadas, acompañadas de un cappuccino espumoso o té a elección.
            Incluye una mini torta casera y jugo natural de estación.
          </p>

          {/* Agregamos el botón de WhatsApp respetando tus estilos limpios */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button is-success has-text-weight-bold"
            style={{ 
              backgroundColor: '#25D366', 
              color: 'white', 
              borderRadius: '8px', 
              border: 'none', 
              transition: 'all 0.3s ease' 
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            👉 Pedir esta Merienda
          </a>
        </div>

        <div className="column is-12-mobile is-6-tablet">
          <figure className="image is-4by3">
            <img src={Food} alt="Food" />
          </figure>
        </div>
      </div>
    </section>
    </>
  )
}

export default NewProduct