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
                        <input type="text" className='form-control' id="size" placeholder='Enter size' {...register("size")} />
                    </div>
                    <div>
                        <label htmlFor="size">Category: </label>
                        <input type="text" className='form-control' id="category" placeholder='Enter category' {...register("category")} />
                    </div>
                    <div>
                        <label htmlFor="size">Occasion: </label>
                        <input type="text" className='form-control' id="occasion" placeholder='Enter occasion' {...register("occasion")} />
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