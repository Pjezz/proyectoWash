import './Brands.css';
function Brands() {
    return (
        <section className="brands">
            <div class="header-info">
                <h3>━━ Trabajamos todas las marcas</h3>
                <p>Servicio de refacciones para carros mezcladores y molinos de las principales marcas del mercado</p>
            </div> 

            <div className="pill-container">
                <div className="pill"><span className="rombo">◆</span> TRIOLIET</div>
                <div className="pill"><span className="rombo">◆</span> ROTOMIX</div>
                <div className="pill"><span className="rombo">◆</span> KIRBYMEX</div>
                <div className="pill"><span className="rombo">◆</span> TORMEX</div>
                <div className="pill"><span className="rombo">◆</span> SUPER STAR</div>
                <div className="pill"><span className="rombo">◆</span> HAYBUSTER</div>
                <div className="pill"><span className="rombo">◆</span> FARMHAND</div>
                <div className="pill"><span className="rombo">◆</span> JONES MFG</div>
            </div>
        </section>
    );
}

export default Brands;
