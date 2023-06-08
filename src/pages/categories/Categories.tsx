import { useEffect } from "react";
import { Footer } from "../../shared/components/footer";
import { Header } from "../../shared/components/header";
import { Loader } from "../../shared/components/loader";
import { useServerData } from "../../shared/hooks";
import { CardItem } from "../../shared/components/card_item";
import classes from "./styles/categories.module.css";
import cl from "../../shared/styles/styles.module.css";
import { routeNames } from "../../router";

export const Categories = () => {
  const url = `${process.env.REACT_APP_URL}/categories/quizzes.json`;
  const { loadData, isLoading, data } = useServerData(url);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cl.page}>
      <Header />
      <main className={classes.categories_list_container}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.categories_list}>
            {data.map((category: any) => (
              <CardItem
                key={category.name}
                id={category.id}
                name={category.name}
                avatar={category.avatar}
                success={""}
                route={routeNames.Games}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
