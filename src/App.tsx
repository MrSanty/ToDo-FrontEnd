import React, { useState } from 'react';
import { MainRouter } from './routers/MainRouter';
import { Container } from './styles/Container';
import { NavBar } from './components/NavBar';
import { AuthContextType } from './types/type';

export const AuthContext = React.createContext<AuthContextType>({
  auth: false,
  setAuth: () => { },
  name: '',
  setName: () => { }
});

export const App = () => {
  const [ auth, setAuth ] = useState(false);
  const [ name, setName ] = useState('');

  return (
    <>
      <NavBar />
      <Container>
        <AuthContext.Provider value={
          {
            auth: auth,
            setAuth,
            name: name,
            setName
          }
        }>
          <MainRouter />
        </AuthContext.Provider>
      </Container>
    </>
  );
};