import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, subtitulo }) => {
 
    if( !saludo ) {
        throw new Error('El saludo es necesario');
    }
 
    return (
        <>
            <h1>{saludo}</h1>
            {/* <h1> {JSON.stringify(saludo, null, 3)} </h1> */}
            <p>Mi Primera aplicación</p>
        </>
    );
 
}

PrimeraApp.prototypes = {
    saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
};

export default PrimeraApp;