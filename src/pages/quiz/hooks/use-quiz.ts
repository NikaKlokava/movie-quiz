import { quizzes } from "../../../mocks/quizzes";

export const useQuiz = (id: string | undefined) => {
  // const url = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/categories/0.json`;
  // const response = fetch(url).then((res) => res.json());
  // console.log(response.then((res) => console.log(res)));
  // try {
  //   const url = `https://raw.githubusercontent.com/NikaKlokava/movie-quiz-data/main/categories/0.json`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   const numberOfGames = data.games;

  // } catch (error) {
  //   console.log(error);
  // }

  if (id === undefined) {
    throw new Error("Please provide id");
  }

  const quiz = quizzes[id];
  if (quiz === undefined) {
    throw new Error("Incorrect id");
  }

  return quiz;
};
