import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import HorizontalSlider from "../components/HorizontalSlider";
import Footer from "../components/Footer";
import { OutdoorActivities, WinterActivities, TourismImg, ApresSki } from "../utils/ImportImages";
import "./Todo.css"


export default function Todo() {

    useEffect(() => {
        document.title = "Visitez le Québec | Quoi Faire";
    }, []);
    return (
        <>
            <HeroSection
                isVideo={true}
                isImg={false}
                videoSrc="/quoiFaire.mp4"
                imgSrc=''
                h1Text="Quoi Faire"
                h3Text="Jetez un œil à ce que vous pouvez faire au Québec"
                isButton={true}
                buttonText="Découvrir"
            ></HeroSection>
            <div className="title-activité-wrapper">
                <h1 className="title-activité">Activité Hivernales</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id sapiente excepturi dicta voluptate ab reiciendis, possimus quam dolores! Ipsa.</p>
            </div>
            <HorizontalSlider images={WinterActivities} />
            <div className="title-activité-wrapper">
                <h1 className="title-activité">Activités de plein air</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id sapiente excepturi dicta voluptate ab reiciendis, possimus quam dolores! Ipsa.</p>
            </div>
            <HorizontalSlider images={OutdoorActivities} />
            <div className="title-activité-wrapper">
                <h1 className="title-activité">Attractions touristiques</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id sapiente excepturi dicta voluptate ab reiciendis, possimus quam dolores! Ipsa.</p>
            </div>
            <HorizontalSlider images={TourismImg} />

            <div className="gallery">
                <h1 className="title-activité gallery-title">Aprés-Ski</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id sapiente excepturi dicta voluptate ab reiciendis, possimus quam dolores! Ipsa.</p>

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