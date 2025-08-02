import axios from "axios";
import { useContext, useEffect, useState } from "react";
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

    const [cartProduct, setCartProduct] = useState(()=>{
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    })

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
    ////////////////////////////////////////////////

    // useEffect  (()=>{
    //     const storedCart = localStorage.getItem("cartItems");
    //     console.log("Loaded from storage", storedCart);
        
    //     if (storedCart){
    //         setCartProduct(JSON.parse(storedCart))
    //     }
    // },[])


    useEffect(()=>{
        console.log("savings to local storage", cartProduct);
        
        localStorage.setItem("cartItems", JSON.stringify(cartProduct))
    }, [cartProduct])
    
    const addCart = (product) =>{
        const cleanProduct = {
            _id: product._id,
            image: product.image,
            productName: product.productName,
            price: product.price,
            category: product.category ?? "N/A",
            size: product.size ?? "N/A",
            occasion: product.occasion ?? "N/A",
          };

        setCartProduct((prev) => {
            const existingItem = prev.find(item => item._id === cleanProduct._id);
            if (existingItem){
                return prev.map(item =>
                    item._id === cleanProduct._id 
                    ? {...item, quantity: item.quantity + 1}
                     : item
                )
            }
            else{
                return [...prev, {...cleanProduct, quantity: 1}]
            }
        })
        console.log("adding to Cart", cleanProduct);
        

        
    }

    const removeCartProduct = (id) => {
        setCartProduct(prev => prev.filter(item => item._id !== id))

    }

    const upDateCartProduct = (id,qty) =>{
        setCartProduct(prev => prev.map(item => item._id === id ? {...item, quantity: qty} : item))

    }
    /////////////////////////////////////////////////////


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
        isSingle,

        cartProduct,
        setCartProduct,
        addCart,
        removeCartProduct,
        upDateCartProduct

    }
    return(
    <authContext.Provider value={value}>{children}</authContext.Provider>
    )

}
export default AuthProvider