import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UpdateStatus = () => {
    const [upDate, setUpdate] = useState([])
    const token = localStorage.getItem("token")
    const getAllOrder = async() =>{
        try {
            const res = await axios.get("http://localhost:1500/api/cart/getOrder", {
                headers : {
                    Authorization : `Bearer ${token}`
                },
                
            })
            setUpdate(res.data)
            
        } catch (error) {
            console.log("Error fetching Order", error);
            
        }

    };
    const handleStatusChange = async(orderId, newStatus) =>{
        try {
            const res = await axios.put(`http://localhost:1500/api/cart/updateOrder/${orderId}`, {status :newStatus }, {
                headers : {Authorization : `Bearer ${token}`}
            });
            alert("Order status Updated")
            getAllOrder()
            
        } catch (error) {
            console.log("Error occur while updating Order", error);
            alert("Failed to Update Order")
            
        }
        useEffect(()=>{
            getAllOrder()
        },[token])

    }
  return (
    <div className='container' >
        <h2>All Orders from Admin Page</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>User ID</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Change status</th>
                </tr>

            </thead>
            <tbody>
                {
                    upDate.map((order, index)=>(
                        <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.userId}</td>
                            <td>{order.totalAmount.toLocaleString()}</td>
                            <td>{order.status}</td>
                            <td>
                                <select  id="" value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)} className='form-select'>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>

                                </select>
                            </td>

                        </tr>
                    ))
                }
            </tbody>

        </table>

    </div>
  )
}

export default UpdateStatus