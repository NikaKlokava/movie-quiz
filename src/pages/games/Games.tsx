import { Header } from "../../shared/components/header/Header";
import { Footer } from "../../shared/components/footer/Footer";
import { GameItem } from "./components/GameItem";
import { useParams } from "react-router-dom";
import cl from "./styles/games.module.css";
import classes from "../../shared/styles/styles.module.css";
import { useEffect } from "react";
import { Loader } from "../../shared/components/loader";
import { useServerData } from "../../shared/hooks";

export const Games = () => {
  const params = useParams();
  const url = `${process.env.REACT_APP_URL}/categories/${params.id}.json`;
  const { loadData, isLoading, data } = useServerData(url);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.page}>
      <Header />
      <main className={cl.categories_list_container}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={cl.categories_list}>
            {data?.games?.map((game: number, i: number) => (
              <GameItem key={game} id={game} index={++i} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
