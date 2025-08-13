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
      const res = await fetch(`${userUrl}/signUp`, {
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
      

      
    } catch (error) {
      console.log(error, "Network Error");
      
    }
    
  }
  




  return (
    <div>
      <div className='container'>
      <h4 className='mt-5'>Welcome to SignUp page</h4>

      <form action="" style={{marginTop : "100px"}} className='form-control w-50 border p-4' onSubmit={handleSubmit(submitForm)}>
        <p className='d-flex justify-content-center'>Kindly sign up.......</p>

        <div className='mt-3'>
          <label htmlFor="name">First Name:</label>
          <input className='form-control mt-1' type="text" name="" id="name" placeholder='Enter your name' {...register('name')} /> 
        </div>

        <div className='mt-1'>
          <label htmlFor="name">Last Name:</label>
          <input className='form-control mt-1' type="text" name="" id="Lname" placeholder='Enter your last name' {...register('Lname')} />
        </div>

        <div className='mt-1'>
          <label htmlFor="name">Middle Name:</label>
          <input className='form-control mt-1' type="text" name="" id="Mname" placeholder='Enter your middle name' {...register('Mname')}/>
        </div>
        
        <div className='mt-1'>
          <label htmlFor="name">Address:</label>
          <input className='form-control mt-1' type="name" id="address" placeholder='Enter your email address' {...register('address')} />
        </div>

        <div className='mt-1'>
          <label htmlFor="name">Email:</label>
          <input className='form-control mt-1' type="email" name="" id="email" placeholder='Enter your email address' {...register('email')} />
          <p style={{color: "red"}}>{errors.email && errors.email.message}</p>
        </div>

        <div className='mt-1'>
          <label htmlFor="name">Password:</label>
          <input className='form-control mt-1' type="password" name="" id="password" placeholder='Enter your email password' {...register('password')} />
          {/* <p style={{color: "red"}}>{errors.password && errors.password.message}</p> */}
        </div>

        <button className='btn btn-primary mt-3'>Sign up</button>
      </form>

      </div>
        
    </div>
  )
}

export default SignUp