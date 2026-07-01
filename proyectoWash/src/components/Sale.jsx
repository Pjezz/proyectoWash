import './Sale.css';
import {products} from '../data/products';

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
            
            <section className="shop">
                {products.map(producto =>(
                    
                <div className="card" key={producto.id}>
                    <div className="img-card">
                        <img src={producto.imagen} alt={producto.titulo}></img>
                    </div>
                    <div className="info-card">
                        <h3>{producto.categoria}</h3>
                        <h2>{producto.titulo}</h2>
                        <p>{producto.descripcion}</p>

                        <div className="caracteristics">
                            {producto.tags.map(tag =>(
                                <p key={tag}> {tag} </p>
                            ))}
                        </div>

                        <div className="separador-card"></div>
                        <div className="price">
                            <p className="price-p">{producto.etiquetaPrecio}</p>
                            <h3 className="price-h3">{producto.precio}</h3>
                            <button className="price-button">{producto.boton}</button>
                        </div>
                    </div>
                </div>
                ))}
                
            </section>

            <div className="alert">
                <div className="noti">
                    <p>¿No ves la refacción que buscas? Fabricamos gusanos, navajas, bandas y piezas a medida. 
                        Mándanos la marca y modelo de tu carro mezclador o molino y lo cotizamos.</p>
            </div>
                </div>
        </section>
    );
}

export default Sale;