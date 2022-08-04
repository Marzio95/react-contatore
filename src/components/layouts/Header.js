import {NavLink} from 'react-router-dom';

export function Header() {
  return (
    <header>
        <h1>Questo è l header</h1>
        <nav>
          <NavLink to="/counter1">Contatore 1 </NavLink> |
          <NavLink to="/counter2"> Contatore 2</NavLink> |
          <NavLink to="/axios"> Axios</NavLink> |
          <NavLink to="/counter3"> Contatore Redux</NavLink> |
        </nav>
    </header>  
  );
}