
const WhitePaper = () => {
    const roadmapData = [
        {
            phase: "Phase 1",
            title: "Foundation",
            items: [
                "Launch of $GROKAI smart contract on Solana",
                "Community building across social platforms",
                "Initial DEX listing"
            ],
            color: "#00D4FF",
            image: "/Images/grokai1.png"
        },
        {
            phase: "Phase 2",
            title: "Growth",
            items: [
                "Release of first AI tool",
                "Community rewards program activation",
                "Early partnerships with Web3 projects"
            ],
            color: "#0099CC",
            image: "/Images/grokai2.png"
        },
        {
            phase: "Phase 3",
            title: "Expansion",
            items: [
                "Listings on centralized exchanges (CEX)",
                "Launch of GROKAI API for developers",
                "AI + Blockchain integration features"
            ],
            color: "#006699",
            image: "/Images/increase1.jpg"
        },
        {
            phase: "Phase 4",
            title: "Ecosystem",
            items: [
                "GROKAI-powered marketplace",
                "Educational and business AI solutions",
                "Establishment of DAO for community governance"
            ],
            color: "#004466",
            image: "/Images/grokai1.png"
        }
    ];

    return (
        <div className="bg-[#161614] min-h-screen">
            {/* Banner Section */}
            <div className="relative bg-gradient-to-r from-[#161614] via-[#1a1a18] to-[#161614] py-20">
                <div className="max-w-[1800px] mx-auto px-8 text-center">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-white rounded-lg flex items-center justify-center">
                            <span className="text-[#161614] text-xl font-extrabold">G</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                            GROKAI
                        </h1>
                    </div>
                    
                    <div className="mb-8">
                        <span className="bg-gradient-to-r from-[#00D4FF] to-[#0099CC] bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold">
                            WHITEPAPER
                        </span>
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive documentation outlining GROKAI&apos;s vision, technology, and roadmap for revolutionizing AI accessibility through blockchain innovation.
                    </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></div>
                <div className="absolute bottom-16 right-16 w-3 h-3 bg-white rounded-full animate-ping"></div>
                <div className="absolute top-1/2 right-10 w-1 h-1 bg-[#00D4FF] rounded-full animate-bounce"></div>
            </div>

            {/* Roadmap Section */}
            <div className="py-20">
                <div className="max-w-[1800px] mx-auto px-8">
                    {/* Roadmap Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Roadmap
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] mx-auto rounded-full"></div>
                    </div>

                    {/* Roadmap Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00D4FF] to-[#004466] h-full rounded-full hidden lg:block"></div>
                        
                        {roadmapData.map((phase, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                {/* Content Side */}
                                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                    <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-8 hover:border-[#00D4FF]/30 transition-all duration-300 group hover:transform hover:scale-105">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div 
                                                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                                style={{ backgroundColor: phase.color }}
                                            >
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                                                <h4 className="text-2xl font-bold" style={{ color: phase.color }}>
                                                    {phase.title}
                                                </h4>
                                            </div>
                                        </div>
                                        
                                        {/* Divider Line */}
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                                        
                                        <ul className="space-y-3">
                                            {phase.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start space-x-3 text-gray-300">
                                                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: phase.color }}></div>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Center Circle (Desktop) */}
                                <div className="hidden lg:flex w-2/12 justify-center z-10">
                                    <div 
                                        className="w-12 h-12 rounded-full border-4 border-[#161614] flex items-center justify-center font-bold text-white text-lg shadow-lg"
                                        style={{ backgroundColor: phase.color }}
                                    >
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Image Side - Blank Space */}
                                <div className={`w-full lg:w-5/12 mt-8 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                                    <div className="relative group">
                                        <div className="w-full h-64 bg-[#1C1C1A] border border-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                                            <div className="text-center">
                                                <div 
                                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                                    style={{ backgroundColor: phase.color }}
                                                >
                                                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                                                </div>
                                                <h5 className="text-white font-bold text-lg">{phase.phase}</h5>
                                                <p className="text-gray-400 text-sm">{phase.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-20">
                        <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
                            <h3 className="text-white text-2xl font-bold mb-4">Ready to Join the Journey?</h3>
                            <p className="text-gray-300 mb-6">
                                Be part of the GROKAI ecosystem and help shape the future of AI accessibility.
                            </p>
                            <button className="bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00D4FF]/25">
                                <span className="flex items-center space-x-2">
                                    <span>Join GROKAI Community</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhitePaper;