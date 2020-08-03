import React from 'react';
import AddPost from "./AddPost";
import Listitem from "./Listitem";
// import {useDispatch, useSelector} from "react-redux";
// import {decrement, increment} from './actions';

function App() {
    // const counter = useSelector(state => state.counter)
    // const dispatch = useDispatch();
    // const increaseCount = () => {
    //     dispatch(increment(2))
    // }
    // const decreaseCount = () => {
    //     dispatch(decrement())
    // }


    return (
        <div className='container'>
            <AddPost/>
            <hr/>
            <Listitem/>
        </div>
    );
}

export default App;
