import { IProduct } from "./getData";

export const filterByBrand = (data: IProduct[], brands: string[]) => {
  if (brands.length === 0) return data;
  return data.filter((product) => brands.includes(product.brand));
};

export const filterByPrice = (data: IProduct[], ranges: string[]) => {
  if (ranges.length === 0) return data;
  return data.filter((product) => {
    const productPrice = parseFloat(product.discountedPrice);

    return ranges.some((range) => {
      const [min, max] = range.split(",").map(parseFloat);
      return productPrice >= min && productPrice <= max;
    });
  });
};

export const filterByRating = (data: IProduct[], ratings: string[]) => {
  if (ratings.length === 0) return data;
  return data.filter((product) => ratings.includes(product.rating));
};

// =======================

export const filterBySearch = (data: IProduct[], search: string) => {
  return data.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
};

// =======================
