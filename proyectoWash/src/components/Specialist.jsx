import './Specialist.css'
import {especialidades} from "../data/especialidades"

function Specialist() {
    return(
        <section className="specialist">
        <div className="specialist-image">
            <img src="./mixer-hero.jpg" alt="Forraje y ensilaje"/>
        </div>
    <section className="count">
        <div className="specialist-info">
            <h3>- ¿Por que valdo's welding?</h3>
            <h2>Especialistas en equipo de mezclado</h2>
            <p>No vendemos por vender. Entendemos tu carro mezclador y tu molino, te asesoramos y dejamos tu equipo trabajando como debe, año tras año.</p>
        </div>
    
            {especialidades.map(esp =>(
        <section className="count-esp" key={esp.id}>
        
            <div className="specialist-icon">
                <img src={esp.icono} alt={esp.icono}/>
            </div>

            <div className="specialist-count">
                <h4>{esp.titulo}</h4>
                <p>{esp.descripcion}</p>
            </div>
        </section>
        ))}

    </section>

        </section>
    );
}

export default Specialist;