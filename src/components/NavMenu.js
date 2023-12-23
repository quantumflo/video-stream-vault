import React from 'react'
import { useParams } from 'react-router-dom'

const NavMenu = () => {
    const {nav} = useParams();
    
  return (
    <h1 className='ml-12 my-6 font-extrabold font-serif text-3xl'>{nav}</h1>
  )
}

export default NavMenu