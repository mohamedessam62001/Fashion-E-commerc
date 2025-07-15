import React from 'react'

export default function LoginPage() {
  return (

    <div className='w-full h-[100dvh] bg-gray-400 container flex justify-center items-center'>
      <div className='w-full h-full flex flex-col py-1 gap-1 justify-center items-center '>
        <h1 className='text-black'>Login</h1>
      <input type="text" className='input input-accent' />
      <input type="text" className='input input-accent' />
      <button type="button" className='btn btn-primary'>Login</button>

      </div>
    </div>
    
  )
}
