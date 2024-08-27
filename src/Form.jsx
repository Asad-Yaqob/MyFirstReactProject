import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data) => {
     console.log(data);
    }
  return (
    <>
    <h2>My Form</h2>
    <form onClick={handleSubmit(onSubmit)} >
        <input type="text" {...register('name',
           {required: 'Please enter a name...'} 
        )} /> <br /> {errors.name && <p>{errors.name.message}</p>} <br />
        <input type="email" {...register('email',
            {required: 'Please enter email...', 
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^/s@]+$/,
                    message: 'Invalid Email Address'
                }
            }
        )} /> <br /> {errors.email && <p>{errors.email.message}</p>} <br />
        <input type="passwrod" {...register('password',
            {
                required: 'Please enter password...',
                minLength:{
                    value: 6,
                    message: 'Password must be greater than 6 letters..'
                }
            }
        )} /> <br /> {errors.password && <p>{errors.password.message}</p>} <br />
        <button type='submit' >Submit</button>
    </form>
    </>
  )
}

export default Form