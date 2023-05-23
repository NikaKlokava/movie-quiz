import { useState } from "react";
import { isUndefined } from "lodash";

export const useQuiz = (question: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const loadData = async (index: number | undefined) => {
    if (isUndefined(question)) return;

    setLoading(true);

    try {
      const url = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/questions/${index}/en.json`;
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
