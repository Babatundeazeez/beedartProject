import React, { useContext, useEffect } from 'react'
import { authContext } from './AuthContext'
import {useParams} from 'react-router-dom'

const SingleProductPage = () => {

    const {singleProduct, singleFilteredProduct, isSingle, addCart,cartProduct} = useContext(authContext)
    const {id} = useParams()

    useEffect(()=>{
        singleProduct(id)

    },[])
    console.log(cartProduct);
    
console.log("singleFilteredProduct", singleFilteredProduct);

  return (
    <div className='container' style={{marginTop : "150px"}}>
        <div className='row'>
            <h1>Product Details</h1>
            {
                isSingle ? (
                    <p>Loading Product..................</p>
                ) : (
                    <div className='mt-5'>
                        {
                          !singleFilteredProduct ||  Object.keys(singleFilteredProduct).length === 0  ? (
                                <p>No Product Available</p>
                            ) : (
                                <div>
                                    {
         <div className='row justify-content-center'>
                                            
             <div className="col-md-6 mb-4" key={singleFilteredProduct._id}>
                 <div className="card h-100 shadow-sm">
                     <img
                        src={singleFilteredProduct.image}
                         alt={singleFilteredProduct.productName}
                            className="card-img-top"
                            style={{ height: "150px", objectFit: "cover" }}
                     />
                        <div className="card-body text-center">
                        <h5 className="card-title">{singleFilteredProduct.productName}</h5>
                        <p className="text-info fw-bold">₦{singleFilteredProduct.price}</p>
                        <small className="text-muted">
                        {singleFilteredProduct.category} | {singleFilteredProduct.size} | {singleFilteredProduct.occasion}
                            </small>
                                                        
                        </div>
                        
                        </div>
                        </div>

                                            </div>
                                            

                                        
                                    }
                                     <div className="mt-3 text-center mb-4">
                         <button className="btn btn-primary" onClick={() => addCart(singleFilteredProduct)}>Add to Cart </button>
                        </div>
                                </div>
                            )
                        }

                    </div>
                )
            }
        </div>

    </div>
  )
}

export default SingleProductPage