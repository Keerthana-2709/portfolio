import React, { useEffect, useRef } from "react";
import "./about.css";

export default function AboutMe() {
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
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id="about"
      ref={ref}
      className="about-container animate animate-slide-left"
    >
      <div className="about-image-wrapper">
        <img src="/about_1.jpg" alt="About" className="about-image" />
      </div>
      <div className="about-text">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I am a passionate Civil Engineer & Interior Designer dedicated to
          creating spaces that seamlessly blend functionality, aesthetics, and
          structural excellence. With expertise in planning, designing, and
          executing residential and commercial projects, I focus on delivering
          innovative solutions tailored to each client's vision.
          <br />
          <br />
          My approach combines technical precision with creative thinking,
          ensuring every project reflects quality, sustainability, and attention
          to detail. From concept development to final execution, I strive to
          transform ideas into inspiring spaces that enhance both lifestyle and
          experience.
          <br /> <br />
          <strong>
            "Designing with purpose, building with precision, and creating
            spaces that inspire."
          </strong>
        </p>
      </div>
    </div>
  );
}
