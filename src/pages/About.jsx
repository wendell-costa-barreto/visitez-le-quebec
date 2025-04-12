import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import QuebecImage from "../assets/quebecAboutImage.jpg"
import oldMontrealImage from "../assets/oldMontreal.jpg"
import Article from "../components/Article";
import poutine from '../assets/poutine.jpg'
import carnavalDeQuebec from '../assets/carnavalDeQuebec.jpg'
import './About.css'
import { FallbackImages } from "../utils/ImportImages";
export default function About() {
    useEffect(() => {
        document.title = "A propos de Québec";
    }, []);

    return (
        <>
            <HeroSection
                isVideo={true}
                isImg={true}
                videoSrc='/quebecAboutVideo.mp4'
                imgSrc={FallbackImages[1].img}
                h1Text="À propos de Quebec"
                h3Text="de la merveilleuse province de Québec"
                isButton={true}
                buttonText="Découvrir"
            >

            </HeroSection>

            <div className="collumns-container">
                <div className="column-left">
                    <h1>Une fascinante histoire</h1>
                    <p>
                        La province de Québec, la plus grande du Canada, se distingue par son riche patrimoine culturel, son histoire fascinante et ses paysages à couper le souffle. Berceau de la culture francophone en Amérique du Nord, elle allie tradition et modernité à travers ses villes dynamiques comme Montréal et Québec, où l’architecture historique côtoie une scène artistique florissante. En hiver, la province se transforme en un paradis pour les amateurs de sports de glisse avec des stations de ski renommées et le célèbre Carnaval de Québec, tandis qu’en été, ses vastes forêts, ses lacs scintillants et le majestueux fleuve Saint-Laurent offrent des possibilités infinies pour la randonnée, le kayak et l'observation de la faune. Riche en gastronomie, elle est aussi réputée pour son sirop d’érable, sa poutine et ses fromages artisanaux. Que ce soit pour ses festivals animés, ses espaces naturels impressionnants ou son accueil chaleureux, le Québec séduit autant les voyageurs que ceux qui y habitent.</p>                </div>
                <div className="column-right">
                    <img src={QuebecImage} alt="" />
                </div>
            </div>

            <Article
                title="Histoire du Québec"
                paragraph="Québec, une province riche en histoire et en culture, a toujours été une région fascinante du Canada. Depuis ses débuts comme colonie française jusqu'à son développement en une société moderne, le Québec a su préserver sa langue, ses traditions, et son patrimoine. Les explorateurs français, tels que Jacques Cartier et Samuel de Champlain, ont joué un rôle crucial dans la fondation de la Nouvelle-France, qui est devenue une part essentielle de l'histoire canadienne. Aujourd'hui, le Québec est reconnu pour ses festivals vibrants, sa cuisine délicieuse, et son architecture historique. La province continue d'attirer des visiteurs du monde entier, curieux de découvrir sa beauté naturelle et sa richesse culturelle."
                img={oldMontrealImage}
                isInverted={false}
            ></Article>

            <Article
                title="La gastronomie québécoise: un mélange de saveurs et de traditions"
                paragraph="La gastronomie québécoise est un savoureux mélange d'influences autochtones, françaises et nord-américaines, reflétant l'histoire et la culture unique de cette région. Parmi ses plats emblématiques, la poutine se démarque : un mélange réconfortant de frites croustillantes, de fromage en grains fondant et de sauce brune. Le pâté chinois, souvent surnommé le  plat des familles, combine viande hachée, maïs en crème et purée de pommes de terre. Les tourtières, tartes garnies de viande savoureuse, sont un incontournable des fêtes. Les sirops d'érable, récoltés dans les érablières du Québec, ajoutent une touche sucrée à de nombreux plats et desserts, comme le pouding chômeur. Cette cuisine rustique et chaleureuse célèbre les produits locaux, mettant en avant un héritage culinaire riche et réconfortant, parfait pour affronter les hivers québécois."
                img={poutine}
                isInverted={true}
            ></Article >

            <Article
                title="La culture québecoise"
                paragraph="La culture québécoise est un fascinant mélange d'héritages autochtones, français et nord-américains, formant une identité unique et riche. Le français, langue officielle, joue un rôle central dans l'expression artistique et culturelle, que ce soit dans la musique, la littérature ou le cinéma. Le Québec est également réputé pour ses festivals, comme le Festival d'été de Québec et le Carnaval de Québec, qui célèbrent la créativité et la convivialité de ses habitants. Les Québécois valorisent profondément leurs traditions, tout en étant ouverts aux influences modernes. Le sens de la communauté, l'humour chaleureux et un attachement fort à la nature font partie intégrante de leur mode de vie. Cette culture dynamique reflète un équilibre harmonieux entre modernité et respect des racines, offrant un patrimoine riche et vivant."
                img={carnavalDeQuebec}
                isInverted={false}
            ></Article >

            <Footer />
        </>
    )
}

