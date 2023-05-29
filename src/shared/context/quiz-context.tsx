import { noop } from "lodash";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type QuizContextValueType = {
  id: string | undefined;
  success: number;
};

type QuizContextType = {
  data: QuizContextValueType[];
  addQuizSuccess?: (newValues: QuizContextValueType) => void;
};

export const defaultQuizSuccessValues = {
  data: [],
  addQuizSuccess: noop,
};

export const QuizContext = createContext<QuizContextType>(
  defaultQuizSuccessValues
);

type QuizContextProviderType = {
  children: React.ReactNode;
};

export const QuizContextProvider = ({ children }: QuizContextProviderType) => {
  const [quizSuccess, setQuizSuccess] = useState<QuizContextValueType[]>([]);

  const addQuizSuccess = useCallback((newValues: QuizContextValueType) => {
    setQuizSuccess((prev) => {
      const exist = prev.find((obj) => newValues.id === obj.id);

      if (!exist) {
        prev.push(newValues);
      } else {
        exist.success = newValues.success;
      }

      return prev;
    });
  }, []);

  const value = useMemo(
    () => ({
      data: quizSuccess,
      addQuizSuccess,
    }),
    [addQuizSuccess, quizSuccess]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuizContext = () => useContext(QuizContext);
