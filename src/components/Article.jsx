import React from "react";
import './Article.css'
import PropTypes from "prop-types";

export default function Article({ title, paragraph, img, isInverted }) {
    return (
        <>
            <div className="article-container">
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </div>
            <div className="img-wrapper"
                style={{ justifyContent: isInverted ? "flex-end" : "flex-start" }}
            >
                <img src={img} alt="An image about {title}" />
            </div>
        </>
    )
}

Article.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    img: PropTypes.string,
    isInverted: PropTypes.bool
}