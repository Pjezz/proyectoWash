import "./References.css"
function References(){
    return(
        <section className="references">
            <div className="collage-container">
                <div className="img-container col-span-2">
                    <div className="overlay">
                        <span className="tag">CARROS MEZCLADORES</span>
                        <h2>Carro mezclador en operación</h2>
                    </div>
                    <img src="./mixer-hero.jpg" alt="Carro mezclador en operación" />
                </div>

                <div className="img-container row-span-2">
                    <div className="overlay center">
                        <h2>Sinfín helicoidal</h2>
                    </div>
                    <img src="./mixer-hero.jpg" alt="Sinfín helicoidal" />
                </div>

                <div className="img-container">
                    <div className="overlay center">
                        <h2>Reparación en taller</h2>
                    </div>
                    <img src="./mixer-hero.jpg" alt="Reparación en taller" />
                </div>

                <div className="img-container">
                    <div className="overlay center">
                        <h2>Transmisión y engranes</h2>
                    </div>
                    <img src="./mixer-hero.jpg" alt="Transmisión y engranes" />
                </div>

                <div className="img-container">
                    <div className="overlay center">
                        <h2>Maquinaria en campo</h2>
                    </div>
                    <img src="./mixer-hero.jpg" alt="Maquinaria en campo" />
                </div>

                <div className="img-container row-span-2">
                    <div className="overlay center">
                        <h2>Banco de trabajo</h2>
                    </div>
                    <img src="./mixer-hero.jpg" alt="Banco de trabajo" />
                </div>

                <div className="img-container">
                    <div className="overlay center">
                        <h2>Maquinado de pieza</h2>
                    </div>
                    <img src="./mixer-hero.jpg" alt="Maquinado de pieza" />
                </div>

                <div className="img-container">
                    <div className="overlay center">
                        <h2>Forraje y ensilaje</h2>
                    </div>
                    <img src="./mixer-hero.jpg" alt="Forraje y ensilaje" />
                </div>
            </div>

        </section>
    );
}

export default References;