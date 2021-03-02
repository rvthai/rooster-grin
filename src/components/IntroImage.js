import styles from "styles/IntroImage.module.css";
import Image from "assets/images/img-1.jpg";

function IntroImage() {
  return <img id="content" className={styles.image} src={Image} alt="image1" />;
}

export default IntroImage;
