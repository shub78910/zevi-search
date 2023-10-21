import { useState, useEffect } from "react";
import When from "../../components/When";
import StarRating from "./StarsRating";
import { IPriceRange, priceRanges, ratings } from "../../static/filters";
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

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string[]>([]);

  useEffect(() => {
    handleFilterChange({
      selectedBrands,
      selectedPriceRange,
      selectedRating,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrands, selectedPriceRange, selectedRating]);

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
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBrands([
                            ...selectedBrands,
                            e.target.value,
                          ]);
                        } else {
                          const index = selectedBrands.indexOf(e.target.value);
                          if (index !== -1) {
                            selectedBrands.splice(index, 1);
                          }
                          setSelectedBrands([...selectedBrands]);
                        }
                      }}
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
                  <div className="flex gap-2 mt-2">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPriceRange([
                            ...selectedPriceRange,
                            e.target.value,
                          ]);
                        } else {
                          const index = selectedPriceRange.indexOf(
                            e.target.value
                          );
                          if (index !== -1) {
                            selectedPriceRange.splice(index, 1);
                          }
                          setSelectedPriceRange([...selectedPriceRange]);
                        }
                      }}
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
                <div className="flex gap-2 mt-2">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRating([...selectedRating, e.target.value]);
                      } else {
                        const index = selectedRating.indexOf(e.target.value);
                        if (index !== -1) {
                          selectedRating.splice(index, 1);
                        }
                        setSelectedRating([...selectedRating]);
                      }
                    }}
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
