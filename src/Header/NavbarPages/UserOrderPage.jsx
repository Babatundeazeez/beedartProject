import React from 'react'
import { useForm } from 'react-hook-form'


const UserOrderPage = () => {

  const {register, handleSubmit} = useForm()
  const userOrder = (data) =>{
    console.log(data);
    const formdata = new FormData();
    formdata.append("")
    
  }
  return (
    <div className='container' style={{marginTop : "120px"}}>
        <h4>Customer Order Page</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quisquam voluptatibus animi excepturi, consectetur quaerat itaque, unde ab, quod eum praesentium aliquam alias deleniti quo optio sequi ratione harum facere!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quisquam voluptatibus animi excepturi, consectetur quaerat itaque, unde ab, quod eum praesentium aliquam alias deleniti quo optio sequi ratione harum facere!</p>
        <div className='mt-2'>
          <h6>Kindly place your order </h6>
          <div className='row'>
            <div className='col-md-6 col-ms-6'>
              <div className='card shadow'>
                <div className='card-body'>
                <form action="" className='form mt-b' onSubmit={handleSubmit(userOrder)}>

                    <div className='mt-2'>
                      <label className='form-label mb-1' htmlFor="">Name:</label>
                      <input className='form-control ' type="text" id='name' {...register("name")} />
                    </div>
                    <div className='mt-2'>
                      <label htmlFor="" className='form-label mb-1'>Request:</label>
                      <input type="text" className='form-control ' id='request' {...register("request")} />
                    </div>
                    <div className='mt-2'>
                      <label htmlFor="" className='mb-1'>Size:</label>
                      <select className='form-select' name="" id="size" {...register("size")}>
                        <option value=""></option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>

                    </div>
                    <div className='mt-2'>
                      <label htmlFor="" className='form-label mb-1'>Delivery address:</label>
                      <input type="text" className='form-control ' id='address' {...register("address")} />
                    </div>
                    <div className='mt-2 mb-2'>
                      <button className='btn btn-info'>Request</button>
                    </div>
               </form>

                </div>

              </div>

            </div>

          </div>

        </div>
       <div className='mt-5'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt nihil tenetur dolor perferendis vel nesciunt, explicabo ratione? Delectus dignissimos deserunt hic consectetur ratione voluptas eveniet ex earum veniam illo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt nihil tenetur dolor perferendis vel nesciunt, explicabo ratione? Delectus dignissimos deserunt hic consectetur ratione voluptas eveniet ex earum veniam illo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt nihil tenetur dolor perferendis vel nesciunt, explicabo ratione? Delectus dignissimos deserunt hic consectetur ratione voluptas eveniet ex earum veniam illo.</p>
       </div>
        
    </div>
  )
}

export default UserOrderPage