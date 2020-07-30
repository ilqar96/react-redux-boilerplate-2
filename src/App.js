import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from './actions';

function App() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    const increaseCount = () => {
        dispatch(increment(2))
    }

    const decreaseCount = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <h1>{counter}</h1>
        </div>
    );
}

export default App;
