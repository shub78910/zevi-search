import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <span key={index}>
        {index < rating ? (
          <RiStarSFill size={20} style={{ color: "gold" }} />
        ) : (
          <RiStarSLine size={20} style={{ color: "gold" }} />
        )}
      </span>
    ));

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;
