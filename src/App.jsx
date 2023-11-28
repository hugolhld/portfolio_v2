import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import { MeshDistortMaterial } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  const [speedDistort, setSpeedDistort] = useState(0.5)

  const AnimatedMaterial = animated(MeshDistortMaterial)

  const SpeedUp = () => {
    setSpeedDistort(0.6)
  }

  return (
    <div className='w-screen h-screen'>
      <Canvas className='w-screen h-screen'>
        <mesh onPointerEnter={SpeedUp} onPointerLeave={() => setSpeedDistort(0.5)}>
          <sphereGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            speed={0.5}
            distort={speedDistort}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
