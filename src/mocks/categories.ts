const mockCategory: Category = {
  id: 0,
  name: "Category",
  success: 7,
  total: 10,
  avatar:
    "https://i.pinimg.com/736x/e2/07/d4/e207d4c6be564b3945ee121a8e7d48eb.jpg",
};

const createCategory = (numberOfQuizes: number) =>
  Array.from(Array(numberOfQuizes).keys()).map((i) => ({
    ...mockCategory,
    id: i,
    name: `${mockCategory.name} ${i + 1}`,
  }));

export const categories: Categories = {
  "1": createCategory(3),
  "2": createCategory(5),
};
