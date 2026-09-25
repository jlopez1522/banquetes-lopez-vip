"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ringGeometry = new THREE.TorusGeometry(1.65, 0.01, 12, 160);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xe5c98a,
      transparent: true,
      opacity: 0.48,
    });

    const rings = Array.from({ length: 3 }, (_, index) => {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial.clone());
      ring.rotation.x = 1.05 + index * 0.18;
      ring.rotation.y = index * 0.72;
      ring.position.set(1.65 - index * 0.32, 0.35 - index * 0.1, -index * 0.4);
      ring.scale.setScalar(1 + index * 0.26);
      group.add(ring);
      return ring;
    });

    const count = 240;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i += 1) {
      const radius = 1.4 + Math.random() * 3.8;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius + 1.25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.2;
      positions[i * 3 + 2] = Math.sin(angle) * radius - 1.6;

      color.set(Math.random() > 0.22 ? 0xe5c98a : 0xb83c86);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        size: 0.045,
        vertexColors: true,
        transparent: true,
        opacity: 0.86,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    group.add(particles);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    let frame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      particles.rotation.y = elapsed * 0.055;
      particles.rotation.x = Math.sin(elapsed * 0.22) * 0.08;
      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.1 + index * 0.035);
        ring.rotation.y += 0.002 + index * 0.0008;
      });
      group.position.y = Math.sin(elapsed * 0.45) * 0.08;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };

    resize();
    renderer.render(scene, camera);

    if (!prefersReducedMotion) {
      animate();
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
      ringGeometry.dispose();
      rings.forEach((ring) => {
        ring.material.dispose();
      });
      particleGeometry.dispose();
      particles.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="hero-scene" aria-hidden="true" />;
}
