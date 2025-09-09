const Banner = () => {
    return (
        <div className="relative h-[80vh] bg-gradient-to-r from-white via-gray-200 to-blackoverflow-hidden">
            {/* Container */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-32 py-4 flex flex-col lg:flex-row items-center justify-between h-full">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
                        Future of <br /> Decentralized <br /> Finance
                    </h1>
                    
                    <p className="text-lg md:text-xl lg:text-2xl text-black mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        join GROKAI and be a part of the next generation of blockchain-based technology.
                    </p>
                    
                    <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-300">
                        <span className="flex items-center space-x-2">
                            <span>Get Started</span>
                            <svg className="w-5 h-" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Desktop Logo - Right Side */}
                <div className="hidden lg:block w-2/4 relative h-full overflow-hidden">
                    {/* Logo Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                            src="/Images/grokai1.png" 
                            alt="GROKAI Logo" 
                            className="w-full h-auto max-w-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 animate-spin"
                            style={{ animationDuration: '5s' }}
                        />
                    </div>
                </div>

                {/* Mobile Logo - Bottom Display */}
                <div className="block lg:hidden w-full relative h-full mt-8 overflow-hidden">
                    {/* Mobile Logo Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                            src="/Images/grokai1.png" 
                            alt="GROKAI Logo" 
                            className="w-auto h-full max-h-full opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 animate-spin"
                            style={{ animationDuration: '10s' }}
                        />
                    </div>
                </div>
            </div>
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray- via-transparent to-black pointer-events-none"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '50px 50px'
            }}></div>
        </div>
    );
};

export default Banner;