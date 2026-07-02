import './NavBar.css'
import { useEffect, useRef, useState } from 'react'

function NavBar() {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const currentY = window.scrollY;
            const goingDown = currentY > lastScrollY.current;
            const pasadoElHero = currentY > 80; // no ocultar hasta bajar un poco

            setHidden(goingDown && pasadoElHero);
            lastScrollY.current = currentY;
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`NavBar ${hidden ? 'NavBar--hidden' : ''}`}>

            <img src="/valdos-logo.png" alt="Valdo's Welding" className="logo"></img>
            <ul>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Refacciones</a></li>
                <li><a href="#">Marcas</a></li>
                <li><a href="#">Trabajos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div className="boton_aux">
                <li><button>Ver Trabajos</button></li>
                <li><button><img src="/franccescoVirgolini.png" alt="carrito" className="car"></img></button></li>
                <li><button className="lastBottom">Cotizar</button></li>
            </div>
        </nav>
    );
}

export default NavBar;