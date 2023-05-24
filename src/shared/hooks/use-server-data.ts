import { useState } from "react";

export const useServerData = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { loadData, isLoading, data };
};
