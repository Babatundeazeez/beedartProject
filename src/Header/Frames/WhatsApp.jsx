import React from 'react'
import {FaWhatsapp} from "react-icons/fa"

const WhatsApp = () => {
  return (
   <a 
   href="//wa.me/2348169422631" 
   target='_blank'
   rel='noopener noreferrer'
   style={{
    position : "fixed",
    bottom : "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: " 50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
    zIndex: "1000"

   }}
   >
    <FaWhatsapp />
   </a>
  )
}

export default WhatsApp