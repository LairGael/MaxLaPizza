import whatsappIcon from '../assets/IconoWhatsApp.png'

function WhatsApp() {
    return (
        <a
            className="botonWhatsApp"
            href="https://wa.me/524772665441"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <img src={whatsappIcon} alt="WhatsApp" />
        </a>
    )
}

export default WhatsApp