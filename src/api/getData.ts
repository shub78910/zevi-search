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
