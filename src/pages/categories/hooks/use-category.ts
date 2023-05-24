import { useState } from "react";
import { isUndefined } from "lodash";
import { useSettingsContext } from "../../../shared/context";

export const useCategory = (id: string | number | undefined) => {
  const settings = useSettingsContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  const loadData = async () => {
    if (isUndefined(id)) return;

    setLoading(true);

    try {
      const url = `${process.env.REACT_APP_URL}/games/${id}_${settings.language}.json`;
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
