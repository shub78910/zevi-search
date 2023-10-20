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
  rating: number;
  noOfReviews: number;
  isLiked: boolean;
  brand: string;
}

export const getProducts = (count: number) => {
  const productData: IProduct[] = [];

  for (let i = 0; i < count; i++) {
    const id: number = i + 1;
    const name: string = faker.commerce.productName();
    const image: string = `https://source.unsplash.com/random/300x400/?${encodeURIComponent(
      name
    )}`;
    const originalPrice: string = faker.commerce.price(100, 5000);
    const discountedPrice: string = String(Number(originalPrice) / 2);
    const rating: number = Math.floor(Math.random() * 6);
    const noOfReviews: number = Math.floor(Math.random() * 1000);
    const isLiked: boolean = false;
    const brand: string = faker.company.name();

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

  const brands: string[] = [
    ...new Set(productData.map((product) => product.brand)),
  ];

  return { productData, brands };
};
