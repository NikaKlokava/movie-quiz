const mockCategory: CategoryData = {
  name: "Category",
  success: 7,
  total: 10,
  avatar:
    "https://i.pinimg.com/736x/e2/07/d4/e207d4c6be564b3945ee121a8e7d48eb.jpg",
  questions: [],
};

const createCategory = (numberOfQuizes: number) =>
  Array.from(Array(numberOfQuizes).keys()).map((i) => ({
    ...mockCategory,
    id: i,
    name: `${mockCategory.name} ${i + 1}`,
  }));

export const categories: CategoriesData = [1, 2, 3];
