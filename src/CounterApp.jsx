import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => {
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }

    const handleSubstract = () => setCounter( counter - 1 );

    const handleReset = () => setCounter( value );


   return (
    <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>
        <button className="btn" onClick={ handleAdd }>
            +1
        </button>

        <button className="btn" onClick={ handleSubstract }>
            -1
        </button>

        <button className="btn" onClick={ handleReset }>
            Reset
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
