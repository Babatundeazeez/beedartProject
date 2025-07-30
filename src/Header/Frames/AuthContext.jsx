import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthProvider = ({children}) =>{
    const [product, setProduct] = useState([])
    const [filtered, setFiltered] = useState([])
    const [message, setMessage] = useState("")

    const [filters, setFilters] = useState({
        categories : "",
        size : "",
        occassion : ""
    })


    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
      };

    const handleCategoryClick = (cat) => {
        setFilters({ ...filters, category: cat });
      };


      ///////////////function to display all product....///////////////
    const productUrl = import.meta.env.VITE_productFrame
    const addFrameProduct = async() => {

        try {
            const res = await axios.get(`${productUrl}`)
            setProduct(res.data.frameProduct)
            setFiltered(res.data.frameProduct)
            console.log(res.data);
            
            
        } catch (error) {
            console.log("failed to fetch product",error);
            
        }
    }
    ///////////////////////////////////////////////////////////////////
    ////////////function to display filter product/////////////////////
    const filterFrame = async() =>{
        try {
            const query = new URLSearchParams(filters).toString();
            const res = await axios.get(`${productUrl}/filter?${query}`);
            setProduct(res.data.product)
            setMessage("")
        } catch (error) {
            setProduct([])
            setMessage("No Matching Product Found")
            
        }

    }


    const value = {
        product,
        addFrameProduct,
        filters,
        filtered,
        setFiltered,
        handleFilterChange,
        handleCategoryClick,
        filterFrame

    }
    return(
    <authContext.Provider value={value}>{children}</authContext.Provider>
    )

}
export default AuthProvider