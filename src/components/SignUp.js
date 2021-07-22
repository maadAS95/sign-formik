import React  from 'react';
import {Formik} from 'formik';
import TextField from './TextField'
import * as Yup from 'yup';

function SignUp (){
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    const validate=Yup.object({
        firstname: Yup.string()
       .max(12,'first name must be 12 characters at max')
       .required('Required'),

       lastname: Yup.string()
       .max(15,'last name must be 15 characters at max')
       .required('Required'),
        
       phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
       .required('Required'),

       email: Yup.string()
       .email('Email is invalid')
       .required('Email is Required'),

       password: Yup.string()
       .min(8,'Password must be at least 8 characters')
       .required('Password is Required'),

    })
    return(
        <div>
            <Formik 
            initialValues={{
                firstname : "",
                lastname : "",
                phone : "",
                email : "",
                password : ""
                }}
            validationSchema={validate}  >
            
                  
            
            {({
                 errors,
                touched
            }) =>{
                return(
                    <form >
                        <h2 className={"text-center"}>Sign up</h2>
                        <TextField
                          name={"firstname"}
                          placeholder={"First Name"}
                          label={"First Name"}
                        />
                        
                        <TextField
                          name={"lastname"}
                          placeholder={"Last Name"}
                          label={"Last Name"}
                        />

                  
                       <TextField
                          name={"phone"}
                          placeholder={"Phone"}
                          label={"Phone"}
                        />

                        <TextField
                          name={"email"}
                          placeholder={"Email"}
                          label={"Email"}
                        />

                        <TextField
                          name={"password"}
                          type={"password"}
                          placeholder={"password"}
                          label={"Password"}

                        />

                        <div >
                         <button className="btn btn-primary" type="submit">
                           Send
                         </button>
                        </div>
                    </form>
                )
            }}
            </Formik>
        </div>
    )
}

export default SignUp;