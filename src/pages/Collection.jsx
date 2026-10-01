import CircleCollection from "../components/CircleCollection.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Collection() {
  return (
    <main className="page collection-page">
      <Navbar />
      <header className="collection-intro">
        <h1>Collection</h1>
        <p>Fifty circles across the city. Three of them open.</p>
      </header>
      <CircleCollection />
    </main>
  );
}
