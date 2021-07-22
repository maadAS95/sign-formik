import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = (props) => {
  const [field , meta] = useField(props.name);
  return(
      <div className={"wrapper-input"}>
        {props.label && <label htmlFor={props.name} >{props.label}</label>}
        <input 
          className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
        />
        <ErrorMessage name={field.name}/>
      </div>
 )
}

export default TextField;
