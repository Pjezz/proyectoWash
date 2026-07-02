// Set de íconos SVG livianos, sin dependencias externas.
// stroke="currentColor" para heredar el color desde el CSS del padre.

function IconWrench(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
             strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
        </svg>
    );
}

function IconTag(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
             strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M20.6 12.6 12 21.2 2.8 12A2 2 0 0 1 2 10.5V4a2 2 0 0 1 2-2h6.5c.5 0 1 .2 1.4.6l8.7 8.7a2 2 0 0 1 0 2.8Z" />
            <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
        </svg>
    );
}

function IconRuler(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
             strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-45 12 12)" />
            <path d="m8.5 14.5 1.5-1.5M11 17l1.5-1.5M13.5 12l1.5-1.5" />
        </svg>
    );
}

function IconShieldCheck(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
             strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 3 4.5 6v6c0 5 3.2 8.5 7.5 9 4.3-.5 7.5-4 7.5-9V6L12 3Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

const ICONS = {
    wrench: IconWrench,
    tag: IconTag,
    ruler: IconRuler,
    shield: IconShieldCheck,
};

// name: una de las keys de ICONS. Si no existe, usa una llave inglesa por default.
function Icon({ name, ...props }) {
    const Cmp = ICONS[name] || IconWrench;
    return <Cmp {...props} />;
}

export default Icon;