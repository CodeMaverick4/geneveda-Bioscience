"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleRing() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // SCENE
        const scene = new THREE.Scene();

        // DIMENSIONS
        let width = mountRef.current.clientWidth;
        let height = mountRef.current.clientHeight;

        // CAMERA
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 80; // Adjusted for container view

        // RENDERER
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // PARTICLES
        const count = 2000;
        const radius = 35;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const color1 = new THREE.Color("#7c1d85"); // Primary Purple
        const color2 = new THREE.Color("#ffeb0f"); // Accent Yellow

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r = radius + (Math.random() - 0.5) * 8; // Thicker band

            positions[i * 3] = Math.cos(angle) * r;
            positions[i * 3 + 1] = Math.sin(angle) * r;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

            // Mix colors
            const mixedColor = Math.random() > 0.5 ? color1 : color2;
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 1.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const ring = new THREE.Points(geometry, material);
        scene.add(ring);

        // MOUSE
        const mouse = { x: 0, y: 0 };
        const onMouseMove = (e: MouseEvent) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", onMouseMove);

        // ANIMATE
        let frameId: number;
        const animate = () => {
            frameId = requestAnimationFrame(animate);

            ring.rotation.z += 0.002;
            ring.rotation.x = mouse.y * 0.2;
            ring.rotation.y = mouse.x * 0.2;

            renderer.render(scene, camera);
        };
        animate();

        // RESIZE
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.target === mountRef.current) {
                    const newWidth = entry.contentRect.width;
                    const newHeight = entry.contentRect.height;

                    camera.aspect = newWidth / newHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(newWidth, newHeight);
                }
            }
        });

        resizeObserver.observe(mountRef.current);

        // CLEANUP
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("mousemove", onMouseMove);
            resizeObserver.disconnect();

            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }

            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
