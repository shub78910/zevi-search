import { useEffect, useState } from "react";
import { IProduct, getProducts } from "../../helpers/getData";
import Header from "../../components/Header";

import SearchBoxFilters from "./components/SearchBoxFilters";
import Product from "./components/Product";
import {
  filterByBrand,
  filterByPrice,
  filterByRating,
  filterBySearch,
} from "../../helpers/filterData";
import { debounce } from "../../util/customDebounce";
import { RxCross2 } from "react-icons/rx";

const Search: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const debounceDelay = 500;

  useEffect(() => {
    const { productData, brands } = getProducts(30);
    setProducts(productData);
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
  }, debounceDelay);

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

  const handleMenuDisplay = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Header {...{ showSearchBar: true, handleChange, handleMenuDisplay }} />
      <div className="flex items-start justify-center mt-8">
        <div
          className={`w-4/5 md:w-1/5 p-4 fixed top-0 left-0 bg-slate-50 rounded-md md:bg-white md:relative md:block z-10 min-h-full transform overflow-auto ease-in-out transition-all duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div
            className="flex justify-end md:hidden"
            onClick={() => setShowMenu(false)}
          >
            <RxCross2 size={30} />
          </div>
          <h1 className="text-3xl font-normal mb-10">Search Results</h1>
          <SearchBoxFilters
            brands={brands}
            handleFilterChange={handleFilterChange}
          />
        </div>

        <main className="w-4/5 flex flex-wrap justify-evenly">
          {filteredProducts?.map((product) => (
            <Product {...{ product }} key={product.id} />
          ))}
        </main>
      </div>
    </>
  );
};

export default Search;
