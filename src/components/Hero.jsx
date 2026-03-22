import heroImage from '../assets/pf.JPG'

import { useState, useEffect } from 'react';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleScrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white flex items-center justify-center px-4 pt-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

            <div className={`flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    {/* Greeting */}
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6 border border-purple-200">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold text-sm">
                            👋 Welcome to my portfolio
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-gray-800">Hi, I'm </span>
                        <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Pang Henglay
                        </span>
                    </h1>

                    {/* Animated Role */}
                    <div className="text-xl md:text-2xl text-gray-600 mb-6">
                        <span>I'm a </span>
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold">
                            Frontend Developer
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
                        I create beautiful, responsive web applications with modern technologies.
                        Passionate about building amazing digital experiences that make a difference.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 justify-center md:justify-start flex-wrap mb-12">
                        <button
                            onClick={() => handleScrollToSection('#projects')}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            View My Work
                        </button>
                        
                        <button
                            onClick={() => handleScrollToSection('#contact')}
                            className="px-8 py-3 bg-transparent text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Contact Me
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center md:justify-start">
                        {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-gray-400 hover:text-purple-600 transition-colors duration-300 font-medium"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <div className="relative group">
                        {/* Animated Ring */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
                        
                        {/* Image Container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-500 shadow-2xl">
                            <img
                                src= {heroImage}
                                alt="Pang Henglay"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-400 rounded-full blur-2xl opacity-50 animate-float" />
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-400 rounded-full blur-2xl opacity-50 animate-float-delayed" />
                    </div>
                </div>
            </div>

            {/* Add custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 10s ease-in-out infinite reverse;
                }
                @keyframes pulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.1; }
                    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
                }
                .animate-pulse {
                    animation: pulse 4s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.75; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

export default Hero;