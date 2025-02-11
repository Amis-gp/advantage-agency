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
                particles: {
                    number: {
                        value: 15,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    move: {
                        speed: 0.5
                    },
                    opacity: {
                        value: 0.3
                    },
                    size: {
                        value: 2
                    }
                },
                fps_limit: 30,
                retina_detect: false,
                detectRetina: false
            }}
        />
    );
}
