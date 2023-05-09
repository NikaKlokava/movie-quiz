import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./router";
import { SettingsContextProvider } from "./shared/context";

function App() {
  return (
    <SettingsContextProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                element={route.element}
                path={route.path}
                key={route.key}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </SettingsContextProvider>
  );
}

export default App;
