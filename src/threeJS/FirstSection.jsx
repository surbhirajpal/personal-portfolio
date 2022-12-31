
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import './FirstSection.less';

const Box = ({
    meshRef
}) => {
    // useFrame(() => (meshRef.current.rotation.x += 0.01))

    return (
        <mesh
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
            {/* <planeGeometry arg={[window.clientWidth/135, window.clientHeight/135, 1, 1]}/> */}
        </mesh>
    );
};


const FirstSection = () => {
    const boxRef = useRef()

    const handleScroll = (event) => {
        boxRef.current.rotation.x -= 0.02 * Math.sign(event.deltaY);
    }
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <Canvas onWheel={handleScroll} className='first-section'>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box
                    position={[0, 0, 0]}
                    meshRef={boxRef}
                />
            </Canvas>
        </div>
    );
};

export default FirstSection;