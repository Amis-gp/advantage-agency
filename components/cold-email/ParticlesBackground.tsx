'use client';
import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

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
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}
        />
    );
}
