import { useEffect, useState } from "react";
import { IProduct, getProducts } from "../../helpers/getData";
import Header from "../../components/Header";

import SearchBoxFilters from "./SearchBoxFilters";
import Product from "./Product";
import {
  filterByBrand,
  filterByPrice,
  filterByRating,
  filterBySearch,
} from "../../helpers/filterData";
import { debounce } from "../../util/customDebounce";

const Search: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    // const res1 =  getProducts(20);

    const brands = ["Adidas", "H&M"];
    const res = [
      {
        id: 1,
        image:
          "https://source.unsplash.com/random/300x400/?Intelligent%20Bronze%20Pizza",
        name: "Intelligent Bronze Pizza",
        currencyPrefix: "Rs. ",
        originalPrice: "4128.00",
        discountedPrice: "2064",
        rating: "5",
        noOfReviews: 826,
        isLiked: true,
        brand: "Adidas",
      },
      {
        id: 2,

        image:
          "https://source.unsplash.com/random/300x400/?Generic%20Concrete%20Sausages",
        name: "Generic Concrete Sausages",
        currencyPrefix: "Rs. ",
        originalPrice: "3702.00",
        discountedPrice: "1851",
        rating: "4",
        noOfReviews: 644,
        isLiked: false,
        brand: "H&M",
      },
      {
        id: 3,

        image:
          "https://source.unsplash.com/random/300x400/?Bespoke%20Frozen%20Soap",
        name: "Bespoke Frozen Soap",
        currencyPrefix: "Rs. ",
        originalPrice: "1794.00",
        discountedPrice: "897",
        rating: "2",
        noOfReviews: 478,
        isLiked: false,
        brand: "H&M",
      },
      {
        id: 4,

        image:
          "https://source.unsplash.com/random/300x400/?Bespoke%20Frozen%20Soap",
        name: "Bespoke Frozen Soap",
        currencyPrefix: "Rs. ",
        originalPrice: "1794.00",
        discountedPrice: "897",
        rating: "2",
        noOfReviews: 478,
        isLiked: false,
        brand: "H&M",
      },
    ];
    setProducts(res);
    setBrands(brands);
  }, []);

  useEffect(() => {
    if (searchText) {
      const filteredResults = filterBySearch(products, searchText);
      setFilteredProducts(filteredResults);
    } else {
      setFilteredProducts(products);
    }
  }, [searchText, products]);

  const handleChange = debounce((value: string) => {
    setSearchText(value);
  }, 500);

  const handleFilterChange = ({
    selectedBrands,
    selectedPriceRange,
    selectedRating,
  }: {
    selectedBrands: string[];
    selectedPriceRange: string[];
    selectedRating: string[];
  }) => {
    let results = products;

    if (selectedBrands) {
      results = filterByBrand(results, selectedBrands);
    }
    if (selectedPriceRange) {
      results = filterByPrice(results, selectedPriceRange);
    }
    if (selectedRating) {
      results = filterByRating(results, selectedRating);
    }

    setFilteredProducts(results);
  };

  return (
    <>
      <div>
        <Header {...{ showSearchBar: true, handleChange }} />
      </div>
      <div className="flex items-start mt-8">
        <div className="w-1/5 p-4 hidden md:block">
          <h1 className="text-3xl font-normal mb-10">Search Results</h1>
          <SearchBoxFilters
            brands={brands}
            handleFilterChange={handleFilterChange}
          />
        </div>

        <div className="w-4/5 p-4 flex flex-wrap justify-evenly">
          {filteredProducts.map((product, index) => (
            <Product {...{ product, index }} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
