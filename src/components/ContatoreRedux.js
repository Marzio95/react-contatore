import { useSelector, useDispatch } from "react-redux";
import { inc, dec, random } from "../slices/counterSlice"; 

export function ContatoreRedux() {

    const contatore = useSelector(state => state.counter.contatore) // counter è il nome del reducer in store.js

    const dispatch = useDispatch();

    return (
        <div>
            <h2>ContatoreRedux</h2>
            <h1>{contatore}</h1>
            <button onClick={ () => dispatch( inc() ) }>+</button>
            <button onClick={ () => dispatch( dec() ) }>-</button>
            <button onClick={ () => dispatch( random() ) }>Random</button>
        </div>
    )
}