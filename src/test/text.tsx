import { createContext, useContext, useState } from "react";

type DataType = {
  value: number;
};

type ContextType = DataType & {
  doSomething?: (value: DataType) => void;
};

export const initValue = { value: 4 };

export const MyContext = createContext<ContextType>(initValue);

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [num, setNum] = useState<DataType>(initValue);

  const doSomething = (value: DataType) => {
    setNum(value);
  };

  return (
    <MyContext.Provider
      value={{
        ...num,
        doSomething,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
