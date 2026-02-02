"use client";

import React, { useRef, useLayoutEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Macbook(props: any) {
    const { nodes, scene } = useGLTF('/Macbook Pro.glb');
    const group = useRef<THREE.Group>(null!);
    const [lidNode, setLidNode] = useState<THREE.Object3D | null>(null);

    // Find the lid dynamically
    useLayoutEffect(() => {
        // Try to find a node that looks like the lid
        let foundLid: THREE.Object3D | null = null;

        // 1. Check known names in the nodes map
        // Note: useGLTF usually returns specific nodes by name
        const nodeKeys = Object.keys(nodes);
        const lidKey = nodeKeys.find(key => key.toLowerCase().includes('lid') || key.toLowerCase().includes('screen'));
        if (lidKey) {
            foundLid = nodes[lidKey] as THREE.Object3D;
        }

        // 2. Search hierarchy if not found in top-level nodes
        if (!foundLid && scene) {
            scene.traverse((child) => {
                // Avoid finding the camera or light if they are named similarly
                if (child.name.toLowerCase().includes('lid') || child.name.toLowerCase().includes('screen')) {
                    if (!foundLid) foundLid = child;
                }
            })
        }

        if (foundLid) {
            console.log("Found lid:", foundLid.name);
            setLidNode(foundLid);
            // Set initial closed state (usually PI/2 or similar depending on axis)
            // We'll assume the model is open by default and we need to close it initially
            foundLid.rotation.x = Math.PI / 2; // Start closed
        } else {
            console.warn("Could not find MacBook lid node automatically.");
        }
    }, [nodes, scene]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Simulate scroll opening:
        // We want it to open as "scroll" happens. Since we don't have global scroll state linked here simply,
        // we will simulate it opening on load for now, or bind it to window.scrollY if performant enough.
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        // const maxScroll = typeof window !== 'undefined' ? (document.body.scrollHeight - window.innerHeight) : 1000;
        const scrollProgress = Math.min(scrollY / 1000, 1); // Open fully after 1000px scroll

        if (lidNode) {
            // Closed ~> Open
            // Adjust these angles based on your specific model's rigging
            // Usually 90deg (1.57rad) is closed, 0 is open (or -0.2 for back tilt)
            const closedAngle = 1.6;
            const openAngle = -0.3;
            lidNode.rotation.x = THREE.MathUtils.lerp(closedAngle, openAngle, scrollProgress);
        }

        // Gentle float animation for the whole laptop
        if (group.current) {
            group.current.rotation.y = Math.sin(t / 4) * 0.1;
            // group.current.rotation.z = Math.cos(t / 4) * 0.05;
            group.current.position.y = Math.sin(t / 2) * 0.1 - 1; // Base position offset
        }
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}

useGLTF.preload('/Macbook Pro.glb');
