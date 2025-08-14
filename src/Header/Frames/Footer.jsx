import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <div className="container-fluid bg-info">
            <div className="row">

                 {/* Brand Info */}
                <div className="col-md-4 mb-3 mt-5">
                    <h5>BeedahArt</h5>
                    <p>
                    We craft premium Arabic calligraphy frames that blend faith, beauty, and elegance.
                    </p>
                </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-3 mt-5">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to="/" className='text-light text-decoration-none'>Home</Link></li>
                        <li><Link to="/product" className='text-light text-decoration-none'>Shop</Link></li>
                        <li><Link to="/aboutUs" className='text-light text-decoration-none'>About Us</Link></li>
                        <li><Link to="/contact" className='text-light text-decoration-none'>Contact</Link></li>
                        
                        </ul>
                    </div>

                        {/* Contact Info */}
                        <div className="col-md-4 mb-3 mt-5">
                            <h5>Contact Us</h5>
                            <p>Email: <Link to="/mailto:support@beedahart.com" className='text-light text-decoration-none'>support@beedahArt.</Link></p>
                            
                            
                            <p>Phone: +234 9031 5782 21</p>
                            <p>Sagamu, Nigeria</p>
                        </div>
                        </div>

                        <hr className="border-light" />
                        
                        {/* Footer Bottom */}
                        <div className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} BeedahArt. All rights reserved.</p>
                        </div>
  </div>



  )
}

export default Footer