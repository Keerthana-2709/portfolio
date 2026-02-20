import React, { useEffect, useRef } from "react";
import "./service.css";

export default function Service() {
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
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="testimonials animate animate-slide-left">
      <h1 className="testimonials-title">Testimonials</h1>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>
            AutoCAD Drafting (Floor Plans, Elevations, Sections)
            <br />
            Structural Layout Drawings
            <br />
            Approval Drawings
          </p>
          <h3>📐 2D Design</h3>
        </div>

        <div className="testimonial-card">
          <p>
            3D Elevation Design
            <br />
            Interior & Exterior Rendering
            <br />
            Walkthrough Visualization
            <br />
            SketchUp Modeling
            <br />
            VRay Rendering
          </p>
          <br />
          <h3>🏢 3D Design</h3>
        </div>

        <div className="testimonial-card">
            <p>
              Site Supervision & Execution
              <br /> Quantity Surveying <br />
              BOQ Preparation <br />
              Material Estimation
              <br /> Contractor Coordination
              <br /> Quality Control & Safety Monitoring
            </p>
          <h3>🏗️ Site Engineering</h3>
        </div>
      </div>
    </section>
  );
}
