import { Formik, Form, FormikErrors } from 'formik';
import { Link, useNavigate, } from 'react-router-dom';
import { TextInput } from '../components/TextInput';
import { Button } from '../styles/Button';
import { LoginForm } from '../styles/LoginForm';
import { login } from '../service/authService';
import { useContext } from 'react';
import { AuthContext } from '../App';
import { ValueForm } from '../types/type';



const validate = ({ email, password }: ValueForm): FormikErrors<ValueForm> => {
  const errors: FormikErrors<ValueForm> = {};
  (!email)
    ? (errors.email = 'Requerido')
    : (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
    && (errors.email = 'Email invalido');

  (!password)
    ? (errors.password = 'Requerido')
    : (password.length < 8)
    && (errors.password = 'La contraseña debe tener almenos 8 caracteres');

  return errors;
}

export const Login = () => {
  const { setAuth, setName } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async ( { email, password }: ValueForm ) => {
    const { auth, name } = await login(email, password);
    if ( auth ) {
      setAuth( auth );
      setName( name );
    }
  }

  return (
    <>
      <LoginForm>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            <h2>Ingrese aqui</h2>

            <TextInput name="email" label="Correo" />
            <TextInput name="password" label="Contraseña" type="password" />
            <div className="boton">
              <Button type="submit">Ingresar</Button>
              <Link to="/">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </Form>
        </Formik>
      </LoginForm>
    </>
  )
}
