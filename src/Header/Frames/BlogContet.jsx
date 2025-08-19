import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const BlogContet = () => {
    const {register, handleSubmit} = useForm()

    const submitBlog = async(data) =>{
        console.log(data);
        const formData = new FormData()
        formData.append("image", data.image[0]),
        formData.append("title", data.title),
        formData.append("header", data.header),
        formData.append("content", data.content)

        try {
            const BlogURL = import.meta.env.VITE_BASE_URL
        //    http://localhost:1500/api/blog
           const token = localStorage.getItem("accessToken")
            const res = await axios.post(`${BlogURL}`, formData,{
                headers : {
                    "Content-Type" : "multipart/form-data"
                   // Authorization : `Bearer ${token}`

                }
            })
            console.log(res.data);
           // console.log(token);
            alert("Blog Post Created successfully")
               
        } catch (error) {
            console.log(error);
            console.log(error, "failed to upload blog post");
            alert("Failed to create blog post")
            
        }
        
    }
  return (
    <div className='justify-content-center'>
        <div className='col-ms-6 col-md-6 '>
        <div className='card shadow'>
            <div className='card-body'>
                <form action="" className='form' onSubmit={handleSubmit(submitBlog)}>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>Image: </label>
                        <input type="file" className='form-control' id="image"  {...register("image")}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>Title:</label>
                        <input type="text" id='title' className='form-control' placeholder='Enter title' {...register("title")} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>Topic:</label>
                        <input type="text" id='header' className='form-control' placeholder='Enter' {...register("header")} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>Content:</label>
                        <textarea name="" id="content" className='form-control' {...register("content")} >

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