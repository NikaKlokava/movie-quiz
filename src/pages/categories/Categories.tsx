import { Header } from "../../shared/components/UI/header/Header";
import { Footer } from "../../shared/components/UI/footer/Footer";
import { CategoryItem } from "./components/CategoryItem";
import { useCategories } from "./hooks";
import { useParams } from "react-router-dom";
import cl from "./styles/categories.module.css";

export const Categories = () => {
  const params = useParams();

  const categories = useCategories(params?.id);

  return (
    <div className={cl.categories_page}>
      <Header />
      <main className={cl.categories_list_container}>
        <div className={cl.categories_list}>
          {categories &&
            categories.map((cat) => (
              <CategoryItem
                key={cat.id}
                part={cat.name}
                success={`${cat.success}/${cat.total}`}
                avatar={cat.avatar}
                id={cat.id}
              />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
