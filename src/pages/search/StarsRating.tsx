import { RiStarSFill } from "react-icons/ri";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <span key={index}>
        {index < rating ? (
          <RiStarSFill size={20} style={{ color: "gold" }} />
        ) : (
          <RiStarSFill size={20} style={{ color: "lightgrey" }} />
        )}
      </span>
    ));

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;
