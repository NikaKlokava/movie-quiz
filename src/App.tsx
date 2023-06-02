import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./router";
import { SettingsContextProvider } from "./shared/context/settings-context";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./pages/error/Error";
import { Suspense } from "react";
import { QuizContextProvider } from "./shared/context/quiz-context";

function App() {
  return (
    <Suspense fallback={"Loading"}>
      <QuizContextProvider>
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
      </QuizContextProvider>
    </Suspense>
  );
}

export default App;
