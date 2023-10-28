import React from 'react'
import Logo from '../../public/assets/images/section4-images/1.svg'
import Image from 'next/image'

const Strapi = () => {
  return (
    <div className='w-full h-screen bg-gray-500 flex flex-row justify-center items-center'>
        <div className='w-1/2 h-full bg-red-500'>
            <Image
                src={Logo}
                width={10}
            />
        </div>
        <div className='w-1/2 h-full bg-green-500'>

        </div>
    </div>
  )
}

export default Strapi 