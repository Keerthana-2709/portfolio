import "./hero.css";

export default function Hero() {
  return (
    <div
      id="home"
      className="hero-container"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero_bg.jpg)` }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight">Hi!</span>
            <br />
            <br /> I'm Er.Kirubahar K.S{" "}
            <span
              style={{
                "font-size": "1.5rem",
              }}
            >
              B.E(Civil).,
            </span>
          </h1>
          <div className="hero-subtitle">
            Civil Engineer | Architect | Interior Designer
          </div>
          <br />
          <p className="hero-description">
            <span style={{ "font-weight": "bold" }}>
              Designing Spaces. Building Trust. Creating Experiences.
            </span>{" "}
            <br />
            Transforming ideas into exceptional spaces through innovative
            design, structural excellence, and thoughtful interiors. Dedicated
            to creating functional, sustainable, and visually inspiring
            environments that stand the test of time.
          </p>
          <div className="contact-button">
            <a href="/#projectGallery">
            <button className="contact-btn">
              Project Gallery
              </button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
