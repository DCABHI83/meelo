import React from 'react'
import CircularText from '../components/CircularText'

const Home = () => {
  return (
   <>
   <div>
    <CircularText 
     text="I*AM*AVAILABLE*FOR*FREELANCE"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
    />
   </div>
   </>
  )
}

export default Home
