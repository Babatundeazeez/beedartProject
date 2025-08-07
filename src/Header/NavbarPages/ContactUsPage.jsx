import React from 'react'
import { useForm } from 'react-hook-form'

const ContactUsPage = () => {

    const {register, handleSubmit} = useForm()
    const contactSubmit =(data)=>{
        console.log(data);
        
    }
    
  return (
    <div className='conatiner my-5'>
         <h2 className='' style={{marginTop : "110px"}}>Contact Page </h2>
        <div className='row justify-content-center'>
            <div className='col-md-8'>

            <h1 className="mb-4 text-center">Contact BeedahArt</h1>
                 <p className="text-center">
                    Have a question, custom order, or feedback? We'd love to hear from you.
                </p>

               <div className='card shadow'>
                <div className='card-body'>
                <form action="" className='form' onSubmit={handleSubmit(contactSubmit)}>
                    <div className='mb-3 mt-2'>
                        <label className='form-label' htmlFor="name">Full Name: </label>
                        <input className='form-control mt-1' type="text" id='name' placeholder='enter your name' required {...register("name")}/>
                    </div>
                    <div className='mb-3 mt-2'>
                        <label className='form-lebel' htmlFor="full name">Email: </label>
                        <input className='form-control mt-2' type="email" id='email' placeholder='enter your email' required {...register("email")}/>
                    </div>
                    <div className='mb-3 mt-2'>
                        <label className='form-lebel' htmlFor="mesage">Message: </label>
                       <textarea className='form-control mt-2' name="message" id="message" rows="5" placeholder='message here...........'{...register("message")}></textarea>
                    </div>
                    <button className='btn btn-primary w-100'>Send Message</button>
                </form>

                </div>

               </div>

                <div className='mt-5'>
                <h5>📞 Contact Information</h5>
                     <p>Email: <a href="mailto:support@beedahart.com">support@beedahart.com</a></p>
                    <p>Phone: +234 000 000 0000</p>
                    <p>Instagram: <a href="https://instagram.com/beedahart" target="_blank" rel="noreferrer">@beedahart</a></p>
                </div>

            </div>


        </div>

    </div>
  )
}

export default ContactUsPage