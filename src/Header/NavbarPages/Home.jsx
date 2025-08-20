import React from 'react'
import SearchForm from './SearchForm'
import ProductCatelog from '../Frames/ProductCatelog'
import { Link } from 'react-router-dom'
import BlogContent from '../Frames/BlogContent'
import TestimoniaPage from '../Frames/TestimoniaPage'

const Home = () => {
  return (
    <div className='container-fluid' style={{paddingTop : "50px"}}>
      {/* first section.........sticky.............................. */}
     <div className='sticky-search'>
     <div className='container py-2'>
        <div className='row justify-content-center '>
             <div className='col-12 col-md-10 col-lg-8'>
                 <SearchForm />
      
           </div>

        </div>


      </div>
     </div>

      {/* hero section ....................................*/}

      <section className='hero-section d-flex align-items-center text-center text-white image py-5'>
      
       <div className='container'>
       
           <div className='row justify-content-center text-center'>
              <div className=' col-12 col-md-8 '>
                  <h1 className='display-4 fw-bold display-md-4 display-lg-3'>
                  Elegant Arabic Calligraphy
                  </h1>

                   <p className='lead mt-5 mb-4 px-2'>
                      Framed Digital Gifts for Every Occasion
                  </p>
            
           
                  <div className=''>
                  <Link to="/product" className='btn btn-secondary  px-1 py-1'>Shop Now</Link>

                  </div>
             </div>

           </div>
         </div>

      </section>
      {/* hero section ends here..................................... */}


       {/* product section start here..................................... */}
       <div className='container-fluid mt-5'>
        <h1 className='text-center '>Different Product catalog</h1>
             <ProductCatelog />
        </div>

       
        {/* Testimonial start here.......................... */}
       
       <div className=' container my-5 mt-5'>
          <h3 className='text-center mb-4'>
            What Our Happy Customers Say About Our Brand
          </h3>

        <TestimoniaPage />
        </div>
         {/* Testimonial end here.......................... */}
      

    </div>
  )
}

export default Home