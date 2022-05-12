import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { List } from '../pages/List';
import { AuthContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import { validateAuth } from '../service/authService';
import { PrivateRouter } from './PrivateRouter';
import { Spinner } from '../styles/spinner';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const MainRouter = () => {
  const { auth, setAuth, setName } = useContext(AuthContext);
  const [ cheking, setCheking ] = useState(true);

  useEffect( () => {
    validateAuth()
    .then( res => {
      setAuth(res.auth);
      setName(res.name);
      setCheking(false);
    });
  }, []);

  
  if(cheking) {
    return (
      <Spinner />
    )
  }

  return (
    <Routes>
      {/* Public Routers */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={ ( !auth ) ? <Login /> : <Home /> } />
      <Route path='/signup' element={ ( !auth ) ? <Register /> : <Home /> } />

      {/* Private Routers */}
      <Route path="/" element={<PrivateRouter auth={auth} />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="list" element={<List />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>  Not found</div>} />
    </Routes>
  )
}
