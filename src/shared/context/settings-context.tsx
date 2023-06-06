import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import i18n from "../../i18n";

type SettingsContextValuesType = {
  data: {
    time: number;
    active: boolean;
    volume: number;
    language: string;
  };
  loading?: boolean;
};

type SettingsContextType = SettingsContextValuesType & {
  updateSettings?: (newValues: SettingsContextValuesType) => void;
  defaultSettings?: () => void;
};

export const defaultSettingsValues = {
  data: { time: 20, active: false, volume: 40, language: "en" },
  loading: true,
};

export const SettingsContext = createContext<SettingsContextType>(
  defaultSettingsValues
);

type SettingsContextProviderType = {
  children: React.ReactNode;
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "update":
      return {
        data: action.payload.data,
        loading: false,
      };
    case "default":
      return {
        data: defaultSettingsValues,
        loading: false,
      };

    default:
      throw new Error();
  }
}

export const SettingsContextProvider = ({
  children,
}: SettingsContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, defaultSettingsValues);

  useEffect(() => {
    dispatch({ type: "loading" });
    const data = JSON.parse(localStorage.getItem("settings")!);
    dispatch({ type: "update", payload: data });
    i18n.changeLanguage(data.data.language);
  }, []);

  const updateSettings = useCallback((newValues: SettingsContextValuesType) => {
    dispatch({ type: "loading" });
    dispatch({ type: "update", payload: newValues });
    localStorage.setItem("settings", JSON.stringify(newValues));
  }, []);

  const defaultSettings = useCallback(() => {
    dispatch({ type: "default" });
    i18n.changeLanguage("en");
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      updateSettings,
      defaultSettings,
    }),
    [state, updateSettings, defaultSettings]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => useContext(SettingsContext);
