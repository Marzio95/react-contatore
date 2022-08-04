import React from 'react'; // se importi senza graffe importi il default, con le graffe importi tutto
import Router from 'react-router-dom';
import { Route, Routes, NavLink } from 'react-router-dom';
import {Counter1View} from './views/Counter1View';
import {Counter2View} from './views/Counter2View';
import { Header } from './components/layouts/Header';
import './App.css';
import { AxiosView } from './views/AxiosView';
import { CounterReduxView } from './views/CounterReduxView';

function App() {

  return (
    <div>

      <Header/>
      
      <main>
        Questo è il main dove vengono messi i componenti delle singole rotte
        <br/>
        <input type="text" placeholder="il testo rimane perchè non refresha la pagina"></input>
          <Routes>   {/* ROUTES E' ESSENZIALE ALL ESTERNO DI UNO O PIU' ROUTE */}
            <Route path="counter1" element={ <Counter1View /> } />   {/* element è una attributo che restituisce un componente */}
            <Route path="counter2" element={ <Counter2View /> } />   {/* path è la rotta url che se è presente mi restituisce il componente */}
            <Route path="axios" element={ <AxiosView /> } /> 
            <Route path="counter3" element={ <CounterReduxView /> } />
          </Routes>
        </main>

      <footer>Questo è un footer</footer>
    </div>
  )

}

export default App;
