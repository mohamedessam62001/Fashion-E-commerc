import React, { useState } from 'react'

export default function Navbar() {
 const[links,setLiks]=useState(["Home","About","Contact","Blog"])

  return (
           <ul className='hidden lg:block navbar-start max-w-max'>
            {links.map((el)=>(
                <a key={el} href="#" className="text-gray-950 transition-colors duration-300 transform dark:text-gray-950 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">{el}</a>
            ))}
        </ul>
  )
}
