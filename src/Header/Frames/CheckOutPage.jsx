import React from 'react'
import { useAuth } from './AuthContext'
import axios from 'axios'

const CheckOutPage = () => {

    const {cartProduct, setCartProduct,currentUser} = useAuth()

    const totalAmount = cartProduct.reduce(
        (acct, item) => acct + item.price * item.quantity, 0
    )
    
    const handlePlaceOrder = async () =>{

       // const cartOrderUrl = import.meta.env.VITE_Ordercart
    
        const token = localStorage.getItem("token")
        if (!token){
            alert("You are not logged in, Please log in first");
            return
        }


        const handleOrderAfterpayment = async(reference) =>{
            try {
                const orderData = {
                    carts : cartProduct.map(item =>({
                        productId : item._id,
                        productName : item.productName,
                        price : item.price,
                        quantity : item.quantity
                    })),
                   // userId : userId,
                    totalAmount : totalAmount,
                    paymentReference: reference
                }
        
               
        
                const res = await axios.post(`http://localhost:1500/api/cart/cartOrder`, orderData, {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                })
               
                if (res.data.status === "success"){
                    alert("Payment successful! Order placed.")
                    alert(res.data.message);
                    setCartProduct([])
                    localStorage.removeItem("cart")
                }
                
               } catch (error) {
                console.error("Failed to placed order after payment", error)
                console.log("Failed to place order",error);
                alert("There was a problem occur when placing your order")
                console.log("Token:", token);
                
                
               } 

        }
        ////////////PayStack////////////////////////////
        const keyURL = import.meta.env.VITE_payStack
        const email = currentUser?.email


        const paymentHandler = window.PaystackPop.setup({
            key: `${keyURL}`,
            email: email,
            amount: totalAmount * 100,
            currency: "NGN",
            callback:  function (response){
                handleOrderAfterpayment(response.reference)

                 
            },



            onclose: function(){
                alert("Payment window close")
            }

        });

        paymentHandler.openIframe()

      

      

        
    }

    const handleQuantityChange = (id, newQuantity) =>{
        if (newQuantity < 1 ) return;
        const updateCart = cartProduct.map((item)=>
        item._id === id ? {...item, quantity: newQuantity} : item
    );
    setCartProduct(updateCart)

    }
    const handleRemoveItem = (id)=>{
        const updateCart = cartProduct.filter((item)=> item._id !==id);
        setCartProduct(updateCart)
    }

  return (
    <div className='container py-4' style={{marginTop : "100px"}}>
       <div className='row g-4'>
      <div className='col-12 col-md-8'>
      <h2 className='mb-3'>🧾 Checkout Summary</h2>

       <div className='table-responsive'>
        <table className='table table-striped table-bordered'>
            <thead className='table-light'>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price (#)</th>
                    <th>Action</th>
                    <th>Action</th>
                    
                    <th>Subtotal</th>
                </tr>

            </thead>
            <tbody>
                {
                    cartProduct.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.productName}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price.toLocaleString()}</td>
                            <td style={{maxWidth: "100px"}}>
                                <input type="number" className='form-control' min="1" value={item.quantity} onChange={(e)=> handleQuantityChange(item._id, parseInt(e.target.value))}  />
                            </td>
                            <td>
                                <button className='btn btn-sm btn-danger' onClick={()=> handleRemoveItem(item._id)}>Remove</button>
                            </td>
                            
                            
                            <td>{(item.price * item.quantity).toLocaleString()}</td>
                           

                        </tr>
                    ))
                }
            </tbody>

        </table>

       </div>
       <div className='d-flex justify-content-between align-items-center mt-3 flex-column flex-md-row'>
       <h4 className='mb-3 mb-md-0'>Total: #{totalAmount.toLocaleString(undefined, {minimumFractionDigits: 2})}</h4>
        <button className='btn btn-primary mb-2' onClick={handlePlaceOrder}>Place Order</button>

       </div>

       

      </div>
      <div className='col-12 col-md-4'>
        <h4>Order form Delivery section</h4>

      </div>
       </div>
    </div>
  )
}

export default CheckOutPage