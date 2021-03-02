import styles from "styles/Reviews.module.css";
import Caption from "components/Caption";
import Star from "assets/icons/star.svg";

function Reviews() {
  const headerText = "Our Clients Approve!";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Caption headerText={headerText} />
        <div className={styles.stars}>
          <img className={styles.star} src={Star} alt="star" />
          <img className={styles.star} src={Star} alt="star" />
          <img className={styles.star} src={Star} alt="star" />
          <img className={styles.star} src={Star} alt="star" />
          <img className={styles.star} src={Star} alt="star" />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
