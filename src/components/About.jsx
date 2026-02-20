import React, { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload, FiArrowRight, FiMaximize2, FiX, FiTerminal, FiMinus } from "react-icons/fi";
import test from '../assets/pp.jpg';

function About() {
  const [time, setTime] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: "Asia/Kathmandu", 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] p-4 md:p-10 font-mono text-[#e0e0e0] selection:bg-purple-500/30">
      
      {/* SOCIALS SECTION - Enhanced Hitboxes & Interaction */}
      <div className="hidden xl:flex flex-col gap-10 mr-12 border-r border-white/5 pr-10">
        {[
          { icon: <FiGithub size={22} />, link: "https://github.com/your-username", label: "GH" },
          { icon: <FiLinkedin size={22} />, link: "https://linkedin.com/in/your-username", label: "LI" },
          { icon: <FiMail size={22} />, link: "mailto:your@email.com", label: "EM" }
        ].map((s, i) => (
          <a 
            key={i} 
            href={s.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-blue-600 transition-all duration-300"
          >
            <div className="p-4 rounded-xl bg-white/0 group-hover:bg-purple-500/10 border border-transparent group-hover:border-purple-500/20 transition-all transform group-hover:-translate-y-1 group-active:scale-90">
              {s.icon}
            </div>
            <span className="text-[9px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase text-purple-500">
              {s.label}
            </span>
          </a>
        ))}
      </div>

      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* PHOTO SECTION */}
        <div className="lg:col-span-5 space-y-5">
          <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <img 
              src={test} 
              alt="Dev Dhakal" 
              className="w-full aspect-[4/5] object-cover brightness-90 transition-all duration-700"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xl px-3 py-1.5 border border-white/10 rounded-full flex items-center gap-2 text-[9px] font-bold uppercase">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              SYS_ON // {time} NST
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/50 text-[9px]">
              <FiMapPin className="text-purple-500" size={10} /> KATHMANDU, NEPAL
            </div>
          </div>
        </div>

        {/* TERMINAL SECTION */}
        <div className={`lg:col-span-7 transition-all duration-300 ${isMaximized ? 'fixed inset-4 z-50 bg-[#0a0a0a]' : 'relative'}`}>
          <div className="w-full h-full min-h-[480px] flex flex-col bg-[#0d0d0d] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
            
            <div className="bg-[#151515] px-5 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex gap-2">
                <button onClick={() => setIsMaximized(false)} className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-[8px] text-black/60 font-bold hover:brightness-125"><FiX /></button>
                <div className="w-3 h-3 bg-zinc-800 rounded-full flex items-center justify-center text-[8px] text-white/20"><FiMinus /></div>
                <button onClick={() => setIsMaximized(true)} className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[7px] text-black/60 font-bold hover:brightness-125"><FiMaximize2 /></button>
              </div>
              <div className="text-zinc-600 text-[9px] font-bold tracking-widest uppercase">
                <FiTerminal className="inline mr-2" /> session.local -- Dev_Dhakal
              </div>
              <div className="w-10"></div>
            </div>

            <div className="p-8 md:p-10 flex-1 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <span className="text-purple-500 text-[10px] font-bold uppercase tracking-widest">➜ ~/whoami</span>
                <h1 className="text-5xl md:text-4xl font-black text-white  uppercase tracking-tighter leading-none">
                  Dev Dhakal
                </h1>
              </div>

              <div className="max-w-xl border-l border-purple-500/30 pl-6">
                <p className="text-zinc-400 text-lg leading-relaxed italic">
                  Frontend architect from Nepal. 
                  Building web ecosystems that blend aesthetic purity with performance.
                </p>
              </div>

              {isMaximized && (
                <div className="space-y-2 pt-4 border-t border-white/5 text-[12px] font-mono text-zinc-500 animate-in fade-in slide-in-from-top-2">
                  <p className="text-green-500">➜ ./fetch_details.sh --verbose</p>
                  <p>[OK] Accessing kernel... done.</p>
                  <p>[OK] Loading stack: React, Next.js 15, TypeScript, Tailwind.</p>
                  <p>[INFO] Specializing in high-performance UI/UX engineering.</p>
                  <p>[INFO] Location: Kathmandu_Valley, Nepal (27.7172° N, 85.3240° E).</p>
                  <p className="text-white mt-4">&gt; Currently available for elite engineering projects.</p>
                  <span className="inline-block w-2 h-4 bg-white animate-pulse align-middle ml-1"></span>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-black/20">
              <button className="flex items-center justify-center gap-2 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-purple-600 hover:text-white transition-all active:scale-95">
                Download CV <FiDownload size={14} />
              </button>
              <button className="flex items-center justify-center gap-2 py-4 bg-transparent text-white font-black uppercase text-[10px] tracking-[0.2em] border border-white/40 hover:border-white transition-all active:scale-95">
                Initiate Protocol <FiArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;