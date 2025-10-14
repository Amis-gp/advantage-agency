"use client"

import React, { useState, useRef, useCallback } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  placeholder?: string;
  className?: string;
}

const VideoPlayerComponent = ({ 
  videoUrl, 
  placeholder,
  className
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  const loadVideo = useCallback(() => {
    if (videoRef.current && !isVideoLoaded) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
      setIsVideoLoaded(true);
    }
  }, [videoUrl, isVideoLoaded]);

  const handlePlay = useCallback(() => {
    setHasStartedPlaying(true);
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (!isVideoLoaded) {
      loadVideo();
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isVideoLoaded, isPlaying, loadVideo]);

  return (
    <div className={`relative w-full overflow-hidden group cursor-pointer ${className} bg-black`} onClick={togglePlay}>
      {!hasStartedPlaying && placeholder && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
          <img 
            src={placeholder}
            alt="Video preview"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      )}
      
      <video 
        ref={videoRef}
        className={`w-full h-full object-contain ${!hasStartedPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        playsInline
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {!hasStartedPlaying && (
        <div className='bg-black/30 absolute inset-0 hover:bg-black/40 transition-all duration-300 group z-20'>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="group-hover:bg-white/25 bg-black/25 group-hover:scale-110 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const VideoPlayer = React.memo(VideoPlayerComponent);

export default VideoPlayer;
