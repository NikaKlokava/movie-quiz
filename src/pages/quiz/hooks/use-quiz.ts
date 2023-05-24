import { useState } from "react";
import { isUndefined } from "lodash";
import { useSettingsContext } from "../../../shared/context";

export const useQuiz = (question: any) => {
  const settings = useSettingsContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const loadData = async (index: number | undefined) => {
    if (isUndefined(question)) return;

    setLoading(true);

    try {
      const url = `${process.env.REACT_APP_URL}/questions/${index}/${settings.language}.json`;
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
