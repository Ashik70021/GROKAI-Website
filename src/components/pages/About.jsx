
import { useEffect, useRef, useState } from 'react';

const About = () => {
    const [visionVisible, setVisionVisible] = useState(false);
    const [goalsVisible, setGoalsVisible] = useState(false);
    const visionRef = useRef(null);
    const goalsRef = useRef(null);

    useEffect(() => {
        const visionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisionVisible(true);
                }
            },
            { threshold: 0.2, rootMargin: '-50px 0px' }
        );

        const goalsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setGoalsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '-50px 0px' }
        );

        const currentVisionRef = visionRef.current;
        const currentGoalsRef = goalsRef.current;

        if (currentVisionRef) {
            visionObserver.observe(currentVisionRef);
        }
        if (currentGoalsRef) {
            goalsObserver.observe(currentGoalsRef);
        }

        return () => {
            if (currentVisionRef) {
                visionObserver.unobserve(currentVisionRef);
            }
            if (currentGoalsRef) {
                goalsObserver.unobserve(currentGoalsRef);
            }
        };
    }, []);

    const goals = [
        {
            number: "01",
            title: "Make AI Accessible",
            description: "Democratize artificial intelligence by creating intuitive interfaces that anyone can use, regardless of technical expertise.",
            icon: "🤖"
        },
        {
            number: "02", 
            title: "Empower Businesses & Individuals",
            description: "Provide powerful tools that enhance productivity, creativity, and decision-making for both personal and professional use.",
            icon: "💪"
        },
        {
            number: "03",
            title: "Leverage Blockchain",
            description: "Integrate cutting-edge blockchain technology to ensure transparency, security, and decentralized governance.",
            icon: "⛓️"
        },
        {
            number: "04",
            title: "Drive Innovation",
            description: "Push the boundaries of what's possible by combining AI with blockchain to create revolutionary solutions.",
            icon: "🚀"
        },
        {
            number: "05",
            title: "Build a Strong Community",
            description: "Foster a vibrant ecosystem of developers, users, and innovators working together towards a common vision.",
            icon: "🌍"
        }
    ];

    return (
        <div className="bg-[#161614] min-h-screen">
            {/* Vision Section */}
            <section className="py-12 sm:py-16 lg:py-20" ref={visionRef}>
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left: Text Content */}
                        <div className={`transition-all duration-1000 ${
                            visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8">
                                Our <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Vision</span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                                To create a future where artificial intelligence seamlessly integrates with blockchain technology, 
                                making advanced tools accessible to everyone while maintaining transparency and user control.
                            </p>
                            
                            {/* Bullet List */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full flex-shrink-0"></div>
                                    <span className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium">Easy to Use</span>
                                </div>
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full flex-shrink-0"></div>
                                    <span className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium">Powerful</span>
                                </div>
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full flex-shrink-0"></div>
                                    <span className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium">Reliable</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Animated Illustration */}
                        <div className={`relative transition-all duration-1000 ${
                            visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`} style={{ transitionDelay: visionVisible ? '300ms' : '0ms' }}>
                            <div className="relative bg-gradient-to-br from-[#1C1C1A] to-[#0F0F0D] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-800">
                                {/* Futuristic AI Illustration */}
                                <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                                    {/* Central AI Core */}
                                    <div className="relative">
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center animate-pulse">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#161614] rounded-full flex items-center justify-center">
                                                <span className="text-lg sm:text-2xl lg:text-3xl">🤖</span>
                                            </div>
                                        </div>
                                        
                                        {/* Orbiting Elements */}
                                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                                            <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                                            <div className="absolute top-1/2 -right-6 sm:-right-8 transform -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
                                            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                                            <div className="absolute top-1/2 -left-6 sm:-left-8 transform -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
                                        </div>

                                        {/* Neural Network Lines */}
                                        <div className="absolute inset-0">
                                            <svg className="w-full h-full" viewBox="0 0 200 200">
                                                <g className="animate-pulse">
                                                    <line x1="100" y1="50" x2="100" y2="100" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                                                    <line x1="150" y1="100" x2="100" y2="100" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                                                    <line x1="100" y1="150" x2="100" y2="100" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                                                    <line x1="50" y1="100" x2="100" y2="100" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Data Points */}
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-gray-300/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                <div className="absolute top-1/3 left-4 sm:left-6 lg:left-8 w-3.5 h-3.5 sm:w-5 sm:h-5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goals Section */}
            <section className="py-12 sm:py-16 lg:py-20" ref={goalsRef}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
                        goalsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                            Our <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Goals</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                            A roadmap to revolutionize the AI landscape through strategic innovation and community building
                        </p>
                    </div>

                    {/* Vertical Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-gray-300"></div>

                        {goals.map((goal, index) => (
                            <div
                                key={index}
                                className={`relative mb-16 transition-all duration-800 ${
                                    goalsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: goalsVisible ? `${index * 200}ms` : '0ms' }}
                            >
                                <div className={`flex flex-col md:flex-row items-start md:items-center ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}>
                                    {/* Content Card */}
                                    <div className={`flex-1 ml-12 md:ml-0 ${
                                        index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                    }`}>
                                        <div className="bg-[#1C1C1A] border border-gray-800 rounded-xl p-8 hover:border-[#00D4FF]/30 transition-all duration-300 group">
                                            <div className="flex items-start space-x-4">
                                                <div className="text-4xl">{goal.icon}</div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                                                        {goal.title}
                                                    </h3>
                                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                                        {goal.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] rounded-full flex items-center justify-center border-4 border-[#161614] shadow-lg">
                                            <span className="text-white font-bold text-sm">{goal.number}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;