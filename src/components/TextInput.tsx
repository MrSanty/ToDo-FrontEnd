import { useField } from "formik";
import { Input } from "../styles/Input";
import { TextInputProps } from "../types/type";


// create interface Props with label string, and props


export const TextInput = ({ label, ...props }: TextInputProps) => {
  const [ field, meta ] = useField( props )
  
  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <Input className="input" { ...field } { ...props } placeholder={ label } />
      { meta.touched && meta.error ? ( <div className="error" >{ meta.error }</div> ) : null }
    </>
  )
}