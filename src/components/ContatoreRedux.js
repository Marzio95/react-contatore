import { useSelector, useDispatch } from "react-redux";
import { inc } from "../slices/counterSlice"; 

export function ContatoreRedux() {

    const contatore = useSelector(state => state.counter.contatore) // counter è il nome del reducer in store.js

    const dispatch = useDispatch();

    return (
        <div>
            <h2>ContatoreRedux</h2>
            <h1>{contatore}</h1>
            <button onClick={ () => dispatch( inc() ) }>+</button>
            {/* <button onClick={dec}>-</button>
            <button onClick={random}>Random</button> */}
        </div>
    )
}