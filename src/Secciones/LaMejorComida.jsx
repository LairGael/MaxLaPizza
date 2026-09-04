import { useEffect, useState } from "react";
import decorado2 from "../assets/Decorado2.png"
import decorado3 from "../assets/Decorado3.png"
import pizza from "../assets/Pizza.png"
import hamburguesa from "../assets/Hamburguesa.png"
import alitas from "../assets/Alitas.png"

import iconoPizza from "../assets/IconoPizza.svg"
import iconoRebanada from "../assets/Rebanada.svg"
import iconoCasa from "../assets/IconoCasa.svg"
import iconoDomicilio from "../assets/IconoDomicilio.svg"

function LaMejorComida() {
    const [cualidadesVisibles, setCualidadesVisibles] = useState(false);

    useEffect(() => {
        const elemento = document.querySelector(".cualidadesMejor");
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCualidadesVisibles(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2
            }
        );

        if (elemento) {
            observer.observe(elemento);
        }

        return () => observer.disconnect();
    }, []);

    return(
        <>
        <div className="tituloMejor">
            <h2>La Mejor Comida</h2>
            <h2>Con la Mejor Variedad</h2>
            <div className="decorado2">
                <img src={decorado2} alt="Decorado 2" />
            </div>
            <div className="decorado3">
                <img src={decorado3} alt="Decorado 3" />
            </div>
        </div>
        <div className="contenedorMejor">
            <a className="cardMejor" href="/Menu_Pizzeria.pdf" target="_blank" rel="noopener noreferrer">
                <div className="cardMejorTexto">
                    <h4>Elige tu </h4>
                    <h4>especialidad <b>FAVORITA</b></h4>
                    <div className="verMenu">
                        <div className="barraMenu"></div>
                        <p>Ver Menu</p>
                        <div className="barraMenu"></div>
                    </div>
                </div>
                <div className="cardMejorImagen">
                    <img src={pizza} alt="Imagen 1" />
                </div>
            </a>
            <a className="cardMejor" href="/Menu_Pizzeria.pdf" target="_blank" rel="noopener noreferrer">
                <div className="cardMejorTexto">
                    <h4>La <b>HAMBURGUESA</b></h4>
                    <h4>ideal para ti</h4>
                    <div className="verMenu">
                        <div className="barraMenu"></div>
                        <p>Ver Menu</p>
                        <div className="barraMenu"></div>
                    </div>
                </div>
                <div className="cardMejorImagen2">
                    <img src={hamburguesa} alt="Imagen 2" />
                </div>
            </a>
            <a className="cardMejor" href="/Menu_Pizzeria.pdf" target="_blank" rel="noopener noreferrer">
                <div className="cardMejorTexto">
                    <h4>Para todos </h4>
                    <h4>los <b>GUSTOS</b></h4>
                    <div className="verMenu">
                        <div className="barraMenu"></div>
                        <p>Ver Menu</p>
                        <div className="barraMenu"></div>
                    </div>
                </div>
                <div className="cardMejorImagen3">
                    <img src={alitas} alt="Imagen 3" />
                </div>
            </a>
        </div>
        <div className="cualidadesMejor">
            <div  className={`cualidadMejor ${cualidadesVisibles ? "visible" : ""}`} style={{ transitionDelay: "0ms" }}>
                <img src={iconoPizza} alt="Icono Pizza" />
                <p>Prepara a tu gusto</p>
            </div>
            <div className={`cualidadMejor ${cualidadesVisibles ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
                <img src={iconoRebanada} alt="Icono Rebanada" />
                <p>La mejor calidad</p>
            </div>
            <div className={`cualidadMejor ${cualidadesVisibles ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
                <img src={iconoCasa} alt="Icono Casa" />
                <p>Cerca de tu Hogar</p>
            </div>
            <div className={`cualidadMejor ${cualidadesVisibles ? "visible" : ""}`} style={{ transitionDelay: "450ms" }}>
                <img src={iconoDomicilio} alt="Icono Domicilio" />
                <p>Servicio a domicilio</p>
            </div>
        </div>
        </>
    );
}

export default LaMejorComida;