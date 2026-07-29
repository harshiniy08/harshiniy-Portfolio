import "./Hero.css";

function Hero() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";

    return "Good Evening";
  };
  

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img src="/harshini.jpeg" alt="Harshini Y" />
        </div>

        <div className="hero-content">
          <h1>{getGreeting()}, Welcome to My Portfolio</h1>

          <h2>
            Hi, I'm <span className="highlight">Harshini Y</span>
          </h2>

          <p>
            B.Tech AIML Student /  Web
            Developer/ Passionate Tech enthusiast
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