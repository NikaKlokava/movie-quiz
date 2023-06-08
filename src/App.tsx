import { HashRouter, Routes, Route } from "react-router-dom";
import { routeNames, routes } from "./router";
import { SettingsContextProvider } from "./shared/context/settings-context";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./pages/error/Error";
import { Suspense } from "react";
import { QuizContextProvider } from "./shared/context/quiz-context";
import { Layout } from "./shared/components/layout";
import { Home } from "./pages/home";

function App() {
  return (
    <Suspense fallback={"Loading"}>
      <QuizContextProvider>
        <SettingsContextProvider>
          <HashRouter>
            <ErrorBoundary fallback={<Error />}>
              <Routes>
                <Route path={routeNames.Home} element={<Home />} key={1} />
                <Route element={<Layout />}>
                  {routes.map((route) => {
                    return (
                      <Route
                        element={route.element}
                        path={route.path}
                        key={route.key}
                      />
                    );
                  })}
                </Route>
              </Routes>
            </ErrorBoundary>
          </HashRouter>
        </SettingsContextProvider>
      </QuizContextProvider>
    </Suspense>
  );
}

export default App;
