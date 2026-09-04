import LogoPizza from '../assets/Logo_Pizzeria.png';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footerLogo">
                    <img src={LogoPizza} alt="Logo de la pizzería" />
                </div>
                <div className="footerTexto">
                    <p>+52 477 266 5441</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;