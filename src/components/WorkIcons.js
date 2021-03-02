import styles from "styles/WorkIcons.module.css";
import IconExpertise from "assets/icons/home-expertise.svg";
import IconHygiene from "assets/icons/home-hygiene.svg";
import IconLab from "assets/icons/home-lab.svg";
import IconRetention from "assets/icons/home-retention.svg";

function WorkIcons() {
  return (
    <section className={styles.section}>
      <div className={styles.icons}>
        <div className={styles.item}>
          <div className={styles.circle}>
            <img
              className={styles.icon}
              src={IconExpertise}
              alt="expertise-icon"
            />
          </div>
          <p className={styles.label}>Organized</p>
        </div>
        <div className={styles.item}>
          <div className={styles.circle}>
            <img className={styles.icon} src={IconHygiene} alt="hygiene-icon" />
          </div>
          <p className={styles.label}>Safe</p>
        </div>
        <div className={styles.item}>
          <div className={styles.circle}>
            <img className={styles.icon} src={IconLab} alt="lab-icon" />
          </div>
          <p className={styles.label}>Perfection</p>
        </div>
        <div className={styles.item}>
          <div className={styles.circle}>
            <img
              className={styles.icon}
              src={IconRetention}
              alt="retention-icon"
            />
          </div>
          <p className={styles.label}>Efficient</p>
        </div>
      </div>
    </section>
  );
}

export default WorkIcons;
