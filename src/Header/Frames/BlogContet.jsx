import React from 'react'

const BlogContet = () => {
  return (
    <div className='row'>
        <div className='card shadow'>
            <div className='card-body'>
                <form action="" className='form'>
                    <div>
                        <label htmlFor="" className='form-label'>Title:</label>
                        <input type="text" className='form-control' placeholder='Enter title' />
                    </div>
                    <div>
                        <label htmlFor="" className='form-label'>Header:</label>
                        <input type="text" className='form-control' placeholder='Enter' />
                    </div>
                    <div>
                        <label htmlFor="" className='form-label'>Title:</label>
                        <textarea name="" id="message" className='form-control' >

                        </textarea>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Creat Blog Post</button>
                    </div>
                </form>

            </div>

        </div>

    </div>
  )
}

export default BlogContet