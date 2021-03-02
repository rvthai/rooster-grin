import styles from "styles/Work.module.css";
import Caption from "components/Caption";

function Work() {
  const headerText = "What We Do";
  const bodyText =
    "At Rooster Grin, each of our services are specifically designed to create a competitive advantage for our clients. Each service is customized to our client's specific needs in order to maximize results and generate value. Contact us now to find out how we can become your competitive advantage.";
  const linkText = "Learn More";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Caption
          headerText={headerText}
          bodyText={bodyText}
          linkText={linkText}
          headerColor="h-secondary"
        />
      </div>
    </section>
  );
}

export default Work;
