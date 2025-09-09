import React, { useState } from 'react';

const Tools = () => {
    const [hoveredTool, setHoveredTool] = useState(null);

    const aiTools = [
        {
            id: 1,
            name: "GROKAI Chat",
            description: "Advanced conversational AI powered by cutting-edge language models for natural interactions. Launching in 2 weeks!",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            features: ["Natural Language Processing", "Multi-language Support", "Context Understanding"],
            status: "Coming Soon"
        },
        {
            id: 2,
            name: "GROKAI Analytics",
            description: "Intelligent data analysis and visualization tools for actionable business insights",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization"],
            status: "Beta"
        },
        {
            id: 3,
            name: "GROKAI Automation",
            description: "Smart workflow automation to streamline repetitive tasks and boost productivity",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            features: ["Task Automation", "Workflow Management", "Smart Scheduling"],
            status: "Coming Soon"
        },
        {
            id: 4,
            name: "GROKAI Vision",
            description: "Advanced computer vision and image recognition capabilities for visual analysis",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            features: ["Image Recognition", "Object Detection", "Visual Search"],
            status: "Coming Soon"
        },
        {
            id: 5,
            name: "GROKAI Generator",
            description: "Creative AI content generation for text, images, and multimedia assets",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0l1 16h8l1-16M9 8v8m6-8v8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-2a1 1 0 000 2h2a1 1 0 000-2z" />
                </svg>
            ),
            features: ["Content Creation", "Image Generation", "Text Synthesis"],
            status: "Development"
        },
        {
            id: 6,
            name: "GROKAI Security",
            description: "AI-powered cybersecurity solutions for threat detection and prevention",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            features: ["Threat Detection", "Security Analysis", "Risk Assessment"],
            status: "Planning"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Live': return 'bg-green-500';
            case 'Beta': return 'bg-yellow-500';
            case 'Development': return 'bg-blue-500';
            case 'Coming Soon': return 'bg-purple-500';
            case 'Planning': return 'bg-gray-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="bg-[#161614] py-20">
            <div className="max-w-[1800px] mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        GROKAI <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">AI Tools</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover our comprehensive suite of AI-powered tools designed to revolutionize how you work, 
                        create, and innovate in the digital age.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {aiTools.map((tool) => (
                        <div
                            key={tool.id}
                            className={`bg-[#1C1C1A] border rounded-xl p-6 transition-all duration-300 cursor-pointer group ${
                                hoveredTool === tool.id 
                                    ? 'border-white shadow-lg shadow-white/10 transform scale-105' 
                                    : 'border-gray-800 hover:border-gray-700'
                            }`}
                            onMouseEnter={() => setHoveredTool(tool.id)}
                            onMouseLeave={() => setHoveredTool(null)}
                        >
                            {/* Tool Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-black/20 rounded-lg flex items-center justify-center text-white group-hover:from-white/30 group-hover:to-black/30 transition-all duration-300">
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                                            {tool.name}
                                        </h3>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <div className={`w-2 h-2 rounded-full ${getStatusColor(tool.status)}`}></div>
                                            <span className="text-xs text-gray-400 font-medium">{tool.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tool Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                {tool.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-2">
                                <h4 className="text-white font-semibold text-sm mb-3">Key Features:</h4>
                                {tool.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-400 text-xs">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Button */}
                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <button className="w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 bg-white text-black hover:bg-gray-100">
                                    {tool.status === 'Live' ? 'Try Now' : 
                                     tool.status === 'Beta' ? 'Join Beta' : 
                                     'Learn More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Experience the Future of AI?
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Join thousands of users already leveraging GROKAI&apos;s AI tools to transform their workflows and unlock new possibilities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-300">
                                Get Started Free
                            </button>
                            <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;