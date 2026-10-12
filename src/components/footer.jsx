import React, { useEffect, useRef } from 'react';
import './footer.css';

export default function Footer() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer ref={ref} className="footer is-visible">
      <div className="footer-content">
        <div className="footer-section animate-item">
          <h3 className="footer-title">Follow Me</h3>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/kirubahar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
              title="LinkedIn"
            >
              🔗
            </a>
            
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link whatsapp"
              title="WhatsApp"
            >
              💬
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
              title="Instagram"
            >
              📷
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom animate-item">
        <p>&copy; 2026 Er. KIRUBAHAR K S - B.E(Civil)., All rights reserved.</p>
      </div>
    </footer>
  );
}