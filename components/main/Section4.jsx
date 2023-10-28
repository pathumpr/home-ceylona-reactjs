import Image from 'next/image'
import React from 'react'

import Image1 from '../../public/assets/images/section4-images/1.svg'

const Section4 = () => {
  return (
    <div className='section text-center'>
        <div className='w-full h-auto flex flex-col bg-[#4BDBC8] p-10 pb-16 gap-10 justify-center items-center'>
            <p className='title_text'>
                Ready to <span className='!text-[#6636EE]'> find your dream </span> <br/>  home/room?
            </p>
            <p className='desc_text !text-[#0C071B]'>
                Building a next-generation collaborative platform to connect renters, <br/> homeowners and agents. Live the way you want.
            </p>
            <button className='button'>
                Find A Home
            </button>
            <Image
                src={Image1}
                alt=''
                width={0}
                className='w-auto'
            />
        </div>
    </div>
  )
}

export default Section4