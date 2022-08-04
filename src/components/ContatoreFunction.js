import React from "react";
import { useState } from "react";

export function ContatoreFunction () {

  const [contatore, setContatore] = React.useState(0); // useState restituisce un array di 2 elementi, il primo è il valore dello stato, il secondo è la funzione per cambiarlo
  const inc = () => {setContatore(contatore + 1)};
  const dec = () => {setContatore(contatore - 1)};

  // FUNZIONE CON CHIAMATA ASINCRONA
  const random = () => {

    const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new';

    fetch(url)
        .then(res => {
            console.log(res)          // restituisce una Promise che contiene il testo della risposta che recuperto o come text o come json
            return res.text();        // se inserisco le parentesi graffe per mettere due funzioni devo mettere il return
        })
            .then(data => {         // data è il valore della Promise, è uso un altro then perchè aspetto il valore della Promise
              console.log(data);
              setContatore(contatore + parseInt(data));
            })
      .catch (e => console.log(e)); // se la chiamata fallisce, eseguo questa funzione
  }


  return (
    <div>
        <h1>{contatore}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={random}>Random</button>
    </div>
  );
}