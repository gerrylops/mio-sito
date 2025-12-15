import React from "react";
import "./Contatti.css";

const Contatti = () => {
  return (
    <div id="contatti" className="container">
      <h2>Contattami</h2>
      <form
        action="https://formspree.io/f/mdkqdkae"
        method="POST"
        className="contact-form"
      >
        <input type="hidden" name="_subject" value="Nuovo contatto dal Sito!" />
        <div className="input-group">
          <input type="text" name="nome" placeholder="Nome" required />
          <input type="text" name="cognome" placeholder="Cognome" required />
        </div>
        <input type="email" name="mail" placeholder="La tua email" required />
        <textarea
          name="messaggio"
          rows="5"
          placeholder="Scrivi il tuo messaggio"
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          Invia
        </button>
      </form>
    </div>
  );
};

export default Contatti;
