export interface IGameCard {
  productImage: string;
  title: number;
  releaseDate: Date;
  price: IPrice;
  platform: string;
  objectID: string;
  wishList: boolean;
}

interface IPrice {
  finalPrice: number;
}
