import { useEffect, useState } from 'react';
import imagen1 from '../assets/BannerPizza.png';
import imagen2 from '../assets/BannerHamburguesa.png';
import imagen3 from '../assets/BannerPizza.png';

function Slider() {
    const slides = [
        imagen1,
        imagen2,
        imagen3
    ];

    const [slideActual, setSlideActual] = useState(0);
    const [hover, setHover] = useState(false);
    useEffect(() => {
        if (hover) return;
        const intervalo = setInterval(() => {
            setSlideActual((actual) => (actual + 1) % slides.length);
        }, 3000);
        return () => clearInterval(intervalo);
    }, [hover, slides.length]);

    return (
        <div className="sliderWrapper">
            <div
                className="contenedorSlider"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {slides.map((imagen, index) => {
                    let clase = "slide";
                    if (index === slideActual) {
                        clase += " activo";
                    } 
                    else if (
                        index === (slideActual - 1 + slides.length) % slides.length
                    ) {
                        clase += " anterior";
                    } 
                    else {
                        clase += " siguiente";
                    }
                    return (
                        <div className={clase} key={index}>
                            <img
                                src={imagen}
                                alt={`Imagen ${index + 1} del slider`}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="indicadores">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicador indicador-${index + 1} ${
                            index === slideActual ? "activo" : ""
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
