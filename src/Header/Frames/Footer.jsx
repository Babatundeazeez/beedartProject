import React from 'react'

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
                        <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                        <li><a href="/product" className="text-light text-decoration-none">Shop</a></li>
                        <li><a href="/aboutUs" className="text-light text-decoration-none">About Us</a></li>
                        <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                        {/* Contact Info */}
                        <div className="col-md-4 mb-3 mt-5">
                            <h5>Contact Us</h5>
                            <p>Email: <a href="mailto:support@beedahart.com" className="text-light">support@beedahart.com</a></p>
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