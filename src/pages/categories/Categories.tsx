import { Header } from "../../shared/components/UI/header/Header";
import { Footer } from "../../shared/components/UI/footer/Footer";
import { CategoryItem } from "./components/CategoryItem";
import { useCategories } from "./hooks";
import { useParams } from "react-router-dom";
import cl from "./styles/categories.module.css";
import { memo, useEffect } from "react";

export const Categories = memo(() => {
  const params = useParams();

  const categories = useCategories(params.id);

  useEffect(() => {
    categories.loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cl.categories_page}>
      <Header />
      <main className={cl.categories_list_container}>
        <div className={cl.categories_list}>
          {categories.loading &&
            categories.data.map((cat: any) => (
              <CategoryItem
                key={cat.name}
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
});
