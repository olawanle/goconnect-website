"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Box, Icosahedron, Torus } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function IconShape({ type }: { type: string }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.02;
            meshRef.current.rotation.x += 0.01;
        }
    });

    const scale = hovered ? 1.2 : 1;

    if (type === 'ai') {
        // AI: Techy Icosahedron (like a brain/node)
        return (
            <Float speed={5} rotationIntensity={2} floatIntensity={2}>
                <Icosahedron
                    ref={meshRef}
                    args={[1, 0]}
                    scale={scale}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <MeshDistortMaterial
                        color="#ec4899" // Pink/Purple for AI
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Icosahedron>
            </Float>
        );
    }

    if (type === 'web') {
        // Web: Geometric Cube/Box structure
        return (
            <Float speed={4} rotationIntensity={1.5} floatIntensity={1.5}>
                <Box
                    ref={meshRef}
                    args={[1.5, 1.5, 1.5]}
                    scale={scale * 0.8}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <meshStandardMaterial
                        color="#3b82f6" // Blue for Web
                        roughness={0.3}
                        metalness={0.8}
                        wireframe={true}
                    />
                </Box>
                {/* Inner solid core */}
                <Box args={[1, 1, 1]} scale={scale * 0.8}>
                    <meshStandardMaterial color="#3b82f6" roughness={0.1} metalness={0.5} opacity={0.5} transparent />
                </Box>
            </Float>
        );
    }

    if (type === 'consulting') {
        // Consulting: Torus (Connection/Loop) or Sphere
        return (
            <Float speed={3} rotationIntensity={1} floatIntensity={1}>
                <Torus
                    ref={meshRef}
                    args={[0.8, 0.3, 16, 32]}
                    scale={scale}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <MeshDistortMaterial
                        color="#eab308" // Gold/Yellow for Consulting/Ideas
                        distort={0.3}
                        speed={1.5}
                        roughness={0.2}
                        metalness={1}
                    />
                </Torus>
            </Float>
        );
    }

    return null;
}

export default function ServiceIcon3D({ type }: { type: "ai" | "web" | "consulting" }) {
    return (
        <div className="w-20 h-20 relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="!absolute inset-0">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#fff" />
                <IconShape type={type} />
            </Canvas>
        </div>
    );
}
