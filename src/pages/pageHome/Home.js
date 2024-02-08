import "./Home.css";
import image from "../../asset/image/homejonhdoe.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Home() {
  return (
    <main className="Home">
      <section className="main-picture">
        <div className="main-picture__picture section-home d-flex justify-content-center align-items-center"></div>
        <div className="d-flex flex-column align-items-center gap-3">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
        </div>
        <a href="#a-propos">
          <button className="main-picture__button">En savoir plus</button>
        </a>
      </section>
      <main>
        <section className="gap-5 d-flex align-items-center justify-content-center mb-5 " id="a-propos">
        <div className="card-a-propos d-flex justify-content-evenly flex-column flex-md-row col-md-11 flex-lg-row card p-4 mt-5 border-0 col-12 col-xl-11" >
            <div className="d-flex flex-column col-lg-5 col-md-6 gap-5">
              <div className="titre-section-a-propos">
              <h1>À propos</h1>
              <hr></hr>
              </div>
              <div className=" col-lg-11 fs-4 d-flex flex-column gap-2">
                <p>
                  Passioné par l'informatique et les nouvelles technologies,
                  j'ai suivi une formation d'
                  <strong>intégrateur-développeur web</strong> au CEF. Au cours
                  de cette formation, j'ai pu acquérir des bases solides pour
                  travailler dans le domaine du{" "}
                  <strong>développement web.</strong>
                </p>
                <p>
                  Basé à Lyon, je suis en recherche d'une alternance au sein
                  d'une agence digitale pour consolider ma formation de{" "}
                  <strong>développeur web full stack.</strong>
                </p>
                <p>
                  J'accorde une attention particulière à la qualité du code que
                  j'écris et je respecte les bonnes
                </p>
              </div>
            </div>

            <div className="image_john_competences col-md-5 col-lg-6">
              <img
                className="rounded-2 col-12 col-lg-12"
                src={image}
                alt="John Doe"
              />
              <h3 className="mt-2">Mes compétences</h3>
              <div className="competences d-flex flex-column gap-md-4">
                <div>
                  <p className="mb-0 mt-3">HTML 90%</p>
                  <ProgressBar variant="danger" now={90} />
                </div>
                <div>
                  <p className="mb-0 mt-3">CSS 80%</p>
                  <ProgressBar variant="info" now={80} />
                </div>
                <div>
                  <p className="mb-0 mt-3">Javascript 70%</p>
                  <ProgressBar variant="warning" now={70} />
                </div>
                <div>
                  <p className="mb-0 mt-3">PHP 60%</p>
                  <ProgressBar variant="success" now={60} />
                </div>
                <div>
                  <p className="mb-0 mt-3">React 50%</p>
                  <ProgressBar now={50} />
                </div>
              </div>
              
            </div>
          </div>
        
        </section>
      </main>
    </main>
  );
}
