"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Starfield() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = host.current;
    if (!element) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "low-power" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 12;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(element.clientWidth, element.clientHeight);
    element.appendChild(renderer.domElement);

    const count = window.innerWidth < 700 ? 280 : 600;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
      const gold = Math.random() > 0.48;
      colors[i * 3] = gold ? 1 : 0.7;
      colors[i * 3 + 1] = gold ? 0.72 : 0.7;
      colors[i * 3 + 2] = gold ? 0.2 : 0.7;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.65, sizeAttenuation: true });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let frame = 0;
    let animation = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const render = () => {
      animation = 0;
      if (!reducedMotion) {
        points.rotation.y += 0.00035;
        points.rotation.x += 0.00008;
      }
      renderer.render(scene, camera);
      if (!reducedMotion) animation = window.requestAnimationFrame(render);
    };
    render();

    const resize = () => {
      if (!element) return;
      camera.aspect = element.clientWidth / Math.max(element.clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(element.clientWidth, element.clientHeight);
      if (reducedMotion) renderer.render(scene, camera);
    };
    window.addEventListener("resize", resize);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && animation) {
        cancelAnimationFrame(animation);
        animation = 0;
      } else if (entry.isIntersecting && !reducedMotion && !animation) {
        animation = requestAnimationFrame(render);
      }
    });
    observer.observe(element);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="starfield" ref={host} aria-hidden="true" />;
}
