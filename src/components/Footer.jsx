function Footer() {
    const currentYear = new Date().getFullYear();

    const handleLinkClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{
            background: '#111827',
            color: '#e5e7eb',
            padding: '2rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <div style={{
                    marginBottom: '1rem'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        marginBottom: '0.5rem'
                    }}>
                        Layzq
                    </h3>
                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                        Building the web, one project at a time.
                    </p>
                </div>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    marginBottom: '1rem',
                    flexWrap: 'wrap'
                }}>
                    {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                color: '#9ca3af',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(`#${item.toLowerCase()}`);
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
                
                <div style={{
                    borderTop: '1px solid #1f2937',
                    paddingTop: '1rem',
                    color: '#6b7280',
                    fontSize: '0.75rem'
                }}>
                    © {currentYear} Your Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;