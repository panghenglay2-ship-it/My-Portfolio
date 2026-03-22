import { useState } from 'react';

function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyUsername = () => {
        navigator.clipboard.writeText('@layzq12');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" style={{
            padding: '80px 2rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                            fontSize: '0.9rem'
                        }}>
                            📬 Get In Touch
                        </span>
                    </div>
                    
                    <h2 style={{
                        fontSize: '2.5rem',
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
                        fontSize: '1.1rem'
                    }}>
                        Have a project in mind? Let's work together! Reach out to me on Telegram.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Contact Information */}
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: '#1f2937',
                            marginBottom: '1.5rem'
                        }}>
                            Let's Connect
                        </h3>
                        
                        <div style={{
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1rem'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem'
                                }}>
                                    📧
                                </div>
                                <div>
                                    <p style={{ fontWeight: '600', color: '#374151' }}>Email</p>
                                    <a href="mailto:panghenglay2@gmail.com" style={{ color: '#8b5cf6', textDecoration: 'none' }}>
                                        panghenglay2@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1rem'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem'
                                }}>
                                    📱
                                </div>
                                <div>
                                    <p style={{ fontWeight: '600', color: '#374151' }}>Telegram</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <a 
                                            href="https://t.me/layzq12" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            style={{ color: '#8b5cf6', textDecoration: 'none' }}
                                        >
                                            @layzq12
                                        </a>
                                        <button
                                            onClick={handleCopyUsername}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: '0.8rem',
                                                color: '#8b5cf6',
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '4px',
                                                transition: 'all 0.3s ease'
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
                            
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(217, 70, 239, 0.1))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem'
                                }}>
                                    💬
                                </div>
                                <div>
                                    <p style={{ fontWeight: '600', color: '#374151' }}>Response Time</p>
                                    <p style={{ color: '#6b7280' }}>Within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 style={{
                                fontWeight: '600',
                                color: '#374151',
                                marginBottom: '1rem'
                            }}>
                                Connect with me
                            </h4>
                            <div style={{
                                display: 'flex',
                                gap: '1rem'
                            }}>
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '0.5rem 1rem',
                                        background: 'white',
                                        borderRadius: '8px',
                                        color: '#8b5cf6',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(139, 92, 246, 0.2)',
                                        transition: 'all 0.3s ease'
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
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '0.5rem 1rem',
                                        background: 'white',
                                        borderRadius: '8px',
                                        color: '#8b5cf6',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(139, 92, 246, 0.2)',
                                        transition: 'all 0.3s ease'
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
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '0.5rem 1rem',
                                        background: 'white',
                                        borderRadius: '8px',
                                        color: '#8b5cf6',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(139, 92, 246, 0.2)',
                                        transition: 'all 0.3s ease'
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
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Telegram Contact Card */}
                    <div style={{
                        background: 'linear-gradient(135deg, #ffffff, #faf5ff)',
                        borderRadius: '1rem',
                        padding: '2.5rem',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '4rem',
                            marginBottom: '1rem',
                            animation: 'float 3s ease-in-out infinite'
                        }}>
                            💬
                        </div>
                        
                        <h3 style={{
                            fontSize: '1.8rem',
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
                            marginBottom: '2rem',
                            lineHeight: '1.6'
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
                                padding: '1rem 2rem',
                                background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>📱</span>
                            Message me on Telegram
                            <span style={{ fontSize: '1.2rem' }}>→</span>
                        </a>
                        
                        <div style={{
                            marginTop: '2rem',
                            padding: '1rem',
                            background: 'rgba(139, 92, 246, 0.05)',
                            borderRadius: '0.5rem'
                        }}>
                            <p style={{
                                fontSize: '0.85rem',
                                color: '#6b7280',
                                marginBottom: '0.5rem'
                            }}>
                                ⚡ Usually responds within a few hours
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                fontSize: '0.8rem',
                                color: '#8b5cf6'
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
                    .grid-cols-2 {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default Contact;