import { Link, NavLink } from "react-router-dom";
import { H1 } from "../styles/H1";
import { Links } from "../styles/Links";
import { Nav } from "../styles/Nav";
import { AuthContext } from '../App';
import { useContext } from 'react';


export const NavBar = ( ) => {
  const { auth, name } = useContext(AuthContext);

  return (
    <>
      <Nav >
        <H1 isNav={ true}  ><Link to="/">Todo List</Link></H1>
        <Links>
          <NavLink
            to="/login"
            className={ ({ isActive }) => (isActive) ? "active" : "" }
          >
            Ingresar
          </NavLink>
          <NavLink to="/register">Registrarse</NavLink>
        </Links>
      </Nav>
    </> 
  )
}