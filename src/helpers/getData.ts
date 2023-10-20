import { faker } from "@faker-js/faker";

export interface ITrends {
  image: string;
  description: String;
}

export const getTrends = (count: number) => {
  const trendsData: ITrends[] = [];

  for (let i = 0; i < count; i++) {
    const description: string = faker.commerce.productName();
    const image: string = `https://source.unsplash.com/random/300x400/?${encodeURIComponent(
      description
    )}`;

    trendsData.push({
      image: image,
      description: description,
    });
  }

  return trendsData;
};

export interface IProduct {
  id: number;
  image: string;
  name: string;
  currencyPrefix: string;
  originalPrice: string;
  discountedPrice: string;
  rating: string;
  noOfReviews: number;
  isLiked: boolean;
  brand: string;
}

export const getProducts = (count: number) => {
  const productData: IProduct[] = [];
  const brands: string[] = [];

  for (let i = 0; i < 5; i++) {
    const brand: string = faker.company.name();
    brands.push(brand);
  }

  for (let i = 0; i < count; i++) {
    const id: number = i + 1;
    const name: string = faker.commerce.productName();
    const image: string = `https://source.unsplash.com/random/300x400/?${encodeURIComponent(
      name
    )}`;
    const originalPrice: string = faker.commerce.price(100, 5000);
    const discountedPrice: string = String(Number(originalPrice) / 2);
    const rating: string = String(Math.floor(Math.random() * 6));
    const noOfReviews: number = Math.floor(Math.random() * 1000);
    const isLiked: boolean = false;
    const brand: string = brands[Math.floor(Math.random() * 5)];

    productData.push({
      id,
      image,
      name,
      originalPrice,
      discountedPrice,
      rating,
      noOfReviews,
      isLiked,
      brand,
      currencyPrefix: "Rs. ",
    });
  }

  return { productData, brands };
};
