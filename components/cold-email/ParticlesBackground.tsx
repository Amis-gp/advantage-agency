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
                        value: "#D12923"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.6,
                        random: false
                    },
                    size: {
                        value: 2,
                        random: true
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#D12923",
                        opacity: 0.5,
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
                                opacity: 0.4
                            }
                        }
                    }
                },
                background: {
                    color: "#000"
                }
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
