
// App.tsx
export interface AuthContextType {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

// Login.tsx
export type ValueForm = {
  email: string,
  password: string
}

// authService.ts
export interface ReturnValidateJwt {
  auth: boolean
  name: string
}

export interface ResValidateJwt {
  data: {
    name: string
  }
}

export interface ResLoginApi {
  status: number;
  data: {
    token: string;
    message: string;
    name: string;
  }
}

// TextInput.tsx
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name: string
}

// PrivateRoute.tsx
export interface PrivateRouterProps {
  auth: boolean;
 }

// AuthRoute.tsx
export interface AuthRouterProps {
  auth: boolean;
 }