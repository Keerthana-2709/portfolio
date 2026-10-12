// ProductCardGlass.jsx
import React, { useState } from "react";
import styled from "styled-components";
const zen = "/civil_engineer.jpg";
const architect = "/arch.jpg";
const interior = "/interior.jpg";
const design = "/3d_design.jpg";

const experiences = [
  {
    title: "Civil",
    frontTitle: "Civil Engineer",
    frontPrompt: "Please Click Me",
    items: [
      "Site Supervision & Execution",
      "Quantity Surveying",
      "Contractor Coordination",
      "Quality Control & Safety Monitoring",
      "Project Scheduling",
      "BOQ Preparation",
      "Client Coordination",
        ],
    backgroundImage: "/civil.jpg",
  },
  {
    title: "Architect",
    frontTitle: "Architect",
    frontPrompt: "Please Click Me",
    items: [
      "AutoCAD Drafting (Floor Plans, Elevations, Sections)",
      "Architectural Detailing",
      "Approval Drawings",
      "Working Drawings",
      "Construction Documentation",
      ],
    image: architect,
  },
  {
    title: "Interior Design",
    frontTitle: "Interior Designer",
    frontPrompt: "Please Click Me",
    items: [
      "Residential Interior Design",
      "Commercial Interior Design",
      "False Ceiling Design",
      "Furniture Layout Planning",
      "Modular Kitchen Design",
      "Lighting Design",
      "Color Consultation",
      "Interior Styling",
      "3D Visualization",
      "Interior Rendering",
      ],
    image: interior,
  },
  {
    title: "3D Visualization & Rendering",
    frontTitle: "3D Visualization Specialist",
    frontPrompt: "Please Click Me",
    items: [
      "3D Elevation Design",
      "Interior & Exterior Rendering",
      "Walkthrough Visualization",
      "SketchUp Modeling",
      "VRay Rendering",
      "Photorealistic Rendering",
      "Architectural Visualization",
      ],
    image: design,
  },
];

const CardScene = styled.div`
  width: 100%;
  height: 320px;
  perspective: 1000px;
  cursor: pointer;

  &:hover .productCardGlass__card,
  &:focus-visible .productCardGlass__card {
    transform: rotateY(180deg);
  }
`;

const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.$flipped ? "rotateY(180deg)" : "rotateY(0)")};
  transform-style: preserve-3d;
  transition: transform 800ms ease;
`;

const CardFace = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
`;

const FrontFace = styled(CardFace)`
  color: rgba(0, 0, 0, 0.89);
  background-image: url(${(props) => props.$image || zen});
  background-position: center;
  background-size: cover;
`;

const BackFace = styled(CardFace)`
  transform: rotateY(180deg);
  background: #404040;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FrontPanel = styled.div`
  width: 60%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  text-align: center;

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.35rem;
  }

  p {
    margin: 0;
  }
`;

const BackContent = styled.div`
  width: 80%;
  max-height: 85%;
  overflow-y: auto;

  h3 {
    margin: 0 0 0.75rem;
    color: rgba(255, 255, 255, 0.92);
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.85rem;
    line-height: 1.55;
  }
`;

const CardStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: min(100%, 520px);
`;

function ExperienceCard({
  title,
  items,
  image = zen,
  frontTitle = "React Developer",
  frontPrompt = "Please hover me",
}) {
  const [flipped, setFlipped] = useState(false);

  const toggleCard = () => setFlipped((isFlipped) => !isFlipped);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  };

  return (
    <CardScene
      className="productCardGlass__scene"
      role="button"
      tabIndex={0}
      aria-label={`Show ${title} experience details`}
      aria-pressed={flipped}
      onClick={toggleCard}
      onKeyDown={handleKeyDown}
    >
      <FlipCard
        className="productCardGlass__card"
        $flipped={flipped}
      >
        <FrontFace
          className="productCardGlass__card__blur__front"
          $image={image}
        >
          <FrontPanel>
              <h3>{frontTitle}</h3>
              <p>{frontPrompt}</p>
          </FrontPanel>
        </FrontFace>
        <BackFace
          className="productCardGlass__card__blur__back"
        >
          <BackContent>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </BackContent>
        </BackFace>
      </FlipCard>
    </CardScene>
  );
}

function ProductCardGlass({ cards = experiences }) {
  return (
    <CardStack className="productCardGlass">
      {cards.map((experience) => (
        <ExperienceCard
          key={experience.title}
          title={experience.title}
          items={experience.items}
          image={experience.image}
          frontTitle={experience.frontTitle}
          frontPrompt={experience.frontPrompt}
        />
      ))}
    </CardStack>
  );
}

export default ProductCardGlass;