import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios"; invece di richiamare axios, CREO UNA CARTELLA SERVICE CON UN FILE counterService.js
// poi importo quel file al posto di axios, e metto const response = counterService.getRnd();
// il return resta uguale al sottostante

const initialState = {
    contatore: 0,
    loading: false,
    error: ''
};

export const random = createAsyncThunk(    
    'counter/rnd', // nome che appare nel ReduxDevTools del browser

    async () => {
        const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';
        const res = await fetch(url);
        const data = await res.text();

        // const response = await axios.get(url); stessa chiamata con axios, sempre con await
        // return Number(response.data);

        return Number(data);
    }
);


export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        inc: (state) => {
            state.contatore += 1
        },
        dec: (state) => {
            state.contatore -= 1
        },
    },
    extraReducers: {
        [random.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [random.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.contatore = state.contatore + payload;
        },
        [random.rejected]: (state) => {
            state.loading = false;
            state.error = 'Errore ';
        },
    }
});

export const { inc, dec } = counterSlice.actions;

export default counterSlice.reducer;