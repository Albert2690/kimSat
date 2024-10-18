import { useEffect } from 'react'
// import React{useEffect} from 'react'
import About1 from '../Components/AboutComponents/About1'
import About2 from '../Components/AboutComponents/About2'
import About3 from '../Components/AboutComponents/About3'

function AboutPage() {
  useEffect(() => {
    window.scroll(0,{
      behaviour:'smooth'
    })
  },[])
  return (
   <>
   <About1/>
   <About2/>
   <About3/>
   </>
  )
}

export default AboutPage