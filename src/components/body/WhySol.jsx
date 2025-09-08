
import { useEffect, useRef, useState } from 'react';

const WhySol = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
                rootMargin: '-50px 0px', // Start animation 50px before entering viewport
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const features = [
        {
            icon: "⚡",
            title: "High Performance",
            description: "Lightning-fast transactions with 65,000+ TPS capability, ensuring smooth and efficient operations for all GROKAI interactions."
        },
        {
            icon: "📈",
            title: "Scalability",
            description: "Built for growth with low fees and high throughput, supporting GROKAI's expansion without compromising performance."
        },
        {
            icon: "🌍",
            title: "Community & Ecosystem",
            description: "Vibrant developer community and robust DeFi ecosystem, providing the perfect foundation for GROKAI's innovative AI solutions."
        }
    ];

    return (
        <div className="bg-[#161614] py-20" ref={sectionRef}>
            <div className="max-w-[1800px] mx-auto px-8">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Why Solana?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        GROKAI leverages Solana&apos;s cutting-edge blockchain technology to deliver unparalleled performance and user experience.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-[#1C1C1A] border border-gray-800 rounded-xl p-8 hover:border-[#00D4FF]/30 transition-all duration-500 group hover:transform hover:scale-105 ${
                                isVisible 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                            }}
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="w-20 h-20 bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 rounded-full flex items-center justify-center mb-6 group-hover:from-[#00D4FF]/30 group-hover:to-[#0099CC]/30 transition-all duration-300">
                                    <span className="text-4xl">{feature.icon}</span>
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00D4FF] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className={`text-center mt-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
                    <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-white text-2xl font-bold mb-4">Built for the Future</h3>
                        <p className="text-gray-300 leading-relaxed">
                            By choosing Solana, GROKAI ensures that our AI-powered solutions can scale with demand, 
                            maintain low costs, and provide instant user experiences that traditional blockchains simply cannot match.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySol;