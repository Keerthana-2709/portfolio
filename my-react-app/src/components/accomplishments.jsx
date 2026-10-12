import React, { useEffect, useRef } from "react";
import "./accomplishments.css";

function Accomplishments() {
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
      { threshold: 0.14 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="accomplishments-container animate animate-slide-up">
      <div className="accomplishments-top">
        <div>
          <h1 className="accomplishments-title">Accomplishments</h1>
          <p className="accomplishments-subtitle">
            Project Experience & Software Knowledge
          </p>
        </div>
      </div>

      <div className="accomplishments-content">
        <div className="left-section">
          <h2>💼 Project Experience</h2>
        </div>

        <div className="right-section">
          <h3>🏠 Residential Building Projects</h3>
          <ul>
            <li>Prepared complete 2D working drawings</li>
            <li>Designed modern 3D elevations</li>
            <li>Supervised site execution from foundation to finishing</li>
          </ul>
          <div className="bottom-line"></div>

          <h3>🏢 Commercial Projects</h3>
          <ul>
            <li>Structural layout preparation</li>
            <li>Interior space planning</li>
            <li>On-site coordination with contractors</li>
          </ul>
          <div className="bottom-line"></div>

          <h3>📊 Software Knowledge</h3>
          <ul className="software-list">
            <li>AutoCAD</li>
            <li>SketchUp</li>
            <li>VRay</li>
            <li>Revit (Basic)</li>
            <li>MS Excel</li>
            <li>MS Project</li>
          </ul>
        </div>
      </div>

      <div className="bottom-line"></div>
    </section>
  );
}

export default Accomplishments;
