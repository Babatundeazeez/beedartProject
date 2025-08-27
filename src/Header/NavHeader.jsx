import React, { useContext } from 'react'
import { authContext } from './Frames/AuthContext'
import { Link } from 'react-router-dom'

const NavHeader = () => {
    const {cartProduct} = useContext(authContext)

    const handleCloseMenu = () =>{
      const navCollapse = document.querySelector(".navbar-collapse");
      if(navCollapse && navCollapse.classList.contains("show")){
        new window.bootstrap.Collapse(navCollapse).hide()
      } 
      window.scroll(0, 0)
    }

  return (
    <nav className='ad navbar navbar-expand-lg p-3 navbar-dark bg-dark fixed-top shadow-sm '>
        
       <div className='container-fluid flex-wrap '>

        {/* Brand + Tagline */}
      <div className=' d-flex flex-column align-items-start'>
        <Link className='navbar-brand fw-bold fs-4 mb-0' to="/" onClick={handleCloseMenu}>
        BeedahArts
        </Link>
     

      <small className='text-info fst-italic'>
        Elegant digital Arabic Caligraphy - Framed for Every Occasion
      </small>
      </div>
      {/* cart button for mobile */}
      <Link to="/cartPage" className='btn btn-outline-light d-lg-none ms-2' onClick={handleCloseMenu}>
        Cart ({cartProduct.length})
        </Link>
        {/* Toggle button */}

       <button type='button' className='navbar-toggler ms-2' data-bs-toggle="collapse" data-bs-target ='#demo' >
        <i className='fa fa-align-justify'></i>
       </button>

       {/* Menu Item */}
        <div className='collapse navbar-collapse ' id='demo'>

            <ul className='navbar-nav fw-bold ms-auto text-center'>
                <li className='nav-item'>
                    <Link className='nav-link text-white' to="/" onClick={handleCloseMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                <Link className='nav-link text-white' to="/product" onClick={handleCloseMenu}>Product Page</Link>
                </li>
                <li className='nav-item'>
                <Link className='nav-link text-white' to="/orderPage" onClick={handleCloseMenu}>Customer Order Page</Link>
                     
                </li>
                <li className='nav-item'>
                    <Link className='nav-link text-white' to="/aboutUs" onClick={handleCloseMenu}> About us</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link text-white' to="/blogs" onClick={handleCloseMenu}> Blogs Page</Link>
                </li>
                
               
                <li className='nav-item'>
                    <Link className='nav-link text-white' to="/contact" onClick={handleCloseMenu}> Contact Us</Link>
                </li>
               
               
                <li className='nav-item dropdown'>
                    
                     <Link className='nav-link text-white dropdown-toggle' to="#"
                     id='dropdown'
                     role='button'
                     data-bs-toggle = "dropdown"
                     aria-expanded = "false"
                     > DashBoard</Link>

                     <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='dropdown'>
                        <li><Link className='dropdown-item' to="/signIn" onClick={handleCloseMenu}> Sign In</Link></li>
                        <li><Link className='dropdown-item' to="/signUp" onClick={handleCloseMenu}> Sign Up</Link> </li>
                        <li><Link className='dropdown-item' to="/admin" onClick={handleCloseMenu}> Admin Page</Link></li>
                        <li><Link className='dropdown-item' to="/orderHistory" onClick={handleCloseMenu}> Order Page</Link></li>

                     </ul>
                </li>
              
                

            </ul>
            {/* cart Desktop */}
            <Link to="/cartPage" className='btn btn-outline-light ms-lg-3 mt-3 mt-lg-0  ' onClick={handleCloseMenu}>
                     Cart ({cartProduct.length})
             </Link>

            </div>
           

       </div>

       

    </nav>
  )
}

export default NavHeader