import { useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { animated, useSpring } from '@react-spring/three'
import { MeshDistortMaterial } from '@react-three/drei'

const Scene = () => {


     const {width, height} = useThree(state => state.size)
//   const { scene } = useThree()
  // console.log(scene)
  // console.log(use)

  const [speedDistort, setSpeedDistort] = useState(0.5)

  const AnimatedMaterial = animated(MeshDistortMaterial)

  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      position: [0, 0],

      config: key => {
        switch(key) {
          case 'scale':
            return {
              mass: 40,
              friction: 100
            }
          default: 
            return {}
        }
      }
    })
  )



  const speedUp = () => {
    api.start({
      scale: 1.5
      
    })
    console.log('first')
  }

  const speedDown = () => {
    api.start({
      scale: 1
    })
    console.log('first')
  }

  const handlePointerMove = (e) => {
        const x = (e.offsetX / width) * 2 - 1
        const y = (e.offsetY / height) * - 2 + 1

        api.start({
        position: [- (x * 2), - (y * 2)]
        })
    }

    useEffect(() => {
      document.querySelector('canvas').addEventListener('mousemove', e => handlePointerMove(e))
    }, [width, height])
    

  return (
    <animated.mesh 
        onPointerEnter={speedUp}
        onPointerLeave={speedDown}
        scale={springs.scale}
        position={springs.position.to((x, y) => [x, y, 0])}
    >
        <sphereGeometry args={[1, 64, 64]} />
        <AnimatedMaterial
        speed={5}
        distort={speedDistort}
        />
    </animated.mesh>
  )
}

export default Scene