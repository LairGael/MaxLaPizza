import { useEffect, useRef } from 'react'
import L from 'leaflet'
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
import markerIcon from '../assets/marker-icon.png'
import markerIcon2x from '../assets/marker-icon-2x.png'
import markerShadow from '../assets/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})

const ubicacionNegocio = [21.061241326044154, -101.61770767825801]

const areaCobertura = [
    [21.076481509527408, -101.65184577428761],
    [21.058491, -101.620944],
    [21.055705, -101.610751],
    [21.067273, -101.604613],
    [21.076288, -101.630409],
    [21.076993, -101.636806],
    [21.086773, -101.647383],
    [21.081767, -101.650194],
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