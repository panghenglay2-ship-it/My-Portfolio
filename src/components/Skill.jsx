import { useState, useEffect } from 'react';

function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('skills');
            if (element) {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight - 100) {
                    setIsVisible(true);
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skills = [
        { 
            name: 'HTML', 
            icon: '🌐', 
            level: 85, 
            color: '#E34F26',
            projects: ['Semantic Structure', 'Forms', 'SEO Basics']
        },
        { 
            name: 'CSS', 
            icon: '🎨', 
            level: 80, 
            color: '#1572B6',
            projects: ['Flexbox Layouts', 'CSS Grid', 'Responsive Design']
        },
        { 
            name: 'JavaScript', 
            icon: '⚡', 
            level: 75, 
            color: '#F7DF1E',
            projects: ['DOM Manipulation', 'ES6+ Features', 'API Integration']
        },
        { 
            name: 'Python', 
            icon: '🐍', 
            level: 70, 
            color: '#3776AB',
            projects: ['Data Structures', 'Automation', 'OOP Concepts']
        },
        { 
            name: 'React', 
            icon: '⚛️', 
            level: 70, 
            color: '#61DAFB',
            projects: ['Components', 'Hooks', 'State Management']
        },
        { 
            name: 'Tailwind CSS', 
            icon: '💨', 
            level: 75, 
            color: '#06B6D4',
            projects: ['Utility Classes', 'Responsive Design', 'Custom Themes']
        }
    ];

    return (
        <section id="skills" style={{
            padding: '80px 2rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                            💪 My Toolkit
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
                        Skills & Technologies
                    </h2>
                    
                    <p style={{
                        color: '#6b7280',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1.1rem'
                    }}>
                        Here are the technologies I've been learning and building projects with
                    </p>
                </div>

                {/* Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            style={{
                                background: 'white',
                                borderRadius: '1rem',
                                padding: '1.5rem',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                                border: '1px solid rgba(139, 92, 246, 0.1)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Skill Header */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.8rem'
                                    }}>
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: 'bold',
                                            color: '#1f2937'
                                        }}>
                                            {skill.name}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.85rem',
                                            color: '#9ca3af'
                                        }}>
                                            {skill.projects.length} projects
                                        </p>
                                    </div>
                                </div>
                                <div style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 'bold',
                                    color: skill.color
                                }}>
                                    {skill.level}%
                                </div>
                            </div>
                            
                            {/* Progress Bar */}
                            <div style={{
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '8px',
                                    background: '#f3f4f6',
                                    borderRadius: '4px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: isVisible ? `${skill.level}%` : '0%',
                                        height: '100%',
                                        background: `linear-gradient(90deg, ${skill.color}, #d946ef)`,
                                        borderRadius: '4px',
                                        transition: 'width 1s ease-out',
                                        transitionDelay: `${index * 100}ms`
                                    }} />
                                </div>
                            </div>
                            
                            {/* Skills List */}
                            <div>
                                <p style={{
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    color: '#6b7280',
                                    marginBottom: '0.75rem'
                                }}>
                                    What I've learned:
                                </p>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}>
                                    {skill.projects.map((item) => (
                                        <span
                                            key={item}
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                background: '#f9fafb',
                                                borderRadius: '50px',
                                                fontSize: '0.75rem',
                                                color: '#4b5563',
                                                border: '1px solid #e5e7eb'
                                            }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learning Journey */}
                <div style={{
                    marginTop: '4rem',
                    textAlign: 'center',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(217, 70, 239, 0.03))',
                    borderRadius: '1rem'
                }}>
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#8b5cf6',
                        marginBottom: '1rem'
                    }}>
                        📈 Always Learning, Always Growing
                    </h3>
                    <p style={{
                        color: '#6b7280',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        I'm continuously expanding my knowledge and building projects to improve my skills.
                        Every day is a new opportunity to learn something new!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;