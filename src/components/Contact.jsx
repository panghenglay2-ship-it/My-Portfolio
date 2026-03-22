import { useState, useEffect } from 'react';

function Contact() {
    const [copied, setCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCopyUsername = () => {
        navigator.clipboard.writeText('@layzq12');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" style={{
            padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 32px)',
            background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                        borderRadius: '50px',
                        marginBottom: '1rem'
                    }}>
                        <span style={{
                            background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: '600',
                            fontSize: 'clamp(0.8rem, 3vw, 0.9rem)'
                        }}>
                            📬 Get In Touch
                        </span>
                    </div>
                    
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Contact Me
                    </h2>
                    
                    <p style={{
                        color: '#6b7280',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                        padding: '0 1rem'
                    }}>
                        Have a project in mind? Let's work together! Reach out to me on Telegram.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '2rem' : '4rem',
                    alignItems: 'start'
                }}>
                    {/* Contact Information */}
                    <div>
                        <h3 style={{
                            fontSize: 'clamp(1.3rem, 4vw, 1.5rem)',
                            fontWeight: 'bold',
                            color: '#1f2937',
                            marginBottom: '1.5rem',
                            textAlign: isMobile ? 'center' : 'left'
                        }}>
                            Let's Connect
                        </h3>
                        
                        <div style={{
                            marginBottom: '2rem'
                        }}>
                            {/* Email */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem',
                                flexDirection: isMobile ? 'column' : 'row',
                                textAlign: isMobile ? 'center' : 'left'
                            }}>
                                <div style={{
                                    width: 'clamp(35px, 8vw, 40px)',
                                    height: 'clamp(35px, 8vw, 40px)',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                                    flexShrink: 0
                                }}>
                                    📧
                                </div>
                                <div>
                                    <p style={{ 
                                        fontWeight: '600', 
                                        color: '#374151',
                                        fontSize: 'clamp(0.9rem, 3vw, 1rem)'
                                    }}>Email</p>
                                    <a 
                                        href="mailto:panghenglay2@gmail.com" 
                                        style={{ 
                                            color: '#8b5cf6', 
                                            textDecoration: 'none',
                                            wordBreak: 'break-all',
                                            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)'
                                        }}
                                    >
                                        panghenglay2@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            {/* Telegram */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem',
                                flexDirection: isMobile ? 'column' : 'row',
                                textAlign: isMobile ? 'center' : 'left'
                            }}>
                                <div style={{
                                    width: 'clamp(35px, 8vw, 40px)',
                                    height: 'clamp(35px, 8vw, 40px)',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                                    flexShrink: 0
                                }}>
                                    📱
                                </div>
                                <div>
                                    <p style={{ 
                                        fontWeight: '600', 
                                        color: '#374151',
                                        fontSize: 'clamp(0.9rem, 3vw, 1rem)'
                                    }}>Telegram</p>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '0.5rem',
                                        justifyContent: isMobile ? 'center' : 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <a 
                                            href="https://t.me/layzq12" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            style={{ 
                                                color: '#8b5cf6', 
                                                textDecoration: 'none',
                                                fontSize: 'clamp(0.85rem, 3vw, 0.95rem)'
                                            }}
                                        >
                                            @layzq12
                                        </a>
                                        <button
                                            onClick={handleCopyUsername}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: 'clamp(0.75rem, 2.5vw, 0.8rem)',
                                                color: '#8b5cf6',
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '4px',
                                                transition: 'all 0.3s ease',
                                                whiteSpace: 'nowrap'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = 'rgba(139, 92, 246, 0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = 'none';
                                            }}
                                        >
                                            {copied ? '✓ Copied!' : '📋 Copy'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Response Time */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                flexDirection: isMobile ? 'column' : 'row',
                                textAlign: isMobile ? 'center' : 'left'
                            }}>
                                <div style={{
                                    width: 'clamp(35px, 8vw, 40px)',
                                    height: 'clamp(35px, 8vw, 40px)',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                                    flexShrink: 0
                                }}>
                                    💬
                                </div>
                                <div>
                                    <p style={{ 
                                        fontWeight: '600', 
                                        color: '#374151',
                                        fontSize: 'clamp(0.9rem, 3vw, 1rem)'
                                    }}>Response Time</p>
                                    <p style={{ 
                                        color: '#6b7280',
                                        fontSize: 'clamp(0.85rem, 3vw, 0.95rem)'
                                    }}>Within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 style={{
                                fontWeight: '600',
                                color: '#374151',
                                marginBottom: '1rem',
                                textAlign: isMobile ? 'center' : 'left',
                                fontSize: 'clamp(0.95rem, 3vw, 1rem)'
                            }}>
                                Connect with me
                            </h4>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: isMobile ? 'center' : 'flex-start',
                                flexWrap: 'wrap'
                            }}>
                                {[
                                    { name: 'GitHub', url: 'https://github.com/yourusername' },
                                    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
                                    { name: 'Twitter', url: 'https://twitter.com/yourusername' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: 'clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 3vw, 1rem)',
                                            background: 'white',
                                            borderRadius: '8px',
                                            color: '#8b5cf6',
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            fontSize: 'clamp(0.85rem, 3vw, 0.9rem)',
                                            border: '1px solid rgba(139, 92, 246, 0.2)',
                                            transition: 'all 0.3s ease',
                                            display: 'inline-block'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = '#8b5cf6';
                                            e.target.style.color = 'white';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'white';
                                            e.target.style.color = '#8b5cf6';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Telegram Contact Card */}
                    <div style={{
                        background: 'linear-gradient(135deg, #ffffff, #faf5ff)',
                        borderRadius: 'clamp(0.75rem, 3vw, 1rem)',
                        padding: isMobile ? '1.5rem' : '2.5rem',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: 'clamp(3rem, 10vw, 4rem)',
                            marginBottom: '1rem',
                            animation: 'float 3s ease-in-out infinite'
                        }}>
                            💬
                        </div>
                        
                        <h3 style={{
                            fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: '1rem'
                        }}>
                            Chat with me on Telegram
                        </h3>
                        
                        <p style={{
                            color: '#6b7280',
                            marginBottom: '1.5rem',
                            lineHeight: '1.6',
                            fontSize: 'clamp(0.85rem, 3vw, 1rem)'
                        }}>
                            Quickest way to reach me! Click the button below to start a conversation.
                        </p>
                        
                        <a
                            href="https://t.me/layzq12"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
                                background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontSize: isMobile ? '0.95rem' : '1.1rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                                width: isMobile ? '100%' : 'auto',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isMobile) {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
                                }
                            }}
                        >
                            <span style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>📱</span>
                            Message me on Telegram
                            <span style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>→</span>
                        </a>
                        
                        <div style={{
                            marginTop: '1.5rem',
                            padding: '1rem',
                            background: 'rgba(139, 92, 246, 0.05)',
                            borderRadius: '0.5rem'
                        }}>
                            <p style={{
                                fontSize: 'clamp(0.8rem, 2.5vw, 0.85rem)',
                                color: '#6b7280',
                                marginBottom: '0.5rem'
                            }}>
                                ⚡ Usually responds within a few hours
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                fontSize: 'clamp(0.75rem, 2.5vw, 0.8rem)',
                                color: '#8b5cf6',
                                flexWrap: 'wrap'
                            }}>
                                <span>✓ 24/7 Available</span>
                                <span>•</span>
                                <span>✓ Quick Response</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                @media (max-width: 768px) {
                    .contact-info-item {
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
}

export default Contact;