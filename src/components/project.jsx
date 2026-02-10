import React from "react";

function Project(){
  return (
  <div>
  <h1 className="text-3xl flex justify-center mb-12 mt-12">My Projects</h1>
  <div className="grid grid-cols-3 gap-8 mx-auto w-[70vw] h-[32vh] bg-">
    <div className="bg-blue-900 p-4 ">Item 1</div>
    <div className="bg-blue-900 p-4 ">Item 2</div>
    <div className="bg-blue-900 p-4 ">Item 3</div>
  </div>
  <div className="grid grid-cols-3 gap-8 mx-auto w-[70vw] h-[32vh] mt-10">
    <div className="bg-blue-900 p-4 ">Item 1</div>
    <div className="bg-blue-900 p-4 ">Item 2</div>
    <div className="bg-blue-900 p-4 ">Item 3</div>
  </div>
</div>
  )
}

export default Project