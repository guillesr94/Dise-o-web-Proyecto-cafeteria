import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Menu() {
  const ejemplos = [
    { id: 1, name: "Espresso", description: "Café intenso y corto", price: 1500, category: "Cafeteria" },
    { id: 2, name: "Latte Clásico", description: "Espresso con abundante leche emulsionada", price: 2200, category: "Cafeteria" },
    { id: 3, name: "Flat White", description: "Doble ristretto con leche finamente texturizada", price: 2500, category: "Cafeteria" },
    { id: 4, name: "Medialuna de Manteca", description: "Clásica medialuna dulce", price: 800, category: "Dulce" },
    { id: 5, name: "Porción de Chocotorta", description: "Capas de galletitas, dulce de leche y queso crema", price: 3500, category: "Dulce" },
    { id: 7, name: "Tostado de Miga", description: "Jamón y queso en pan de miga tostado", price: 3000, category: "Salado" },
    { id: 8, name: "Sándwich de Crudo", description: "Jamón crudo, queso brie y rúcula", price: 4800, category: "Salado" }
  ];

  const [products, setProducts] = useState(ejemplos); 
  const [cart, setCart] = useState([]);
  const [addedIds, setAddedIds] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState("Todos");

  const formatearPrecio = (numero) => {
    return new Intl.NumberFormat('en-US').format(numero);
  };

  const productosFiltrados = categoriaActual === "Todos"
    ? products
    : products.filter((product) => product.category === categoriaActual);

  const addProduct = (product) => {
    const uniqueItem = { ...product, cartId: crypto.randomUUID() };
    setCart((prev) => [...prev, uniqueItem]);
    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 1000);
  };

  const removeProduct = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const sendOrder = () => {
    let mensaje = "Hola! Recorda enviar la transferencia para empezar a preparar tu pedido:\n\nAlias: Guille_cafeteria\n\n";
    
    const resumen = cart.reduce((acc, item) => {
      acc[item.name] = acc[item.name] || { cantidad: 0, precio: item.price };
      acc[item.name].cantidad += 1;
      return acc;
    }, {});

    Object.entries(resumen).forEach(([nombre, data]) => {
      mensaje += `- ${nombre} ($${formatearPrecio(data.precio)}) x${data.cantidad}\n`;
    });

    mensaje += `\n*TOTAL: $${formatearPrecio(total)}*`;
    const numero = "542222222222"; 
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, '_blank');
    setCart([]);
  };

  const categorias = ["Todos", "Cafeteria", "Dulce", "Salado"];

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "1050px" }}>
        <h1 className="title is-2 has-text-centered mb-5 has-text-black">☕ Nuestro Menú</h1>

        <div className="buttons is-centered mb-4">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`button is-rounded ${categoriaActual === cat ? "is-black" : "is-light"}`}
              onClick={() => setCategoriaActual(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <h2 className="subtitle is-6 has-text-centered has-text-grey mb-6">
          Después de agregar productos, revisá el carrito abajo de todo 👇
        </h2>

        <div className="columns is-multiline is-mobile is-tablet is-desktop">
          {productosFiltrados.map((product) => (
            <div className="column is-12-mobile is-6-tablet is-4-desktop" key={product.id}>
              <div 
                className="box has-background-light p-4" 
                style={{ height: "100%", display: "flex", flexDirection: "column", border: "1px solid #dbdbdb", boxShadow: "none" }}
              >
                <div className="is-flex is-justify-content-space-between is-align-items-start mb-4">
                  <div style={{ paddingRight: '10px' }}>
                    <p className="title is-5 has-text-black mb-1">{product.name}</p>
                    <p className="subtitle is-7 has-text-grey">{product.description}</p>
                  </div>
                  <div className="has-text-right">
                    <p className="title is-5 has-text-black" style={{ whiteSpace: 'nowrap' }}>
                      ${formatearPrecio(product.price)}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <button
                    className={`button is-fullwidth is-small ${addedIds.includes(product.id) ? "is-success" : "is-black is-outlined"}`}
                    onClick={() => addProduct(product)}
                  >
                    {addedIds.includes(product.id) ? "✓ Agregado" : "+ Agregar al pedido"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr />

        {cart.length > 0 && (
          <div className="notification is-light has-text-black" style={{ border: "1px solid #dbdbdb" }}>
            <h2 className="title is-4 has-text-black">Tu Pedido</h2>
            <div className="tags are-medium mb-4">
              {cart.map((item) => (
                <span className="tag is-white has-text-black" key={item.cartId} style={{ border: "1px solid #000" }}>
                  {item.name} - <strong>${formatearPrecio(item.price)}</strong>
                  <button className="delete is-small ml-2 has-background-black" onClick={() => removeProduct(item.cartId)}></button>
                </span>
              ))}
            </div>
            <div className="level is-mobile">
              <div className="level-left">
                <h3 className="title is-4 has-text-black m-0">Total: ${formatearPrecio(total)}</h3>
              </div>
              <div className="level-right">
                {/* BOTÓN AHORA EN VERDE (is-success) */}
                <button className="button is-success" onClick={sendOrder}>Pedir por WhatsApp</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}