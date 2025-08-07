// import React from 'react'
// import {PaystackButton} from 'react-paystack'

// const PaymentComponent = () => {
//     const key = import.meta.env.VITE_payStack
//     const publicKey = `${key}`

//     const componentProps = {
//         email,
//         amount: amount * 100,
//         currency: "NGN",
//         metadata: {
//             custom_fields: [
//                 {
//                     display_name: "Email",
//                     variable_name: "email",
//                     value: email,
//                 },
//             ],
//         },
//         publicKey,
//         text: "Pay Now",
//         onSuccess: (response)=> {
//             console.log("Payment success:", response);
//             onSuccess(response)
            
//         },
//         onClose: ()=>alert("Payment Closed")
//     }
//   return (
//     <div>
//         <PaystackButton {...componentProps} className='btn btn-primary' />

//     </div>
//   )
// }

// export default PaymentComponent