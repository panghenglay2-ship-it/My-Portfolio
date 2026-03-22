import { useState, useEffect } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('about');
            if (element) {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight - 100) {
                    setIsVisible(true);
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" style={{
            padding: '60px 1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out'
            }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        About Me
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }} />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    {/* Left Column - Image/Illustration */}
                    <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        order: window.innerWidth <= 768 ? 2 : 1
                    }}>
                        <div style={{
                            width: 'min(250px, 70vw)',
                            height: 'min(250px, 70vw)',
                            margin: '0 auto',
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <div style={{
                                fontSize: 'clamp(5rem, 15vw, 8rem)',
                                animation: 'float 3s ease-in-out infinite'
                            }}>
                                🚀
                            </div>
                            {/* Decorative circles */}
                            <div style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '-10px',
                                width: 'clamp(40px, 10vw, 50px)',
                                height: 'clamp(40px, 10vw, 50px)',
                                background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                borderRadius: '50%',
                                opacity: 0.2,
                                animation: 'pulse 2s ease-in-out infinite'
                            }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '-10px',
                                left: '-10px',
                                width: 'clamp(50px, 12vw, 70px)',
                                height: 'clamp(50px, 12vw, 70px)',
                                background: 'linear-gradient(135deg, #d946ef, #8b5cf6)',
                                borderRadius: '50%',
                                opacity: 0.2,
                                animation: 'pulse 3s ease-in-out infinite'
                            }} />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div style={{
                        order: window.innerWidth <= 768 ? 1 : 2
                    }}>
                        {/* Enthusiasm Badge */}
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                            borderRadius: '50px',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(139, 92, 246, 0.2)'
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontWeight: '600',
                                fontSize: '0.85rem'
                            }}>
                                🌱 Just Starting My Journey
                            </span>
                        </div>

                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                            fontWeight: 'bold',
                            color: '#1f2937',
                            marginBottom: '1rem'
                        }}>
                            Passionate Developer in the Making
                        </h3>

                        <p style={{
                            fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                            color: '#4b5563',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem'
                        }}>
                            I'm a motivated beginner who discovered the amazing world of coding and 
                            fell in love with creating things for the web. Every day is a new opportunity 
                            to learn, grow, and build something meaningful.
                        </p>

                        <p style={{
                            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                            color: '#6b7280',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem'
                        }}>
                            Currently exploring modern web technologies and building projects to 
                            strengthen my skills. I believe that the best way to learn is by doing, 
                            and I'm excited to turn my ideas into reality through code.
                        </p>

                        {/* Current Focus */}
                        <div style={{
                            background: 'white',
                            borderRadius: '1rem',
                            padding: '1.25rem',
                            marginBottom: '1.5rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                            border: '1px solid rgba(139, 92, 246, 0.1)'
                        }}>
                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                color: '#8b5cf6',
                                marginBottom: '1rem'
                            }}>
                                📚 Currently Learning
                            </h4>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.6rem'
                            }}>
                                {['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
                                    <span key={skill} style={{
                                        padding: '0.35rem 0.9rem',
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(217, 70, 239, 0.05))',
                                        borderRadius: '50px',
                                        fontSize: '0.85rem',
                                        color: '#8b5cf6',
                                        fontWeight: '500'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Goals Section */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{
                                flex: 1,
                                padding: '1rem',
                                background: 'white',
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(139, 92, 246, 0.1)',
                                textAlign: window.innerWidth <= 480 ? 'center' : 'left'
                            }}>
                                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🎯</div>
                                <h4 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', fontSize: '1rem' }}>My Goal</h4>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                    Build real-world projects and become a skilled developer
                                </p>
                            </div>
                            <div style={{
                                flex: 1,
                                padding: '1rem',
                                background: 'white',
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(139, 92, 246, 0.1)',
                                textAlign: window.innerWidth <= 480 ? 'center' : 'left'
                            }}>
                                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>💡</div>
                                <h4 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', fontSize: '1rem' }}>Mindset</h4>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                    Always learning, always growing, always curious
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.2; }
                    50% { transform: scale(1.1); opacity: 0.3; }
                }
                
                /* Responsive styles */
                @media (max-width: 768px) {
                    #about {
                        padding: 40px 1rem !important;
                    }
                    
                    .grid-container {
                        gap: 2rem !important;
                    }
                }
                
                @media (max-width: 480px) {
                    #about {
                        padding: 30px 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default About;