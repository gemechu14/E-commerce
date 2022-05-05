import React from 'react'
import Catagories from '../Components/Catagories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Products from '../Components/Products'

import Footers from '../Components/Footers'

const Home = () => {
  return (
    <div>
  <Navbar/>
  <Slider/>
  <Catagories/>
  <Products/>
  <Footers></Footers>


  </div>

  )
}

export default Home