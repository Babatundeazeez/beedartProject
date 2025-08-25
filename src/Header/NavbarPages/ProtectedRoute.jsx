import React, { useContext, useEffect } from 'react'
import { authContext, useAuth } from '../Frames/AuthContext'
import { Navigate, Outlet, useNavigate} from 'react-router-dom'


const ProtectedRoute = () => {


  const token = localStorage.getItem("accessToken")
  const role = localStorage.getItem("role")

  if (!token){
    return <Navigate to="/signIn" replace />
  }

  if(role !== "admin"){
    return <Navigate to="/product" replace />
  }
  return <Outlet/>
   
    

}

export default ProtectedRoute