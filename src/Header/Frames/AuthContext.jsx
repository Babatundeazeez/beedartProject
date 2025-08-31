import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {jwtDecode} from "jwt-decode";

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const [product, setProduct] = useState([])
    const [filtered, setFiltered] = useState([])

    const [message, setMessage] = useState("")
    const [filteredData, setFilteredData] = useState([])

    const [singleFilteredProduct, setSingleFiltered] = useState([])
    const [isSingle, setIsSingle] = useState(false)

    const [cartProduct, setCartProduct] = useState(()=> {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    })

    const [verifyUser, setVerifyUser] = useState()
    const [isVerifying, setIsVerifying] = useState(false)

    const [currentUser, setCurrentUser] = useState(null)

    const [order, setOrder] = useState([])

    const [showModal, setShowModal] = useState(false)
    const [modalText, setModalText] = useState("")
    const [modalStatus, setModalStatus] = useState("")

    

    const baseURL = import.meta.env.VITE_BASE_URL
    const token = localStorage.getItem("accessToken")


    useEffect(()=>{

        // const user = JSON.parse(localStorage.getItem("user"));
        // if(user){
        //     setCurrentUser(user)
        // }

        const token = localStorage.getItem("accessToken")
        const role = localStorage.getItem("role")
        if(token){
            try {
                const decoded = jwtDecode(token)
                setUser({...decoded, role})
                
            } catch (error) {
                console.log("Invaid Token", error);
                setUser(null)
                
                
            }
        }

    },[])
    ////////////////////////////////////////
    const getOrder = async() =>{
        const getOrderURL = import.meta.env.VITE_BASE_URL
        try {
            const res = await axios.get(`${getOrderURL}/cart/getOrder`, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            setOrder(res.data.order)
            
        } catch (error) {
            console.log("Error Fetching Orders", error);
            alert("Could not fetch order")
              
        }

    }
    /////////////////////////////////////////////

    const getCurrentUser = async ()=> {
        try {
            const id = localStorage.getItem("userId")
            const res = await axios(`${baseURL}/user/${id}`)
            const data = res.data
            setCurrentUser(data.user)
        } catch (error) {
         console.log(error);
         
            
        }

    }

//////////////////////////////////////////////////////////

    const verifyUrl = import.meta.env.VITE_BASE_URL
    const verificationAccount = async(token) => {
        setIsVerifying(true)
        try {
            const res = await axios.post(`${verifyUrl}/auth/verify/${token}`)
            const data = res.data
            console.log(data);
            console.log("verification success", data);

            if ( res.status === 200){
                setVerifyUser(data)
            }
             
        } catch (error) {
            console.log(error);
            if (error.response){
                console.log("server error", error.response.data);
                setVerifyUser(error.response.data)
                
            }
            else{
                console.log(error.message, "An error occur");
                
                setVerifyUser({message : "An error occur"})
            }
            
        }
        finally{
            setIsVerifying(false)
        }

    }


    /////////////////////////////////////////////////////////////////
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


   

      ///////////////function to display all product....///////////////
    const productUrl = import.meta.env.VITE_BASE_URL
    const addFrameProduct = async() => {

        try {
            const res = await axios.get(`${productUrl}/product`)
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
      
        const filterProductURL = import.meta.env.VITE_BASE_URL

        try {
            const query = new URLSearchParams()

            if(filters.category) query.append("category", filters.category);
            if(filters.size) query.append("size", filters.size);
            if(filters.occasion) query.append("occasion", filters.occasion)

                const res = await axios.get(`${filterProductURL}/product/filter?${query.toString()}`)
                setFiltered(res.data.productFilter)

            
        } catch (error) {
            console.log("error occure while fecthing filtered data", error);
            
            
        }

    }
    //////Get single product Frame..................
    const singleProduct = async(id) =>{
        const singleURL = import.meta.env.VITE_BASE_URL
        setIsSingle(true)
        try {
            const res = await axios.get(`${singleURL}/product/${id}`)
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

    const Isauthenticate = () =>{
        const accessToken = localStorage.getItem("accessToken")
        if(accessToken){
            return true
        }
        else{
            return false
        }
    }


    const value = {
        verifyUser,
        isVerifying,
        verificationAccount,
        currentUser,
        setCurrentUser,

        Isauthenticate,



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
        upDateCartProduct,

        order,
        getOrder,
        getCurrentUser,

        user,
        setUser,
        showModal,
        setShowModal,
        modalText, 
        setModalText,
        modalStatus, 
        setModalStatus

    }
    return(
    <authContext.Provider value={value}>{children}</authContext.Provider>
    )

}
export default AuthProvider