import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menu(){

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedIds, setAddedIds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/get/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const addProduct = (product) => {
    setCart((prev) => [...prev, product]);
    setAddedIds((prev) => [...prev, product.id]);
    
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  const removeProduct = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const sendOrder = () => {
    let mensaje = "Hola! Recorda enviar la transferencia para que empezemos a prepar tu pedido:\n\n El alias es : Guille_cafeteria\n\n";

    cart.forEach((item, index) => {
    mensaje += `- Pedido ${index + 1}:\n`;
    mensaje += `- ${item.name} ($${item.price})\n\n`;
  });

  mensaje += `*TOTAL: $${total}*`;

  const mensajeCodificado = encodeURIComponent(mensaje);

  // PONÉ TU NUMERO ACA
  const numero = "542236811353";

  window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, '_blank');

  console.log("Enviando pedido...");
  alert("Pedido enviado (Mira WhatsApp)");
  };

  return (
    <>
     <section className="section">
        <div className="container">
          <h1 className="title is-2 has-text-centered mb-6 has-text-black">
            ☕ Cafetería
          </h1>

          <div className="columns is-multiline">
            {products.map((product) => (
              <div className="column is-one-quarter" key={product.id}>
                
                <div 
                  className="card has-background-light has-text-black" 
                  style={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    border: '1px solid #dbdbdb',
                    boxShadow: 'none'
                  }}
                >
                  <div 
                    className="card-content has-text-centered"
                    style={{ 
                      flex: 1,
                      display: 'flex', 
                      flexDirection: 'column' 
                    }}
                  >
                    <p className="is-size-1">☕</p>
                    <p className="title is-4 has-text-black">{product.name}</p>
                    <p className="subtitle is-6 has-text-black mb-4">
                      {product.description}
                    </p>

                    <div style={{ marginTop: 'auto' }}>
                      <p className="title is-5 has-text-black has-text-weight-bold mb-2">
                        ${product.price}
                      </p>

                      <div style={{ minHeight: '24px' }}>
                        {addedIds.includes(product.id) && (
                          <p className="is-size-7 has-text-black has-text-weight-bold" style={{textTransform: 'uppercase', letterSpacing: '1px'}}>
                            Agregado
                          </p>
                        )}
                      </div>
                     </div>
                  </div>

                  <footer className="card-footer" style={{ borderTop: 'none', padding: '1rem' }}>
                    <button 
                      className="button is-black is-outlined is-fullwidth is-rounded" 
                      onClick={() => addProduct(product)}
                    >
                      Agregar al pedido
                    </button>
                  </footer>
                </div>
              </div>
            ))}
          </div>

          <hr />

          {cart.length > 0 && (
            <div className="notification is-light has-text-black" style={{border: '1px solid #dbdbdb'}}>
              <h2 className="title is-4 has-text-black">Tu Pedido</h2>
              
              <div className="tags are-medium">
                {cart.map((item, index) => (
                  <span className="tag is-white has-text-black" key={index} style={{ border: '1px solid #000' }}>
                    {item.name} - <strong>${item.price}</strong>
                    <button 
                      className="delete is-small ml-2 has-background-black" 
                      onClick={() => removeProduct(item.id)}
                    ></button>
                  </span>
                ))}
              </div>

              <div className="level mt-4">
                <div className="level-left">
                  <div className="level-item">
                    <h3 className="title is-3 has-text-black">
                      Total: ${total.toFixed(2)}
                    </h3>
                  </div>
                  <button 
                      className="button is-black is-medium" 
                      onClick={sendOrder}
                    >
                      Pedir
                    </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}