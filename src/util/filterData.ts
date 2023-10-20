import { IProduct } from "../api/getData";

export const filterByBrand = (data: IProduct[], brand: string) => {
  return data.filter((product) => product.brand === brand);
};

export const filterByPrice = (data: IProduct[], range: number[]) => {
  return data.filter(
    (product) =>
      Number(product.discountedPrice) >= range[0] &&
      Number(product.discountedPrice) <= range[1]
  );
};

export const filterByRating = (data: IProduct[], rating: number) => {
  return data.filter((product) => product.rating >= rating);
};

export const filterBySearch = (data: IProduct[], search: string) => {
  return data.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
};
