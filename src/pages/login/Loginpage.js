import React, { useState } from 'react'
import Signup from '../../components/authorization/Signup'
import './Loginpage.css'
import Login from '../../components/authorization/Login'
function Loginpage() {
  const [boxType,SetboxType] = useState('login')
  return (
    <div className='login-box'>

       { boxType ==='signup' && <Signup togglebox = {SetboxType} />} 

        { boxType === 'login' && <Login togglebox = {SetboxType} />}

    </div>
  )
}

export default Loginpage