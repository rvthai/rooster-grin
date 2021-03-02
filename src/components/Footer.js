import styles from "styles/Footer.module.css";
import IconInstagram from "assets/icons/instagram.svg";
import IconFacebook from "assets/icons/facebook.svg";

const Footer = () => {
  const InstagramURL = "#";
  const FacebookURL = "https://www.facebook.com/RoosterGrin/";

  return (
    <footer className={styles.section}>
      <p className={styles.header}>Follow Us:</p>
      <div className={styles.icons}>
        <a href={InstagramURL}>
          <img
            className={styles.icon}
            src={IconInstagram}
            alt="instagram-icon"
          ></img>
        </a>
        <a href={FacebookURL}>
          <img
            className={styles.icon}
            src={IconFacebook}
            alt="facebook-icon"
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
