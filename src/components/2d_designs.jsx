import { useEffect, useState } from "react";
import "./projectGallery.css";

const plans = [
  {
    id: 1,
    title: "2D Design Plan",
    image: "/2d_designs_view.png",
  },
];

export default function TwoDDesigns() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [zoom, setZoom] = useState(1);

  const closePreview = () => {
    setSelectedPlan(null);
    setZoom(1);
  };

  const openPreview = (plan) => {
    setZoom(1);
    setSelectedPlan(plan);
  };

  useEffect(() => {
    if (!selectedPlan) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPlan(null);
        setZoom(1);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedPlan]);

  return (
    <main className="project-designs-gallery">
      <header className="project-designs-heading">
        <h1>2D Design Plans</h1>
        <p>Explore the layouts and details behind each design.</p>
      </header>

      <div className="project-designs-grid">
        {plans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            className="project-card-2d-button"
            onClick={() => openPreview(plan)}
            aria-label={`View ${plan.title}`}
          >
            <img src={plan.image} alt={plan.title} className="project-card-2d" />
            <span className="project-card-2d-caption">{plan.title}</span>
          </button>
        ))}
      </div>

      {selectedPlan && (
        <div
          className="image-preview-backdrop"
          onClick={closePreview}
          role="presentation"
        >
          <div
            className="image-preview-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPlan.title} preview`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="image-preview-close"
              onClick={closePreview}
              aria-label="Close image preview"
            >
              &times;
            </button>
            <div className="image-preview-controls" aria-label="Image zoom controls">
              <button
                type="button"
                onClick={() => setZoom((currentZoom) => Math.min(currentZoom + 0.25, 3))}
                disabled={zoom >= 3}
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setZoom((currentZoom) => Math.max(currentZoom - 0.25, 1))}
                disabled={zoom <= 1}
                aria-label="Zoom out"
              >
                −
              </button>
            </div>
            <img
              src={selectedPlan.image}
              alt={selectedPlan.title}
              style={{
                width: `${90 * zoom}vw`,
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
