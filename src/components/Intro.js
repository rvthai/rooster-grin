import styles from "styles/Intro.module.css";

import Caption from "components/Caption";

function Intro() {
  const headerText = "Who We Are";
  const bodyText =
    "Founded in 2012, Rooster Grin is comprised of a dynamic group of individuals who share a common passion for customer service. We pride our ourselves in quick response times and high-quality products. With hundreds of satisfied clients, we have consistently proven our ability to exceed client’s expectations. Over the years we have grown from a single person to a team of more than ten.";
  const linkText = "Learn More";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Caption
          headerText={headerText}
          bodyText={bodyText}
          linkText={linkText}
          headerColor="h-primary"
        />
      </div>
    </section>
  );
}

export default Intro;
