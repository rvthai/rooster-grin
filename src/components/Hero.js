import styles from "styles/Hero.module.css";
import Logo from "assets/icons/logo-white.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <div className={styles.message}>
        <span className={styles.textoutline}>WELCOME TO</span>
        <span className={styles.text}>Rooster Grin</span>
        <a href="#content">
          <button className={styles.btn}>Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
