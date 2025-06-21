import React from 'react'
import Food from "../../../public/pictures/food.jpg"
function NewProduct() {
  return (
    <>
    <section className="section">
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12-mobile is-6-tablet has-text-black">
          <h1 className="title has-text-black">Nuevo producto</h1>
          <h2 className="subtitle has-text-black">
            ¡Descubrí la Nueva Merienda Tentación!
          </h2>
          <p className='has-text-black'>Deliciosas medialunas recién horneadas, acompañadas de un cappuccino espumoso o té a elección.
Incluye una mini torta casera y jugo natural de estación.</p>
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