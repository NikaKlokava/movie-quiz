import { useState } from "react";

export const useCategories = (id: string | undefined) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const category: any = [];
      const url = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/categories/${id}.json`;
      const response = await fetch(url);
      const data = await response.json();
      const numberOfGames = data.games;

      for (let i = 0; i < numberOfGames.length; i++) {
        const gameUrl = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/games/${numberOfGames[i]}_en.json`;
        const response = await fetch(gameUrl);
        const game = await response.json();
        category.push(game);
      }
      setData(category);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };
  return { data, loading, loadData };
};
