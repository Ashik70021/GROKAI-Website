const Banner = () => {
    return (
        <div className="relative min-h-screen bg-[#161614] overflow-hidden">
            {/* Container */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-32 py-4 flex flex-col lg:flex-row items-center justify-between min-h-screen">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                        GROKAI
                    </h1>
                    
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        GROKAI is an innovative Artificial Intelligence project designed to make advanced technology simple and accessible for everyone.
                    </p>
                    
                    <button className="bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00D4FF]/25">
                        <span className="flex items-center space-x-2">
                            <span>Learn More</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Desktop Logo - Right Side */}
                <div className="hidden lg:block w-1/2 relative h-screen overflow-hidden">
                    {/* Logo Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                            src="/Images/grokai1.png" 
                            alt="GROKAI Logo" 
                            className="w-full h-auto max-w-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Mobile Logo - Bottom Display */}
                <div className="block lg:hidden w-full relative h-96 mt-8 overflow-hidden">
                    {/* Mobile Logo Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                            src="/Images/grokai1.png" 
                            alt="GROKAI Logo" 
                            className="w-full h-auto max-w-xs opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#161614] via-transparent to-[#161614] pointer-events-none"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00D4FF 1px, transparent 0)`,
                backgroundSize: '50px 50px'
            }}></div>
        </div>
    );
};

export default Banner;