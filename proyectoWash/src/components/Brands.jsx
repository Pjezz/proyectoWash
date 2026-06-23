import './Brands.css';
function Brands() {
    return (
        <section className="brands">
             <span> ━━Trabajamos todas las marcas</span>
             <p>
                <span> Servicio y refacciones para carros mezcladores y molinos principales </span>
                <span>marcas del mercado</span>
             </p>
            <div className="pill-container">
                <p>
                    <div className="pill"><span className="rombo">◆</span>TRIOLET</div>
                    <div className="pill"><span className="rombo">◆</span> ROTOMIX</div>
                    <div className="pill"><span className="rombo">◆</span>KIRBYMEX</div>
                    <div className="pill"><span className="rombo">◆</span>TORMEX</div>
                    <div className="pill"><span className="rombo">◆</span>SUPER STAR</div>
                    <div className="pill"><span className="rombo">◆</span>HAYBUSTER</div>
                    <div className="pill"><span className="rombo">◆</span>FARMHAND</div>
                </p>
                <p>
                    <div className="pill"><span className="rombo">◆</span>JONES MFG</div>
                </p>
             </div>

        </section>
    );
}

export default Brands;
