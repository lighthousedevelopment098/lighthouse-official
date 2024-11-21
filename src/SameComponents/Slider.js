import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const carousel = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}



const Slider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )
    return (
        <>
            <h1>Slider</h1>
            {/* <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1" style={{ minWidth: "300px !importent", maxWidth: "300px !importent" }}>1</div>
                <div className="keen-slider__slide number-slide2" style={{ minWidth: "300px !importent", maxWidth: "300px !importent" }}>2</div>
                <div className="keen-slider__slide number-slide3" style={{ minWidth: "300px !importent", maxWidth: "300px !importent" }}>3</div>
                <div className="keen-slider__slide number-slide4" style={{ minWidth: "300px !importent", maxWidth: "300px !importent" }}>4</div>
                <div className="keen-slider__slide number-slide5" style={{ minWidth: "300px !importent", maxWidth: "300px !importent" }}>5</div>
                <div className="keen-slider__slide number-slide6" style={{ minWidth: "300px !importent", maxWidth: "300px !importent" }}>6</div>
            </div> */}
            <div className="wrapper">
                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>
                        <div className="carousel__cell number-slide1 ">1</div>
                        <div className="carousel__cell number-slide2">2</div>
                        <div className="carousel__cell number-slide3">3</div>
                        <div className="carousel__cell number-slide4">4</div>
                        <div className="carousel__cell number-slide5">5</div>
                        <div className="carousel__cell number-slide6">6</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider