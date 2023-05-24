const mockAnswers = [
  {
    value: "Incorrect answer 1",
  },
  {
    value: "Correct answer",
    correct: true,
  },
  {
    value: "Incorrect answer 2",
  },
  {
    value: "Incorrect answer 3",
  },
];

const mockQuestion = {
  id: 0,
  question: "Who is this actor/actress",
  avatar:
    "https://i.pinimg.com/736x/e2/07/d4/e207d4c6be564b3945ee121a8e7d48eb.jpg",
  answers: mockAnswers,
};

const createQuiz = (numberOfQuestions: number) =>
  Array.from(Array(numberOfQuestions).keys()).map((i) => ({
    ...mockQuestion,
    id: i,
    question: `${mockQuestion.question} - ${i}`,
  }));

export const quizzes: any = {
  // "0": createQuiz(3),
  // "1": createQuiz(2),
  // "2": createQuiz(5),
  // "3": createQuiz(3),
  // "4": createQuiz(1),
  // "5": createQuiz(2),
};
