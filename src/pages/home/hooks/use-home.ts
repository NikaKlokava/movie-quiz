import { useState } from "react";
import { useSettingsContext } from "../../../shared/context";

export const useHome = () => {
  const settings = useSettingsContext();

  const [isLoading, setIsLoading] = useState<any>(false);
  const [data, setData] = useState<any>([]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const url = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/categories/${settings.language}.json`;
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, loadData };
};
