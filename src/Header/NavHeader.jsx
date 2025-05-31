import React from 'react'
import SearchForm from './NavbarPages/SearchForm'

const NavHeader = () => {
  return (
    <nav className='ad navbar navbar-expand-sm p-3 navbar-light  '>
       <div className='container-fluid'>
       <a className='navbar-brand text-info ' href="/">BEEDART_logo</a>
       <button type='button' className='navbar-toggler' data-bs-toggle="collapse" data-bs-target ='#demo' ><i className='fa fa-align-justify'></i></button>
        <div className='collapse navbar-collapse ' id='demo'>
            <ul className='navbar-nav fw-bold ms-auto'>
                <li className='nav-item'>
                    <a href="/" className='nav-link text-white'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href="/aboutUs" className='nav-link text-white'>About Us</a>
                </li>
                <li className='nav-item'>
                    <a href="/product" className='nav-link text-white'>Product</a>
                </li>
                <li className='nav-item'>
                    <a href="/contact" className='nav-link text-white'>Contact Us</a>
                </li>
                <li className='nav-item'>
                    <a href="/blogs" className='nav-link text-white'>Blogs</a>
                </li>
                <li className='nav-item'>
                     <a className='nav-link text-white ' href="/signIn">Sign In</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link text-white' href="/signUp">Sign Up</a>
                </li>
              
                    <SearchForm />
                {/* <button>Search</button> */}

            </ul>
            </div>
           

       </div>

        

    </nav>
  )
}

export default NavHeader