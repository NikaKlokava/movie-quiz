import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route element={route.element} path={route.path} key={route.key} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
