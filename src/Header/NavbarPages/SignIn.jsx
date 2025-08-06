import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"

const signInSchema = yup.object({
  email : yup.string().email("Enter a valid email address").required("email is required"),
  password : yup.string().min(6,"Password must be at least 6 characters")
})




const SignIn = () => {
  const {register, handleSubmit, reset, formState : {errors}} = useForm({
    resolver : yupResolver(signInSchema)
  })

  const navigate = useNavigate()
  const userUrl = import.meta.env.VITE_UserAuthURL
  const submitForm = async(data) =>{
  //console.log(data);

  try {
    const res = await fetch(`${userUrl}/signIn`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    })
    /////////
    const responseData = await res.json()
    const {accessToken, status, user } = responseData

    if (status === "success"){
      alert('sign in successfully')
      reset()
      
      localStorage.setItem("token", accessToken);
      localStorage.setItem("userId", user._id);
      navigate('/product')

    }else{
      alert("sign in failed")
    }

    
  } catch (error) {
    console.error("Error during sign in:", error);
    alert("An error occurred during sign in");
  }


  }
  return (
    <div className='container'>

      <div className='row' style={{marginTop : "120px"}}>
          <h4>Sign in</h4>
        <form action="" className='form-control w-50 p-4' onSubmit={handleSubmit(submitForm)}>

          <div>
            <label htmlFor="name">Email: </label>
            <input type="email" className='form-control' id='email' placeholder='enter your email address' {...register('email')} />
          </div>
          <div>
            <label htmlFor="pasword">Password: </label>
            <input type="password" className='form-control' id="password" placeholder='Enter your password here' {...register('password')} />
          </div>
          <button className='btn btn-primary'>Sign In</button>
        </form>

      </div>
    </div>
  )
}

export default SignIn