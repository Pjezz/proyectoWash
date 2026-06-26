import "./References.css";

function References() {
    return (
        <section className="references">
            <div className="header">
                <h3>━━Nuestro Trabajo</h3>
                <h1>Trabajos y referencias</h1>
                <p>Carros mezcladores, molinos y refacciones.</p>
            </div>
            <div className="pill-container1">
                <div className="pill1">Todos</div>
                <div className="pill1">Carros mezcladores</div>
                <div className="pill1">Refacciones</div>
                <div className="pill1">En taller</div>
                <div className="pill1">En campo</div>
            </div>
            <div className="collage-container">
                <div className="img-container grande"><img src="./mixer-hero.jpg" /></div> {/* A */}
                <div className="img-container vertical"><img src="./mixer-hero.jpg" /></div> {/* B */}
                <div className="img-container"><img src="./mixer-hero.jpg" /></div>        {/* C */}
                <div className="img-container horizontal"><img src="./mixer-hero.jpg" /></div> {/* D */}
                <div className="img-container vertical"><img src="./mixer-hero.jpg" /></div> {/* E */}
                <div className="img-container pequeno"><img src="./mixer-hero.jpg" /></div>        {/* F */}
                <div className="img-container"><img src="./mixer-hero.jpg" /></div>        {/* G */}
                <div className="img-container"><img src="./mixer-hero.jpg" /></div>        {/* H */}
            </div>
        </section>
    );
}

export default References;