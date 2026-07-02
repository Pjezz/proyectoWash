import './Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <img src="/valdos-logo.png" alt="Valdo's Welding logo" className="footer-logo" />
                    <p>
                        Reparación, construcción y refacciones para carros mezcladores
                        y molinos forrajeros de todas las marcas.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Refacciones</a></li>
                        <li><a href="#">Marcas</a></li>
                        <li><a href="#">Trabajos</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="#">WhatsApp</a></li>
                        <li><a href="#">Teléfono</a></li>
                        <li><a href="#">Correo</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Valdo's Welding</h4>
                    <ul className="footer-badges">
                        <li>8+ marcas que atendemos</li>
                        <li>850+ equipos reparados</li>
                        <li>100% refacciones a medida</li>
                        <li>Garantía por escrito</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Valdo's Welding. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;