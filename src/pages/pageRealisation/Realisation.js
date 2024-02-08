
import "./Realisation.css"

import Card from "../../component/Card/Card.js";
import Banner from "../../component/Banner/Banner.js";
import TitleSection from "../../component/TitleSection/TitleSection.js";
import imgRestaurant from "../../asset/image/restaurant-japonais.jpg";
import imgBien from "../../asset/image/espace-bien.jpg";
import imgFood from "../../asset/image/fresh-food.jpg";

export default function Realisation() {
    return(
        <main>
            <Banner/>
            <TitleSection 
                title="PORTFOLIO" 
                presentation="Voici quelques-unes de mes réalisations."/>
            <section className="portfolio-section container">
                <div className="row">
                    <div className="col-12 portfolio-section__container">
                        <div className="row portfolio-section__card-container">
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card
                                    class="project-card"
                                    title="Restaurant Akira"
                                    image={imgRestaurant}
                                    imageAlt="Image d'un reatsurant"
                                    text="Réalisation d'un site vitrine."
                                    textButton="voir"
                                    footer="Site réalisé avec wordpress"
                                />
                            </div>
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card 
                                    class="project-card"
                                    title="Espace bien-être"
                                    image={imgBien}
                                    imageAlt="image de bien être"
                                    text="Réalisation d'un site vitrine pour un praticien de bien-être."
                                    textButton="voir"
                                    footer="Site realisé avec HTML5/CSS3"
                                />
                            </div>
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card 
                                    class="project-card"
                                    title="Fresh Food"
                                    image={imgFood}
                                    imageAlt="Image du projet formulaire d'inscription"
                                    text="Réalisation d'un site avec commande en ligne."
                                    textButton="voir"
                                    footer="Site realisé avec PHP et MySQL"
                                />
                            </div>
                            
                            
                            
                            </div>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}