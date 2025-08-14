import React from 'react'
import Admin from '../Frames/Admin'

const AboutUs = () => {
  return (
    
         <div className="container" style={{ marginTop: "120px", padding: "20px" }}>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-sm-12">
          <h1 className="mb-4 text-center text-info">About BeedahArt</h1>
          <p className="lead text-justify">
            <strong>BeedahArt</strong> is a creative brand dedicated to bringing the beauty and spirituality of Arabic calligraphy into your home, office, or gift-giving moments. We specialize in <strong>digital Arabic calligraphy frames</strong> and elegant gifts that blend traditional Islamic art with modern design.
          </p>

          <h3 className="mt-5 text-primary">Our Mission</h3>
          <p className='text-justify'>
            At BeedahArt, our mission is to <strong>preserve and promote Islamic culture</strong> through digital art. We aim to provide beautifully crafted pieces that inspire, uplift, and create a meaningful connection between tradition and contemporary living.
          </p>

          <h3 className="mt-5 text-success">What We Offer</h3>
          <ul className='text-justify'>
            <li>🎨 Hand-designed digital Arabic calligraphy artworks</li>
            <li>🖼️ Printable high-resolution Islamic frames</li>
            <li>🎁 Personalized digital gifts for special occasions</li>
            <li>🕌 Artworks suitable for homes, mosques, offices, and events</li>
          </ul>

          <h3 className="mt-5">Why Choose BeedahArt?</h3>
          <p className='text-justify'>
            Every piece at BeedahArt is crafted with **devotion, precision, and cultural integrity**. We combine elegant typography with rich spiritual meaning to deliver products that go beyond decoration — they inspire reflection, peace, and pride in Islamic heritage.
          </p>

          <h3 className="mt-5">Our Values</h3>
          <ul className='text-justify'>
            <li>✨ Excellence in design and craftsmanship</li>
            <li>📿 Deep respect for Islamic art and heritage</li>
            <li>💌 Customer satisfaction and prompt service</li>
          </ul>

          <h3 className="mt-5">Let’s Connect</h3>
          <p>
            Have questions, custom requests, or want to collaborate? Reach out via our <Link to="/contact" className='text-light text-decoration-none'>Contact Us</Link> or connect with us on social media. We’d love to hear from you!
          </p>

          <p className="mt-4 text-center"><em>“Where tradition meets digital elegance.”</em></p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs