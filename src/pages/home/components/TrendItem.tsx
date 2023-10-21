import { Link } from "react-router-dom";
import { ITrends } from "../../../helpers/getData";

const TrendItem = ({ item }: { item: ITrends }) => {
  return (
    <Link to="/search">
      <div className="m-1 w-full">
        <img
          src={item.image}
          alt={`${item.description}`}
          className="rounded-lg cursor-pointer"
          height={200}
          width={150}
          aria-label="trend-item"
          loading="lazy"
        />
        <div className="text-sm mt-2 font-normal text-gray-500">
          {item.description}
        </div>
      </div>
    </Link>
  );
};

export default TrendItem;
