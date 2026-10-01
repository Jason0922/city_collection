import { Navigate, Link, useParams } from "react-router-dom";
import { STORY_TOTAL, getStory } from "../data/stories.js";
import FadeIn from "./FadeIn.jsx";
import ImageSlot from "./ImageSlot.jsx";
import StoryNavigation from "./StoryNavigation.jsx";

export default function StoryPage() {
  const { id } = useParams();
  const story = getStory(id);

  if (!story) {
    return <Navigate to="/collection" replace />;
  }

  return (
    <article className="page story-page">
      <header className="story-top">
        <Link to="/collection">← Collection</Link>
        <span>
          {story.id} / {String(STORY_TOTAL).padStart(2, "0")}
        </span>
      </header>

      <FadeIn>
        <h1 className="story-title">{story.title}</h1>
      </FadeIn>

      <ImageSlot src={story.images.hero} size="large" />

      <FadeIn>
        <p className="story-intro">{story.introduction}</p>
      </FadeIn>

      <div className="story-split">
        <ImageSlot src={story.images.split} size="split" />
        <FadeIn>
          <p className="story-copy">{story.splitText}</p>
        </FadeIn>
      </div>

      <ImageSlot src={story.images.large} size="large" />

      <FadeIn>
        <p className="story-copy story-copy--solo">{story.body}</p>
      </FadeIn>

      <div className="story-split story-split--reverse">
        <FadeIn>
          <p className="story-copy">{story.closingText}</p>
        </FadeIn>
        <ImageSlot src={story.images.closing} size="split" />
      </div>

      <StoryNavigation storyId={story.id} />
    </article>
  );
}
