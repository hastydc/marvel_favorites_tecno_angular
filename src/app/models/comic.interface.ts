export interface Comic {
  id: number;
  title: string;
  isFavorite: boolean;
  textObjects: {
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
    type: string;
  }[];
  creators: {
    items: {
      name: string;
    }[];
  };
  characters: {
    items: {
      name: string;
    }[];
  };
  thumbnail: {
    path: string;
    extension: string;
  };
}
