import "./Home.css"
import "../App.css"
import HeroSection from "../components/HeroSection";
import SectionCard from "../components/SectionCard";
import Footer from "../components/Footer";
import { topDestinations, HomeImages } from "../utils/ImportImages";
import { Icon } from "@iconify/react/dist/iconify.js";
import VerticalSlider from "../components/VerticalSlider";
import { useEffect } from "react";
import Article from "../components/Article";
import fronteNacImg from "../assets/frontenacArticleImg.jpg";

export default function Home() {

    useEffect(() => {
        document.title = "Visitez le Québec";
    }, []);

    return (
        <>
            <HeroSection isVideo={true} videoSrc="/dist/quebec.mp4" isImg={false} imgSrc='' h1Text="Découvrez le cœur du Canada français" h3Text="Vivez la magie du Québec" isButton={true} buttonText="Découvrir" />
            <main className="main">
                <div className="top-destinations-main">
                    <div className="top-destinations-wrapper">
                        <div></div>
                    </div>

                    <div className="slider">

                        <div className="slider-title">
                            <h1 className="title">Top Destinations</h1>
                            <p className="knowmore">Découvrez les incontournables du Québec - les villes les plus visitées</p>
                        </div>
                        <VerticalSlider images={topDestinations} />
                    </div>
                </div>

            </main>
            <SectionCard
                title="Plongez dans le riche patrimoine du Québec"
                paragraph="Découvrez la culture unique du Québec, où traditions franco-canadiennes et modernité se rencontrent. Promenez-vous dans les rues pavées du Vieux-Québec, classé au patrimoine mondial de l’UNESCO, assistez à des festivals vibrants comme le Carnaval de Québec ou explorez les galeries d’art locales. Laissez-vous charmer par la musique, les contes et les traditions qui font du Québec une destination culturelle incontournable."
                buttonText="Explorez la culture québécoise"
                isInverted={false}
                img={HomeImages[0]}
            ></SectionCard >
            <SectionCard
                title="Vivez les merveilles naturelles du Québec"
                paragraph="Des sommets majestueux du Mont-Tremblant aux eaux scintillantes du Fjord du Saguenay, le Québec regorge de paysages à couper le souffle. Que vous soyez amateur de randonnée, de kayak ou de ski dans les Laurentides, chaque saison offre une nouvelle façon de profiter de la nature québécoise. Échappez au quotidien et plongez dans la beauté sauvage du Québec."
                buttonText="Planifiez votre aventure"
                isInverted={true}
                img={HomeImages[1]}
            ></SectionCard><SectionCard
                title=" Savourez les saveurs du Québec"
                paragraph="Partez à la découverte des délices culinaires du Québec ! Dégustez des classiques comme la poutine, la tourtière ou les sucreries à base de sirop d’érable. Explorez les marchés fermiers locaux, participez à des circuits gastronomiques et laissez-vous surprendre par les restaurants emblématiques de Montréal et de Québec. Une expérience gourmande à ne pas manquer !"
                buttonText="Découvrez la cuisine locale"
                isInverted={false}
                img={HomeImages[2]}
            ></SectionCard>
            <Article
                title="Pourquoi visiter le Quebec"
                paragraph="Le Québec est une destination fascinante qui allie culture, nature et histoire. Avec ses villes dynamiques comme Montréal et Québec, ses paysages à couper le souffle allant des montagnes des Laurentides aux fjords du Saguenay, et ses plats emblématiques comme la poutine et le sirop d’érable, la province offre une expérience unique. Les amateurs d’histoire apprécieront Québec, inscrite au patrimoine mondial de l’UNESCO, tandis que les amoureux de la nature pourront explorer les parcs nationaux, observer les baleines et profiter des activités hivernales comme le ski et les promenades en traîneau. Ajoutez à cela l’accueil chaleureux des Québécois et une riche tradition de festivals, et vous avez une destination inoubliable pour tous les goûts."
                img={fronteNacImg}
                isInverted={false}
            ></Article>

            <Footer />
        </>
    );
}