import { GameItem } from "./components/GameItem";
import { useParams } from "react-router-dom";
import cl from "../../shared/styles/styles.module.css";
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
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cl.items_list}>
          {data?.games?.map((game: number, i: number) => (
            <GameItem key={game} id={game} index={++i} />
          ))}
        </div>
      )}
    </main>
  );
};
