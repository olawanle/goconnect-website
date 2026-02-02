"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import Macbook from './Macbook';
import { Suspense } from 'react';

export default function ThreeScene() {
    return (
        <div className="hidden md:block fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, -30], fov: 35 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <Suspense fallback={null}>
                    <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
                        <Macbook scale={2.5} />
                    </group>
                    <Environment preset="city" />
                </Suspense>

                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
            </Canvas>
        </div>
    );
}
