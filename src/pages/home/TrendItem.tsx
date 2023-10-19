import { ITrends } from "../../api/getData";

const TrendItem = ({ item }: { item: ITrends }) => {
  return (
    <div className="m-1">
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
  );
};

export default TrendItem;
