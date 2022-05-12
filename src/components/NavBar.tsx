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
        <H1 isNav={ true }  ><Link to="/">Todo List</Link></H1>
        
        <Links>
          {
            !auth && (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
              </>
            )
          }
          {
            ( auth ) && (
              <>
                <h2>{ name }</h2>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/list">List</NavLink>
                <NavLink to="/logout">Logout</NavLink>
              </>
            )
          }
        </Links>
      </Nav>
    </> 
  )
}