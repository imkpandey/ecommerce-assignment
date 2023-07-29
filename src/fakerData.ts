import { faker } from "@faker-js/faker";

const MAX_RATING = 5;
const MIN_RATING = 1;

export const trendsData: { title: string; url: string }[] = [
  {
    title: "Shirt with Puffed Sleeves",
    url: "1.jpg",
  },
  {
    title: "Linen Jumpsuit",
    url: "2.jpg",
  },
  {
    title: "White Formal Shoes",
    url: "3.jpg",
  },
  {
    title: "Pattern Dresses",
    url: "4.jpg",
  },
  {
    title: "Leather Shirt Dress",
    url: "5.jpg",
  },
];

export const suggestionData: string[] = [
  "Striped shirt dress",
  "Satin shirts",
  "Denim jumpsuit",
  "Leather dresses",
  "Solid tshirts",
];

export type ProductType = {
  imgUrl: string;
  productName: string;
  originalPrice: string;
  discountedPrice: string;
  rating: number;
  brand: string;
  isFavourite: boolean;
};

const getRandomBrand = () => {
  const brands = ["Mango", "H&M"];
  return brands[Math.floor(Math.random() * brands.length)];
};

export const ProductData: ProductType[] = [];

for (let i = 0; i < 20; i++) {
  const imgUrl: string = faker.image.fashion(400, 400, true);
  const productName: string = faker.commerce.productName();

  const originalPrice: string = faker.commerce.price(100, 5000);
  const discountedPrice: string = faker.commerce.price(
    100,
    Number(originalPrice)
  );
  const rating = Math.round(
    Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING
  );
  const brand = getRandomBrand();
  const isFavourite = false;

  ProductData.push({
    imgUrl: imgUrl,
    productName: productName,
    originalPrice: originalPrice,
    discountedPrice: discountedPrice,
    rating: rating,
    brand: brand,
    isFavourite: isFavourite,
  });
}
