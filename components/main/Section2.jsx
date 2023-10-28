import Image from 'next/image'
import React from 'react'

import Image1 from '../../public/assets/images/section2-images/1.svg'
import Image2 from '../../public/assets/images/section2-images/2.svg'

const Section2 = () => {
  return (
    <div className='section !text-center'>
        <p className='title_text'>
            Whether you’re <sapn className='!text-[#6636EE]'> moving with <br/> friends or flying solo, </sapn> we’ve got <br/> you covered
        </p>
        <div className='pt-6 w-full h-auto grid grid-cols-2 gap-4'>
            <div className='h-auto border-[2px] border-[#0C071B] rounded-[5px] flex flex-col justify-evenly items-center gap-6 px-10 pb-14 pt-6'>
                <Image
                    src={Image1}
                    alt=''
                    width={0}
                    className=''
                />
                <p className='title_text'>
                    Moving solo
                </p>
                <p className='desc_text'>
                    You’re interested in joining an existing home with their current roommates.  
                </p>
                <button className='button'>
                    View Available Homes
                </button>
            </div>
            <div className='h-auto border-[2px] border-[#0C071B] rounded-[5px] flex flex-col justify-evenly items-center gap-6 px-10 pb-14 pt-6'>
                <Image
                    src={Image2}
                    alt=''
                    width={0}
                    className=''
                />
                <p className='title_text'>
                    Moving with friends
                </p>
                <p className='desc_text'>
                    You have a group you’re moving with and are looking for the perfect home.  
                </p>
                <button className='button'>
                    View Entire Home
                </button>
            </div>
        </div>
    </div>
  )
}

export default Section2