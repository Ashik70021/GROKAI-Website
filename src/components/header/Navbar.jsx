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
        <NavLink to="/" className="text-white font-bold text-xl lg:text-2xl flex items-center space-x-2 hover:scale-105 transition-transform duration-300 group">
          <div className="w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-white rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#00D4FF]/25 transition-all duration-300">
            <span className="text-[#161614] text-sm font-extrabold">G</span>
          </div>
          <span className="text-white tracking-wide group-hover:text-[#00D4FF] transition-colors duration-300">GROKAI</span> 
        </NavLink>

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
            <NavLink 
              to="/about" 
              className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 flex items-center space-x-1"
            >
            <span className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 flex items-center space-x-1">
              About GROKAI
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"></div>
            </span>
            </NavLink>
          </li> 
          {/* <li className="relative group">
            <span className="hover:text-[#00D4FF] cursor-pointer transition-all duration-300 flex items-center space-x-1">
              How to Buy
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"></div>
            </span>
          </li> */}
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
        <button className="hidden md:block bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00D4FF]/25">
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
            className="relative z-50 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#00D4FF]/20 to-[#0088cc]/20 text-white rounded-xl border border-[#00D4FF]/30 hover:from-[#00D4FF]/30 hover:to-[#0088cc]/30 hover:border-[#00D4FF]/60 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00D4FF]/25 backdrop-blur-sm"
            aria-label="Toggle navigation menu"
          >
            <div className="relative">
              {isSidebarOpen ? (
                <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              {isSidebarOpen && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00D4FF] rounded-full animate-pulse"></div>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Stylish Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ${isSidebarOpen ? 'visible' : 'invisible'}`}>
        {/* Animated Backdrop */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-black/80 via-[#161614]/90 to-black/80 backdrop-blur-xl transition-opacity duration-500 ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleSidebar}
        >
          {/* Animated particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-2 h-2 bg-[#00D4FF]/30 rounded-full animate-pulse" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
            <div className="absolute w-1 h-1 bg-[#00D4FF]/20 rounded-full animate-pulse" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
            <div className="absolute w-3 h-3 bg-[#00D4FF]/10 rounded-full animate-pulse" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
          </div>
        </div>
        
        {/* Main Sidebar Panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-gradient-to-br from-[#1A1F2E] via-[#0F1419] to-[#161620] border-l border-[#00D4FF]/30 shadow-2xl transform transition-all duration-500 ease-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header with Enhanced Design */}
          <div className="relative p-8 border-b border-[#00D4FF]/20 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#0088cc]/10">
            {/* Close Button */}
            <button
              onClick={toggleSidebar}
              className="absolute top-6 right-6 z-10 flex items-center justify-center w-10 h-10 text-[#00D4FF] bg-[#00D4FF]/10 rounded-xl border border-[#00D4FF]/20 hover:bg-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00D4FF] via-[#0088cc] to-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#00D4FF]/25 transform rotate-3">
                  <span className="text-[#161614] text-xl font-black">G</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-[#00D4FF]/20 to-[#0088cc]/20 rounded-2xl blur-lg -z-10"></div>
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl tracking-wider">GROKAI</h2>
                <p className="text-[#00D4FF]/60 text-sm font-medium">AI Revolution</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Links with Enhanced Animations */}
          <div className="flex-1 py-8 px-6">
            <nav className="space-y-4">
              <NavLink 
                to="/" 
                onClick={toggleSidebar}
                className={({ isActive }) => `
                  group relative flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#0088cc]/20 text-[#00D4FF] border border-[#00D4FF]/30 shadow-lg shadow-[#00D4FF]/10' 
                    : 'text-gray-300 hover:text-[#00D4FF] hover:bg-gradient-to-r hover:from-[#00D4FF]/10 hover:to-transparent'
                  }
                `}
              >
                <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-[#00D4FF]/10 rounded-xl border border-[#00D4FF]/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="relative z-10 font-semibold text-lg">Home</span>
                <svg className="relative z-10 w-5 h-5 ml-auto transform group-hover:translate-x-2 transition-transform duration-300 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 to-[#0088cc]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </NavLink>
              
              <NavLink 
                to="/about" 
                onClick={toggleSidebar}
                className={({ isActive }) => `
                  group relative flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#0088cc]/20 text-[#00D4FF] border border-[#00D4FF]/30 shadow-lg shadow-[#00D4FF]/10' 
                    : 'text-gray-300 hover:text-[#00D4FF] hover:bg-gradient-to-r hover:from-[#00D4FF]/10 hover:to-transparent'
                  }
                `}
              >
                <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-[#00D4FF]/10 rounded-xl border border-[#00D4FF]/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="relative z-10 font-semibold text-lg">About GROKAI</span>
                <svg className="relative z-10 w-5 h-5 ml-auto transform group-hover:translate-x-2 transition-transform duration-300 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 to-[#0088cc]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </NavLink>
              
              <NavLink 
                to="/whitepaper" 
                onClick={toggleSidebar}
                className={({ isActive }) => `
                  group relative flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#0088cc]/20 text-[#00D4FF] border border-[#00D4FF]/30 shadow-lg shadow-[#00D4FF]/10' 
                    : 'text-gray-300 hover:text-[#00D4FF] hover:bg-gradient-to-r hover:from-[#00D4FF]/10 hover:to-transparent'
                  }
                `}
              >
                <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-[#00D4FF]/10 rounded-xl border border-[#00D4FF]/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="relative z-10 font-semibold text-lg">Whitepaper</span>
                <svg className="relative z-10 w-5 h-5 ml-auto transform group-hover:translate-x-2 transition-transform duration-300 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 to-[#0088cc]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </NavLink>
            </nav>
            
            {/* Decorative Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent"></div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-[#00D4FF]/60 text-sm font-medium uppercase tracking-wider px-6">Connect</p>
              <div className="flex justify-center space-x-4">
                <button className="flex items-center justify-center w-12 h-12 bg-[#00D4FF]/10 rounded-xl border border-[#00D4FF]/20 hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/40 hover:text-[#1DA1F2] text-gray-400 transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-[#00D4FF]/10 rounded-xl border border-[#00D4FF]/20 hover:bg-[#5865F2]/20 hover:border-[#5865F2]/40 hover:text-[#5865F2] text-gray-400 transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                  </svg>
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-[#00D4FF]/10 rounded-xl border border-[#00D4FF]/20 hover:bg-[#0088cc]/20 hover:border-[#0088cc]/40 hover:text-[#0088cc] text-gray-400 transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Enhanced Footer Button */}
          <div className="p-6 border-t border-[#00D4FF]/20 bg-gradient-to-r from-[#00D4FF]/5 to-transparent">
            <button
              onClick={toggleSidebar}
              className="w-full bg-gradient-to-r from-[#00D4FF] to-[#0088cc] text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-[#00B8E6] hover:to-[#006699] transition-all duration-300 transform hover:scale-[0.98] shadow-xl hover:shadow-2xl hover:shadow-[#00D4FF]/30 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative flex items-center justify-center space-x-3">
                <span>Coming Soon</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;