export interface Comic {
  id: number;
  title: string;
  isFavorite: boolean;
  texObjects: {
    text: string;
  }[];
  series: {
    name: string;
  };
  dates: {
    type: string;
    date: string;
  }[];
  prices: {
    price: number;
  }[];
  creators: {
    items: {
      name: string;
    }[];
  };
  chanacters: {
    items: {
      name: string;
    }[];
  };
  thumbnail: {
    path: string;
    extension: string;
  };
}
