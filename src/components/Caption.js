import styles from "styles/Caption.module.css";

function Caption(props) {
  const { headerText, bodyText, buttonText, linkText } = props;
  const { headerColor, buttonColor } = props;

  const URL = "https://www.roostergrin.com/";

  return (
    <div>
      {headerText ? (
        <h2 className={styles[headerColor]}>{headerText}</h2>
      ) : null}
      {bodyText ? <p className={styles.body}>{bodyText}</p> : null}
      {linkText ? (
        <a className={styles.link} href={URL}>
          {`>`} <span className={styles.linkText}>{linkText}</span>
        </a>
      ) : null}
      {buttonText ? (
        <a href={URL}>
          <button className={styles[buttonColor]}>{buttonText}</button>
        </a>
      ) : null}
    </div>
  );
}

export default Caption;
