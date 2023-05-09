import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type SettingsContextValuesType = {
  time: number;
  active: boolean;
  volume: number;
};

type SettingsContextType = SettingsContextValuesType & {
  updateSettings?: (newValues: SettingsContextValuesType) => void;
};

export const defaultSettingsValues = {
  time: 20,
  active: false,
  volume: 40,
};

export const SettingsContext =
  createContext<SettingsContextType>(defaultSettingsValues);

type SettingsContextProviderType = {
  children: React.ReactNode;
};

export const SettingsContextProvider = ({
  children,
}: SettingsContextProviderType) => {
  const [settings, setSettings] = useState(defaultSettingsValues);

  const updateSettings = useCallback((newValues: SettingsContextValuesType) => {
    setSettings(newValues);
  }, []);

  const value = useMemo(
    () => ({
      ...settings,
      updateSettings,
    }),
    [settings, updateSettings]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => useContext(SettingsContext);
