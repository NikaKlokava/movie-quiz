import { categories } from "../../../mocks/categories";

export const useCategories = (id: string | undefined) => {
  // запрос на сервер

  if (id === undefined) {
    throw new Error("Please provide id");
  }
  const category = categories[id];
  if (category === undefined) {
    throw new Error("Incorrect id");
  }

  return category;
};
