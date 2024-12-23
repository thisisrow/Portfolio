import React from 'react'
import plainScreen from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'

const Plane = ({ isRotation, ...props }) => {
    const { scene } = useGLTF(plainScreen);
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane