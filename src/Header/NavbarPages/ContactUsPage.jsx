import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const ContactUsPage = () => {

    const {register, handleSubmit} = useForm()
    const contactSubmit =(data)=>{
        console.log(data);
        
    }
    
  return (
    <div className='conatiner my-5'>
         <h2 className='' style={{marginTop : "110px"}}> </h2>
        <div className='row justify-content-center'>
            <div className='col-md-8'>

            <h1 className="mb-4 text-center text-info">Contact BeedahArt</h1>
                 <p className="text-center text-info">
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
                     <p>Email: <Link to="/mailto:support@BeedahArt.com" className='text-light text-decoration-none'>BeedahArt@gmail.com</Link></p>
                    <p>Phone: +234 8169 4226 31</p>
                    <p>Instagram: <a href="https://instagram.com/beedahart" target="_blank" rel="noreferrer">beedahAat</a></p>
                  
                </div>

            </div>


        </div>

    </div>
  )
}

export default ContactUsPage