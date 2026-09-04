import { useEffect, useRef } from 'react'
import {
    MapContainer,
    TileLayer,
    Polygon,
    Marker,
    Circle,
    Popup,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Decorado5 from '../assets/Decorado5.png'
import Decorado8 from '../assets/Decorado8.png'

const ubicacionNegocio = [21.061241326044154, -101.61770767825801]

const areaCobertura = [
    [21.067120, -101.636602],
    [21.058491, -101.620944],
    [21.055705, -101.610751],
    [21.067273, -101.604613],
    [21.076414, -101.630428],
    [21.076473, -101.635101],
    [21.072325, -101.636317],
]
function Mapa() {
    const mapaRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            },
           {
                threshold: 0.2,
            }
        )
        if (mapaRef.current) {
            observer.observe(mapaRef.current)
        }
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={mapaRef} className="seccionMapa">

            <div className="tituloMapa">
                <h2>Conoce nuestra área de cobertura</h2>
                <div className="barraDegradadaDos"></div>
                <div className="decorado5">
                    <img src={Decorado5} alt="Decorado5" />
                </div>
                <div className="decorado8">
                    <img src={Decorado8} alt="Decorado8" />
                </div>
            </div>

            <div className="mapaCobertura">
                <MapContainer
                    center={ubicacionNegocio}
                    zoom={15}
                    style={{
                        width: '100%',
                        height: '450px',
                    }}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Polygon
                        positions={areaCobertura}
                        pathOptions={{
                            color: '#e63946',
                            fillColor: '#e63946',
                            fillOpacity: 0.25,
                            weight: 2,
                        }}
                    />
                    <Marker position={ubicacionNegocio}>
                        <Popup>
                            <strong>Nuestro establecimiento</strong>
                            <br />
                            Aquí puedes encontrarnos.
                        </Popup>
                    </Marker>
                    <Circle
                        center={ubicacionNegocio}
                        radius={10}
                        pathOptions={{
                            color: '#005e19',
                            fillColor: '#005e19',
                            fillOpacity: 0.25,
                            weight: 2,
                        }}
                    />
                </MapContainer>

            </div>
        </div>
    )
}

export default Mapa