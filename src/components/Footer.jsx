import "./Footer.css"
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Footer() {
    return (
        <footer id="footer" className="footer-distributed">

            <div className="footer-left">

                <h3>Visitez le <span>Québec</span></h3>

                <ul className="footer-links">
                    <li><Link to="/destinations">Destinations</Link></li>
                    <li><Link to="/apropos">À propos de Québec</Link></li>
                    <li><Link to="/quoi-faire">Quoi faire</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p> Salvador, Bahia, Brésil</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+55 71 999018090</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><Link to="mailto:wendellbarreto2007@gmail.com">wendellbarreto2007@gmail.com</Link></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>À propos de moi</span>
                    Consultez mes réseaux sociaux
                </p>

                <div className="footer-icons">

                    <Link to="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="https://www.linkedin.com"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://www.github.com"><i className="fa-brands fa-github"></i></Link>

                </div>

            </div>

        </footer>
    );
}