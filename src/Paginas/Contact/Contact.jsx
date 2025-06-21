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
  emailjs.sendForm('service_z48bcd5', 'template_bng414q', e.target, 'IR-b-zlIOq5njOTDS')
    .then((result) => {
      console.log('Email enviado:', result.text);
    
    }, (error) => {
      console.log('Error al enviar email:', error.text);
      
    });

  
  e.target.reset();
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
                    value={form.nombre}
                    onChange={handleChange}
                  />
                  <label className="label has-text-black">Email</label>
                  <input
                    className="input has-background-light has-text-black"
                    type="text"
                    name="user_email"
                    placeholder="Escribí tu mail"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label className="label has-text-black">Mensaje</label>
                  <textarea
                    className="textarea has-background-light has-text-black"
                    type="text"
                    name="message"
                    placeholder="Escribí tu mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
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
