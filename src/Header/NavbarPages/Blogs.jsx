import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const Blogs = () => {
  const [blogContent, setBlogContent] = useState()
  const [isBlogLoading, setIsBlogLoading] = useState(false)

  const blogPages = async() =>{
    const blogURL = import.meta.env.VITE_BASE_URL 
    const token = localStorage.getItem("accessToken")
    console.log(token);
    setIsBlogLoading(true)

    try {
      const BlogURL = import.meta.env.VITE_BASE_URL
      const res = await axios.get(`${blogURL}/blog`, {
        headers :{
          Authorization : `Bearer ${token}`
        }
      })
      setBlogContent(res.data.blogPost)
      console.log("Fecth blog post", res.data.blogPost);
      


      
    } catch (error) {
      console.log(error, "Failed to fecth blog post");
      
    }
    finally{
      setIsBlogLoading(false)
    }

  }

  useEffect(()=>{
    blogPages()
  },[])

  return (
    <div>
      <div className='container' style={{marginTop: "130px"}}>
      <h2 className='text-info'>Blogs</h2>
      <p>........................................................................</p>
      <div className='row'>
        {
          isBlogLoading ? (
            <p className='text-center'>Loading Blog Post.....................</p>
          ) : (
            <div className='row'>
              {
                Array.isArray(blogContent) && blogContent.length > 0 ?(
                  blogContent.map((blogs)=> (
                    <div className='col-md-4 mb-4' key={blogs._id}>
                      <div className='card h-100 shadow-sm border-0'>
                       <Link to={`/singleBlog/${blogs._id}`} className='myStyle'> 
                        <img src={blogs.image} alt="blog-img" className='card-img-top' style={{height : "200px", objectFit: "cover"}} />
                        <div className='card-body'>
                          <h5><strong>Title: </strong>{blogs.title}</h5>
                          <h6><strong>Topic: </strong>{blogs.header}</h6>
                          <div className='card-text'>
                            <strong>content: </strong>

                           <div dangerouslySetInnerHTML={{__html: blogs.content.substring(0,200) + "..." }}>
                           {/* {blogs.content.slice(0,20)}... */}
                            </div> 
                            <button className='btn btn-sm btn-outline-primary mt-2'>Read More..</button>
                            </div>

                        </div>
                        <div className='card-footer bg-transparent'>
                          <p className='card-date'><strong>Date: </strong>{new Date(blogs.createdAt).toLocaleDateString("en-US",{year: "numeric",month:"long",day:"numeric"})}</p>

                        </div>
                        </Link>
                        

                      </div>

                    </div>
                  ))
                ) : (
                  <p>No Post</p>
                )
              }

            </div>
          )
        }
      

      </div>

      </div>
    </div>
  )
}

export default Blogs