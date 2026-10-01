/**
 * Uploaded files only. Paths point at copies in /public/images.
 * Set a field to null to keep that layout area blank.
 *
 * 57a6318da0160f39d77d4ac62522a00a.jpg — enter / return icon
 * 701b461f71e3e5eca50ce9b66c4ff949.png — metal button photograph, not the control
 * 63a1c16fb8b8e4758a47a3e6f230eaa5.png — story 01
 * f751ca4b0bb0ce872e4faf4ac99f4406.jpg — story 01
 * 6eba0b6d4f5abb293da66ff9566f7c38.jpg — story 02
 * cf0b1aa7147f3c2a71cfc821cebf931b.png — story 02
 * f4ac85cd55777ba5c09b8946a275021e.png — story 03
 * 829daf07f119762f991967b998b04b1b.png — story 03
 * 7ebe8da501d117cf14e1f1d28e4e3a96.jpg — duplicate of the sticker photograph, unused
 *
 * There is no separate NYC collage yet, so the homepage visual stays empty.
 */

export function asset(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
}

export const buttonImage = asset("images/57a6318da0160f39d77d4ac62522a00a.jpg");

export const homeComposition = null;

/**
 * Crop window for each circle photograph, as fractions of the source file.
 * The square is the object's full face, so the word or center stays in the middle.
 */
export const circlePhotos = [
  {
    src: asset("images/63a1c16fb8b8e4758a47a3e6f230eaa5.png"),
    cropX: 0.287864,
    cropY: 0.422724,
    cropW: 0.370649,
    originX: "47.32%",
    originY: "56.18%",
  },
  {
    src: asset("images/6eba0b6d4f5abb293da66ff9566f7c38.jpg"),
    cropX: 0.037629,
    cropY: 0.203246,
    cropW: 0.923801,
    originX: "49.95%",
    originY: "54.98%",
  },
  {
    src: asset("images/829daf07f119762f991967b998b04b1b.png"),
    cropX: 0.229539,
    cropY: 0.290755,
    cropW: 0.417686,
    originX: "43.84%",
    originY: "44.74%",
  },
  {
    src: asset("images/cf0b1aa7147f3c2a71cfc821cebf931b.png"),
    cropX: 0.259643,
    cropY: 0.440367,
    cropW: 0.432737,
    originX: "47.6%",
    originY: "60.27%",
  },
  {
    src: asset("images/f4ac85cd55777ba5c09b8946a275021e.png"),
    cropX: 0.316086,
    cropY: 0.464362,
    cropW: 0.368768,
    originX: "50.05%",
    originY: "60.27%",
  },
  {
    src: asset("images/f751ca4b0bb0ce872e4faf4ac99f4406.jpg"),
    cropX: 0.190969,
    cropY: 0.2717,
    cropW: 0.651929,
    originX: "51.55%",
    originY: "51.52%",
  },
];
