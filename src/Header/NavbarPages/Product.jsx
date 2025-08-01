import React, { useContext, useEffect } from 'react'
import ProductCatelog from '../Frames/ProductCatelog'
import { authContext } from '../Frames/AuthContext'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Product = () => {

//  const {register, handleSubmit} = useForm()

  const {product,
      filters, 
      filtered, 
      setFiltered, 
      handleFilterChange,
      filteredData,
      handleCategoryClick,
      filterFrame } = useContext(authContext)


 useEffect(()=>{
  filterFrame()

 },[filters])


//   useEffect(()=>{
//     const filteredData = product.filter((products)=>{

//       const matchCategory = filters.category ? products.category === filters.category : true;
//       const matchSize = filters.size ? products.size === filters.size : true;
//       const matchOccasion = filters.occasion ? products.occasion=== filters.occasion : true
//       return matchCategory && matchSize && matchOccasion

//     })
    
//     setFiltered(filteredData)
//   },[filters, product]
// )
  console.log("current filter", filters);
  //console.log("Filtered Data",filteredData );
  console.log("Product", product);
  

  
  
  

  // useEffect(()=>{
  //   setFiltered()
  // }, [])

  return (
    <div className='container-fluid'>
      <h1 className='' style={{marginTop : "100px"}}>Product</h1>
      <div className='row'>
      <h4 className=' fw-bold text-center p-2'>Frame Product Catalog</h4>
      {/* sideNavBar .....................................*/}
        <div className='col-md-3 mb-4'>
        
          <div className="bg-light p-3 rounded shadow-sm">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>
                <button onClick={() => handleCategoryClick('')} className="btn btn-link">All</button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Islamic')} className="btn btn-link">Islamic</button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Modern')} className="btn btn-link">Modern</button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Classic')} className="btn btn-link">Classic</button>
              </li>
            </ul>

            <h6 className="mt-4">Size</h6>
            <select
              name="size"
              className="form-select"
              onChange={handleFilterChange}
              value={filters.size}
            >
              <option value="">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>

            <h6 className="mt-3">Occasion</h6>
            <select
              name="occasion"
              className="form-select"
              onChange={handleFilterChange}
              value={filters.occasion}
            >
              <option value="">All Occasions</option>
              <option value="Eid">Eid</option>
              <option value="nikkai">Nikkai Package</option>
              <option value="other">Other Package</option>
            </select>
          </div>
              


        </div>









{/* productListing............................ */}
        <div className='col-md-9'>
        {/* <ProductCatelog /> */}
          <div className="row">
            {filtered && filtered.length > 0 ? (
              filtered.map((product) => (
                <div className="col-md-4 mb-4" key={product._id}>
                  <div className="card h-100 shadow-sm">
                   <Link to={`/singleProduct/${product._id}`}>
                   <img
                      src={product.image}
                      alt={product.productName}
                      className="card-img-top"
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.productName}</h5>
                      <p className="text-info fw-bold">₦{product.price}</p>
                      <small className="text-muted">
                        {product.category} | {product.size} | {product.occasion}
                      </small>
                    </div>
                   </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted">No matching products found.</p>
            )}
           </div>

        </div>

      </div>
      
    </div>
  )
}

export default Product