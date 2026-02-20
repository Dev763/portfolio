import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiJavascript, 
  SiTypescript, SiNextdotjs, SiVite, 
  SiReactquery, SiRedux, SiHtml5, SiCss3, SiGit, SiDocker, SiPostman
} from 'react-icons/si';

const Skill = () => {
  const [radius, setRadius] = useState(140);
 
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      ]
    },
    {
      title: "Frameworks & Libs",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      ]
    },
    {
      title: "Tools & Dev",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ]
    }
  ];

  const allSkills = categories.flatMap(cat => cat.skills);

  useEffect(() => {
    const handleResize = () => setRadius(window.innerWidth < 768 ? 100 : 150);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
 
    <div className="relative min-h-screen py-20 px-4 md:px-16 overflow-hidden flex flex-col justify-center bg-[#08080c]">

      {/* BACKGROUND: HIGH VISIBILITY GRADIENTS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Aurora Purple */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px]" 
        />
        
        {/* Animated Aurora Blue */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" 
        />

        {/* Sharp Center Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#1a1a2e_0%,_transparent_70%)] opacity-40" />
        
        {/* Visible Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>
 <h1 className="text-3xl flex justify-center mb-8 mt-12">Skills & Certificates</h1>



      <section className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: LIST */}
        <div className="flex flex-col gap-12 z-10 w-full lg:w-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3 className="text-purple-400 font-mono text-xs uppercase tracking-[0.2em] font-bold">{cat.title}</h3>
              <div className="flex flex-row gap-3 flex-wrap md:flex-nowrap">
                {cat.skills.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                    className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-base transition-colors whitespace-nowrap backdrop-blur-md"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-medium">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: YOUR ORIGINAL ORBIT LOGIC */}
        <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center shrink-0">
          
          {allSkills.map((skill, index) => {
            const angle = (index / allSkills.length) * 2 * Math.PI;
            const xTarget = Math.cos(angle) * radius;
            const yTarget = Math.sin(angle) * radius;

            return (
              <motion.div
                key={index}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ 
                  x: xTarget, 
                  y: [yTarget, yTarget - 12, yTarget], 
                  opacity: 1, 
                  scale: 1
                }}
                viewport={{ once: true }}
                transition={{
                  x: { type: "spring", stiffness: 40, damping: 12, delay: index * 0.04 },
                  y: { duration: 3 + (index % 2), repeat: Infinity, ease: "easeInOut", delay: index * 0.04 },
                  opacity: { duration: 0.4, delay: index * 0.04 }
                }}
                whileHover={{ scale: 1.2, zIndex: 50, filter: "brightness(1.5)" }}
                className="absolute p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl text-3xl md:text-4xl flex items-center justify-center cursor-pointer"
              >
                {skill.icon}
              </motion.div>
            );
          })}

          <div className="text-center z-0 pointer-events-none select-none">
            <h2 className="text-xl md:text-2xl font-black text-white/20 uppercase tracking-[0.4em]">
              Stack<br/>I Use
            </h2>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Skill;