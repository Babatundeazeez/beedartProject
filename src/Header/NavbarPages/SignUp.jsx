import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import {useNavigate} from 'react-router-dom'

const SignUpSchema = yup.object({
  email : yup.string().email("Enter a valid email address").required("Email is required"),
  name : yup.string().required("Name is required"),
  password : yup.string().required("Password is required").min(6, "Password must be atleast six in character")
})



const SignUp = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, reset, formState : {errors}} = useForm({
    resolver : yupResolver(SignUpSchema)
  })


  const userUrl = import.meta.env.VITE_BASE_URL

  const submitForm = async(data) =>{
    console.log(data);

    try {
      const res = await fetch(`${userUrl}/auth/signUp`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      const display = await res.json()
      console.log(display);
      
      if (res.ok){
        alert("sign Up successfully, please check your email for verification")
        reset()
        navigate("/signIn")
      }
      else{
        alert(display.message || "Sign Up Failed")

      }

      
    } catch (error) {
      console.log(error, "Network Error");
     
    }
    
  }
  




  return (
    <div>
      <div className='container my-5'>
      
      <div className='row justify-content-center' style={{marginTop : "100px"}}>
        <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
        <h4 className='text-center mb-4'>Welcome to SignUp page</h4>

        <form action="" className='form-control bg-light p-4' onSubmit={handleSubmit(submitForm)}>

        <p className='d-flex justify-content-center'>Kindly sign up.......</p>

        <div className='mb-3'>
          <label htmlFor="name" className='form-label'>First Name:</label>
          <input className='form-control mt-1' type="text" name="" id="name" placeholder='Enter your name' {...register('name')} /> 
        </div>

       

        <div className='mb-3'>
          <label htmlFor="name" className='form-label'>Middle Name:</label>
          <input className='form-control' type="text" name="" id="Mname" placeholder='Enter your middle name' {...register('Mname')}/>
        </div>

        <div className='mb-3'>
          <label htmlFor="name" className='form-label'>Last Name:</label>
          <input className='form-control' type="text" name="" id="Lname" placeholder='Enter your last name' {...register('Lname')} />
        </div>
        
        <div className='mb-3'>
          <label htmlFor="name" className='form-label'>Address:</label>
          <input className='form-control' type="name" id="address" placeholder='Enter your email address' {...register('address')} />
        </div>

        <div className='mb-3'>
          <label htmlFor="name" className='form-label'>Email:</label>
          <input className='form-control' type="email" name="" id="email" placeholder='Enter your email address' {...register('email')} />
          <p style={{color: "red"}}>{errors.email && errors.email.message}</p>
        </div>

        <div className='mb-3'>
          <label htmlFor="name" className='form-label'>Password:</label>
          <input className='form-control' type="password" name="" id="password" placeholder='Enter your email password' {...register('password')} />
          {/* <p style={{color: "red"}}>{errors.password && errors.password.message}</p> */}
        </div>

        <button className='btn btn-primary w-100'>Sign up</button>
      </form>
        </div>
      </div>

     

      </div>
        
    </div>
  )
}

export default SignUp