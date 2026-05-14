import React from "react";

function Navbar() {
  return (
  <nav className="sticky top-0 z-50 px-2 py-2 md:px-4 md:py-2">
  <div className="max-w-3xl mx-auto flex items-center bg-[#08080c]/40 backdrop-blur-md border border-gray-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-lg md:max-w-7xl">

    {/* Left spacer (balances center) */}
    <div className="w-1/3">
      <div className="text-lg md:text-2xl font-bold cursor-pointer ">
        DD
      </div>
    </div>

    {/* Center links */}
    <div className="w-1/3 flex justify-center items-center gap-4 md:gap-20 text-xs md:text-sm font-medium pl-5 md:pl-0">
      <button onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
        Home
      </button>
      <button onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
        Projects
      </button>
      <button onClick={() => document.getElementById("skill").scrollIntoView({ behavior: "smooth" })}>
        Skills
      </button>
      <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
        Contact
      </button>
    </div>

    {/* Right spacer */}
    <div className="w-1/3"></div>

  </div>
</nav>
  );
}

export default Navbar;