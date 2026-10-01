import { Link } from "react-router-dom";
import { getStoryIndex, stories } from "../data/stories.js";

export default function StoryNavigation({ storyId }) {
  const index = getStoryIndex(storyId);
  const previous = stories[index - 1];
  const next = stories[index + 1];

  return (
    <nav className="story-nav" aria-label="Stories">
      {previous ? (
        <Link to={`/story/${previous.id}`} className="story-nav__link">
          ← Previous story
        </Link>
      ) : (
        <span className="story-nav__link is-idle">← Previous story</span>
      )}

      <div className="story-nav__dots">
        {stories.map((story) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            className={`story-dot${story.id === storyId ? " is-current" : ""}`}
            aria-label={`Story ${story.id}`}
            aria-current={story.id === storyId ? "page" : undefined}
          />
        ))}
      </div>

      {next ? (
        <Link to={`/story/${next.id}`} className="story-nav__link story-nav__link--next">
          Next story →
        </Link>
      ) : (
        <Link to="/ending" className="story-nav__link story-nav__link--next">
          Next story →
        </Link>
      )}
    </nav>
  );
}
