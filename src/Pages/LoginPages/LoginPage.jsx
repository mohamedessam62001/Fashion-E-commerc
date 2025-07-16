import React from 'react'
import Loginform from '../../Components/LoginComponent/Loginform'
import LoginDesing from '../../Components/LoginComponent/LoginDesing'

export default function LoginPage() {
  return (
    <div className='w-full h-[80dvh] py- container mx-auto flex justify-center  items-center  bg-amber-100'>
      <LoginDesing/>
      <Loginform/>
    </div>
    
  )
}
