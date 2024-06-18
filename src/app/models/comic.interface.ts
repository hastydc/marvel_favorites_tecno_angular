/**
 * Comic
 */
export interface Comic {
  /** id */
  id: number;

  /** title */
  title: string;

  /** isFavorite */
  isFavorite: boolean;

  /** textObjects */
  textObjects: {
    text: string;
  }[];

  /** series */
  series: {
    name: string;
  };

  /** dates */
  dates: {
    type: string;
    date: string;
  }[];

  /** prices */
  prices: {
    price: number;
    type: string;
  }[];

  /** creators */
  creators: {
    items: {
      name: string;
    }[];
  };

  /** characters */
  characters: {
    items: {
      name: string;
    }[];
  };

  /** thumbnail */
  thumbnail: {
    path: string;
    extension: string;
  };
}
