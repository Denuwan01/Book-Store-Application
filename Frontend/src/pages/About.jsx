import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>Bringing books and readers together since 2024</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>At BookStore, we believe that books have the power to transform lives. Our mission is to make quality literature accessible to everyone while building a community of passionate readers.</p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>We carefully curate our selection to ensure the highest quality books.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>Building connections through shared love of reading.</p>
          </div>
          <div className="value-card">
            <h3>Accessibility</h3>
            <p>Making literature available and affordable for everyone.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About