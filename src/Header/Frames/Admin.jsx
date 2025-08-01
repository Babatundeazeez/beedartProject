import React from 'react'
import {useForm} from 'react-hook-form'
import axios from "axios"

const Admin = () => {
    const {register, handleSubmit} = useForm()

    const AdminAddProduct = async(data)=>{
        console.log(data);

        const formData = new FormData();
        formData.append('productName', data.productName);
        formData.append('price', data.price);
        formData.append('size', data.size)
        formData.append('category', data.category)
        formData.append('occasion', data.occasion)
        formData.append('image', data.image[0]);
        
        try {
            const productURL = import.meta.env.VITE_productFrame
            const token = localStorage.getItem("accessToken")
            const res = await axios.post(`${productURL}`,formData, {
                headers : {
                    "Content-Type" : "multipart/form-data",
                    Authorization : `Bearer ${token}`
                }

            })
            console.log("Created",res.data);
            console.log(token);

            alert("product created successfully")
            
        
        } catch (error) {
            console.log(error);
            alert("failed to create product")
            
        }
    }


  return (
    <div className='container my-5'>
        <h2 className='text-center' style={{marginTop : "110px"}}>Welcome Back</h2>
    <div className='row'>
        <div className='col-ms-6 col-md-8'>
        <div className='card shadow'>
            <div className='card-body'>

                <form action="" className='form' onSubmit={handleSubmit(AdminAddProduct)}>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input className='form-control' type="file" name="" id="image" placeholder='choose your frame'  {...register("image")} />
                    </div>
                    <div>
                        <label htmlFor="name">product Name: </label>
                        <input type="text" className='form-control' id='productName' placeholder='Product name' {...register("productName")} />
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="number" className='form-control' id="price" placeholder='Enter price' {...register("price")} />
                    </div>
                    <div>
                        <label htmlFor="size">Size: </label>
                        {/* <input type="text" className='form-control' id="size" placeholder='Enter size' {...register("size")} /> */}
                        <select 
                        name="size" 
                        className='form-select'
                        id="size"
                        {...register("size")}>
                            <option value="">Choose Size</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="size">Category: </label>
                        {/* <input type="text" className='form-control' id="category" placeholder='Enter category' {...register("category")} /> */}
                        <select 
                        name="category" 
                        id="category"
                        className='form-select' 
                        {...register("category")}>
                            <option value="">All</option>
                            <option value="Islamic">Islamic</option>
                            <option value="Modern">Modern</option>
                            <option value="Classic">Classic</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="size">Occasion: </label>
                        {/* <input type="text" className='form-control' id="occasion" placeholder='Enter occasion' {...register("occasion")} /> */}
                        <select 
                        name="occasion" 
                        id="occasion"
                        className='form-select' 
                        {...register("occasion")}>
                            <option value="">choose Occasion</option>
                            <option value="Eid Package">Eid Package</option>
                            <option value="nikkai Package">Nikkai Package</option>
                            <option value="other Package">Others Package</option>
                        </select>
     
                    </div>
                    <button className='btn btn-primary' type='submit'>Add Product</button>
                </form>

            </div>

        </div>
        </div>

    </div>
    </div>
  )
}

export default Admin