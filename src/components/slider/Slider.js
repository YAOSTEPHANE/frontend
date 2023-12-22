import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import { useState } from "react";
import "./Slider.scss";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentslide] = useState(0)
    const slidelength = sliderData.length
    const autoScroll = true
    let slideInterval;
    const intervalTime = 5000
    const navigate = useNavigate();
    const prevSlide = () => {
        setCurrentslide(currentSlide === 0 ? slidelength - 1 : currentSlide - 1)
    };
    useEffect(() => {
        setCurrentslide(0)
    }, [])
    useEffect(() => {
        if (autoScroll) {
            const auto = () => {
                slideInterval = setInterval(nextSlide, intervalTime)
            }
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide, intervalTime, autoScroll]);
    const nextSlide = () => {
        setCurrentslide(currentSlide === slidelength - 1 ? 0 : currentSlide + 1);
    };
    return <div className="slider">
        <AiOutlineArrowLeft className="arrow prev"
            onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next"
            onClick={nextSlide} />

        {sliderData.map((slide, index) => {
            const { image, heading, desc } = slide

            return (
                <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                    {index === currentSlide && (
                        <>
                            <img src={image} alt="slide" />
                            <div className="content">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                <h2>{heading}</h2>
                                <p>{desc}</p>
                                <hr />
                                <button className="--btn --btn-primary" onClick={() => navigate("/shop")}>
                                    Acheter Maintenant
                                </button>
                            </div>
                        </>
                    )}

                </div>
            )
        })}

    </div>;

};


export default Slider;