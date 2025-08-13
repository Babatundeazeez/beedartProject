import React from 'react'
import SearchForm from './SearchForm'
import ProductCatelog from '../Frames/ProductCatelog'

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
            
            <a href="/product" className='btn btn-secondary px-4 py-2' target='-blank'>
              Shop Now
            </a>

          </div>

        </div>
       </div>

      </section>
      <div>
       <div className='container-fluid mt-5'>
        <h1 className='text-center '>Different Product catalog</h1>
        <ProductCatelog />

       </div>
       <div className=' container my-5 mt-5'>
          <h3 className='text-center mb-4'>What Our Happy Customers Say About Our Brand</h3>

         <div className='row'>
          {/* first testimony......................... */}
          <div className='col-md-6 mb-6'>
          <div className='card shadow-sm p-4 border-0 h-100'>
            <div className='d-flex align-items-center gap-2 mb-3'>
              <img src="/image/profileImage3.jpg" alt="customer-image" className='rounded-circle me-3' width="60" height="60" />

              <div>
                <h6 className='mb-0'> Azeez Babatunde</h6>
                <small className='text-muted'>Ibadan, Nigeria</small>
              </div>
              <p className='fst-italic'>
              “I ordered a personalized Arabic calligraphy frame from BeedahArt, and it
                 was absolutely beautiful! The quality, design, and delivery were perfect.
                   Highly recommended!”
              </p>
            </div>
                <div className="text-warning fs-5">
                    ★★★★★
                </div>

          </div>

          </div>
          {/* second testimony ................*/}
          <div className='col-md-6 mb-6'>
          <div className='card shadow-sm p-4 border-0 h-100'>
            <div className='d-flex align-items-center gap-2 mb-3'>
              <img src="/image/profileImage3.jpg" alt="customer-image" className='rounded-circle me-3' width="60" height="60" />

              <div>
                <h6 className='mb-0'> Azeez Yussuf</h6>
                <small className='text-muted'>Abuja, Nigeria</small>
              </div>
              <p className='fst-italic'>
              ““The frame I received was exactly what I imagined. Elegant, well-packaged,
              and perfect for gifting. BeedahArt exceeded my expectations.”
              </p>
              

            </div>
            <div className="text-warning fs-5">
                 ★★★★☆
             </div>

          </div>

          </div>
          {/* Third testimony ................*/}
          <div className='col-md-6 mb-6'>
          <div className='card shadow-sm p-4 border-0 h-100'>
            <div className='d-flex align-items-center gap-2 mb-3'>
              <img src="/image/profileImage3.jpg" alt="customer-image" className='rounded-circle me-3' width="60" height="60" />

              <div>
                <h6 className='mb-0'> Olasunkanmi </h6>
                <small className='text-muted'>Lagos, Nigeria</small>
              </div>
              <p className='fst-italic'>
              ““Beautiful craftsmanship and fast delivery. I’ve already ordered two more!
              BeedahArt is now my go-to for special gifts.””
              </p>

            </div>
                 <div className="text-warning fs-5">
                    ★★★★★
                </div>

          </div>

          </div>

         </div>

        </div>
      </div>

    </div>
  )
}

export default Home