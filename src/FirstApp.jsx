import PropTypes from 'prop-types';

// Esto esta encapsulado en el componente para no re-renderizarlo todo el tiempo.
const newMessage = 'Hello, React Vite!!!';
const objNewMEssage = {
  message: 'Hello, React Vite!!!',
  title: 'Ivan Nandez Parra'
};

// normalmente no se agregan las funcionar directemente en el archivo principal
const getSumResult = function(a, b) {
  return a + b;
}

export const FirstApp = ({ 
  title = 'Ivan Nandez Parra',
  subtitle = 'Esto es un subtitulo',
  number = 2008
 }) => {

  return (
    <>
      <h1>
        { objNewMEssage.title }
      </h1>

      <h2>
        { title }
      </h2>
      <h3>
        { subtitle }
      </h3>

      <p>{ newMessage }</p>
      <p>{ number }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  number: PropTypes.number
}
