import { memo } from "react";
import classes from "../footer/footer.module.css";

export const Footer = memo(() => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer_content}>Veranika Klokava</p>
      <p className={classes.footer_content}>2023</p>
      <ul className={classes.links}>
        <a href="https://instagram.com/nika_klokava?igshid=MmIzYWVlNDQ5Yg==">
          <div className={classes.instagram} />
        </a>
        <a href="https://github.com/NikaKlokava">
          <div className={classes.github} />
        </a>
        <a href="https://linkedin.com/in/veranika-klokava-858b5b287">
          <div className={classes.linkedin} />
        </a>
      </ul>
    </footer>
  );
});
