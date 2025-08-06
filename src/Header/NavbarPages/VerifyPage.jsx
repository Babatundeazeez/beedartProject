import React, { useContext, useEffect } from 'react'
import { authContext } from '../Frames/AuthContext'
import { useParams } from 'react-router-dom'

const VerifyPage = () => {
    const {token} = useParams()
    const { verifyUser, isVerifying, verificationAccount} = useContext(authContext)

    useEffect(()=>{
        verificationAccount(token)
    }, [])
  return (
    <div className='container'>
        <div className='row' style={{marginTop : "120px"}}>
            <h1>Please verify your Account</h1>
            {
                isVerifying ? (
                    <div>
                        <h3>verifying account..............</h3>
                        <p>welcome to verification account page</p>
                    </div>
                ) : (
                    <h3 style={{color: verifyUser?.status ==="error" ? "red" : "green"}}>
                    {verifyUser?.message}
                    </h3>
                )
            }


        </div>

    </div>
  )
}

export default VerifyPage