import React, {useState,useEffect,useRef} from 'react'
import '../../css/Slider.css'
import dataSlider from './dataSlider'
import CustomButton from '../Button/CustomButton'
import Image1 from '../../AssessmentAssets/img1.png'
import Image2 from '../../AssessmentAssets/img2.png'
import Image3 from '../../AssessmentAssets/img3.png'
import Menu from '../Menu/Menu'

const Slider = () => {

    const images = [
        Image1,
        Image2,
        Image3
    ]

    const [slideIndex, setSlideIndex] = useState(1)

    const autoPlayRef = useRef()

    useEffect(()=>{
        autoPlayRef.current = nextSlide
    })

    useEffect(() => {
        const play = () => {
          autoPlayRef.current()
        }
    
        const interval = setInterval(play, 10000)
        return () => clearInterval(interval)
      }, [])

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }

    

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={images[index]}/>
                    </div>
                )
            })}
            <Menu/>
        
            <div className="container-textbox">
                <div id="slider-text1">INTERACTIVE CONCERT EXPERIENCE</div>
                <div id="slider-text2">Experience your favourtie artists like never befor and from the comfort of your own home</div>
            </div>

            <div className="container-button">
                <CustomButton buttonAnchor="#" buttonClass="btn-mix-noborder" buttonDataText="Try-it-now" buttonText="Try It Now"/>
            </div>

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>

        </div>
    )
}

export default Slider;