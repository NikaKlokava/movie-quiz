import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";
import classes from "../../styles/styles.module.css";

export const Layout = () => {
  return (
    <div className={classes.page}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
