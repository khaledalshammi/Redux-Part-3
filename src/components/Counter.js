import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment,decrement,incbyamount} from '../redux/counterSlice'
export default function Counter(){
//define which reducer i want
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const HIR = () =>{
        dispatch(increment())
    }
    const HDR = () =>{
        dispatch(decrement())
    }
    const IBV = (vl) =>{
        dispatch(incbyamount(vl))
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={HIR}>Increment</button>
            <button onClick={HDR}>Decrement</button> 
            <br/>
            <button onClick={()=>IBV(7)}>Decrement</button> 
        </div>
    )
}