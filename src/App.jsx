import AboutUs from "./Header/NavbarPages/AboutUs"
import Blogs from "./Header/NavbarPages/Blogs"
import Home from "./Header/NavbarPages/Home"
import Product from "./Header/NavbarPages/Product"
import SignIn from "./Header/NavbarPages/SignIn"
import SignUp from "./Header/NavbarPages/SignUp"
import NavHeader from "./Header/NavHeader"
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
 
  return (
    <>
    <BrowserRouter >
    <NavHeader />

    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/blogs" element={<Blogs />} />
     <Route path="/aboutUs" element={<AboutUs/>} />
     <Route path="/product" element={<Product />} />
     <Route path="/signIn" element={<SignIn />} />
     <Route path="/signUp" element = {<SignUp />} />
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
