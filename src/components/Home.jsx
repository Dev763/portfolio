import React from "react";
import ProfilePic from "../assets/p1.jpg";

function Skill() {
  return (
    <>
    
    <div className="h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-10 md:gap-0">

      {/* Left content */}
      <div className="max-w-xl text-center md:text-left ml-15 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I am Dev Dhakal</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200">FrontEnd Developer</p>
        <p className="mt-4 text-gray-300">
          I build fast, reliable web apps with React, Next.js, and TypeScript
          with responsive design using Tailwind CSS.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="bg-[rgb(127,81,207)] text-white hover:scale-105 transition duration-200 rounded-2xl p-2 px-6 cursor-pointer">
            View my Work
          </button>

          <button className="bg-[rgb(236,233,241)] text-black hover:bg-[rgb(127,81,207)] hover:text-white hover:scale-105 transition duration-200 rounded-2xl p-2 px-6 cursor-pointer">
            Reach Out
          </button>
        </div>
      </div>

      {/* Right content - The "No-White" Color Traveling Frame */}
      <div className="relative h-[450px] w-[400px] shrink-0 flex items-center justify-center mr-8 mb-22">
        
        {/* The Animated Background (Dark Blue & Purple Train) */}
        <div className="absolute inset-0 overflow-hidden rounded-[30%_70%_70%_30%_/30%_30%_70%_70%] shadow-2xl">
          <div 
            className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow"
            style={{
              background: `conic-gradient(from 0deg, #1e3a8a, #4c1d95, #7c3aed, #1e40af, #1e3a8a)`
            }}
          />
        </div>

        {/* The Image - Slightly smaller to let the color show as a border */}
        <div className="absolute inset-[6px] z-20 overflow-hidden rounded-[30%_70%_70%_30%_/30%_30%_70%_70%]">
          <img
            src={ProfilePic}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
          }
        `}
      </style>
    </div>
    </>
  );
}

export default Skill;