import fitx from "../assets/fitx.png";
import vital from "../assets/vital.png";
import todo from "../assets/todo.png";
import geo from "../assets/geo.png";
import fcc from "../assets/fcc.png";
import fb from "../assets/fbclone.png";
import React, { useState, useEffect, useLayoutEffect } from 'react';

const data = [
  { src: fitx, title: "Slide 1", desc: "Description 1" },
  { src: vital, title: "Slide 2", desc: "Description 2" },
  { src: todo, title: "Slide 3", desc: "Description 3" },
  { src: geo, title: "Slide 4", desc: "Description 4" },
  { src: fcc, title: "Slide 5", desc: "Description 5" },
  { src: fb, title: "Slide 6", desc: "Description 6" },
];

export default function UltimateSlider() {
  const dataLength = data.length; // 6
  // Start at the middle set
  const [index, setIndex] = useState(dataLength);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const items = [...data, ...data, ...data];

  const nextSlide = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const rightSlide = () =>{
    setIsTransitioning(false);
    setIndex((prev)=>prev + 1);
  }

    const leftSlide = () =>{
    setIsTransitioning(false);
    setIndex((prev)=>prev - 1);
  }

  const handleTransitionEnd = () => {
    // The "Teleport"
    if (index >= dataLength * 2) {
      setIsTransitioning(false); // 1. Turn off animation
      setIndex(dataLength);      // 2. Jump to identical slide in middle set
    } else if (index <= dataLength - 1) {
      setIsTransitioning(false);
      setIndex(dataLength * 2 - 1);
    }
  };

  // This prevents the "Snap" by waiting for the DOM to update 
  // the position BEFORE turning transitions back on.
  useLayoutEffect(() => {
    if (!isTransitioning) {
      // Force a "Reflow" (this is the magic part)
      // Accessing offsetHeight makes the browser finish the jump instantly
      const _ = document.body.offsetHeight; 
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, [index]);
 
  return (
  <>
    <h1 className="text-3xl flex justify-center mb-8 mt-12">My Projects</h1>
   
    <div className="relative w-full overflow-hidden py-10">
      <div
        className="flex items-center"
        onTransitionEnd={handleTransitionEnd}
        style={{
          // (index - 1) centers the active slide in a 3-column view
          transform: `translateX(-${(index - 1) * (100 / 3)}%)`,
          transition: isTransitioning ? 'transform 900ms ease-in-out' : 'none',
        }}
      >
        {items.map((item, i) => {
          // IMPORTANT: Scale logic must be identical for the teleport indices
          const isCenter = i === index;

          return (
            <div key={i} className="min-w-[33.333%] px-3">
              <div
                className="rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  // The snap happens if this scale isn't finished when the teleport hits.
                  // By using the same duration/ease as the parent, they sync up.
                  transform: isCenter ? 'scale(1.1)' : 'scale(0.9)',
                  opacity: isCenter ? 1 : 0.5,
                  transition: isTransitioning ? 'all 800ms ease-in-out' : 'none'
                }}
              >
                <img src={item.src} alt="" className="w-full h-72 object-cover" />
                <div className="p-4 bg-white/50 backdrop-blur-md">
                  <h3 className="font-bold text-black">{item.title}</h3>
                </div>
              </div>
            </div>
          );
        })}

      </div>
 <button 
    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 backdrop-blur-md h-12 w-12 rounded cursor-pointer" 
    onClick={rightSlide}> → </button>

   <button 
    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-md h-12 w-12 rounded cursor-pointer" 
    onClick={leftSlide}> ←  </button>
    
    </div>
    </>
  );
}

