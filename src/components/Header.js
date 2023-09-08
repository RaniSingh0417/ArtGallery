import React from "react";
import { NavLink } from "react-router-dom";
// import artlogo from "./images/artlogo.png";
import artlogo1 from "./images/artlogo2.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="shadow-md  bg-white flex items-center justify-between border-b  top-0 border-orange-200 py-8 ">
      <img src={artlogo1} alt="logo" className="h-20" />

      <span className="font-bold italic font-serif  text-2xl">Canvas</span>

      <Navbar />
      <NavLink to="/signup">
        <button class=" mr-3 bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
          Sign-Up
        </button>
      </NavLink>
    </div>
  );
};

export default Header;
