import { Navigate, Outlet } from 'react-router-dom';
import { AuthRouterProps } from '../types/type';



export const AuthRouter = ( { auth }: AuthRouterProps ) => {
  return (
    <>
      {
        ( !auth ) ? <Outlet /> : <Navigate to='/login' />
      }
    </>
  )
}
