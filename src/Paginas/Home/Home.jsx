import React from 'react'
import Hero from '../../components/Hero/Hero'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import NewProduct from '../../components/NewProduct/NewProduct'

function Home() {
  return (
    <>
    <Hero/>
    <FeaturedProducts/>
    <NewProduct/>
    </>
  )
}

export default Home