
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-[#161614] backdrop-blur-md border-b border-gray-800/30 py-4 sticky top-0 z-40">
      <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl lg:text-2xl flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-white rounded-lg flex items-center justify-center">
            <span className="text-[#161614] text-sm font-extrabold">G</span>
          </div>
          <span className="text-white tracking-wide">GROKAI</span> 
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white text-base lg:text-lg font-medium">
          <li className="relative group">
            <NavLink 
              to="/" 
              className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 flex items-center space-x-1"
            >
              <span>Home</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"></div>
            </NavLink>
          </li>
          <li className="relative group">
            <span className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 flex items-center space-x-1">
              Contract Address
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"></div>
            </span>
          </li>
          <li className="relative group">
            <span className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 flex items-center space-x-1">
              How to Buy
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"></div>
            </span>
          </li>
          <li className="relative group">
            <NavLink 
              to="/whitepaper" 
              className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 flex items-center space-x-1"
            >
              <span>Whitepaper</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"></div>
            </NavLink>
          </li>
        </ul>

        {/* Buy Now Button (Visible on desktop) */}
        <button className="hidden md:block bg-gradient-to-r from-white to-gray-100 text-[#161614] px-8 py-3 rounded-full font-bold text-sm hover:scale-105 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#00D4FF]/20">
          <span className="flex items-center space-x-2">
            <span>Coming Soon</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Mobile Sidebar Button */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl focus:outline-none hover:text-[#00D4FF] transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-[#161614]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8">
          <button
            onClick={toggleSidebar}
            className="absolute top-6 right-6 text-white text-2xl focus:outline-none hover:text-[#00D4FF] transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Mobile Logo */}
          <div className="text-white font-bold text-2xl flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-white rounded-lg flex items-center justify-center">
              <span className="text-[#161614] text-lg font-extrabold">G</span>
            </div>
            <span className="text-white tracking-wide">GROKAI</span> 
          </div>
          
          <ul className="space-y-8 text-white text-xl font-medium text-center">
            <li className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 transform hover:scale-105" onClick={toggleSidebar}>
              <NavLink to="/" className="block py-2">Home</NavLink>
            </li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 transform hover:scale-105" onClick={toggleSidebar}>
              <span className="block py-2">Contract Address</span>
            </li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 transform hover:scale-105" onClick={toggleSidebar}>
              <span className="block py-2">How to Buy</span>
            </li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 transform hover:scale-105" onClick={toggleSidebar}>
              <NavLink to="/whitepaper" className="block py-2">Whitepaper</NavLink>
            </li>
          </ul>
          
          <button
            onClick={toggleSidebar}
            className="bg-gradient-to-r from-white to-gray-100 text-[#161614] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg mt-8"
          >
            <span className="flex items-center space-x-2">
              <span>Coming Soon</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
