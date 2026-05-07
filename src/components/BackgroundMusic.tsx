"use client";

import { useState, useRef, useEffect } from "react";

// Free ambient music URL (royalty-free lo-fi)
const MUSIC_URL = "https://cdn.pixabay.com/audio/2022/10/18/audio_fd4bab3034.mp3";

export default function BackgroundMusic() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if user has already unlocked music in this session
    const unlocked = sessionStorage.getItem("helios_music_unlocked");
    const mutedPref = localStorage.getItem("helios_music_muted");
    
    if (unlocked === "true") {
      setShowOverlay(false);
      setIsUnlocked(true);
      if (mutedPref === "true") {
        setIsMuted(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isUnlocked && audioRef.current) {
      audioRef.current.volume = 0.3;
      if (!isMuted) {
        audioRef.current.play().catch(() => {
          // Autoplay might still be blocked, handle silently
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isUnlocked, isMuted]);

  const handleUnlock = () => {
    setShowOverlay(false);
    setIsUnlocked(true);
    sessionStorage.setItem("helios_music_unlocked", "true");
    
    // Start playing
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    localStorage.setItem("helios_music_muted", String(newMuted));
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop preload="auto">
        <source src={MUSIC_URL} type="audio/mpeg" />
      </audio>

      {/* Welcome Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-opacity duration-700">
          {/* Ambient particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,20,147,0.15)_0%,_transparent_70%)] animate-pulse"></div>
            <div className="absolute w-[400px] h-[400px] top-[20%] right-[10%] rounded-full bg-[radial-gradient(circle,_rgba(255,51,51,0.1)_0%,_transparent_70%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute w-[300px] h-[300px] bottom-[20%] left-[15%] rounded-full bg-[radial-gradient(circle,_rgba(255,204,0,0.08)_0%,_transparent_70%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 text-center max-w-xl mx-4">
            {/* Brand Logo */}
            <div className="mb-8">
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mb-6">TikTok Channel Network</div>
              <h2 className="font-display text-4xl md:text-6xl text-brand-gradient uppercase tracking-wider mb-2 drop-shadow-[0_0_30px_rgba(255,20,147,0.3)]">
                HELIOS TALENT
              </h2>
              <div className="w-24 h-[2px] bg-brand-gradient mx-auto mt-4"></div>
            </div>

            {/* Call to Action */}
            <div className="mb-10">
              <h3 className="text-white text-xl md:text-2xl font-light leading-relaxed mb-2">
                Bạn đã sẵn sàng
              </h3>
              <h3 className="text-white text-2xl md:text-3xl font-display uppercase tracking-wide">
                khám phá giá trị bản thân chưa?
              </h3>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-pink-500/50"></span>
              <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(255,20,147,0.8)] animate-pulse"></span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-pink-500/50"></span>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleUnlock}
              className="group relative overflow-hidden bg-transparent border-2 border-white/20 text-white font-display uppercase tracking-[0.2em] px-12 py-5 rounded-full transition-all duration-500 hover:border-pink-500 hover:shadow-[0_0_40px_rgba(255,20,147,0.3)] hover:scale-105 active:scale-95 text-lg"
            >
              <span className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-3 justify-center group-hover:text-black transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                </svg>
                Bắt Đầu Khám Phá
              </span>
            </button>

            {/* Subtitle */}
            <p className="mt-8 text-xs font-mono text-gray-600 uppercase tracking-wider">
              Đồng hành — Hỗ trợ — Tỏa sáng
            </p>
          </div>
        </div>
      )}

      {/* Floating Music Toggle Button (only visible after unlock) */}
      {isUnlocked && (
        <button
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-[70] w-12 h-12 rounded-full bg-[#111]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:border-pink-500 hover:shadow-[0_0_15px_rgba(255,20,147,0.3)] transition-all duration-300 group"
          aria-label={isMuted ? "Bật nhạc" : "Tắt nhạc"}
          title={isMuted ? "Bật nhạc nền" : "Tắt nhạc nền"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-pink-500 group-hover:text-pink-400 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
