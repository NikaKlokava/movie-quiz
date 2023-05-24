import { Header } from "../../shared/components/header/Header";
import { Footer } from "../../shared/components/footer/Footer";
import { CategoryItem } from "./components/CategoryItem";
import { useCategories } from "./hooks";
import { useParams } from "react-router-dom";
import cl from "./styles/categories.module.css";
import { memo, useEffect } from "react";
import { Loader } from "../../shared/components/loader";

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
        {categories.loading ? (
          <Loader />
        ) : (
          <div className={cl.categories_list}>
            {categories.data.map((cat: any) => (
              <CategoryItem key={cat} id={cat} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
});
