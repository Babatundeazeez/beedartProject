import Admin from "./Header/Frames/Admin"
import AuthProvider from "./Header/Frames/AuthContext"
import CartPage from "./Header/Frames/cartPage"
import CheckOutPage from "./Header/Frames/CheckOutPage"

import Footer from "./Header/Frames/Footer"
import OrderHistory from "./Header/Frames/OrderHistory"
import SingleProductPage from "./Header/Frames/SingleProductPage"
import AboutUs from "./Header/NavbarPages/AboutUs"
import Blogs from "./Header/NavbarPages/Blogs"
import Home from "./Header/NavbarPages/Home"
import Product from "./Header/NavbarPages/Product"
import SignIn from "./Header/NavbarPages/SignIn"
import SignUp from "./Header/NavbarPages/SignUp"
import VerifyPage from "./Header/NavbarPages/VerifyPage"
import NavHeader from "./Header/NavHeader"
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
 
  return (
    <>
    <BrowserRouter >
     <AuthProvider> *
    <NavHeader />

    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/blogs" element={<Blogs />} />
     <Route path="/aboutUs" element={<AboutUs/>} />
     <Route path="/product" element={<Product />} />
     <Route path="/signIn" element={<SignIn />} />
     <Route path="/signUp" element = {<SignUp />} />
     <Route  path="/admin" element = {<Admin />}/>
     <Route path="/singleProduct/:id" element = {<SingleProductPage />} />
     <Route path="/cartPage" element = {<CartPage />} />
     <Route path="/checkOutPage" element = {<CheckOutPage />} />
     <Route path="/verify/:token" element = {<VerifyPage />} />
     <Route path="/orderHistory" element = {<OrderHistory />} />
      
    </Routes>
    <Footer />
    </AuthProvider> 
    </BrowserRouter>
      
    </>
  )
}

export default App
