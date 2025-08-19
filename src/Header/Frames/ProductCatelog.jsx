import React, { useContext, useEffect } from 'react'
import { authContext } from './AuthContext'

const ProductCatelog = () => {
    const {product, addFrameProduct} = useContext(authContext)

    useEffect(()=>{
        addFrameProduct()
    },[])
  return (
    <div className='container-fluid my-5'>
        {/* <h2 className='text-center mb-4'>Product Catalog</h2> */}
        
        <div className='row'>
        <h4 className=' fw-bold bg-secondary p-2'>Frame Product</h4>
           <div className='d-flex overflow-auto pb-3' style={{gap : "1rem", scrollSnapType : "x mandatory"}}>
            
           {product && product.map((products)=>(
                <div className='col-md-2 mb-4' key={products._id} style={{minWidth : "200px", maxWidth : "200px", scrollSnapAlign : "start", flex : "0 0 auto"}}>

                    <div className='card h-100 shadow-sm'>
                    
                        <img src={products.image} alt="products.name" className='card-img-top' style={{height : "150px", objectFit : "cover"}} />

                        <div className='card-body text-center'>
                            <h6 className='card-title mb-1'>{products.productName}</h6>
                            <p className='card-text fw-bold text- mb-0'>Price: # {products.price}:00</p>
                            <p className='card-text'>Size: {products.size}</p>

                        </div>

                    </div>

                </div>
            ))}
           </div>

        </div>

    </div>
  )
}

export default ProductCatelog