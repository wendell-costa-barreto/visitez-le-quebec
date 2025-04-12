import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import HorizontalSlider from "../components/HorizontalSlider";
import Footer from "../components/Footer";
import { OutdoorActivities, WinterActivities, TourismImg, ApresSki } from "../utils/ImportImages";
import "./Todo.css"
import { FallbackImages } from "../utils/ImportImages";

export default function Todo() {

    useEffect(() => {
        document.title = "Visitez le Québec | Quoi Faire";
    }, []);
    return (
        <>
            <HeroSection
                isVideo={true}
                isImg={true}
                videoSrc="quoiFaire.mp4"
                imgSrc={FallbackImages[3].img}
                h1Text="Quoi Faire"
                h3Text="Jetez un œil à ce que vous pouvez faire au Québec"
                isButton={true}
                buttonText="Découvrir"
            ></HeroSection>
            <div className="title-activité-wrapper">
                <h1 className="title-activité">Activité Hivernales</h1>
                <p>
                    Découvrez les activités hivernales passionnantes que le Québec a à offrir. Profitez de l'expérience unique du traîneau à chiens à travers les paysages enneigés, essayez la pêche sur glace sur les lacs gelés, et vivez l'excitation du patinage sur les célèbres patinoires. Pour les amateurs de sensations fortes, le ski et la luge dans les montagnes du Québec vous attendent. Rejoignez-nous pour une aventure hivernale inoubliable!
                </p>
            </div>
            <HorizontalSlider images={WinterActivities} />
            <div className="title-activité-wrapper">
                <h1 className="title-activité">Activités de plein air</h1>
                <p>
                    Explorez les activités de plein air captivantes offertes par le Québec. Partez à l'aventure en kayak sur les rivières sinueuses, découvrez les paysages à vélo, ou promenez-vous à cheval à travers la nature sauvage. La randonnée dans les parcs nationaux vous offre des vues imprenables, tandis que l'observation des baleines le long des côtes vous laissera des souvenirs impérissables. Vivez des expériences en plein air inoubliables!
                </p>
            </div>
            <HorizontalSlider images={OutdoorActivities} />
            <div className="title-activité-wrapper">
                <h1 className="title-activité">Attractions touristiques</h1>
                <p>Découvrez les nombreuses attractions touristiques que le Québec a à offrir. Du célèbre Château Frontenac à la Basilique Notre-Dame, en passant par les magnifiques paysages de la Gaspésie, il y a quelque chose pour tous les goûts. Partez à l'aventure et explorez les sites historiques, les musées, les parcs nationaux et bien plus encore!</p>
            </div>
            <HorizontalSlider images={TourismImg} />

            <div className="gallery">
                <h1 className="title-activité gallery-title">Aprés-Ski</h1>
                <p>Et pour couronner le tout, profitez de l'ambiance festive et chaleureuse de l'apres-ski au Québec. Les bars et les restaurants vous accueillent avec plaisir pour vous faire découvrir les spécialités locales. Il y a même des festivals de l'apres-ski qui vous attendent!</p>
                <div className="row">
                    <div className="column">
                        <img src={ApresSki[0].img} alt="ApresSki" />
                        <img src={ApresSki[1].img} alt="ApresSki" />
                    </div>
                    <div className="column">
                        <img src={ApresSki[3].img} alt="ApresSki" />
                        <img src={ApresSki[4].img} alt="ApresSki" />
                    </div>
                    <div className="column">
                        <img src={ApresSki[5].img} alt="ApresSki" />
                        <img src={ApresSki[6].img} alt="ApresSki" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}