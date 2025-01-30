import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import './Destinations.css'
import Map from '../components/Map';
import SectionCard from '../components/SectionCard';;
import { DestinationImages } from '../utils/ImportImages';
import Footer from "../components/Footer";
import quebecDestination from '/quebecDestination.mp4'
export default function Destinations() {

    useEffect(() => {
        document.title = "Visitez le Québec | Destinations";
    }, []);
    return (
        <>
            <HeroSection
                isVideo={true}
                isImg={false}
                videoSrc={quebecDestination}
                imgSrc=''
                h1Text="Destinations"
                h3Text="Venez visiter les villes du Canada"
                isButton={true}
                buttonText="Découvrir"
            ></HeroSection>
            <div className="title-wrapper-top-destinations">
                <h1 className="title-top-destinations">Top Destinations en Québec</h1>
                <p>Planifiez votre séjour en choisissant votre destination parmi nos régions touristiques. Chacune d’elles présente un relief, une histoire et des activités qui mettent en valeur la particularité de notre territoire.</p>
            </div>
            <Map></Map>

            <h1 className="title-top-destinations">Régions les plus populaires</h1>

            <SectionCard
                title="Québec"
                paragraph="Québec, ville historique et capitale du Québec, vous invite &agrave; d&eacute;couvrir son riche patrimoine culturel et architectural. La ville fortifi&eacute;e de l'Uni&eacute;sco, les rues pi&eacute;tonnes du Vieux-Qu&eacute;bec, les festivals et les &eacute;v&eacute;nements, les restaurants et les bars, les march&eacute;s et les boutiques, tout concourt &agrave; faire de Qu&eacute;bec une destination incontournable."
                buttonText="En découvrir plus"
                isInverted={false}
                img={DestinationImages[0].img}
            ></SectionCard>

            <SectionCard
                title="Montréal"
                paragraph="Montr&eacute;al, ville cosmopolite et centre &eacute;conomique du Qu&eacute;bec, vous offre une grande vari&eacute;t&eacute; d'exp&eacute;riences : festivals, mus&eacute;es, restaurants, bars, march&eacute;s, et bien plus encore. La riche histoire de la ville, ses nombreux parcs et jardins, ainsi que sa culture multiculturelle, en font une destination tr&egrave;s attractive."
                buttonText="En découvrir plus"
                isInverted={false}
                img={DestinationImages[1].img}
            ></SectionCard>


            <SectionCard
                title="Saguenay-Lac-Saint-Jean"
                paragraph="La r&eacute;gion de Saguenay-Lac-Saint-Jean vous invite &agrave; d&eacute;couvrir ses nombreux attraits touristiques : le lac Saint-Jean, les montagnes, les for&ecirc;ts, les rivi&egrave;res, les chutes, les parcs, les sentiers, les plages, les stations de ski, les festivals, les &eacute;v&eacute;nements, les restaurants, les bars, les march&eacute;s, les boutiques, etc. Vous y trouverez &eacute;galement de nombreux sites historiques et culturels, tels que le mus&eacute;e de la Civilisation, la basilique-cath&eacute;drale Notre-Dame de Qu&eacute;bec, le fortifications de Qu&eacute;bec, etc."
                buttonText="En découvrir plus"
                isInverted={false}
                img={DestinationImages[2].img}
            ></SectionCard>


            <SectionCard
                title="Gatineau"
                paragraph="Gatineau est une ville dynamique du Québec, située sur la rive nord de la rivière des Outaouais, en face d'Ottawa. Mélange harmonieux de nature et d’urbanisme, elle offre de vastes espaces verts, comme le parc de la Gatineau, idéal pour la randonnée et les activités en plein air. Riche en culture, elle abrite le Musée canadien de l’histoire, l’un des plus visités du pays. Son économie diversifiée, son marché du travail en pleine croissance et sa proximité avec la capitale en font un lieu prisé pour les résidents et les visiteurs."
                buttonText="En découvrir plus"
                isInverted={false}
                img={DestinationImages[3].img}
            ></SectionCard>


            <SectionCard
                title="Charlottetown"
                paragraph="Charlottetown est la capitale de l'Île-du-Prince-Édouard, une province canadienne connue pour sa beauté naturelle et son riche patrimoine historique. La ville est célèbre pour son charme victorien, ses rues sinueuses et ses nombreux sites historiques, tels que la Province House, où a eu lieu la Confédération canadienne en 1864."
                buttonText="En découvrir plus"
                isInverted={false}
                img={DestinationImages[4].img}
            ></SectionCard>
            <Footer></Footer>
        </>
    )
}