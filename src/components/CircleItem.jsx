import { Link } from "react-router-dom";

export default function CircleItem({ circle, interactive = true }) {
  const disc = (
    <span className="circle-disc">
      {circle.preview ? <img src={circle.preview} alt="" /> : null}
    </span>
  );

  const caption = circle.active ? (
    <span className="circle-caption">
      <span>Story {circle.storyId}</span>
      <span>{circle.location}</span>
    </span>
  ) : null;

  const className = `circle-item${circle.active ? " is-active" : ""}`;
  const style = {
    animationDelay: `${Math.min(circle.index * 18, 420)}ms`,
    "--crop-x": circle.cropX ?? 0,
    "--crop-y": circle.cropY ?? 0,
    "--crop-w": circle.cropW ?? 1,
    "--origin-x": circle.originX ?? "50%",
    "--origin-y": circle.originY ?? "50%",
  };

  if (interactive && circle.active) {
    return (
      <Link
        to={`/story/${circle.storyId}`}
        className={className}
        style={style}
        aria-label={`Story ${circle.storyId}, ${circle.location}`}
      >
        {disc}
        {caption}
      </Link>
    );
  }

  return (
    <div className={className} style={style} aria-hidden="true">
      {disc}
    </div>
  );
}
