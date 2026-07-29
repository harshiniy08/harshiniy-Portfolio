import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img src="/harshini.jpeg" alt="Harshini Y" />
        </div>

        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I am <span className="highlight">Harshini Y</span>
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;