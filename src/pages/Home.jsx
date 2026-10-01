import ImageButton from "../components/ImageButton.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <main className="page home-page">
      <Navbar />
      <section className="home-stage">
        <div className="home-copy">
          <h1>
            City
            <br />
            Collection
          </h1>
          <p>
            An evolving collection of people, places, and everyday moments across New
            York City.
          </p>
        </div>
        <div className="home-visual" />
        <ImageButton to="/collection" label="Enter the collection" />
      </section>
    </main>
  );
}
