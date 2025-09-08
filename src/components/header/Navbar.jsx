import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-[#161614] py-8 px-32 flex justify-between items-center">
      {/* Logo */}
      <div className="text-[white] font-bold text-xl lg:text-2xl flex items-center space-x-3">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center">
          <img src="/Images/grokai1.png" alt="GROKAI" className="w-full h-full object-contain" />
        </div>
        <span className="text-white">GROKAI</span>

      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-white text-lg lg:text-xl font-medium">
        <li className="hover:text-black cursor-pointer"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-black cursor-pointer"><NavLink to="/about">About GROKAI</NavLink></li>
        <li className="hover:text-black cursor-pointer"><NavLink to="/whitepaper">Whitepaper</NavLink></li>
      </ul>

      {/* Buy Now Button (Visible on desktop) */}
      <button className="hidden md:block bg-[#ffffff] text-[#161614] px-6 py-2 rounded-md font-bold text-sm hover:scale-105 transition-transform">
        Coming Soon
      </button>

      {/* Mobile Sidebar Button */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-[#161614] bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6">
          <button
            onClick={toggleSidebar}
            className="absolute top-5 right-5 text-white text-lg lg:text-xl focus:outline-none"
          >
            ✕
          </button>
          <ul className="space-y-6 text-white text-lg font-medium">
            <li className="hover:text-black cursor-pointer"><NavLink to="/">Home</NavLink></li>
            <li className="hover:text-black cursor-pointer"><NavLink to="/about">About GROKAI</NavLink></li>
            <li className="hover:text-black cursor-pointer"><NavLink to="/whitepaper">Whitepaper</NavLink></li>
          </ul>
          <button
            onClick={toggleSidebar}
            className="bg-[#ffffff] text-[#161614] px-8 py-3 rounded-md font-bold text-lg hover:scale-105 transition-transform"
          >
            Coming Soon
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;