import React from 'react'

function Info() {
  return (
    <>
    <section className="section  has-text-black"> {/* Fondo ligeramente diferente para contraste */}
      <div className="container has-text-black">
        <h2 className="title is-2 has-text-centered has-text-black ">Nuestras Especialidades</h2>
        <h3 className="subtitle is-4 has-text-centered mb-5 has-text-black">Y lo que nos Hace Únicos</h3>
        <div className="columns is-centered has-text-black">
          <div className="column is-three-quarters">
            <div className="content ">
              <ul className="has-text-left">
                <li className="mb-3">
                  <p className="is-size-5">
                    <strong className="has-text-black">Selección Exclusiva de Granos:</strong> Descubre nuestra cuidadosa selección de granos de café de diversas regiones, incluyendo mezclas de la casa y opciones de temporada que rotan para ofrecerte siempre algo nuevo.
                  </p>
                </li>
                <li className="mb-3">
                  <p className="is-size-5">
                    <strong className="has-text-black">Repostería Artesanal y Gourmet:</strong> Deléitate con nuestros postres, pasteles y galletas hechos a mano cada día, siguiendo recetas que combinan la tradición con un toque innovador.
                  </p>
                </li>
                <li className="mb-3">
                  <p className="is-size-5">
                    <strong className="has-text-black">Opciones para Todos:</strong> Nos enorgullece ofrecer alternativas para cada estilo de vida, incluyendo una variedad de opciones veganas, sin gluten y sin lactosa, sin comprometer el sabor.
                  </p>
                </li>
                <li className="mb-3">
                  <p className="is-size-5">
                    <strong className="has-text-black">Bebidas Innovadoras y de Autor:</strong> Nuestros baristas son verdaderos artistas. Prueba nuestras creaciones exclusivas, desde lattes saborizados hasta cold brews con infusiones especiales.
                  </p>
                </li>
                <li className="mb-3">
                  <p className="is-size-5">
                    <strong className="has-text-black">Ambiente y Experiencia Única:</strong> Más allá del café, te invitamos a sumergirte en nuestra atmósfera distintiva. Con una decoración cuidadosamente pensada y, en ocasiones, eventos especiales, buscamos ofrecerte una experiencia completa.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Info