import Navbar from "./Navbar.jsx";

export default function About() {
  return (
    <main className="page about-page">
      <Navbar />
      <div className="about-layout">
        <div className="about-text">
          <h1>About</h1>
          <div className="about-copy">
            <p>
              City Collection is an exploration of people, places, and everyday moments
              across New York City.
            </p>
            <p>
              The project began as a physical publication and evolved into a digital
              archive built around fifty circles.
            </p>
            <p>Each circle represents a potential story waiting to be discovered.</p>
          </div>
          <p className="about-meta">
            New York City
            <br />
            2026
          </p>
        </div>
        <div className="about-visual" />
      </div>
    </main>
  );
}
