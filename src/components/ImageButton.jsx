import { Link } from "react-router-dom";
import { buttonImage } from "../data/assets.js";

export default function ImageButton({ to, label }) {
  return (
    <Link to={to} className="image-button" aria-label={label}>
      <span className="image-button__disc">
        <img src={buttonImage} alt="" />
      </span>
      <span>{label}</span>
    </Link>
  );
}
