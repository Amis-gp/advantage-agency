"use client"

import React, { useState, useRef, useCallback } from 'react';

interface VideoPlayerProps { 
  videoUrl: string, 
  placeholder?: string,
  className?: string
}

const VideoPlayerComponent = ({ 
  videoUrl, 
  placeholder,
  className
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const loadVideo = useCallback(() => {
    if (videoRef.current && !isVideoLoaded) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
      setIsVideoLoaded(true);
    }
  }, [videoUrl, isVideoLoaded]);

  const togglePlay = useCallback(() => {
    if (!isVideoLoaded) {
      loadVideo();
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        if (previewRef.current) {
          previewRef.current.style.display = 'none';
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isVideoLoaded, isPlaying, loadVideo]);

  return (
    <div className="relative w-full overflow-hidden group cursor-pointer" onClick={togglePlay}>
      {!isPlaying && (
        <video 
          ref={previewRef}
          src={placeholder}
          className={`absolute inset-0 w-full ${className}`}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      
      <video 
        ref={videoRef}
        src={videoUrl}
        className={`w-full mx-auto ${className}`}
        playsInline
      />

      {!isPlaying && (
        <div className='bg-black/30 absolute inset-0 hover:bg-black/40 transition-all duration-300 group'>
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

// Мемоізований компонент VideoPlayer
const VideoPlayer = React.memo(VideoPlayerComponent);

export default VideoPlayer;
