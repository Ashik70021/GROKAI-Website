const Banner = () => {
    return (
        <div className="relative min-h-screen bg-[#161614] overflow-hidden">
            {/* Container */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row items-center justify-between min-h-screen">
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

                {/* Desktop Animation - Right Side */}
                <div className="hidden lg:block w-1/2 relative h-screen overflow-hidden">
                    {/* Animated Lines Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full max-w-md max-h-md opacity-60" viewBox="0 0 600 600"  preserveAspectRatio="xMidYMid meet">
                            {/* Central Node */}
                            <circle 
                                cx="300" 
                                cy="300" 
                                r="4" 
                                fill="#00D4FF"
                                className="animate-pulse"
                            />
                            
                            {/* Radiating Lines - Primary Layer */}
                            <g className="animate-spin" style={{transformOrigin: '300px 300px', animationDuration: '20s'}}>
                                <line x1="300" y1="300" x2="450" y2="200" stroke="#00D4FF" strokeWidth="1" opacity="0.7">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="500" y2="350" stroke="#00D4FF" strokeWidth="1" opacity="0.5">
                                    <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="400" y2="450" stroke="#00D4FF" strokeWidth="1" opacity="0.6">
                                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="150" y2="400" stroke="#00D4FF" strokeWidth="1" opacity="0.4">
                                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="100" y2="250" stroke="#00D4FF" strokeWidth="1" opacity="0.7">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="4.5s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="200" y2="150" stroke="#00D4FF" strokeWidth="1" opacity="0.5">
                                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="350" y2="100" stroke="#00D4FF" strokeWidth="1" opacity="0.6">
                                    <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="520" y2="280" stroke="#00D4FF" strokeWidth="1" opacity="0.5">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3.8s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="250" y2="500" stroke="#00D4FF" strokeWidth="1" opacity="0.7">
                                    <animate attributeName="opacity" values="0.5;1;0.5" dur="4.2s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="80" y2="350" stroke="#00D4FF" strokeWidth="1" opacity="0.4">
                                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
                                </line>
                            </g>
                            
                            {/* Secondary Lines - Counter Rotation */}
                            <g className="animate-spin" style={{transformOrigin: '300px 300px', animationDuration: '15s', animationDirection: 'reverse'}}>
                                <line x1="300" y1="300" x2="380" y2="180" stroke="#ffffff" strokeWidth="0.5" opacity="0.3">
                                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="480" y2="320" stroke="#ffffff" strokeWidth="0.5" opacity="0.4">
                                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.8s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="320" y2="480" stroke="#ffffff" strokeWidth="0.5" opacity="0.3">
                                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4.2s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="120" y2="380" stroke="#ffffff" strokeWidth="0.5" opacity="0.4">
                                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="420" y2="120" stroke="#ffffff" strokeWidth="0.5" opacity="0.3">
                                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.8s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="180" y2="470" stroke="#ffffff" strokeWidth="0.5" opacity="0.4">
                                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="550" y2="250" stroke="#ffffff" strokeWidth="0.5" opacity="0.3">
                                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4.5s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="50" y2="300" stroke="#ffffff" strokeWidth="0.5" opacity="0.4">
                                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
                                </line>
                            </g>
                            
                            {/* Tertiary Lines - Faster Rotation */}
                            <g className="animate-spin" style={{transformOrigin: '300px 300px', animationDuration: '12s'}}>
                                <line x1="300" y1="300" x2="360" y2="140" stroke="#00D4FF" strokeWidth="0.3" opacity="0.4">
                                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.2s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="460" y2="300" stroke="#00D4FF" strokeWidth="0.3" opacity="0.3">
                                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.1s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="360" y2="460" stroke="#00D4FF" strokeWidth="0.3" opacity="0.4">
                                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.8s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="140" y2="360" stroke="#00D4FF" strokeWidth="0.3" opacity="0.3">
                                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.4s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="240" y2="140" stroke="#00D4FF" strokeWidth="0.3" opacity="0.4">
                                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.9s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="140" y2="240" stroke="#00D4FF" strokeWidth="0.3" opacity="0.3">
                                    <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3.7s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="460" y2="240" stroke="#00D4FF" strokeWidth="0.3" opacity="0.4">
                                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" />
                                </line>
                                <line x1="300" y1="300" x2="240" y2="460" stroke="#00D4FF" strokeWidth="0.3" opacity="0.3">
                                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.3s" repeatCount="indefinite" />
                                </line>
                            </g>
                            
                            {/* Outer Nodes */}
                            <circle cx="450" cy="200" r="2" fill="#00D4FF" opacity="0.8">
                                <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="500" cy="350" r="2" fill="#00D4FF" opacity="0.6">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="400" cy="450" r="2" fill="#00D4FF" opacity="0.7">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="150" cy="400" r="2" fill="#00D4FF" opacity="0.5">
                                <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="100" cy="250" r="2" fill="#00D4FF" opacity="0.8">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="200" cy="150" r="2" fill="#00D4FF" opacity="0.6">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </div>
                    
                    {/* Additional floating particles */}
                    <div className="absolute top-20 right-20 w-1 h-1 bg-[#00D4FF] rounded-full animate-ping"></div>
                    <div className="absolute bottom-32 right-40 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-16 w-1 h-1 bg-[#00D4FF] rounded-full animate-bounce"></div>
                    <div className="absolute bottom-1/4 right-20 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                </div>

                {/* Mobile Animation - Bottom Display */}
                <div className="block lg:hidden w-full relative h-64 mt-8 overflow-hidden">
                    {/* Mobile Animated Lines Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full max-w-sm opacity-60" viewBox="0 0 350 250" preserveAspectRatio="xMidYMid meet">
                            {/* Central Node */}
                            <circle 
                                cx="175" 
                                cy="125" 
                                r="3" 
                                fill="#00D4FF"
                                className="animate-pulse"
                            />
                            
                            {/* Primary Mobile Lines */}
                            <g className="animate-spin" style={{transformOrigin: '175px 125px', animationDuration: '20s'}}>
                                <line x1="175" y1="125" x2="280" y2="80" stroke="#00D4FF" strokeWidth="1" opacity="0.7">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="300" y2="150" stroke="#00D4FF" strokeWidth="1" opacity="0.5">
                                    <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="250" y2="200" stroke="#00D4FF" strokeWidth="1" opacity="0.6">
                                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="100" y2="180" stroke="#00D4FF" strokeWidth="1" opacity="0.4">
                                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="70" y2="110" stroke="#00D4FF" strokeWidth="1" opacity="0.7">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="4.5s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="120" y2="60" stroke="#00D4FF" strokeWidth="1" opacity="0.5">
                                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="220" y2="40" stroke="#00D4FF" strokeWidth="1" opacity="0.6">
                                    <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="320" y2="120" stroke="#00D4FF" strokeWidth="1" opacity="0.5">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3.8s" repeatCount="indefinite" />
                                </line>
                            </g>
                            
                            {/* Secondary Mobile Lines */}
                            <g className="animate-spin" style={{transformOrigin: '175px 125px', animationDuration: '15s', animationDirection: 'reverse'}}>
                                <line x1="175" y1="125" x2="240" y2="90" stroke="#ffffff" strokeWidth="0.5" opacity="0.3">
                                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="290" y2="130" stroke="#ffffff" strokeWidth="0.5" opacity="0.4">
                                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.8s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="200" y2="210" stroke="#ffffff" strokeWidth="0.5" opacity="0.3">
                                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4.2s" repeatCount="indefinite" />
                                </line>
                                <line x1="175" y1="125" x2="80" y2="160" stroke="#ffffff" strokeWidth="0.5" opacity="0.4">
                                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite" />
                                </line>
                            </g>
                            
                            {/* Mobile Outer Nodes */}
                            <circle cx="280" cy="80" r="2" fill="#00D4FF" opacity="0.8">
                                <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="300" cy="150" r="2" fill="#00D4FF" opacity="0.6">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="100" cy="180" r="2" fill="#00D4FF" opacity="0.5">
                                <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="70" cy="110" r="2" fill="#00D4FF" opacity="0.8">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </div>
                    
                    {/* Mobile floating particles */}
                    <div className="absolute top-10 right-10 w-1 h-1 bg-[#00D4FF] rounded-full animate-ping"></div>
                    <div className="absolute bottom-16 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 left-8 w-1 h-1 bg-[#00D4FF] rounded-full animate-bounce"></div>
                    <div className="absolute bottom-8 left-16 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
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