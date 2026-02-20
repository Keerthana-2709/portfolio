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
    <div ref={ref} className="about-container animate animate-slide-left">
      <div className="about-image-wrapper">
        <img
          src="https://static.wixstatic.com/media/11062b_8d76252c90c84036bd3336137408977c~mv2.jpg/v1/fill/w_968,h_1248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8d76252c90c84036bd3336137408977c~mv2.jpg"
          alt="About"
          className="about-image"
        />
      </div>

      <div className="about-text">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I am a <strong>Er.KIRUBAHAR. K. S Civil Engineer</strong> with
          experience in 2D drafting, 3D modeling, and site supervision. Skilled
          in preparing detailed construction drawings, 3D elevation designs,
          quantity estimation, and managing on-site execution to ensure quality
          and timely project completion.
          <br />
          <br />I combine technical design expertise with practical site
          knowledge to deliver structurally sound and aesthetically appealing
          projects.
        </p>
      </div>
    </div>
  );
}
