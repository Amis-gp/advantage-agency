'use client';
import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';

export default function ParticlesBackground() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <Particles
                init={particlesInit}
                options={{
                    fullScreen: false,
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        color: {
                            value: ["#4F46E5", "#06B6D4", "#7C3AED"]
                        },
                        shape: {
                            type: "circle"
                        },
                        opacity: {
                            value: 0.9,
                            random: false
                        },
                        size: {
                            value: 2,
                            random: true
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#4F46E5",
                            opacity: 0.7,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: {
                                default: "bounce"
                            }
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab"
                            }
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                links: {
                                    opacity: 0.3
                                }
                            }
                        }
                    },
                }}
                className="absolute inset-0 z-0"
            />

            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Moving gradient circles with random initial positions */}
                    <motion.div
                        initial={{ x: "70vw", y: "20vh" }}  // Right side start
                        animate={{
                            x: ["70vw", "-30vw", "40vw", "-20vw", "70vw"],
                            y: ["20vh", "60vh", "-20vh", "40vh", "20vh"],
                            scale: [1, 1.2, 0.8, 1.1, 1],
                            opacity: [0.2, 0.4, 0.3, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.25, 0.5, 0.75, 1]
                        }}
                        className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,#4F46E5_0%,transparent_70%)] blur-2xl opacity-20"
                    />
                    <motion.div
                        initial={{ x: "-50vw", y: "-30vh" }}  // Left top start
                        animate={{
                            x: ["-50vw", "30vw", "-20vw", "40vw", "-50vw"],
                            y: ["-30vh", "40vh", "60vh", "-20vh", "-30vh"],
                            scale: [1.2, 0.9, 1.1, 0.8, 1.2],
                            opacity: [0.3, 0.5, 0.2, 0.4, 0.3]
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.25, 0.5, 0.75, 1]
                        }}
                        className="absolute w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,#06B6D4_0%,transparent_70%)] blur-2xl opacity-20"
                    />
                    <motion.div
                        initial={{ x: "20vw", y: "70vh" }}  // Bottom center start
                        animate={{
                            x: ["20vw", "-40vw", "50vw", "-30vw", "20vw"],
                            y: ["70vh", "30vh", "-40vh", "60vh", "70vh"],
                            scale: [0.8, 1.1, 0.9, 1.2, 0.8],
                            opacity: [0.2, 0.3, 0.4, 0.2, 0.2]
                        }}
                        transition={{
                            duration: 32,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.25, 0.5, 0.75, 1]
                        }}
                        className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,#7C3AED_0%,transparent_70%)] blur-2xl opacity-20"
                    />

                    {/* Moving light beams */}
                    <motion.div
                        initial={{ x: "-100%", y: "30vh" }}
                        animate={{
                            x: ["100%", "-100%"],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent blur-sm"
                    />
                    <motion.div
                        initial={{ x: "100%", y: "70vh" }}
                        animate={{
                            x: ["-100%", "100%"],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent blur-sm"
                    />

                    {/* Pulsing dots */}
                    <motion.div
                        initial={{ x: "80vw", y: "20vh" }}
                        animate={{
                            scale: [1.5, 1, 1.5],
                            opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute w-3 h-3 rounded-full bg-[#06B6D4] blur-sm"
                    />
                </div>
            </div>
        </>
    );
}
