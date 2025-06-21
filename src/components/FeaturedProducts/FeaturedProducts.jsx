import React,{useState} from 'react'
import FoodPicture from "../../../public/pictures/food.jpg";
import CafeCroissantPicture from "../../../public/pictures/cafecroissant.jpg";
import Croissant from "../../../public/pictures/croissant.jpg";
import PersonasPicture from "../../../public/pictures/personas.jpg";
import VariedadPicture from "../../../public/pictures/variedad.jpg";

function FeaturedProducts() {
  const [indiceImagenActual, setIndiceImagenActual] = useState(0);

   const imagenes = [
     { src: FoodPicture, alt: 'Comida deliciosa', },
    { src:CafeCroissantPicture , alt: 'Interior acogedor', },
    { src:Croissant, alt: 'Deliciosos pasteles', },
    { src: PersonasPicture, alt: 'Arte en tu taza', },
    { src: VariedadPicture, alt: 'Clientes felices', },
  ];

   const irSiguiente = () => {
    setIndiceImagenActual((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const irAnterior = () => {
    setIndiceImagenActual((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
  };
  return (
    <>
    <section className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered has-text-black">Nuestros Momentos</h2>
        <h3 className="subtitle is-4 has-text-centered mb-5 has-text-black">Un vistazo a nuestra cafetería</h3>

        <div className="columns is-centered">
          <div className="column is-half-desktop is-four-fifths-tablet">
            <div className="card">
              <div className="card-image">
                {/* Contenedor relativo para posicionar imágenes una encima de otra */}
                <figure className="image is-4by3" style={{ position: 'relative' }}>
                  {imagenes.map((imagen, index) => (
                    <img
                      key={index}
                      src={imagen.src}
                      alt={imagen.alt || `Imagen ${index + 1}`}
                      // Estilo para ocultar/mostrar la imagen
                      style={{
                        position: 'absolute', // Superpón todas las imágenes
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: index === indiceImagenActual ? 'block' : 'none', // ¡Aquí está la magia!
                      }}
                    />
                  ))}
                </figure>
              </div>
              {/* Opcional: Leyenda que se superpone a la imagen actual */}
              {imagenes[indiceImagenActual] && imagenes[indiceImagenActual].leyenda && (
                <div className="card-content is-overlay is-overlay-bottom">
                  <p className="title is-6 has-text-white has-text-shadow">{imagenes[indiceImagenActual].leyenda}</p>
                </div>
              )}
            </div>

            {/* Controles de navegación */}
            <div className="buttons is-centered mt-4">
              <button className="button is-grey-lighter mt-4" onClick={irAnterior}>
                &lt; Anterior
              </button>
              <button className="button is-grey-lighter mt-4" onClick={irSiguiente}>
                Siguiente &gt;
              </button>
            </div>
            {/* Indicador de número de imagen */}
            <p className="has-text-centered mt-2">
              {indiceImagenActual + 1} / {imagenes.length}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FeaturedProducts