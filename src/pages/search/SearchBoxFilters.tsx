import { useState } from "react";
import When from "../../components/When";
import StarRating from "./StarsRating";
import { IPriceRange, priceRanges, ratings } from "../../static/filters";
import FilterTemplate from "./FilterTemplate";

const SearchBoxFilters = ({ brands }: { brands: string[] }) => {
  const [showBrandFilter, setShowBrandFilter] = useState(true);
  const [showPriceFilter, setShowPriceFilter] = useState(true);
  const [showRatingFilter, setShowRatingFilter] = useState(true);

  const handleBrandChange = (brand: string) => {
    console.log(brand);
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
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        handleBrandChange(e.target.value);
                      }}
                      value={brand}
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
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      value={priceRange.value}
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
            {ratings.map((rating: number) => {
              return (
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    value={rating}
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
