import React from "react";
import "../App.css";

function Navbar(){
  return(
  <div>

    <div className=" bg-gray-900 text-white p-3 rounded-2xl m-0.5 flex">

    <div className="w-12 text-lg font-semi-bold">DD</div>
    <div className="flex-1 text-center">
        <button className="mx-10 cursor-pointer text-gray-400 hover:text-white transition duration-200">Home</button>
        <button className="mx-10 cursor-pointer text-gray-400 hover:text-white transition duration-200">Projects</button>
        <button className="mx-10 cursor-pointer text-gray-400 hover:text-white transition duration-200">Skills</button>
        <button className="mx-10 cursor-pointer text-gray-400 hover:text-white transition duration-200">Contact</button> 
    </div>
    <div className="mr-2 text-gray-400">theme</div>
    </div>


  </div>
  )
}

export default Navbar;