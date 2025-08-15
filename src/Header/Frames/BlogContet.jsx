import React from 'react'
import { useForm } from 'react-hook-form'

const BlogContet = () => {
    const {register, handleSubmit} = useForm()

    const submitBlog = (data) =>{
        console.log(data);
        
    }
  return (
    <div className='row'>
        <div className='col-sm-6 col-md-6'>
        <div className='card shadow'>
            <div className='card-body'>
                <form action="" className='form' onSubmit={handleSubmit(submitBlog)}>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>Title:</label>
                        <input type="text" id='title' className='form-control' placeholder='Enter title' {...register("title")} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>Header:</label>
                        <input type="text" id='header' className='form-control' placeholder='Enter' {...register("header")} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>Title:</label>
                        <textarea name="" id="message" className='form-control' {...register("message")} >

                        </textarea>
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-primary'>Creat Blog Post</button>
                    </div>
                </form>

            </div>

        </div>

        </div>

    </div>
  )
}

export default BlogContet