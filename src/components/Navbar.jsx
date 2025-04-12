import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const scrollToFooter = (e) => {
        e.preventDefault();
        const footerElement = document.getElementById("footer");
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbar">
            <h1 className="logo">
                <Link to="/" className="logo">Visitez le Québec</Link>
            </h1>
            <ul className="navbar-li">
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/apropos">À propos de Québec</Link></li>
                <li><Link to="/quoi-faire">Quoi faire</Link></li>
                <li><a href="#footer" onClick={scrollToFooter}>Contact</a></li>
            </ul>
        </div>
    );
}
