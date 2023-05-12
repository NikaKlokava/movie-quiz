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

declare type Quiz = Question[];

declare type Quizzes = { [id: string]: Quiz };

declare type QuestionResult = "passed" | "failed" | "timeout";

declare type GameResult = "stopped" | "finished";

declare type Category = {
  id: number;
  name: string;
  success: number;
  total: number;
  avatar?: string;
};

declare type Categories = { [id: string]: Category[] };
