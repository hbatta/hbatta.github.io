import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'experience', 'education'];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <>
      {/* Scroll Dots Navigation */}
      <nav className="scroll-dots">
        {sections.map(section => (
          <button
            key={section.id}
            className={`scroll-dot ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Navigate to ${section.label}`}
          >
            <span className="scroll-dot-tooltip">{section.label}</span>
          </button>
        ))}
      </nav>

      {/* Floating Blog Button */}
      <Link to="/blog" className="floating-blog-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
        <span>Blog</span>
      </Link>
    </>
  );
};

export default ScrollIndicator;
