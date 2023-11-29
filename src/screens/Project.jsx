import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cylinder from '../components/Cylinder/Cylinder'

const Project = () => {

    /* 
    
    Ajouter plusieurs cylindre avec chacun uen div ou une image
    Les superposer

    */

  return (
    <section className='w-full h-screen relative'>
        Projects
        <Canvas className='absolute'>
            <Cylinder />
        </Canvas>
    </section>
  )
}

export default Project