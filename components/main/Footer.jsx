import Image from 'next/image'
import React from 'react'

import Logo from '../../public/assets/images/logo.svg'
import Image1 from '../../public/assets/images/footer-images/1.svg'
import Image2 from '../../public/assets/images/footer-images/2.svg'
import Image3 from '../../public/assets/images/footer-images/3.svg'

const Footer = () => {
  return (
    <div className='section text-center'>
      <div className='w-full h-auto flex flex=row gap-10 px-14 !text-left'>

        <div className='w-auto h-auto flex flex-col p-2 gap-4'>
          <Image
            src={Logo}
            width={50}
            className=''
          />
          <p className='desc_text'>
            Building a next-generation <br/> collaborative platform to <br/> homeowners and agents.
          </p>
          <div className='flex flex-row gap-4'>
            <Image
              src={Image1}
              width={50}
              className=''
            />
            <Image
              src={Image2}
              width={50}
              className=''
            />
            <Image
              src={Image3}
              width={50}
              className=''
            />
          </div>
        </div>

        <div className='w-auto h-auto flex flex-row justify-end items-center grow gap-20'>
          <div className='w-auto h-auto flex flex-col p-2 gap-4'>
            <p className='mini_title_text'> On site </p>
            <p className='desc_text'> Find my home </p>
            <p className='desc_text'> Homeowners </p>
            <p className='desc_text'> Community </p>
            <p className='desc_text'> Reviews </p>
          </div>

          <div className='w-auto h-auto flex flex-col p-2 gap-4'>
            <p className='mini_title_text'> Company </p>
            <p className='desc_text'> Features </p>
            <p className='desc_text'> Articles </p>
            <p className='desc_text'> Careers </p>
            <p className='desc_text'> API docs </p>
          </div>

          <div className='w-auto h-auto flex flex-col p-2 gap-4'>
            <p className='mini_title_text'> Support </p>
            <p className='desc_text'> Contact </p>
            <p className='desc_text'> Privacy </p>
            <p className='desc_text'> Terms </p>
            <p className='desc_text'> FAQ </p>
          </div>
        </div>

      </div>
      <p className='desc_text'>
        Copyright@catzilla 2023
      </p>
    </div>  
  )
}

export default Footer