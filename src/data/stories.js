import { asset, circlePhotos } from "./assets.js";

/**
 * Story copy and image slots live here, separate from the layout.
 * Point an image field at a file in /public/images, or leave it null
 * to keep that area blank.
 */

export const CIRCLE_COUNT = 50;
export const STORY_TOTAL = 3;

export const stories = [
  {
    id: "01",
    title: "Water",
    location: "New York City",
    introduction:
      "A red cover, set flush with the street, carrying the word pressed into the metal.",
    splitText:
      "Paint, grit, and the slow wear of weather. The rest of this passage is still open.",
    body: "One circle in the archive. What surrounds it has not been written yet.",
    closingText: "The street keeps the circle. The story can wait.",
    images: {
      hero: asset("images/63a1c16fb8b8e4758a47a3e6f230eaa5.png"),
      split: null,
      large: asset("images/f751ca4b0bb0ce872e4faf4ac99f4406.jpg"),
      closing: null,
    },
  },
  {
    id: "02",
    title: "Surface",
    location: "New York City",
    introduction:
      "Paper layered over a round of steel, names and fragments that never quite stayed.",
    splitText: "A field of color, worn at the edge, sitting beside the stickers.",
    body: "The circle holds what the street left behind. More of it is still missing.",
    closingText: "Another layer will go here, when it is found.",
    images: {
      hero: asset("images/6eba0b6d4f5abb293da66ff9566f7c38.jpg"),
      split: asset("images/cf0b1aa7147f3c2a71cfc821cebf931b.png"),
      large: null,
      closing: null,
    },
  },
  {
    id: "03",
    title: "Plate",
    location: "New York City",
    introduction: "A diamond pattern, darkened by use, level with the pavement around it.",
    splitText: "Two rounds of metal, kept apart. The words between them are not finished.",
    body: "A third circle. A place still to be walked back to.",
    closingText: "Forty-seven circles remain in the archive, unopened.",
    images: {
      hero: asset("images/f4ac85cd55777ba5c09b8946a275021e.png"),
      split: null,
      large: asset("images/829daf07f119762f991967b998b04b1b.png"),
      closing: null,
    },
  },
];

/** Positions in the fifty-circle archive that currently open a story. */
const ACTIVE_POSITIONS = {
  7: "01",
  24: "02",
  41: "03",
};

export function getStory(id) {
  return stories.find((story) => story.id === id) ?? null;
}

export function getStoryIndex(id) {
  return stories.findIndex((story) => story.id === id);
}

function photoFor(src, index) {
  return (
    circlePhotos.find((photo) => photo.src === src) ??
    circlePhotos[index % circlePhotos.length]
  );
}

export function buildCircles() {
  return Array.from({ length: CIRCLE_COUNT }, (_, index) => {
    const position = index + 1;
    const story = getStory(ACTIVE_POSITIONS[position]);
    const photo = story ? photoFor(story.images.hero, index) : null;

    return {
      index: position,
      active: Boolean(story),
      storyId: story?.id ?? null,
      location: story?.location ?? null,
      preview: photo?.src ?? null,
      cropX: photo?.cropX ?? 0,
      cropY: photo?.cropY ?? 0,
      cropW: photo?.cropW ?? 1,
      originX: photo?.originX ?? "50%",
      originY: photo?.originY ?? "50%",
    };
  });
}
