import { useState } from "react";
import { isUndefined } from "lodash";

export const useCategory = (id: string | number | undefined) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  const loadData = async () => {
    if (isUndefined(id)) return;

    setLoading(true);

    try {
      const url = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/games/${id}_en.json`;
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, loadData };
};
