// import React, { useEffect, useRef } from "react";
// import "./experience.css";

// function Accomplishments() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const obs = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             el.classList.add("is-visible");
//             obs.unobserve(el);
//           }
//         });
//       },
//       { threshold: 0.14 }
//     );

//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section
//       id="experience"
//       ref={ref}
//       className="accomplishments-container animate animate-slide-up"
//     >
//       <div className="accomplishments-top">
//         <div>
//           <h1 className="accomplishments-title">Experience</h1>
//           <p className="accomplishments-subtitle">
//             Project Experience & Software Knowledge
//           </p>
//         </div>
//       </div>

//       <div className="accomplishments-content">
//         <div className="left-section">
//           <h2>💼 Professional Highlights</h2>
//         </div>

//         <div className="right-section">
//           <h3>🏠 Residential Building Projects</h3>
//           <ul>
//             <li>Prepared complete 2D working drawings</li>
//             <li>Designed modern 3D elevations</li>
//             <li>Supervised site execution from foundation to finishing</li>
//           </ul>
//           <div className="bottom-line"></div>

//           <h3>🏢 Commercial Projects</h3>
//           <ul>
//             <li>Structural layout preparation</li>
//             <li>Interior space planning</li>
//             <li>On-site coordination with contractors</li>
//           </ul>
//           <div className="bottom-line"></div>

//           <h3>📊 Software Knowledge</h3>
//           <ul className="software-list">
//             <li>AutoCAD</li>
//             <li>SketchUp</li>
//             <li>VRay</li>
//             <li>Revit (Basic)</li>
//             <li>MS Excel</li>
//             <li>MS Project</li>
//           </ul>
//         </div>
//       </div>

//       <div className="bottom-line"></div>
//     </section>
//   );
// }

// export default Accomplishments;


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
      { threshold: 0.12 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="testimonials animate animate-slide-left"
    >
      <h1 className="testimonials-title">Experience</h1>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <h3>🏠 Civil</h3>
          <br />
          <p>
            Site Supervision & Execution
            <br /> Quantity Surveying
            <br /> Contractor Coordination
            <br /> Quality Control & Safety Monitoring
            <br /> Project Scheduling
            <br /> BOQ Preparation
            <br /> Client Coordination
          </p>
        </div>

        <div className="testimonial-card">
          <h3>📐 Architect</h3>
          <br />
          <p>
            AutoCAD Drafting (Floor Plans, Elevations, Sections)
            <br /> Architectural Detailing
            <br /> Approval Drawings
            <br /> Working Drawings
            <br /> Construction Documentation
          </p>
        </div>

        <div className="testimonial-card">
          <h3>🛋️ Interior Design</h3>
          <br />
          <p>
            Residential Interior Design
            <br /> Commercial Interior Design
            <br /> False Ceiling Design
            <br /> Furniture Layout Planning
            <br /> Modular Kitchen Design
            <br /> Lighting Design
            <br /> Color Consultation
            <br /> Interior Styling
            <br /> 3D Visualization
            <br /> Interior Rendering
          </p>
          <br />
        </div>

        <div className="testimonial-card">
          <h3>🛋️ 3D Visualization & Rendering</h3>
          <br />
          <p>
            3D Elevation Design
            <br /> Interior & Exterior Rendering
            <br /> Walkthrough Visualization
            <br /> SketchUp Modeling
            <br /> VRay Rendering
            <br /> Photorealistic Rendering
            <br /> Architectural Visualization
          </p>
          <br />
        </div>
      </div>
    </section>
  );
}

