'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnter = () => {
    // Start Audio
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.error("Audio play failed", e));
    }
    // Trigger Gate Animation
    setHasEntered(true);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const nextState = !isMuted;
      setIsMuted(nextState);
      audioRef.current.muted = nextState;
      if (audioRef.current.paused) {
        audioRef.current.play().catch(() => { });
      }
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-[#4a0404] selection:text-[#d4af37] relative overflow-hidden font-roman">

      {/* --- GOLDEN GATES SPLASH SCREEN --- */}
      {/* Container is always present but pointer-events-none when open to let user click through */}
      <div className={`fixed inset-0 z-[100] flex justify-center items-center pointer-events-none`}>

        {/* LEFT GATE - DARK MARBLE */}
        <div
          className={`absolute left-0 top-0 w-[50%] h-full bg-[#050505] border-r-4 border-[#bf953f] transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto z-20 ${hasEntered ? '-translate-x-full' : 'translate-x-0'}`}
          style={{ borderImage: 'linear-gradient(to bottom, #8a6c25, #ffd700, #8a6c25) 1' }}
        >
          {/* Texture: Ancient Stone */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-60 mix-blend-overlay"></div>
          {/* Lighting: Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a0a] to-[#1a1205]"></div>
        </div>

        {/* RIGHT GATE - DARK MARBLE */}
        <div
          className={`absolute right-0 top-0 w-[50%] h-full bg-[#050505] border-l-4 border-[#bf953f] transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto z-20 ${hasEntered ? 'translate-x-full' : 'translate-x-0'}`}
          style={{ borderImage: 'linear-gradient(to bottom, #8a6c25, #ffd700, #8a6c25) 1' }}
        >
          {/* Texture: Ancient Stone */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-60 mix-blend-overlay"></div>
          {/* Lighting: Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-l from-black via-[#0a0a0a] to-[#1a1205]"></div>
        </div>

        {/* ATMOSPHERE LAYER (Visuals on top of gates) */}
        <div className={`absolute inset-0 pointer-events-none z-30 transition-opacity duration-1000 ${hasEntered ? 'opacity-0' : 'opacity-100'}`}>

          {/* 1. ANIMATED GOD CLOUDS - Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[50vh] md:h-[60vh] overflow-hidden opacity-90">
            <div className="absolute bottom-[-50%] left-[-20%] w-[140%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bf953f]/25 via-transparent to-transparent blur-[80px] animate-cloud-flow-1"></div>
            <div className="absolute bottom-[-30%] right-[-20%] w-[140%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffdb58]/15 via-transparent to-transparent blur-[60px] animate-cloud-flow-2"></div>
          </div>

          {/* 2. RISING EMBERS */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="ember absolute rounded-full bg-gradient-to-t from-[#ffaa00] to-transparent opacity-0"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  animation: `rise ${Math.random() * 3 + 4}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>

          {/* 3. GOD RAYS (Center Light) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[60vh] bg-[#ffd700] shadow-[0_0_100px_40px_rgba(191,149,63,0.3)] opacity-60 mix-blend-screen animate-pulse-slow"></div>
        </div>

        {/* INTERACTION LAYER */}
        <div className={`relative z-50 flex flex-col items-center justify-center transition-opacity duration-700 delay-200 pointer-events-auto ${hasEntered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

          {/* Button Container */}
          <button
            onClick={handleEnter}
            className="group relative px-12 py-8 md:px-24 md:py-12 cursor-pointer transition-all duration-500 hover:scale-105"
          >
            {/* 1. Cinematic Rotating Ring using Conic Gradient */}
            <div className="absolute inset-[-6px] rounded-lg bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_#bf953f_90deg,_transparent_180deg,_#bf953f_270deg,_transparent_360deg)] opacity-60 animate-spin-slow mix-blend-screen group-hover:opacity-100 group-hover:shadow-[0_0_50px_rgba(191,149,63,0.6)]"></div>

            {/* 2. Dark Background Solid */}
            <div className="absolute inset-0 bg-[#080808] border border-[#bf953f]/50 shadow-[0_0_50px_rgba(0,0,0,0.8)]"></div>

            {/* 3. Text Content */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="text-[10px] tracking-[0.6em] text-[#bf953f]/60 uppercase group-hover:text-[#bf953f] transition-colors">The Journey Begins</span>
              <div className="flex items-center gap-6">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#bf953f]"></span>
                <span className="text-xl md:text-4xl font-black tracking-[0.2em] gold-text uppercase drop-shadow-2xl group-hover:text-white transition-colors whitespace-nowrap">
                  Go Beyond!!
                </span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#bf953f]"></span>
              </div>
            </div>
          </button>
        </div>
      </div>


      {/* --- MAIN SITE CONTENT (Revealed behind gates) --- */}

      {/* 1. Marble Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] z-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          filter: 'contrast(150%) brightness(100%)'
        }}>
      </div>

      {/* 2. Heavy Vignette */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)] z-30 pointer-events-none opacity-80"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-10 mix-blend-plus-lighter transition-all duration-1000 delay-1000 ${hasEntered ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <Link href="/" className="gold-text text-xl md:text-2xl font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
          HeIsAreeb
        </Link>
        <button
          onClick={toggleMute}
          className="group relative flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md border border-[#bf953f]/50 transition-all hover:border-[#bf953f] hover:bg-black/60"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#bf953f] group-hover:text-white transition-colors">
            {isMuted ? 'UNMUTE' : 'MUTE'}
          </span>
          <span className={`w-1.5 h-1.5 rotate-45 border border-[#bf953f] ${isMuted ? 'bg-transparent' : 'bg-[#bf953f] shadow-[0_0_8px_#bf953f]'}`} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center items-start px-6 md:px-20 relative overflow-hidden">
        {/* Video Background */}
        <div className={`absolute top-0 right-0 w-full md:w-full h-full transition-all duration-1000 ease-out transform ${hasEntered ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
          <video
            className="w-full h-full object-cover object-[70%] md:object-center opacity-60 grayscale sepia-[0.4] contrast-[1.2] brightness-75"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Video-770.mp4" type="video/mp4" />
          </video>
          <audio ref={audioRef} loop className="hidden">
            <source src="/ReelAudio-3432.mp3" type="audio/mp3" />
          </audio>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#0f0a05]/90 to-[#2b1d1d]/10 z-10" />

        <div className="z-20 max-w-6xl pt-24 md:pt-0 relative">
          <div className={`w-24 h-[1px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mb-8 transition-all duration-1000 delay-[1200ms] ${hasEntered ? 'opacity-100 w-24' : 'opacity-0 w-0'}`}></div>
          <div className={`mb-8 text-xs md:text-sm font-roman text-[#e5e5e5]/70 tracking-[0.2em] uppercase transition-all duration-1000 delay-[1400ms] pl-2 border-l border-[#bf953f]/30 ${hasEntered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            "The more impossible it seems,<br className="md:hidden" /> the more it attracts me."
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-[8.5rem] font-bold uppercase tracking-tight leading-[0.9] md:leading-[0.85] mb-10 drop-shadow-2xl">
            <span className={`block transition-all duration-700 delay-[1500ms] text-[#e5e5e5] ${hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Be a Part
            </span>
            <span className={`block transition-all duration-700 delay-[1700ms] ${hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Of The <span className="gold-text inline-block relative glow-gold">
                Change
              </span>
            </span>
          </h1>
          <div className={`text-sm md:text-xl font-medium tracking-[0.3em] text-[#bf953f] mb-12 flex items-center gap-6 transition-all duration-700 delay-[2000ms] ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="h-[1px] w-8 md:w-16 bg-[#bf953f] shadow-[0_0_5px_#bf953f]"></span>
            <p className="drop-shadow-lg">THE REVOLUTION IS COMING.</p>
          </div>
          <a
            href="https://www.instagram.com/heisareeb?igsh=MTdmZTV2bTdpd3h0cw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden transition-all duration-500 delay-[2200ms] ${hasEntered ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="absolute inset-0 w-full h-full border border-[#bf953f]/40"></span>
            <span className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] border border-[#bf953f] opacity-80 group-hover:scale-[0.98] transition-transform duration-500"></span>
            <span className="relative z-10 text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#bf953f] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
              Follow The Journey
            </span>
            <div className="absolute inset-0 bg-[#bf953f] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          </a>

          {/* Email Contact */}
          <div className={`mt-10 transition-all duration-1000 delay-[2500ms] flex flex-col items-start gap-2 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-[10px] text-[#bf953f]/40 uppercase tracking-[0.2em] pl-1">Inquiries</span>
            <a href="mailto:areeb@heisareeb.com" className="text-[#bf953f]/70 hover:text-[#bf953f] hover:scale-105 tracking-[0.15em] text-xs md:text-sm font-medium transition-all duration-300 relative group">
              areeb@heisareeb.com
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#bf953f] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </section>

      {/* Scroll - Roman Frieze */}
      <div className={`relative w-full overflow-hidden bg-[#1a0505] py-6 border-y border-[#bf953f]/30 flex flex-nowrap z-20 shadow-[0_0_30px_rgba(0,0,0,1)] transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}>
        {[0, 1].map((key) => (
          <div key={key} className="animate-marquee whitespace-nowrap flex gap-0 min-w-full shrink-0 items-center">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="text-xl md:text-3xl font-bold uppercase tracking-[0.15em] mx-8 md:mx-16 gold-text-muted drop-shadow-md">
                  The world isn't fair and that's exactly why strength exists
                </span>
                <span className="text-[#660000] text-xl md:text-2xl drop-shadow-[0_0_8px_#660000]">
                  ❖
                </span>
              </span>
            ))}
          </div>
        ))}
        <style jsx>{`
                  .gold-text {
                    background: linear-gradient(to bottom, #bf953f 0%, #fcf6ba 40%, #b38728 60%, #fbf5b7 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                  }
                  .gold-text-muted {
                    background: linear-gradient(to bottom, #a37a2c 0%, #eadd95 50%, #8c6214 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                  }
                  .glow-gold {
                    filter: drop-shadow(0 0 15px rgba(251, 245, 183, 0.4));
                  }
                  .animate-marquee {
                     animation: marquee 50s linear infinite;
                  }
                  @keyframes marquee {
                     0% { transform: translateX(0); }
                     100% { transform: translateX(-100%); }
                  }
                  .animate-spin-slow {
                      animation: spin 8s linear infinite;
                  }
                  @keyframes spin {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  }
                  .animate-cloud-flow-1 {
                      animation: cloud1 20s infinite alternate linear;
                  }
                  .animate-cloud-flow-2 {
                      animation: cloud2 25s infinite alternate-reverse linear;
                  }
                  @keyframes cloud1 {
                      0% { transform: translateX(-5%) translateY(0); opacity: 0.5; }
                      100% { transform: translateX(5%) translateY(-5%); opacity: 0.8; }
                  }
                   @keyframes cloud2 {
                      0% { transform: translateX(5%) translateY(0); opacity: 0.4; }
                      100% { transform: translateX(-5%) translateY(5%); opacity: 0.7; }
                  }
                  @keyframes rise {
                      0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
                      50% { opacity: 0.8; }
                      100% { transform: translateY(-20vh) scale(1); opacity: 0; }
                  }
                `}</style>
      </div>
    </main>
  );
}
