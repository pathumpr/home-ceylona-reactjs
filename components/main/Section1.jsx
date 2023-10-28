import Image from 'next/image'
import React from 'react'

import Image1 from '../../public/assets/images/section1-images/1.svg'
import Image2 from '../../public/assets/images/section1-images/2.svg'
import Image3 from '../../public/assets/images/section1-images/3.svg'
import Image4 from '../../public/assets/images/section1-images/4.svg'

const Section1 = () => {
  return (
    <div className='section !flex-row !gap-0'>
        <div className='bg-[#4BDBC8] h-auto w-1/2 flex flex-col gap-14 justify-evenly items-start p-10'>
            <p className='title_text'>We believe that <span className=' !text-[#6636EE]'> living <br/> together is better </span> <br/> than living alone</p>
            <p className='desc_text !text-[#0C071B]'>Building a next-generation collaborative platform to connect renters, homeowners and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that make sense</p>
            <button className='button'>
                More About Us
            </button>
        </div>
        <div className='primary_bg_color h-auto w-1/2 p-16 grid grid-cols-2 gap-4'>
            <div className='flex flex-col justify-start gap-4' w-auto h-auto>
                <Image
                    src={Image1}
                    alt=''
                    width={0}
                />
                <p className='desc_text !text-[#F4F4F4]'>
                    Breakfast together recapping the night
                </p>
            </div>
            <div className='flex flex-col justify-start gap-4 w-auto h-auto'>
                <Image
                    src={Image2}
                    alt=''
                    width={0}
                />
                <p className='desc_text !text-[#F4F4F4]'>
                    Casual weekday hangouts together
                </p>
            </div>
            <div className='flex flex-col justify-start gap-4 w-auto h-auto'>
                <Image
                    src={Image3}
                    alt=''
                    width={0}
                />
                <p className='desc_text !text-[#F4F4F4]'>
                    Explore the city together
                </p>
            </div>
            <div className='flex flex-col justify-start gap-4 w-auto h-auto'>
                <Image
                    src={Image4}
                    alt=''
                    width={0}
                />
                <p className='desc_text !text-[#F4F4F4]'>
                    Making new friends along the way
                </p>
            </div>
        </div>
    </div>
  )
}

export default Section1