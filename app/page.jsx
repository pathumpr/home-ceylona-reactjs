import React from 'react'
import NavBar from '@/components/main/NavBar'
import Hero from '@/components/main/Hero'
import Section1 from '@/components/main/Section1'
import Section2 from '@/components/main/Section2'
import Section3 from '@/components/main/Section3'
import Section4 from '@/components/main/Section4'
import Footer from '@/components/main/Footer'
import Strapi from '@/components/others/Strapi'

const Home = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-6'>
      {/* <NavBar/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/> */}
      <Strapi/>
    </div>
  )
}

export default Home