import Navbar from './Navbar'
import './HeroSection.css'
import { useState } from 'react'
import ButtonDiscover from './ButtonDiscover';
import PropTypes from 'prop-types';



export default function HeroSection({ isVideo, isImg, videoSrc, imgSrc, h1Text, h3Text, isButton, buttonText }) {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    return (
        <>
            <Navbar></Navbar>

            <div
                className="video-background-container"
                onMouseMove={handleMouseMove}
            >
                {isVideo && (
                    <video

                        autoPlay
                        loop
                        muted
                        className="video-background"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}
                {isImg && (
                    <img
                        src={imgSrc}
                        alt=""
                        className="video-background"
                    />
                )}

                <div className="dark-overlay"></div>

                <div className="content-overlay">
                    <h1 className='content-h1'>{h1Text}</h1>
                    <h3 className='content-h3'>{h3Text}</h3>
                    {isButton && <ButtonDiscover text={buttonText} />}
                </div>

                <div
                    className="cursor-follow"
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                    }}
                ></div>

            </div>
        </>
    )
}

HeroSection.propTypes = {
    isVideo: PropTypes.bool,
    isImg: PropTypes.bool,
    videoSrc: PropTypes.string,
    imgSrc: PropTypes.string,
    h1Text: PropTypes.string,
    h3Text: PropTypes.string,
    isButton: PropTypes.bool,
    buttonText: PropTypes.string
}

