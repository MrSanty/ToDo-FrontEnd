import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRouterProps } from '../types/type';



export const PrivateRouter = ( { auth }: PrivateRouterProps ) => {
  return (
    <>
      {
        ( auth ) ? <Outlet /> : <Navigate to='/login' />
      }
    </>
  )
}
