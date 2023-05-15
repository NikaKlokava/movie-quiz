import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./router";
import { SettingsContextProvider } from "./shared/context";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./components/UI/error/Error";

function App() {
  return (
    <SettingsContextProvider>
      <BrowserRouter>
        <ErrorBoundary fallback={<Error />}>
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
        </ErrorBoundary>
      </BrowserRouter>
    </SettingsContextProvider>
  );
}

export default App;
