import { useMemo } from "react";
import { buildCircles } from "../data/stories.js";
import CircleItem from "./CircleItem.jsx";

export default function CircleCollection({
  interactive = true,
  variant = "archive",
}) {
  const circles = useMemo(() => buildCircles(), []);

  return (
    <div className={`circle-collection circle-collection--${variant}`}>
      {circles.map((circle) => (
        <CircleItem key={circle.index} circle={circle} interactive={interactive} />
      ))}
    </div>
  );
}
