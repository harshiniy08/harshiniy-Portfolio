import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">

        <div className="hero-image">
          <img src="/harshini.jpeg" alt="Harshini Y" />
        </div>

        <div className="hero-content">
          <h1>Good Morning, Welcome to My Portfolio</h1>

          <h2>
            Hi, I'm <span className="highlight">Harshini Y</span>
          </h2>

          <p>
            B.Tech AIML Student at MSRUAS passionate about
            Web Development, Artificial Intelligence and
            creating innovative solutions.
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