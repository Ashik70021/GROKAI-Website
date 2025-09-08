

const AboutGrok = () => {
    return (
        <div className="bg-[#161614] py-20">
            <div className="max-w-[1800px] mx-auto px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        About GROKAI
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        An innovative AI project simplifying technology for individuals and businesses.
                    </p>
                </div>

                {/* Icon Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Analyze Data Card */}
                    <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-6 hover:border-[#00D4FF]/30 transition-all duration-300 group hover:transform hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#00D4FF]/30 group-hover:to-[#0099CC]/30 transition-all duration-300">
                                <svg className="w-8 h-8 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Analyze Data</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Transform raw information into actionable insights with advanced analytical capabilities.
                            </p>
                        </div>
                    </div>

                    {/* Automate Tasks Card */}
                    <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-6 hover:border-[#00D4FF]/30 transition-all duration-300 group hover:transform hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#00D4FF]/30 group-hover:to-[#0099CC]/30 transition-all duration-300">
                                <svg className="w-8 h-8 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Automate Tasks</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Streamline workflows and eliminate repetitive processes with intelligent automation.
                            </p>
                        </div>
                    </div>

                    {/* Enhance Decision-Making Card */}
                    <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-6 hover:border-[#00D4FF]/30 transition-all duration-300 group hover:transform hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#00D4FF]/30 group-hover:to-[#0099CC]/30 transition-all duration-300">
                                <svg className="w-8 h-8 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Enhance Decision-Making</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Make informed choices with AI-powered recommendations and predictive analytics.
                            </p>
                        </div>
                    </div>

                    {/* Drive Creativity Card */}
                    <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-6 hover:border-[#00D4FF]/30 transition-all duration-300 group hover:transform hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#00D4FF]/30 group-hover:to-[#0099CC]/30 transition-all duration-300">
                                <svg className="w-8 h-8 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12h.01M17 12h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Drive Creativity</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Unlock innovative solutions and creative possibilities with AI-enhanced ideation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutGrok;