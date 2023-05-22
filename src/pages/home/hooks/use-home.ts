import { useState } from "react";
import { useSettingsContext } from "../../../shared/context";

export const useHome = () => {
  const settings = useSettingsContext();
  const lang = settings.language;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const urlQuizzes = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/categories/${lang}.json`;
      const quizzes = await (await fetch(urlQuizzes)).json();
      setData(quizzes);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, loadData };
};
