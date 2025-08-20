import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    const [singlePost, setSingleBlog] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()

    
        const SingleBlogURL = import.meta.env.VITE_BASE_URL
      const fetchSingleBlog = async() =>{
        setIsLoading(true)

        try {
         const res = await axios.get(`${SingleBlogURL}/blog/${id}`)
         if(!res){
             throw new Error("Failed to get blog Post")
         }
         setSingleBlog(res.data.singleBlog)
         
        } catch (error) {
         console.log(error);
         
        }
        finally{
            setIsLoading(false)
        }  

      }
    
    useEffect(()=>{
        fetchSingleBlog()
    },[])

  return (
    <div className='container about-content' style={{marginTop : "120px"}}>
        
            {
                isLoading ? (
                    <p>Blog post Loading.....................</p>
                ) : (
                    <div className='mt-5'>
                        {
                            singlePost ? (
                                <div>
                                    {
                                        <div className='row justify-content-center'>
                                            <div className='col-md-10 mb-4'>
                                                <div className='text-center'>
                                                    <h4>{singlePost.title}</h4>
                                                    <p className='card-date'><strong>Date :</strong>{new Date(singlePost.createdAt).toLocaleDateString("en-US", {year : "numeric", month : "long", day : "numeric"})}</p>

                                                </div>
                                                <div className='card border rounded-3 shadow p-5'>
                                                <img src={singlePost.image}
                                                 alt="blogImage"
                                                 style={{height : "300px", objectFit : "cover"}}
                                                 className='card-img-top' />
                                                 <div className='card-body mt-5'>
                                                 <h3 className='card-title'><strong>Title: </strong>{singlePost.title}</h3>
                                                 <h6><strong>Topic: </strong>{singlePost.header}</h6>

                                                 <p className='card-text'>
                                                    <strong>Content :</strong>
                                                    <div dangerouslySetInnerHTML={{__html: singlePost.content}}>

                                                    </div>
                                                    {/* {singlePost.content}  */}
                                                    </p>
                                                 <hr />

                                                 </div>

                                                </div>

                                            </div>

                                        </div>
                                    }
                                </div>

                            ) : (
                                <p>No Blog Post Found</p>
                            )
                        }

                    </div>
                )
            }
        

    </div>
  )
}

export default SingleBlog