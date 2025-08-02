import React, { useContext } from 'react'
import SearchForm from './NavbarPages/SearchForm'
import { authContext } from './Frames/AuthContext'
import { Link } from 'react-router-dom'

const NavHeader = () => {
    const {cartProduct} = useContext(authContext)
  return (
    <nav className='ad navbar navbar-expand-lg p-3 navbar-light p-1 mb-1 fixed-top '>
       <div className='container-fluid d-flex justify-content-between align-items-center'>

      <div className='logo-container d-flex flex-column'>
      <a className='navbar-brand text- mb-0 ' href="/">
      BeedahArt
      </a>

      <small className='tag-line text-info fst-italic'>
        Elegant digital Arabic Caligraphy - Framed for Every Occasion
      </small>
      </div>

       <button type='button' className='navbar-toggler' data-bs-toggle="collapse" data-bs-target ='#demo' ><i className='fa fa-align-justify'></i></button>
       
        <div className='collapse navbar-collapse ' id='demo'>

            <ul className='navbar-nav fw-bold ms-auto text-center'>
                <li className='nav-item'>
                    <a href="/" className='nav-link text-white'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href="/product" className='nav-link text-white'>Product Page</a>
                </li>
                <li className='nav-item'>
                     <a className='nav-link text-white ' href="/signIn">Custom Order Page</a>
                </li>
                <li className='nav-item'>
                    <a href="/aboutUs" className='nav-link text-white'>About Us</a>
                </li>
                <li className='nav-item'>
                    <a href="/blogs" className='nav-link text-white'>Blogs</a>
                </li>
                
                {/* <li className='nav-item'>
                    <a href="/cartPage" className='nav-link text-white'>Cart Page</a>
                </li> */}
                <li className='nav-item'>
                    <a href="/contact" className='nav-link text-white'>Contact Us</a>
                </li>
               
               
                <li className='nav-item dropdown'>
                    <a className='nav-link text-white dropdown-toggle'
                     href="/signUp"
                     id='dropdown'
                     role='button'
                     data-bs-toggle = "dropdown"
                     aria-expanded = "false"
                     >DashBoard</a>

                     <ul className='dropdown-menu' aria-labelledby='dropdown'>
                        <li>
                            <a className='dropdown-item' href="/signIn">Sign In</a>
                        </li>
                        <li>
                            <a className='dropdown-item' href="/signUp">Sign Up</a>
                        </li>
                        <li>
                            <a className='dropdown-item' href="/admin">Admin Page</a>
                        </li>

                     </ul>
                </li>
              
                    {/* <SearchForm /> */}
                {/* <button>Search</button> */}

            </ul>
            </div>
           

       </div>

        <Link to="/cartPage" className='btn btn-outline-secondary'>
        Cart ({cartProduct.length})
        </Link>

    </nav>
  )
}

export default NavHeader