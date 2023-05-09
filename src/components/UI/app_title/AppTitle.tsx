import classes from "./title.module.css";

const AppTitle = ({ size, title }: any) => {
  if (size === "small") {
    return (
      <div className={classes.app_title_small}>
        <div className={classes.ellipse1_small}></div>
        <div className={classes.ellipse2_small}></div>
        <div>{title}</div>
      </div>
    );
  }
  return (
    <div className={classes.app_title_big}>
      <div className={classes.ellipse1_big}></div>
      <div className={classes.ellipse2_big}></div>
      <div>{title}</div>
    </div>
  );
};

export default AppTitle;
