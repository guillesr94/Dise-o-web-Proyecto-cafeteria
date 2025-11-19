import React, { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "Espresso", price: 1200 },
    { id: 2, name: "Latte", price: 1800 },
    { id: 3, name: "Capuccino", price: 1900 },
    { id: 4, name: "Medialuna", price: 900 },
  ];

  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeProduct = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    if (index >= 0) {
      const updated = [...cart];
      updated.splice(index, 1);
      setCart(updated);
    }
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Cafetería Minimal</h1>

      {/* Lista de productos */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 12,
            padding: 12,
            width: 150,
            textAlign: "center",
          }}
          >
            <strong>{p.name}</strong>
            <div>${p.price}</div>
            <button onClick={() => addProduct(p)} style={{ marginTop: 10 }}>
              Agregar
            </button>
          </div>
        ))}
      </div>

      {/* Barra inferior */}
      <div
        
        >
        <div>Total: ${total}</div>
        <div >
          {cart.map((item, index) => (
            <button key={index} onClick={() => removeProduct(item.id)}>
              {item.name} -
            </button>
          ))}
        </div>
      </div>
    </div>
          </>
  );
}
