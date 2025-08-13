import React, { useContext, useEffect } from 'react'
import { authContext } from './AuthContext'

const OrderHistory = () => {
    const {getOrder, order, token} = useContext(authContext)

    useEffect(()=>{
        getOrder()
    },[token])
    
  return (
    <div className='container' style={{marginTop : "120px"}}>
        <div className='row'>
        <h2>Your Order History 📦</h2>
        {
            order.length === 0 ? (
                <p>No order Found</p>
            ) : (
                <table className='table table-bordered table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Order ID</th>
                            <th>Total amount (#)</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((myOrder, index) => (
                                <tr key={myOrder._id}>
                                <td>{index + 1}</td>
                                <td>{myOrder._id}</td>
                                <td>{myOrder.totalAmount.toLocaleString()}</td>
                                <td>
                                    <span className={`badge bg-${myOrder.status ==="pending" ? "warning" : "success"}`}>
                                    {myOrder.status}
                                    </span>
                                </td>
                                <td>{new Date(myOrder.createdAt).toLocaleString()}</td>
                                

                            </tr>

                            ))
                        }
                    </tbody>

                </table>
            )
        }

        </div>

    </div>
  )
}

export default OrderHistory