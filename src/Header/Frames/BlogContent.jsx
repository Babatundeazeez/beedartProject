import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from "react-quill-new"

import "react-quill-new/dist/quill.snow.css";

const BlogContent = () => {
    const {register, handleSubmit, reset} = useForm()
    const [content, setContent] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const modules = {
        toolbar: [
            [{ header: [1,2,3, false]}],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered"}, {list: "bullet"}],
            ["link", "image"],
            ["clean"]
        ],
    };

    const submitBlog = async(data) =>{
       
        try {
            const BlogURL = import.meta.env.VITE_BASE_URL
            setIsLoading(true)
            const formData = new FormData();
            formData.append("image", data.image[0] ),
            formData.append("title", data.title),
            formData.append("header", data.header),
            formData.append("content", content)

           // const token = localStorage.getItem("accessToken")
           
            const res = await axios.post(`${BlogURL}/blog`, formData, {
                headers: {
                   // Authorization : `Bearer ${token}`,
                    "Content-Type" : "multipart/form-data"
                }
            })
            
            alert(`Blog Post Created successfully`)
            console.log(res.data);

            reset()
            setContent("")

           


            
        } catch (error) {
            console.log(error);
            console.log(error, "failed to upload blog post");
            alert("Failed to create blog post")
            
        }
        finally{
            setIsLoading(false)
        }
        
        
    }

  return (
    <div className='container about-content' style={{marginTop : "0px"}}>
        <h3>Create New Blog Post</h3>
       <div className='col-ms-6 col-md-6 '>
        <div className='card shadow'>
            <div className='card-body'>

                <form action="" className='form' onSubmit={handleSubmit(submitBlog)}>
                    <div className='mb-3'>
                        <label htmlFor="img" className='form-label'>Image: </label>
                        <input type="file" className='form-control' id="image" {...register("image", {required: true})} />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>TiTle: </label>
                        <input type="text" className='form-control' id='title' placeholder='Enter title' {...register("title", {required: true})} />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="topic" className='form-label'>Topic: </label>
                        <input type="text" className='form-control' id='header' placeholder='Enter topic' {...register("header", {required: true})} />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="content" className='form-label'>Content: </label>
                        
                         <ReactQuill id='content' value={content} onChange={setContent} modules={modules} theme='snow' style={{height : "200px", marginBottom : "50px"}} />

                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-primary' disabled={isLoading}>{isLoading ? "Create..." : "Create Blog"}</button>
                    </div>
                </form>
            

            </div>

        </div>

       </div>

    </div>
  )
}

export default BlogContent