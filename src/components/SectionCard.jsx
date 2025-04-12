import "./Section.css"
import PropTypes from "prop-types"

export default function SectionCard({ title, paragraph, buttonText, img, isInverted }) {
    return (
        <div className={isInverted ? "section inverted" : "section"}>
            <article className="article">
                <h1>{title}</h1>
                <p>{paragraph}</p>
                <button>{buttonText}</button>
            </article>
            <img src={img} alt="An image about {title}" />
        </div>
    )
}

SectionCard.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    buttonText: PropTypes.string,
    img: PropTypes.string,
    isInverted: PropTypes.bool
}