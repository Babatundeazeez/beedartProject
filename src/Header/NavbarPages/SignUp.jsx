import React from 'react'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const {register, handleSubmit} = useForm()

  const submitForm = (data) =>{
    console.log(data);
    
  }
  return (
    <div>
      <div className='container'>
      <h4 className='mt-5'>Welcome to SignUp page</h4>
      <form action="" className='form-control w-50 border p-4' onClick={handleSubmit(submitForm)}>
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
          <input className='form-control mt-1' type="name" name="" id="address" placeholder='Enter your email address' {...register('register')} />
        </div>
        <div className='mt-1'>
          <label htmlFor="name">Email:</label>
          <input className='form-control mt-1' type="email" name="" id="email" placeholder='Enter your email address' {...register('email')} />
        </div>
        <div className='mt-1'>
          <label htmlFor="name">Password:</label>
          <input className='form-control mt-1' type="password" name="" id="password" placeholder='Enter your email password' {...register('password')} />
        </div>
        <button className='btn btn-primary mt-3'>Sign up</button>
      </form>

      </div>
        
    </div>
  )
}

export default SignUp