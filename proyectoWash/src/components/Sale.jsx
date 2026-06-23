import './Sale.css';
function Sale(){
    return(
        <section className="sale">
            <div className="info-sale">
                <h2 className="local-sale">-Listo para venta</h2>
                <h3 className="title-sale">
                    <span>Refacciones para</span> 
                    <span>mezcladoras y molinos</span>
                    </h3>
                <p className="description-sale">
                    <span>Refacciones para carros mezcladores y molinos: las de compra inmediata las</span>
                    <span>agregas al carrito y las compras al momento. Las piezas a medida (gusanos,</span>
                    <span>planetarios, reductoras) se cotizan según tu equipo.</span>
                </p>
            </div>
            <div className="info-sale-2">
                    <h4 className="display-green"><span className="nmms">•</span> compra inmediata</h4>
                    <h4>Precio fijo, al carrito!</h4>
                    <h4 className="display-yellow"><span className="nmms">•</span> a medida</h4>
                    <h4>se cotiza!</h4>
            </div>
        </section>
    );
}

export default Sale;