import { H1 } from "../styles/H1";
import { useContext } from 'react';
import { AuthContext } from '../App';

export const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <>
      <H1>Hola</H1>
      {
        ( name ) && <p>Bienvenido {name}</p>
      }
    </>
  )
}
