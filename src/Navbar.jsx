import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
     
      <div className="md:hidden flex ">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl focus:outline-none -ml-4 text-blue-600 text-shadow-lg/30"
        >
          ☰
        </button>
      </div>

      
      <div className="hidden md:flex flex-row md:gap-x-18 mr-10 md:text-md text-blue-800  text-sm gap-x-8 font-serif self-center ">
        <Link className="hover:scale-130 transition hover:text-black hover:underline" to="/">Home</Link>
        <Link className="hover:scale-130 transition hover:text-black hover:underline" to="/About">About</Link>
        <Link className="hover:scale-130 transition hover:text-black hover:underline" to="/Contact">Contact</Link>
      </div>

     
      <div
        className={`md:hidden flex flex-col gap-y-4 font-serif text-md px-3 pb-5 pt-1 bg-gray-100 border rounded  transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link onClick={() => setOpen(false)} className="hover:scale-110 transition hover:text-red-400" to="/">Home</Link>
        <Link onClick={() => setOpen(false)} className="hover:scale-110 transition hover:text-red-400" to="/About">About</Link>
        <Link onClick={() => setOpen(false)} className="hover:scale-110 transition hover:text-red-400" to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
