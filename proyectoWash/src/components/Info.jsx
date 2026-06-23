import './Info.css';
function Info() {
    return(
        <div className="hero">
        <section className="barra">
            <div className="info">
                <h2 className="local">- Valdo's Welding · Carros mezcladores & molinos</h2>
                <h1>
                    <span>Tu carro mezclador,</span>
                    <span className="third">Como nuevo</span> 
                </h1>
                <p>
                    <span>Reparación, construcción y refacciones para carros mezcladores y</span> 
                    <span>molinos de todas las marcas. Gusanos helicoidales, navajas de</span> 
                    <span>tungsteno, tomas de fuerza, planetarios y cajas reductoras.</span> 
                    
                </p>
                <div className="info-button">
                <button className="date">Solicitar Cotizacion</button>
                <button className="works">Ver Refacciones →</button>
                </div>

                <div className="separador"></div>

                <div className ="info-container">
                    <div className="info-2">
                        <h3 className="object">Todas Las Marcas</h3>
                        <p className="p-object">Trioliet, Rotomix, Kirbymex…</p>
                    </div>
                    <div className="info-2">
                        <h3 className="object">Refacciones a medida</h3>
                        <p className="p-object">Gusanos, Navajas, Planetarios.</p>
                    </div>
                    <div className="info-2">
                        <h3 className="object">Trabajo Garantizado</h3>
                        <p className="p-object">Lo Respaldamos Por Escrito.</p>
                    </div>
                </div>

            </div>
            </section>
        </div>

    );
}

export default Info;