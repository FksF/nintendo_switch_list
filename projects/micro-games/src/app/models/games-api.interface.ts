export interface IResponseGames {
  games: IGameCard[];
}

export interface IGameCard {
  productImage: string;
  title: number;
  releaseDate: Date;
  price: IPrice;
  platform: string;
  storeId: string;
  wishList: boolean;
}

interface IPrice {
  finalPrice: number;
}
