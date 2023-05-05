import classes from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer_content}>Veranika Klokava</p>
      <p className={classes.footer_content}>2023</p>
      <ul className={classes.links}>
        <li className={classes.instagram}></li>
        <li className={classes.github}></li>
        <li className={classes.linkedin}></li>
      </ul>
    </footer>
  );
};
export default Footer;
