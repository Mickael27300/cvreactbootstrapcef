import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

import twitter from '../../asset/icon/twitter-sign.png';
import linkedin from '../../asset/icon/linkedin-logo.png';
import github from '../../asset/icon/github-sign.png'; 

export default function Footer() {
    
    
   return(
        <footer className="footer container-fluid">
            <div className="row footer-info-container">
                <div className="col-lg-3 col-md-6 footer__info">
                    <div className="container info__container">
                        <h3>Jhon Doe</h3>
                        <address>
                        <a href="https://www.google.com/maps/place/40+Rue+Laure+
                        Diebold,+69009+Lyon/@45.778662,4.7963986,17z/data=!3m1!4b1!4m6!3m5!1
                        s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th
                        ?entry=ttu" target="_blank" rel="noreferrer" className="links">40 Rue Laure Diebold <br/>69009 Lyon, France</a>
                        <p>Téléphone: <a href="tel:0620304050" className="links">06 20 30 40 50</a></p>
                        </address>
                        <div className="container info__logo-container">
                            <img src={github} alt="github-logo"/>
                            <img src={twitter} alt="twitter-logo"/>
                            <img src={linkedin} alt="linkedin-logo"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__links">
                    <div className="container links__container">
                        <h3>Liens utiles</h3>
                        <nav className="links__nav">
                            <Link to="/" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Accueil</Link>
                            <Link to="/" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> A propos</Link>
                            <Link to="/Services" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Services</Link>
                            <Link to="/Contact" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Me contacter</Link>
                            <Link to="/Legal" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Mentions légales</Link>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__real">
                    <div className="container real__container">
                        <h3>Mes dernière realisations</h3>
                        <nav className="real__nav">
                            <Link to="/Realisation" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Restaurant Akira</Link>
                            <Link to="/Realisation" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Espace Bien-être</Link>
                            <Link to="/Realisation" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Fresh Food</Link>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__blog">
                    <div className="container blog__container">
                        <h3>Mes derniers articles</h3>
                        <nav className="blog__nav">
                            <Link to="BLog" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Coder son site en HTML/CSS</Link>
                            <Link to="BLog" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Vendre ses produits sur le web</Link>
                            <Link to="BLog" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Se positionner sur Google</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row copyright-container">
                <p className="copyright-container__text">&copy; Designed by Jhon Doe</p>
            </div>
        </footer>
   )
}