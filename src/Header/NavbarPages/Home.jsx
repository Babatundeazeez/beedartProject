import React from 'react'
import SearchForm from './SearchForm'
import ProductCatelog from '../Frames/ProductCatelog'
import { Link } from 'react-router-dom'
import BlogContent from '../Frames/BlogContent'
import TestimoniaPage from '../Frames/TestimoniaPage'

const Home = () => {
  return (
    <div className='container-fluid'>
      
      <section className='hero-section d-flex align-items-center text-center text-white image py-5'>
      
       <div className='container'>
       
       <div className='row justify-content-center'>

      <div className='col-12 mb-4'>
      <SearchForm />
      </div>

          <div className=' col-12 col-md-8 col-lg-8'>
            <h1 className='display-5 fw-bold display-md-4 display-lg-3'>
              Eligant Arabic Calligraphy
            </h1>

            <p className='lead mt-3 mb-4 px-2'>
               Framed Digital Gifts for Every Occassion
            </p>
            
           
            <Link to="/product" className='btn btn-secondary px-4 py-2'>Shop Now</Link>

          </div>

        </div>
       </div>

      </section>
      <div>
       <div className='container-fluid mt-5'>
        <h1 className='text-center '>Different Product catalog</h1>
        <ProductCatelog />

       </div>
       <div>
        {/* <BlogContent /> */}
       </div>
       <div className=' container my-5 mt-5'>
          <h3 className='text-center mb-4'>What Our Happy Customers Say About Our Brand</h3>

        <TestimoniaPage />
        </div>
      </div>

    </div>
  )
}

export default Home