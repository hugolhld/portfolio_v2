import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from '../components/Scene'

const Home = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center relative overflow-hidden'>
        <div className='text-center text-2xl text-white font-bold flex flex-col gap-12 absolute z-10 pointer-events-none'>
            <span>
                H.DEV
            </span>
            <span>
                HELLO I'M
            </span>
            <span>
                Creative
            </span>
            <span>
                Developper
            </span>
        </div>
        {/* <div className='absolute'> */}
            <Canvas className=' absolute '>
                <Scene />
            </Canvas>
        {/* </div> */}
    </section>
  )
}

export default Home