declare type Answer = {
  value: string;
  correct?: boolean;
};

declare type Question = {
  id: number;
  question: string;
  avatar: string;
  answers: Answer[];
};

declare type QuestionResult = "passed" | "failed" | "timeout";

declare type GameResult = "stopped" | "finished";

declare type CategoryData = {
  name: string;
  success: number;
  total: number;
  avatar: string;
  questions: Array<number>;
};

declare type CategoriesData = number[];

declare type Quiz = {
  id: number;
  name: string;
};
declare type HomeData = Quiz[];

declare type AppLogo = "small" | "big";
