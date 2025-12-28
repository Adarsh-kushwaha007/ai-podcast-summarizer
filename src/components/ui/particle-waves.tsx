"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    color: string;
}

export function ParticleWaves() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;
        let time = 0;

        const GAP = 25; // Closer grid for better wave resolution
        const RADIUS = 1.5;
        const MOUSE_RADIUS = 300; // Radius of visibility/reveal
        const FORCE_FACTOR = 0.2; // Softer repulsion
        const RETURN_SPEED = 0.08;
        const DAMPING = 0.90;

        const initParticles = () => {
            particles = [];
            const rows = Math.ceil(canvas.height / GAP);
            const cols = Math.ceil(canvas.width / GAP);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * GAP + GAP / 2;
                    const y = j * GAP + GAP / 2;
                    particles.push({
                        x,
                        y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0,
                        // Colors are determined in the render loop for theme switching
                        color: '',
                    });
                }
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.05; // Global time for wave animation

            // RGB values for theme-aware coloring
            const rgbColor = theme === 'dark' ? '255, 255, 255' : '124, 58, 237'; // White or Violet-600

            particles.forEach((p) => {
                // Distance to mouse (squared for perf, but we need sqrt for physics anyway)
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Visibility Check: Only process/draw if within radius
                if (distance < MOUSE_RADIUS) {

                    // 1. Calculate Opacity
                    // Linear fade: 1 at center, 0 at edge
                    // Squared fade looks smoother
                    const opacity = Math.max(0, 1 - Math.pow(distance / MOUSE_RADIUS, 2));

                    // 2. Physics: Repulsion (Water displacement)
                    // Push particles away from cursor
                    const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
                    const angle = Math.atan2(dy, dx);

                    const forceX = Math.cos(angle) * force * FORCE_FACTOR * -30;
                    const forceY = Math.sin(angle) * force * FORCE_FACTOR * -30;

                    p.vx += (forceX + (p.originX - p.x) * RETURN_SPEED);
                    p.vy += (forceY + (p.originY - p.y) * RETURN_SPEED);
                    p.vx *= DAMPING;
                    p.vy *= DAMPING;

                    p.x += p.vx;
                    p.y += p.vy;

                    // 3. Continuous Wave Motion
                    // Apply a sine wave offset to the Y position based on X position and time
                    // This creates a "rippling surface" effect
                    const waveY = Math.sin(p.x * 0.03 + time) * 4 + Math.sin(p.y * 0.03 + time) * 4;

                    // Draw
                    ctx.fillStyle = `rgba(${rgbColor}, ${opacity})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y + waveY, RADIUS, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // Reset positions for hidden particles so they don't get stuck
                    p.x = p.originX;
                    p.y = p.originY;
                    p.vx = 0;
                    p.vy = 0;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        handleResize();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}
