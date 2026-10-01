import CircleCollection from "./CircleCollection.jsx";
import ImageButton from "./ImageButton.jsx";

export default function Ending() {
  return (
    <main className="page ending-page">
      <div className="ending-copy">
        <h1>
          Every circle
          <br />
          holds a story.
        </h1>
        <p>
          3 stories found
          <br />
          47 still waiting.
        </p>
      </div>
      <CircleCollection interactive={false} variant="field" />
      <ImageButton to="/collection" label="Return to collection" />
    </main>
  );
}
