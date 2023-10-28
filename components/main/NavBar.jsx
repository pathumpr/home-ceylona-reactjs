import React from 'react'
import Logo from '../../public/assets/images/logo.svg'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='w-full h-auto flex flex-row items-center justify-between'>
        <Image
          src={Logo}
          alt=''
          width={50}
        />
        <ul className='flex flex-row gap-10 desc_text'>
            <li className='!text-[#6636EE]'>Home</li>
            <li>About us</li>
            <li>Renters</li>
            <li>Homeowners</li>
            <li>Reviews</li>
        </ul>
        <button className='button'>
            Reviews
        </button>
    </div>
  )
}

export default NavBar