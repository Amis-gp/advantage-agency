interface SoundConfig {
    audio: HTMLAudioElement | null;
    volume: number;
}

export const SOUNDS: Record<string, SoundConfig> = {
    hover_1: {
        audio: typeof Audio !== 'undefined' ? new Audio('/sound/hover-1.wav') : null,
        volume: 0.3
    },
    hover_2: {
        audio: typeof Audio !== 'undefined' ? new Audio('/sound/hover-2.wav') : null,
        volume: 0.1
    },
    flipCard: {
        audio: typeof Audio !== 'undefined' ? new Audio('/sound/flip-card.mp3') : null,
        volume: 0.3
    },
    swoosh: {
        audio: typeof Audio !== 'undefined' ? new Audio('/sound/swoosh.mp3') : null,
        volume: 0.1
    },
    click: {
        audio: typeof Audio !== 'undefined' ? new Audio('/sound/click.wav') : null,
        volume: 0.6
    },
};

export const playSound = (soundName: keyof typeof SOUNDS) => {
    const soundConfig = SOUNDS[soundName];
    if (soundConfig.audio) {
        soundConfig.audio.currentTime = 0;
        soundConfig.audio.volume = soundConfig.volume;
        soundConfig.audio.play().catch(error => {
            if (error.name !== 'NotAllowedError') {
                console.error('Error playing sound:', error);
            }
        });
    }
};
