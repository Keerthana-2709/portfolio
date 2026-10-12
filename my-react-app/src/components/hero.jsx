import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-description">
            To work in a challenging environment where I can utilize my 2D
            drafting, 3D modeling, and site management skills to contribute to
            high-quality construction projects while continuously enhancing my
            technical expertise.
          </p>
          <div className="contact-button">
            <button className="contact-btn">Contact</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://images.pexels.com/photos/4883441/pexels-photo-4883441.jpeg"
            alt="Hero"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
}
