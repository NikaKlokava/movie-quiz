import { useEffect } from "react";
import { Loader } from "../../shared/components/loader";
import { useServerData } from "../../shared/hooks";
import { CardItem } from "../../shared/components/card_item";
import classes from "../../shared/styles/styles.module.css";
import { routeNames } from "../../router";

export const Categories = () => {
  const url = `${process.env.REACT_APP_URL}/categories/quizzes.json`;
  const { loadData, isLoading, data } = useServerData(url);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.items_list}>
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
  );
};
