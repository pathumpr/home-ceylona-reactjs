import Image from 'next/image'
import React from 'react'
import Slider1 from '../../public/assets/images/slider_image_1.svg'

const Hero = () => {
  return (
    <div className='section'>
        <p className='hero_text'>Your dream <span className='!text-[#6636EE]'>home</span><br/> right here</p>
        <p className='desc_text'>Building a next-generation collaborative platform to connect renters, homeowners and agents. <br/> Live the way you want. Beautiful homes. Incredible locations. Pricing that make sense.</p>
        <Image
            src={Slider1}
            alt=''
            width={0}
            className='object-contain w-full'
        />
        <div className='w-full h-auto flex flex-row gap-6 items-center justify-end'>
            <div className='circle !bg-[#F8D656]'>1</div>
            <div className='circle'>2</div>
            <div className='circle'>3</div>
            <div className='circle'>4</div>
            <div className='circle'>5</div>
        </div>
    </div>
  )
}

export default Hero