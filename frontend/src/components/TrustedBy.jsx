import React, { useEffect, useRef, useState } from 'react'
import { company_logos } from '../assets/assets'
import {motion, useAnimation} from "framer-motion"

const TrustedBy = () => {
    const trackRef = useRef(null)
    const controls = useAnimation()
    const [width, setWidth] = useState(0)

    useEffect(()=> {
        if(trackRef.current){
            setWidth(trackRef.current.scrollWidth / 2)
        }

        controls.start({
            x:[-0, -width],
            transition:{
                x:{
                    repeat:Infinity,
                    repeatType:"loop",
                    duration:20,
                    ease:"linear",
                }
            }
        })
    },[width,controls])
  return (
 
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40
    gap-10 text-gray-700 dark:text-white/80'>
        <h3 className='font-semibold'>Trusted by Leading Companies</h3>
        
       {/**<div className='flex items-center justify-center flex-wrap gap-10 m-4'> */ }
        <div className='relative w-full overflow-hidden'>
        <motion.div
        className='flex w-max gap-10'
        // animate={{x:["0px","-100%"] }}
        // transition={{
        //     x:{
        //     repeat:Infinity,
        //     repeatType:"loop",
        //     duration:20,
        //     ease:"linear"
        //     }
        // }}
        animate={controls}
        ref={trackRef}
        >
            {[...company_logos,...company_logos,...company_logos]
            .map((logo,i)=> (
                <img key={i} src={logo} alt='' className='max-h-5 sm:max-h-6
                dark:drop-shadow-xl' />
            ))}
        </motion.div>
        </div>
    </div>
   
  )
}

export default TrustedBy