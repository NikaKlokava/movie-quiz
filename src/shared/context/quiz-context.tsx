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
  const quizSuccessData = JSON.parse(localStorage.getItem("quiz")!)?.data;

  const addQuizSuccess = useCallback(
    (newValue: QuizContextValueType) => {
      quizSuccessData?.map((object: QuizContextValueType) =>
        setQuizSuccess((prev) => {
          prev.push(object);
          return prev;
        })
      );

      setQuizSuccess((prev) => {
        const successIsExist = prev.find((obj) => newValue.id === obj.id);

        if (successIsExist) {
          if (successIsExist.success < newValue.success) {
            successIsExist.success = newValue.success;
          }
          return prev;
        } else {
          prev.push(newValue);
        }

        return prev;
      });
    },
    [quizSuccessData]
  );

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
