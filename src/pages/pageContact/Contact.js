import "./Contact.css";
import TitleSection from "../../component/TitleSection/TitleSection.js";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';

export default function Blog() {
  return (
    <main className="main-contact">
      <div className="background-contact"></div>

      <section className="contact-section">
        <TitleSection
          title="ME CONTACTER"
          presentation="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <section className="col-lg-6 contact-form">
                  <h2 className="section-title">Formulaire de contact</h2>
                  <form>
                    <input type="text" placeholder="Votre nom" />
                    <input type="mail" placeholder="Votre adresse email" />
                    <input type="tel" placeholder="Votre numéro de téléphone" />
                    <input type="text" placeholder="Sujet" />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="8"
                      placeholder="Votre message"
                    ></textarea>
                    <Button variant="primary">Envoyer</Button>{' '}
                  </form>
                </section>
                <section className="col-lg-6 address-information">
                  <h2 className="section-title">Mes coordonnées</h2>
                  <address className="address">
                    <p className="localisation">
                      <FontAwesomeIcon icon={faLocationDot} /> 40 rue Laure
                      Diebold, 69009 Lyon, France
                    </p>
                    <a href="tel:0620304050" className="phone">
                      <FontAwesomeIcon icon={faMobileScreen} /> 06 20 30 40 50
                    </a>
                    <iframe
                      title="maps-frame"
                      class="col-12"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189868!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1686898109600!5m2!1sfr!2sfr"
                      width="600"
                      height="450"
                      loading="lazy"
                    ></iframe>{" "}
                  </address>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
