import { useState } from "react";
import { quizzes } from "../../../mocks/quizzes";

export const useQuiz = (id: string | undefined) => {
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const loadData = async () => {
  //   try {
  //     const questions: any = [];
  //     const url = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/games/0_en.json`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     const numberOfQuestions = data.questions;

  //     console.log(numberOfQuestions);
  // for (let i = 0; i < numberOfQuestions.length; i++) {
  //   const gameUrl = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/games/${numberOfGames[i]}_en.json`;
  //   const response = await fetch(gameUrl);
  //   const game = await response.json();
  //   questions.push(game);
  // }
  // setData(questions);
  // setLoading(true);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(true);
  //   }
  // };
  // return { data, loading, loadData };

  if (id === undefined) {
    throw new Error("Please provide id");
  }

  const quiz = quizzes[id];
  if (quiz === undefined) {
    throw new Error("Incorrect id");
  }

  return quiz;
};
