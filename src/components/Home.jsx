import React from "react";

function Home(){
  return(
    <div>
    
    <div className=" mx-80 my-50 w-122">     
        <h1 className=" text-5xl">Hi, I am Dev Dhakal</h1>
        <p className="mt-4 text-2xl">FrontEnd Developer</p>
        <p className="mt-5">
            I build fast, reliable web apps with React, Next.js, and TypeScript with responsive design using Tailwind CSS. I prioritize Core Web Vitals and efficient state management to ensure every project is snappy and functional, not just visually appealing. 
        </p>   
        <button className="bg-[rgb(127,81,207)] hover:scale-105 transition duration-200 rounded-2xl p-2 mt-6 cursor-pointer">View my Work</button>
        <button className="bg-[rgb(236,233,241)]  text-black hover:scale-105 hover:bg-[rgb(127,81,207)] hover:text-white transition-all duration-200 ml-4 rounded-2xl p-2 mt-6 cursor-pointer">Reach Out</button>

    </div>
    
    </div>
  )
}

export default Home