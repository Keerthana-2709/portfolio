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
              href="https://wa.me/919597866986"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link whatsapp"
              title="WhatsApp"
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a
              href="https://instagram.com/ks_builders_25"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
              title="Instagram"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom animate-item">
        <p>
          © 2026 Er. Kirubahar K S | B.E. (Civil). All rights reserved.
        </p>
      </div>
    </footer>
  );
}