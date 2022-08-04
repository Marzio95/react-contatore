import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contatore: 0
};

export const counterSlice = createSlice({
    name: "counter", // questo è il nome che apparirà nel ReduxDevTools del browser
    initialState,
    reducers: {
        inc: (state) => { // state rappresenta lo stato attuale del componente (INITIAL_STATE)
            state.contatore = state.contatore + 1;
        }
    }
});

export const { inc } = counterSlice.actions; // actions è un oggetto che contiene tutte le funzioni per le azioni
                                            // con il destructuring posso passsare un solo parametro dell'oggetto, in questo caso inc

export default counterSlice.reducer;
