import React, { useEffect, useRef } from "react";
import "./contact.css";

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="contact-container is-visible">
      <h1 className="contact-title animate-item">
        {" "}
        <i class="fa fa-volume-control-phone" aria-hidden="true"></i> Contact
        Details
      </h1>

      <div className="contact-content">
        <div className="contact-card animate-item">
          <div className="contact-item">
            <span className="contact-label">Name:</span>
            <span className="contact-value">Er. KIRUBAHAR K S B.E(Civil)</span>
          </div>
        </div>

        <div className="contact-card animate-item">
          <div className="contact-item">
            <span className="contact-label">📱 Phone:</span>
            <a href="tel:+919597866986" className="contact-value contact-link">
              +91 95978 66986
            </a>
          </div>
        </div>

        <div className="contact-card animate-item">
          <div className="contact-item">
            <span className="contact-label">✉️ Email:</span>
            <a
              href="mailto:kskirubahar@gmail.com"
              className="contact-value contact-link"
            >
              kskirubahar@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-card animate-item">
          <div className="contact-item">
            <span className="contact-label">📍 Location:</span>
            <span className="contact-value">Tiruppur, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
