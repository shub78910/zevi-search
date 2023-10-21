import { useState, useEffect } from "react";
import When from "../../../components/When";
import StarRating from "./StarsRating";
import { IPriceRange, priceRanges, ratings } from "../../../static/filters";
import FilterTemplate from "./FilterTemplate";
const SearchBoxFilters = ({
  brands,
  handleFilterChange,
}: {
  brands: string[];
  handleFilterChange: ({
    selectedBrands,
    selectedPriceRange,
    selectedRating,
  }: {
    selectedBrands: string[];
    selectedPriceRange: string[];
    selectedRating: string[];
  }) => void;
}) => {
  const [showBrandFilter, setShowBrandFilter] = useState<boolean>(true);
  const [showPriceFilter, setShowPriceFilter] = useState<boolean>(true);
  const [showRatingFilter, setShowRatingFilter] = useState<boolean>(true);

  const [selectedFilters, setSelectedFilters] = useState({
    brands: [] as string[],
    priceRange: [] as string[],
    ratings: [] as string[],
  });

  useEffect(() => {
    const { brands, priceRange, ratings } = selectedFilters;

    handleFilterChange({
      selectedBrands: brands,
      selectedPriceRange: priceRange,
      selectedRating: ratings,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters]);

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brand = e.target.value;
    const isChecked = e.target.checked;

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      brands: isChecked
        ? [...prevFilters.brands, brand]
        : prevFilters.brands.filter((selectedBrand) => selectedBrand !== brand),
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priceRange = e.target.value;
    const isChecked = e.target.checked;

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: isChecked
        ? [...prevFilters.priceRange, priceRange]
        : prevFilters.priceRange.filter(
            (selectedPriceRange) => selectedPriceRange !== priceRange
          ),
    }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = e.target.value;
    const isChecked = e.target.checked;

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      ratings: isChecked
        ? [...prevFilters.ratings, rating]
        : prevFilters.ratings.filter(
            (selectedRating) => selectedRating !== rating
          ),
    }));
  };

  return (
    <div>
      <div className="mb-8">
        <FilterTemplate
          label="BRAND"
          handleClick={() => setShowBrandFilter(!showBrandFilter)}
        >
          <When isTrue={showBrandFilter}>
            <div>
              {brands.map((brand: string) => {
                return (
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handleBrandChange(e)}
                      value={brand}
                      className="w-4 h-4"
                    />
                    <label className="text-base text-gray-700 font-normal">
                      {brand}
                    </label>
                  </div>
                );
              })}
            </div>
          </When>
        </FilterTemplate>
      </div>

      <div className="mb-8">
        <FilterTemplate
          label="PRICE RANGE"
          handleClick={() => setShowPriceFilter(!showPriceFilter)}
        >
          <When isTrue={showPriceFilter}>
            <div>
              {priceRanges.map((priceRange: IPriceRange) => {
                return (
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handlePriceChange(e)}
                      value={priceRange.value}
                      className="w-4 h-4"
                    />
                    <label className="text-base text-gray-700 font-normal">
                      {priceRange.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </When>
        </FilterTemplate>
      </div>

      <div className="mb-8">
        <FilterTemplate
          label="RATINGS"
          handleClick={() => setShowRatingFilter(!showRatingFilter)}
        >
          <When isTrue={showRatingFilter}>
            {ratings.map((rating: any) => {
              return (
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    onChange={(e) => handleRatingChange(e)}
                    value={rating}
                    className="w-4 h-4"
                  />
                  <label className="text-base text-gray-700 font-normal">
                    <StarRating rating={rating} />
                  </label>
                </div>
              );
            })}
          </When>
        </FilterTemplate>
      </div>
    </div>
  );
};

export default SearchBoxFilters;
