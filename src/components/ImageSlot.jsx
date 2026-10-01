export default function ImageSlot({ src, size }) {
  if (!src) {
    return <div className={`image-slot image-slot--${size}`} />;
  }

  return (
    <figure className={`image-slot image-slot--${size} has-image`}>
      <img src={src} alt="" />
    </figure>
  );
}
