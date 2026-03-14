import React, { useState } from "react";
import emailjs from '@emailjs/browser';
function Contact() {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // USANDO TUS NUEVOS IDS: service_llxqfw3 y template_wsjrvsv
    emailjs.sendForm('service_llxqfw3', 'template_wsjrvsv', e.target, 'IR-b-zlIOq5njOTDS')
      .then((result) => {
        console.log('Email enviado:', result.text);
        alert("¡Mensaje enviado con éxito!");
        setForm({ user_name: "", user_email: "", message: "" }); // Limpia el estado
      }, (error) => {
        console.log('Error al enviar email:', error.text);
        alert("Hubo un error: " + error.text);
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
                    name="user_name" // Coincide con el name del state
                    placeholder="Escribí tu nombre"
                    value={form.user_name} // CORREGIDO: antes decía form.nombre
                    onChange={handleChange}
                    required
                  />
                  
                  <label className="label has-text-black">Email</label>
                  <input
                    className="input has-background-light has-text-black"
                    type="email"
                    name="user_email"
                    placeholder="Escribí tu mail"
                    value={form.user_email} // CORREGIDO: antes decía form.email
                    onChange={handleChange}
                    required
                  />
                  
                  <label className="label has-text-black">Mensaje</label>
                  <textarea
                    className="textarea has-background-light has-text-black"
                    name="message"
                    placeholder="Escribí tu mensaje"
                    value={form.message} // CORREGIDO: antes decía form.mensaje
                    onChange={handleChange}
                    required
                  />
                  
                  <button type="submit" className="button is-grey-lighter mt-4">
                    Enviar
                  </button>
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