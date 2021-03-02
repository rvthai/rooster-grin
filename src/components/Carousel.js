import { useState } from "react";
import styles from "styles/Carousel.module.css";
import AngleRight from "assets/icons/angle-right-solid.svg";
import AngleLeft from "assets/icons/angle-left-solid.svg";

function Carousel() {
  const data = [
    {
      name: "John Doe",
      date: "08/08/2019",
      review:
        "I love Rooster Grin. They are the best! My website has drawn so many of my customer's attention. 10/10 would recommend!",
    },
    {
      name: "Bobby Jones",
      date: "05/05/2019",
      review:
        "Rooster Grin turned my old website into a beautiful work of art. My compaany's market value boosted after the changes. Would work with the again!",
    },
    {
      name: "Alex Smith",
      date: "02/16/2020",
      review:
        "The people at Rooster Grin are both hard working and kind. As a first time client, it was an absolute pleasure working with them!",
    },
  ];

  const [position, setPosition] = useState(0);
  const [number, setNumber] = useState(0);

  const handleBackClick = () => {
    if (position === 0) {
      return null;
    }

    let el = document.getElementById("slides");
    el.style.marginLeft = (position + 100).toString() + "%";
    setPosition(position + 100);
    setNumber(number - 1);
  };

  const handleForwardClick = () => {
    if (position === -200) {
      return null;
    }

    let el = document.getElementById("slides");
    el.style.marginLeft = (position - 100).toString() + "%";
    setPosition(position - 100);
    setNumber(number + 1);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img
          className={styles.arrow}
          onClick={handleBackClick}
          src={AngleLeft}
          alt="left-arrow"
        />
        <div className={styles.middle}>
          <p className={styles.label}>
            <span className={styles.name}>{data[number].name}</span>
            <span className={styles.date}>{data[number].date}</span>
          </p>
          <div className={styles.slideshow}>
            <div id="slides" className={styles.slides}>
              {data.map((item, index) => (
                <p key={index} className={styles.slide}>
                  {item.review}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.circles}>
            {number === 0 ? (
              <div className={styles.activeCircle}></div>
            ) : (
              <div className={styles.circle} />
            )}
            {number === 1 ? (
              <div className={styles.activeCircle}></div>
            ) : (
              <div className={styles.circle} />
            )}
            {number === 2 ? (
              <div className={styles.activeCircle}></div>
            ) : (
              <div className={styles.circle} />
            )}
          </div>
        </div>
        <img
          className={styles.arrow}
          onClick={handleForwardClick}
          src={AngleRight}
          alt="right-arrow"
        />
      </div>
    </section>
  );
}

export default Carousel;
