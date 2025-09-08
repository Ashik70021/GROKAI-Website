import { useState } from 'react';

const Tokenomics = () => {
    const [hoveredSegment, setHoveredSegment] = useState(null);

    const tokenData = [
        { name: 'Community & Ecosystem', percentage: 35, color: '#00D4FF', description: 'Airdrops, rewards, and community initiatives' },
        { name: 'Liquidity & Exchanges', percentage: 20, color: '#0099CC', description: 'DEX/CEX liquidity and trading pairs' },
        { name: 'Team & Advisors', percentage: 15, color: '#006699', description: 'Core team allocation with vesting schedule' },
        { name: 'Development & Partnerships', percentage: 15, color: '#004466', description: 'Technical development and strategic partnerships' },
        { name: 'Marketing & Growth', percentage: 10, color: '#002233', description: 'Marketing campaigns and user acquisition' },
        { name: 'Reserve/Treasury', percentage: 5, color: '#001122', description: 'Emergency fund and future opportunities' }
    ];

    const totalSupply = "1,000,000,000";

    // Calculate cumulative percentages for pie chart
    let cumulativePercentage = 0;
    const segmentsWithAngles = tokenData.map(segment => {
        const startAngle = cumulativePercentage * 3.6; // Convert percentage to degrees
        const endAngle = (cumulativePercentage + segment.percentage) * 3.6;
        cumulativePercentage += segment.percentage;
        return { ...segment, startAngle, endAngle };
    });

    const createPieSlice = (percentage, startAngle, color, index) => {
        // Use consistent radius and center for SVG viewBox
        const radius = 240;
        const centerX = 280;
        const centerY = 280;
        
        const startAngleRad = (startAngle * Math.PI) / 180;
        const endAngleRad = ((startAngle + percentage * 3.6) * Math.PI) / 180;
        
        const x1 = centerX + radius * Math.cos(startAngleRad);
        const y1 = centerY + radius * Math.sin(startAngleRad);
        const x2 = centerX + radius * Math.cos(endAngleRad);
        const y2 = centerY + radius * Math.sin(endAngleRad);
        
        const largeArc = percentage > 50 ? 1 : 0;
        
        const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
            'Z'
        ].join(' ');

        return (
            <path
                key={index}
                d={pathData}
                fill={color}
                stroke="#161614"
                strokeWidth="4"
                className="transition-all duration-300 cursor-pointer"
                style={{
                    filter: hoveredSegment === index ? 'brightness(1.2)' : 'brightness(1)',
                    transform: hoveredSegment === index ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: `${centerX}px ${centerY}px`
                }}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
            />
        );
    };

    return (
        <div className="bg-[#161614] py-20">
            <div className="max-w-[1800px] mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Tokenomics
                    </h2>
                    <p className="text-2xl md:text-3xl text-[#00D4FF] font-bold mb-4">
                        1B $GROKAI
                    </p>
                    <p className="text-lg text-gray-300">
                        Total Supply: {totalSupply} tokens
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Interactive Pie Chart */}
                    <div className="flex justify-center items-center order-2 xl:order-1 w-full">
                        <div className="relative flex justify-center items-center w-full">
                            <div className="relative mx-auto">
                                <svg 
                                    width="280" 
                                    height="280" 
                                    viewBox="0 0 560 560" 
                                    className="transform -rotate-90 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[560px] lg:h-[560px] mx-auto"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    {segmentsWithAngles.map((segment, index) => 
                                        createPieSlice(segment.percentage, segment.startAngle, segment.color, index)
                                    )}
                                </svg>
                                
                                {/* Center Label */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">$GROKAI</span>
                                    <span className="text-[#00D4FF] text-sm sm:text-lg lg:text-xl">1B Total</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Token Distribution Details */}
                    <div className="space-y-3 sm:space-y-4 order-1 xl:order-2 xl:pr-12">
                        {tokenData.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-[#1C1C1A] border rounded-xl p-4 sm:p-5 transition-all duration-300 cursor-pointer ${
                                    hoveredSegment === index 
                                        ? 'border-[#00D4FF] shadow-lg shadow-[#00D4FF]/20 transform scale-[1.02] sm:scale-105' 
                                        : 'border-gray-800 hover:border-gray-700'
                                }`}
                                onMouseEnter={() => setHoveredSegment(index)}
                                onMouseLeave={() => setHoveredSegment(null)}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
                                        <div 
                                            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mt-1 sm:mt-0 flex-shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{item.name}</h3>
                                            <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-tight">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="text-left sm:text-right ml-6 sm:ml-0 flex-shrink-0">
                                        <div className="text-[#00D4FF] font-bold text-lg sm:text-xl">{item.percentage}%</div>
                                        <div className="text-gray-400 text-xs sm:text-sm">
                                            {(parseInt(totalSupply.replace(/,/g, '')) * item.percentage / 100).toLocaleString()} tokens
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 sm:mt-16">
                    <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
                        <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Token Utility & Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <div className="text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Governance</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">Vote on protocol decisions and future developments</p>
                            </div>
                            <div className="text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Staking Rewards</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">Earn rewards by staking GROKAI tokens</p>
                            </div>
                            <div className="text-center sm:col-span-2 lg:col-span-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">AI Access</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">Premium AI features and services access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;