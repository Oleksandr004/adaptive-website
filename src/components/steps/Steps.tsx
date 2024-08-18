import styles from "./Steps.module.scss";
import ThreeSteps from "../threeSteps/ThreeSteps";

const Steps = () => {
  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>
            To order your <br className={styles.line__break} /> vegetable <br />
            basket, <br className={styles.line__break} /> simply follow <br />
             these<br className={styles.line__break} /> easy steps
          </h2>
          <div className={styles.img__vegetables}>
            <img src="/img vegetables.png" alt="vegetables.png" />
          </div>
        </div>
        <div className={styles.subtitles}>
          <p className={styles.subtitles__left}>
            Our baskets are assembled with care and <br /> delivered straight to
            your doorstep, so you <br /> can enjoy the taste of fresh fruit
            without ever <br /> leaving your home.
          </p>
          <p className={styles.subtitles__right}>
            Whether you're looking for a healthy <br /> snack or a thoughtful
            gift, our fruit <br /> baskets are the perfect choice.
          </p>
        </div>
      </div>
      <ThreeSteps />
    </section>
  );
};

export default Steps;
