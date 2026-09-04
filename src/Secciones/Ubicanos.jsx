import { useEffect, useRef } from "react";

import pizzaFlecha from "../assets/Pizza_Flecha.svg";
import repartidorFondo from "../assets/RepartidorFondo.png";
import fondoSeccion from "../assets/Fondo_Seccion.png";
import iconoTelefono from "../assets/Icono_Telefono.svg";

function Ubicanos() {
    const seccionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.25
            }
        );

        if (seccionRef.current) {
            observer.observe(seccionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    return (
        <>
            <section ref={seccionRef} className="fondoUbicanos">
                <div className="imagenUbicanos">
                    <img src={fondoSeccion} alt="Fondo Seccion" />
                </div>
                <div className="contenedorUbicanos">
                    <div className="ubicanosContenido bloqueIzquierdo">
                        <h5>Ubicanos</h5>
                        <div className="barraUbicanos"></div>
                        <p>Blvd.Timoteo Lozano 5626,</p>
                        <p>Refugio de San Jose, 37548,</p>
                        <p>Leon de los Aldama, Gto.</p>
                        <div className="numeroUbicanos">
                            <img src={iconoTelefono} alt="Icono Telefono" />
                            <p>+52 477 266 5441</p>
                        </div>
                        <a
                            className="botonUbicanos"
                            href="https://www.google.com/maps/search/?api=1&query=Blvd.%20Timoteo%20Lozano%20Ote.%205626%2C%20Refugio%20de%20San%20Jose%2C%2037548%20León%20de%20los%20Aldama%2C%20Gto."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="botonContenido original">
                                <img src={pizzaFlecha} alt="" />
                                <p>Como Llegar</p>
                            </span>

                            <span className="botonContenido nuevo">
                                <img src={pizzaFlecha} alt="" />
                                <p>Como Llegar</p>
                            </span>
                        </a>
                    </div>

                    <div className="ubicanosRepartidor">
                        <img src={repartidorFondo} alt="Repartidor Fondo"/>
                    </div>

                    <div className="ubicanosContenido bloqueDerecho">
                        <h5>Pide a Domicilio</h5>
                        <div className="barraUbicanos"></div>
                        <p>Lunes a Viernes 1:00 PM a 9:30 PM</p>
                        <p>Sabado 1:00 PM a 9:00 PM</p>
                        <p>Domingo 1:00 PM a 8:00 PM</p>
                        <p>Martes Cerramos</p>
                        <div className="numeroUbicanos">
                            <img src={iconoTelefono} alt="Icono Telefono" />
                            <p>+52 477 266 5441</p>
                        </div>
                        <a
                            className="botonUbicanos"
                            href="https://wa.me/524772665441"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="botonContenido original">
                                <img src={pizzaFlecha} alt="" />
                                <p>Contáctanos</p>
                            </span>

                            <span className="botonContenido nuevo">
                                <img src={pizzaFlecha} alt="" />
                                <p>Contáctanos</p>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ubicanos;