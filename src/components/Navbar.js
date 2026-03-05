import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primary/80 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gold">
          OM Kumar Jaiswal
        </h1>

        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#properties" className="hover:text-gold">Properties</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </div>

        <FaBars
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="md:hidden bg-primary text-center space-y-4 py-4">
          <a href="#about" className="block">About</a>
          <a href="#services" className="block">Services</a>
          <a href="#properties" className="block">Properties</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}
export default Navbar;




