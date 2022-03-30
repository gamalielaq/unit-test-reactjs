import PropTypes from 'prop-types'
import React, { useState } from 'react';


const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);


    //handledAdd
    const handledAdd = (e) => {
        // setCounter(counter+1)
        setCounter((c) => c + 1);
    }

    const handledRest = (e) => {
        setCounter((c) => c - 1);
    }

    const handledReset = () => {
        setCounter((c) => value);
    }


    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={(e) => handledAdd(e)}>+1</button>
            <button onClick={(e) => handledReset(e)}>Reset</button>
            <button onClick={(e) => handledRest(e)}>-1</button>
        </>
    )
}

export default CounterApp;

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}