import { useState } from "react";
import { isUndefined } from "lodash";

export const useCategories = (id: string | undefined) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<number[]>([]);

  const loadData = async () => {
    if (isUndefined(id)) return;

    setLoading(true);

    try {
      const url = `${process.env.REACT_APP_URL}/categories/${id}.json`;
      const res = await fetch(url);
      const json = await res.json();

      setData(json.games);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, loadData };
};
