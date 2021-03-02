import Banner from "assets/images/banner-1.jpg";
import styles from "styles/Service.module.css";
import Caption from "components/Caption";

const Service = () => {
  const headerText = "Check Out Our Services";
  const buttonText = "Learn More";

  return (
    <section className={styles.section}>
      <img className={styles.image} src={Banner} alt="banner1" />
      <div className={styles.container}>
        <Caption
          headerText={headerText}
          buttonText={buttonText}
          headerColor="h-primary"
          buttonColor="btn-secondary"
        />
      </div>
    </section>
  );
};

export default Service;
