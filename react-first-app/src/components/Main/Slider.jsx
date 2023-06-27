import "./slider.css"
import cheir from "../../assets/Slider/Group 1.svg"
import { useState } from 'react'

function Slider() {
    const [dots, setDots] = useState([
        {
            id: 1,
            clicked: true
        },
        {
            id: 2,
            clicked: false
        },
        {
            id: 3,
            clicked: false
        },
    ])
    

    const handleClick = (id) => {
        const newDots = dots.map( dot => {
            if (id === dot.id) {
                return {
                    id: dot.id,
                    clicked: true
                }
            }
            return {...dot, clicked:false}
        })
        setDots(newDots)

    }

    const dotItems = dots.map( dot => (
        <div 
            key={dot.id} 
            class={`dot ${dot.clicked ? '_active' : ""}`}
            onClick={() => handleClick(dot.id)}
        >

    </div>
    ))

    return(
        <div className="slider">
            <div className="slider__slide slide">
                <div className="slide__picture">
                    <img src={cheir} alt="" className="cheir" />
                </div>
                <div className="slide__content content">
                    <h2 className="content__title">
                        Furniture collection
                    </h2>
                    <div className="content__divider">

                    </div>
                    <div className="content__text">
                        <p className="text">
                            Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                        </p>
                    </div>
                </div>
            </div>
            <div class="slider__dots dots">
                {dotItems}
            </div>
        </div>
    )
}

export default Slider