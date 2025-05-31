import React from 'react'
import { useForm } from 'react-hook-form';


const SearchForm = () => {
    const {register, handleSubmit} = useForm()
    

    const submitForm = (data) =>{
        console.log(data);
        
    }
  return (
    <form action="" className='d-flex ' onClick={handleSubmit(submitForm)}>
       <div className='me-2'>
       <input className='form-control ' type="text" name="" id="name" placeholder='Enter your search here' {...register("name")} />
       </div>
        <button className='btn btn-success'>search</button>
    </form>
  )
}

export default SearchForm