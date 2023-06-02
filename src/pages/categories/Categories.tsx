import { Header } from "../../shared/components/header/Header";
import { Footer } from "../../shared/components/footer/Footer";
import { CategoryItem } from "./components/CategoryItem";
import { useParams } from "react-router-dom";
import cl from "./styles/categories.module.css";
import { memo, useEffect } from "react";
import { Loader } from "../../shared/components/loader";
import { useServerData } from "../../shared/hooks";

export const Categories = () => {
  const params = useParams();
  const url = `${process.env.REACT_APP_URL}/categories/${params.id}.json`;
  const { loadData, isLoading, data } = useServerData(url);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cl.categories_page}>
      <Header />
      <main className={cl.categories_list_container}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={cl.categories_list}>
            {data?.games?.map((game: number) => (
              <CategoryItem key={game} id={game} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
