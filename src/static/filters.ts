export interface IPriceRange {
  label: string;
  value: string[];
}

export const priceRanges: IPriceRange[] = [
  { label: "Under 500", value: ["0", "100"] },
  {
    label: "1000 to 3000",
    value: ["1000", "3000"],
  },
];

export const ratings: number[] = [5, 4, 3, 2, 1];
