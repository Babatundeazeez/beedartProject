import React from 'react'
import { useAuth } from './AuthContext'

const CheckOutPage = () => {

    const {cartProduct, setCartProduct} = useAuth()

    const totalAmount = cartProduct.reduce(
        (acct, item) => acct + item.price * item.quantity, 0
    )
    const handlePlaceOrder = () =>{
        alert(`Order place successfully`)
        setCartProduct([])
    }
    
  return (
    <div className='' style={{marginTop : "130px"}}>
        <h2>Check Out</h2>
        <ul>
            {
                cartProduct.map((item) =>(
                    <li key={item._id}>
                        {item.productName} - {item.quantity} * #{item.price}

                    </li>
                ))
            }
        </ul>
        <h4>Total : {totalAmount.toFixed(2)}</h4>
        <button className='btn btn-primary' onClick={handlePlaceOrder}>Place Order</button>

    </div>
  )
}

export default CheckOutPage