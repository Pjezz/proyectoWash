import './NavBar.css'


function NavBar() {
    return (
            
            <nav className="NavBar">
                
                <img src="./valdos-logo.png" alt="logo" className="logo"></img>
                <ul>
                    <li><a href= "#">Servicios</a></li>
                    <li><a href= "#">Refacciones</a></li>
                    <li><a href= "#">Marcas</a></li>
                    <li><a href= "#">Trabajos</a></li>
                    <li><a href= "#">Nosotros</a></li>
                </ul>
                <div className="boton_aux">
                    <li><button>Ver Trabajos</button></li>
                    <li><button><img src="./franccescoVirgolini.png" alt="carro_meado" className="car"></img></button></li>
                    <li><button className="lastBottom">Cotizar</button></li>
                </div>
            </nav>
            
            
    );
}

export default NavBar;