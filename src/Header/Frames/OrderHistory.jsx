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
        <h2 className='mb-3'>Your Order History 📦</h2>
        {
            order.length === 0 ? (
                <p>No order Found</p>
            ) : (
                <>
                // Desktop/Tablet device
                <div className='table-responsive d-none d-md-block'>
                <table className='table table-bordered table-hover mt-3'>
                    <thead className='table-light'>
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
                                <td className='text-break'>{myOrder._id}</td>
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
                </div>
                {/* // On Mobile device */}
                <div className='d-block d-md-none'>
                {
                            order.map((myOrder, index) => (
                                <div key={myOrder._id} className='card mb-3 shadow-sm'>
                               <div className='card-body'>
                               <h6 className='card-title mb-2'>Order #{index + 1}</h6>
                                <p className='mb-1'><strong>Order ID:</strong>{myOrder._id}</p>
                                <p className='mb-1'><strong>Total:</strong>#{myOrder.totalAmount.toLocaleString()}</p>
                                <p className='mb-1'>
                                    <strong>Status:</strong>{ ' '}
                                    <span className={`badge bg-${myOrder.status ==="pending" ? "warning" : "success"}`}>
                                    {myOrder.status}
                                    </span>
                                </p>
                                <p className='mb-1'><strong>Date:</strong>{new Date(myOrder.createdAt).toLocaleString()}</p>
                                

                               </div>

                            </div>

                            ))
                        }


                </div>
                </>
            )
        }

        </div>

    </div>
  )
}

export default OrderHistory