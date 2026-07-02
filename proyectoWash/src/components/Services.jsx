import './Services.css';
import Icon from './Icons';

const servicios = [
    {
        id: 1,
        icono: 'wrench',
        titulo: 'Reparación y mantenimiento',
        descripcion: 'Diagnóstico, reparación y mantenimiento preventivo de carros mezcladores y molinos forrajeros de todas las marcas.',
    },
    {
        id: 2,
        icono: 'ruler',
        titulo: 'Fabricación a medida',
        descripcion: 'Gusanos helicoidales, navajas de tungsteno, bandas y piezas fabricadas a la medida exacta de tu equipo.',
    },
    {
        id: 3,
        icono: 'shield',
        titulo: 'Soldadura estructural',
        descripcion: 'Fabricación y reparación de naves, establos, salas de ordeña e implementos agropecuarios en acero.',
    },
    {
        id: 4,
        icono: 'tag',
        titulo: 'Refacciones originales',
        descripcion: 'Planetarios, cajas reductoras y refacciones para las principales marcas del mercado.',
    },
];

function Services() {
    return (
        <section className="services">
            <p className="services-eyebrow">— Nuestros servicios</p>
            <h2 className="services-title">Todo lo que tu equipo necesita, en un solo lugar.</h2>

            <div className="services-grid">
                {servicios.map((s) => (
                    <div className="service-card" key={s.id}>
                        <div className="service-icon">
                            <Icon name={s.icono} />
                        </div>
                        <h3>{s.titulo}</h3>
                        <p>{s.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;