type Category = {
  id: number;
  name: string;
  success: number;
  total: number;
  avatar?: string;
};

export const mockActorsCategories: Category[] = [
  {
    id: 1,
    name: "Part 1",
    success: 7,
    total: 10,
    avatar:
      "https://i.pinimg.com/736x/e2/07/d4/e207d4c6be564b3945ee121a8e7d48eb.jpg",
  },
  {
    id: 2,
    name: "Part 2",
    success: 8,
    total: 10,
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMjA2ODMyMDgxMl5BMl5BanBnXkFtZTcwNjAwMjA3NA@@._V1_.jpg",
  },
];

export const mockMoviesCategories: Category[] = [
  {
    id: 1,
    name: "Part 1",
    success: 7,
    total: 10,
    avatar:
      "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/smile/images/regions/us/onesheet.jpg",
  },
  {
    id: 2,
    name: "Part 2",
    success: 8,
    total: 10,
    avatar: "https://i.ytimg.com/vi/8XDqcqUjq5M/movieposter_en.jpg",
  },
  {
    id: 3,
    name: "Part 3",
    success: 0,
    total: 10,
    avatar: "https://www.orphicpixel.com/wp-content/uploads/2012/03/image006.jpg",
  },
];
