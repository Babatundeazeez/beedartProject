import React, { useContext, useEffect } from 'react'
import { authContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {

    const {cartProduct, removeCartProduct, upDateCartProduct, setCartProduct} = useContext(authContext)
    const navigate = useNavigate();

    const handleCheckOut = () =>{
        if (cartProduct.length === 0){
            alert("Cart is empty");
            return
        }
        
        navigate('/checkOutPage')
       
        
    }

    const totalPrice = cartProduct.reduce((account, item) => account + item.price * item.quantity, 0 )





  return (
    <div className='container' style={{marginTop : " 150px"}}>
        <h2 className='mb-5 mt-5'> 🛒 Your cart</h2>
        {
            cartProduct.length === 0 ? (
                <p>Your Cart is empty</p>
            ) : (
                <div className='row'>
                    {
                        cartProduct.map(item => (
                            <div className='col-sm-6 mb-3' key={item._id}>
                                <div className='card shadow-sm p-2'>
                                    <div className='row g-0'>
                                        <div className='col-4'>
                                        <img
                                            src={item.image}
                                            alt={item.productName}
                                            className="img-fluid rounded"
                                            />

                                        </div>
                                        <div className='col-8'>
                                            <div className='card-body'>
                                            <h5 className="card-title">{item.productName}</h5>
                                                <p className="text-muted">
                                                    ₦{item.price} x {item.quantity}
                                                </p>
                                                <p>
                                                    <small>
                                                    {item.category || "N/A"} | {item.size || "N/A"} | {item.occasion || "N/A"}
                                                    </small>
                                                </p>

                                                <div className='d-flex align-items-center '>
                     <input type="number"   min="1" value={item.quantity} 

                     onChange={(e) => upDateCartProduct(item._id, parseInt(e.target.value)) }
                        className="form-control w-25 me-2"/>

                        <button className="btn btn-danger btn-sm"
                         onClick={() => removeCartProduct(item._id)} >Remove</button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))
                    }
                              <div className="col-12 mt-4">
                                <h4>Total: ₦{totalPrice.toLocaleString()}</h4>
                                <button className="btn btn-success mt-2" onClick={handleCheckOut}>Proceed to Checkout</button>
                            </div>



                </div>
            )
        }
        <div className='row'>
            <div className='col-sm-6'>


            </div>

        </div>

    </div>
  )
}

export default CartPage