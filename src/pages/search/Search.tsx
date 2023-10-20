import { useEffect, useState } from "react";
import { IProduct, getProducts } from "../../api/getData";
import Header from "../../components/Header";
import StarRating from "./StarsRating";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import When from "../../components/When";
import SearchBoxFilters from "./SearchBoxFilters";

const Search: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    // const res1 = getProducts(20);
    // console.log(res1);

    const brands = ["Adidas", "H&M"];
    const res = [
      {
        image:
          "https://source.unsplash.com/random/300x400/?Intelligent%20Bronze%20Pizza",
        name: "Intelligent Bronze Pizza",
        currencyPrefix: "Rs. ",
        originalPrice: "4128.00",
        discountedPrice: "2064",
        rating: 5,
        noOfReviews: 826,
        isLiked: true,
        brand: "Adidas",
      },
      {
        image:
          "https://source.unsplash.com/random/300x400/?Generic%20Concrete%20Sausages",
        name: "Generic Concrete Sausages",
        currencyPrefix: "Rs. ",
        originalPrice: "3702.00",
        discountedPrice: "1851",
        rating: 4,
        noOfReviews: 644,
        isLiked: false,
        brand: "H&M",
      },
      {
        image:
          "https://source.unsplash.com/random/300x400/?Bespoke%20Frozen%20Soap",
        name: "Bespoke Frozen Soap",
        currencyPrefix: "Rs. ",
        originalPrice: "1794.00",
        discountedPrice: "897",
        rating: 2,
        noOfReviews: 478,
        isLiked: false,
        brand: "H&M",
      },
      {
        image:
          "https://source.unsplash.com/random/300x400/?Bespoke%20Frozen%20Soap",
        name: "Bespoke Frozen Soap",
        currencyPrefix: "Rs. ",
        originalPrice: "1794.00",
        discountedPrice: "897",
        rating: 2,
        noOfReviews: 478,
        isLiked: false,
        brand: "H&M",
      },
    ];

    setProducts(res);
    setBrands(brands);
  }, []);

  return (
    <>
      <div>
        <Header showSearchBar={true} />
      </div>
      <div className="flex items-start mt-8">
        <div className="w-1/4 p-4 hidden md:block">
          <h1 className="text-3xl font-normal mb-10">Search Results</h1>
          <SearchBoxFilters brands={brands} />
        </div>

        <div className="w-3/4 p-4 flex flex-wrap justify-evenly">
          {products.map((product, index) => (
            <div key={index} className="w-auto p-4 relative">
              <div className="cursor-pointer">
                <img
                  src={product.image}
                  alt={`${product.name}`}
                  height={200}
                  width={200}
                  loading="lazy"
                />
                <div className="absolute top-6 right-6">
                  <When isTrue={!product.isLiked}>
                    <BsHeart size={25} color="white" />
                  </When>
                  <When isTrue={product.isLiked}>
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
                <span className="text-gray-400 text-sm">
                  ({product.noOfReviews})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
