import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthProvider = ({children}) =>{

    const [product, setProduct] = useState([])
    const [filtered, setFiltered] = useState([])

    const [message, setMessage] = useState("")
    const [filteredData, setFilteredData] = useState([])

    const [singleFilteredProduct, setSingleFiltered] = useState([])
    const [isSingle, setIsSingle] = useState(false)

    const [filters, setFilters] = useState({
        category : "",
        size : "",
        occasion : ""
    })


    const handleFilterChange = (e)=>{
        const {name, value} = e.target;
        setFilters((prev)=>({
            ...prev, [name]: value,

        }))

    }

    const handleCategoryClick = (category)=>{
        setFilters((prev) =>({
            ...prev, category
        }))
    }


    // const handleFilterChange = (e) => {
    //     setFilters({ ...filters, [e.target.name]: e.target.value });
    //   };

    // const handleCategoryClick = (cat) => {
    //     setFilters({ ...filters, category: cat });
    //   };
  
   

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFilters((prev) => ({
    //       ...prev,
    //       [name]: value,
    //     }));
    //   };
    


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
        // try {
        //     const query = new URLSearchParams(filters).toString();

        //     const res = await axios.get(`${productUrl}/filter?${query}`);
        //    // setProduct(res.data.productFilter)
        //     setFiltered(res.data.productFilter)
        //     setMessage("")
        // } catch (error) {
        //     setProduct([])
        //     setMessage("No Matching Product Found")
        //     setFiltered([])
            
        // }
        const filterProductURL = import.meta.env.VITE_productfilter

        try {
            const query = new URLSearchParams()

            if(filters.category) query.append("category", filters.category);
            if(filters.size) query.append("size", filters.size);
            if(filters.occasion) query.append("occasion", filters.occasion)

                const res = await axios.get(`${filterProductURL}/filter?${query.toString()}`)
                setFiltered(res.data.productFilter)

            
        } catch (error) {
            console.log("error occure while fecthing filtered data", error);
            
            
        }

    }
    //////Get single product Frame..................
    const singleProduct = async(id) =>{
        const singleURL = import.meta.env.VITE_singleProduct
        setIsSingle(true)
        try {
            const res = await axios.get(`${singleURL}/${id}`)
            if (!res){
                throw new Error("Failed to get Single Product");
                
            }
            setSingleFiltered(res.data.singleFrameProduct)

            
        } catch (error) {
            console.log(error);
            
            
        }
        finally{
            setIsSingle(false)
        }
    }


    const value = {
        product,
        addFrameProduct,
        filters,
        filtered,
        setFiltered,
        handleFilterChange,
       // handleFilterCategory,
        handleCategoryClick,
        filterFrame,
        filteredData,

        singleProduct,
        singleFilteredProduct,
        isSingle

    }
    return(
    <authContext.Provider value={value}>{children}</authContext.Provider>
    )

}
export default AuthProvider