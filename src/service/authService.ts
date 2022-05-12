import Swal from 'sweetalert2';
import { reqResApi } from '../api/reqRes';
import { ResLoginApi, ReturnValidateJwt, ResValidateJwt } from '../types/type';


export const login = async ( email: string, password: string ) => {

  try {
    const { data: { name, token } }: ResLoginApi = await reqResApi.post( '/auth/login', { 
      email, password 
    });
    localStorage.setItem( 'token', JSON.stringify( token ) );
    return { auth: true, name };
  } catch ( error: any ) {
    const message = error.response.data.message;
    Swal.fire(
      'Opps',
      message,
      'error'
    );
    console.log( message );
    return { auth: false, name: '' };
  }
}


export const validateAuth = async (): Promise<ReturnValidateJwt> => {
  const token = localStorage.getItem( 'token' );
  if ( token ) {
    try {
      const payload = JSON.parse( token );
      const { data: { name } }: ResValidateJwt = await reqResApi.post( '/auth/validate', {}, {
        headers: {
          authorization: payload
        }
      });
      return { auth: true, name: name };
    } catch ( error: any ) {
      const message = error.response.data.message;
      console.log( message );
      ( message === 'No autorizado' 
        || message === 'El token expiro' ) && localStorage.removeItem( 'token' ) 
      return { auth: false, name: '' };
    }
  } else {
    return { auth: false, name: '' };
  }
}