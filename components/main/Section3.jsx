import Image from 'next/image'
import React from 'react' 

import Image1 from '../../public/assets/images/section3-images/1.svg'
import Image2 from '../../public/assets/images/section3-images/2.svg'
import Image3 from '../../public/assets/images/section3-images/3.svg'

const Section3 = () => {
  return (
    <div className='section'>
        <div className='mini_section !pt-0'>
            <div className='w-1/2 h-auto flex flex-col gap-6 justify-evenly items-start p-10'>
                <p className='title_text'>
                    We’ve taken the <br/> guesswork out of <br/> <span className='!text-[#6636EE]'> pricing </span>
                </p>
                <p className='desc_text'>
                    Our pricing engine calculate rent based on location, quality of the home, square feet, appliances, amenities and more.
                </p>
                <button className='button'>
                    Find A Home
                </button>
            </div>
            <div className='w-1/2 h-auto flex justify-center items-center'>
                <Image
                    src={Image1}
                    alt=''
                    width={400}
                    className=''
                />
            </div>
        </div>

        <div className='mini_section !pt-0'>
            <div className='w-1/2 h-auto flex justify-center items-center'>
                <Image
                    src={Image2}
                    alt=''
                    width={350}
                    className=''
                />
            </div>
            <div className='w-1/2 h-auto flex flex-col gap-6 justify-evenly items-end p-10 !text-right'>
                <p className='title_text'>
                    Your <span className='!text-[#6636EE]'> home is ready </span> <br/> for living from day 1
                </p>
                <p className='desc_text'>
                    We’ve taken care of the hassles of setting <br/>up and moving in, so can get<br/> settled more quickly.
                </p>
                <button className='button'>
                    Find A Home
                </button>
            </div>
        </div>

        <div className='mini_section !flex-col text-center'>
            <div className='w-full h-auto flex flex-col gap-6'>
                <p className='title_text'>
                    <span className='!text-[#6636EE]'> Benefits </span> you will get
                </p>
                <p className='desc_text'>
                    We’ve taken care of the hassles of setting up and moving in, so can <br/> get settled more quickly.
                </p>
            </div>
            <div className='w-full h-auto grid grid-cols-3 gap-6 p-10 pt-2'>
                <div className='border-[2px] border-[#0C071B] rounded-[5px] p-4 !text-left gap-4 flex flex-col'>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-8'>
                        <div className='circle !bg-[#F8D656]'>1</div>
                        <p className='mini_title_text'>
                            Save money
                        </p>
                    </div>
                    <p className='desc_text'>
                        Save accommodation cost per household moved
                    </p>
                </div>

                <div className='border-[2px] border-[#0C071B] rounded-[5px] p-4 !text-left gap-4 flex flex-col'>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-8'>
                        <div className='circle !bg-[#6636EE]'>2</div>
                        <p className='mini_title_text'>
                            Save time
                        </p>
                    </div>
                    <p className='desc_text'>
                         your time much more
                    </p>
                </div>
                
                <div className='border-[2px] border-[#0C071B] rounded-[5px] p-4 !text-left gap-4 flex flex-col'>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-8'>
                        <div className='circle !bg-[#4BDBC8]'>3</div>
                        <p className='mini_title_text'>
                            Unlimited moves
                        </p>
                    </div>
                    <p className='desc_text'>
                        Enjoy unlimited moves for one fixed cost.
                    </p>
                </div>

                <div className='border-[2px] border-[#0C071B] rounded-[5px] p-4 !text-left gap-4 flex flex-col'>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-8'>
                        <div className='circle !bg-[#FF9430]'>4</div>
                        <p className='mini_title_text'>
                            Free advice
                        </p>
                    </div>
                    <p className='desc_text'>
                        Free advice and extra resources to help you
                    </p>
                </div>

                <div className='border-[2px] border-[#0C071B] rounded-[5px] p-4 !text-left gap-4 flex flex-col'>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-8'>
                        <div className='circle !bg-[#F1A3D7]'>5</div>
                        <p className='mini_title_text'>
                            Virtual tours
                        </p>
                    </div>
                    <p className='desc_text'>
                        Use a powerful platform to virtual tours and floor plans
                    </p>
                </div>
                
                <div className='border-[2px] border-[#0C071B] rounded-[5px] p-4 !text-left gap-4 flex flex-col'>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-8'>
                        <div className='circle !bg-[#96BA12]'>6</div>
                        <p className='mini_title_text'>
                            Case managing
                        </p>
                    </div>
                    <p className='desc_text'>
                        case management support for your homeless cases
                    </p>
                </div>    
            </div>
        </div>

        <div className='mini_section'>
            <div className='w-1/2 h-auto flex flex-col gap-6 justify-start items-start p-10 pt-0'>
                <p className='title_text'>
                    What our <span className='!text-[#6636EE]'> clients saying </span> about us
                </p>
                <p className='desc_text'>
                    Let’s have look what our honorable clients saying about us. About our platform and many other things. We have so many satisfied clients across the globe. 
                </p>
                <button className='button'>
                    View More
                </button>
            </div>
            <div className='w-1/2 h-auto flex flex-col justify-between items-start gap-8'>
                <Image
                    src={Image3}
                    alt=''
                    width={400}
                    className='pt-0'
                />
                <p className='mini_title_text'>
                    “The best way to find a house”
                </p>
                <p className='desc_text'>
                    Let’s have look what our honorable clients saying about us. About our platform and many other things. We have so many satisfied clients across the globe. 
                </p>
            </div>
        </div>        
    </div>
  )
}

export default Section3