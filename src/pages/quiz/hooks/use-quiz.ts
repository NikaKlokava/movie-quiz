import { quizzes } from "../../../mocks/quizzes";

export const useQuiz = (id: string | undefined) => {
  // запрос на сервер
  if (id === undefined) {
    throw new Error("Please provide id");
  }
  const quiz = quizzes[id];
  if (quiz === undefined) {
    throw new Error("Incorrect id");
  }
  return quiz;
};
