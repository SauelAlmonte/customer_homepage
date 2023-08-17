import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-[#84a59d] text-2xl md:text-4xl font-bold cursor-pointer">COMPANY</h1>
      <div>
        <button className="font-semibold text-[#84a59d] pr-4">
          Sign In
        </button>
        <button className="text-[#f7ede2] font-semibold bg-[#84a59d] px-4 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  )
};

export default NavBar;
