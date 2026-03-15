import React, { useState } from "react";
import emailjs from '@emailjs/browser';


function Contact() {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Estados para el feedback visual
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Empieza a cargar
    
    emailjs.sendForm('service_llxqfw3', 'template_wsjrvsv', e.target, 'IR-b-zlIOq5njOTDS')
      .then((result) => {
        setLoading(false); // Deja de cargar
        setSent(true);    // Muestra mensaje de éxito
        setForm({ user_name: "", user_email: "", message: "" });
        
        // Ocultar el mensaje de éxito después de 5 segundos
        setTimeout(() => setSent(false), 5000);
      }, (error) => {
        setLoading(false);
        alert("Error al enviar: " + error.text);
      });
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full-mobile is-8-desktop">
              <div className="card has-background-light p-5">
                <h3 className="title is-3 has-text-black">Contactanos</h3>
                <form onSubmit={handleSubmit}>
                  <label className="label has-text-black">Nombre</label>
                  <input
                    className="input has-background-light has-text-black"
                    type="text"
                    name="user_name"
                    placeholder="Escribí tu nombre"
                    value={form.user_name}
                    onChange={handleChange}
                    required
                  />
                  
                  <label className="label has-text-black">Email</label>
                  <input
                    className="input has-background-light has-text-black"
                    type="email"
                    name="user_email"
                    placeholder="Escribí tu mail"
                    value={form.user_email}
                    onChange={handleChange}
                    required
                  />
                  
                  <label className="label has-text-black">Mensaje</label>
                  <textarea
                    className="textarea has-background-light has-text-black"
                    name="message"
                    placeholder="Escribí tu mensaje"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  
                  <button 
                    type="submit" 
                    className={`button is-black mt-4 ${loading ? 'is-loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? "Cargando..." : "Enviar"}
                  </button>

                  {/* Feedback visual abajo del botón */}
                  {sent && (
                    <p className="has-text-success is-size-6 mt-3 has-text-weight-bold">
                      ¡Enviado con éxito!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;