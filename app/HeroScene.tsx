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
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const shouldAnimate = !prefersReducedMotion && !connection?.saveData;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        preserveDrawingBuffer: process.env.NODE_ENV !== "production",
        powerPreference: "default",
      });
    } catch {
      mount.dataset.webgl = "unavailable";
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ringGeometry = new THREE.TorusGeometry(1.65, 0.01, 12, 160);
    const rings = Array.from({ length: 3 }, (_, index) => {
      const ring = new THREE.Mesh(
        ringGeometry,
        new THREE.MeshBasicMaterial({
          color: 0xe5c98a,
          transparent: true,
          opacity: 0.42,
        }),
      );
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
    let isVisible = true;
    let pointerX = 0;
    let pointerY = 0;
    const timer = new THREE.Timer();

    const animate = (timestamp: number) => {
      timer.update(timestamp);
      const elapsed = timer.getElapsed();
      particles.rotation.y = elapsed * 0.055;
      particles.rotation.x = Math.sin(elapsed * 0.22) * 0.08;
      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.1 + index * 0.035);
        ring.rotation.y += 0.002 + index * 0.0008;
      });
      group.position.y = Math.sin(elapsed * 0.45) * 0.08;
      group.rotation.y += (pointerX - group.rotation.y) * 0.025;
      group.rotation.x += (pointerY - group.rotation.x) * 0.025;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (shouldAnimate && isVisible && !document.hidden && frame === 0) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 0.22;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 0.12;
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0.05 },
    );

    const resizeObserver = new ResizeObserver(resize);

    resize();
    renderer.render(scene, camera);
    mount.dataset.webgl = "ready";

    resizeObserver.observe(mount);
    intersectionObserver.observe(mount);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);
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
