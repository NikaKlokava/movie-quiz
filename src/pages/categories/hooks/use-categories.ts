import {
  mockActorsCategories,
  mockMoviesCategories,
} from "../../../mocks/categories";

export const useCategories = (type: "actors" | "movies") => {
  // запрос на сервер

  switch (type) {
    case "actors": {
      return mockActorsCategories;
    }
    case "movies": {
      return mockMoviesCategories;
    }
  }
};
