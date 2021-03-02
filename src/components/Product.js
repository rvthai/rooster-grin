import Banner from "assets/images/banner-2.jpg";
import styles from "styles/Product.module.css";
import Caption from "components/Caption";

const Product = () => {
  const headerText = "Check Out Our Work";
  const bodyText =
    "Check out a few of our client websites. Contact us and we can build you a custom site that won’t break the bank.";
  const buttonText = "Learn More";

  return (
    <section className={styles.section}>
      <img className={styles.image} src={Banner} alt="banner2" />
      <div className={styles.container}>
        <Caption
          headerText={headerText}
          bodyText={bodyText}
          buttonText={buttonText}
          headerColor="h-primary"
          buttonColor="btn-secondary"
        />
      </div>
    </section>
  );
};

export default Product;
