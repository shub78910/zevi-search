import StarRating from "./StarsRating";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import When from "../../components/When";
import { IProduct } from "../../helpers/getData";
import { useState } from "react";

const Product = ({ index, product }: { index: number; product: IProduct }) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div key={index} className="w-auto p-4 relative">
      <div className="cursor-pointer">
        <img
          src={product.image}
          alt={`${product.name}`}
          height={200}
          width={200}
          loading="lazy"
        />
        <div
          className="absolute top-6 right-6"
          onClick={() => setLiked(!liked)}
        >
          <When isTrue={!liked}>
            <BsHeart size={25} color="white" />
          </When>
          <When isTrue={liked}>
            <BsHeartFill size={25} color="red" />
          </When>
        </div>
      </div>
      <h3 className="font-medium text-base mt-2">{product.name}</h3>
      <div>
        <span className="mr-2 text-gray-400 line-through">
          {product.currencyPrefix}
          {product.originalPrice}
        </span>
        <span className="text-blue-500 font-semibold">
          {product.currencyPrefix}
          {product.discountedPrice}
        </span>
      </div>

      <div className="flex justify-start items-center gap-2">
        <StarRating {...{ rating: product.rating }} />
        <span className="text-gray-400 text-sm">({product.noOfReviews})</span>
      </div>
    </div>
  );
};

export default Product;