import React from 'react'
import { useForm } from 'react-hook-form';


const SearchForm = () => {
    const {register, handleSubmit} = useForm()
    

    const submitForm = (data) =>{
        console.log(data);
        
    }
  return (
    <form action="" className='d-flex flex-column flex-md-row w-100 w-md-75 w-lg-50 mt-0 ' onSubmit={handleSubmit(submitForm)}>
       <div className='mb-2 mb-md-0 me-md-2 flex-grow-1'>

       <input className='form-control ' type="text" name="" id="name" placeholder='Search products, brand and categories here' {...register("name")} />
       </div>
        <button className='btn btn-success  w-md-auto'>search</button>
    </form>
  )
}

export default SearchForm