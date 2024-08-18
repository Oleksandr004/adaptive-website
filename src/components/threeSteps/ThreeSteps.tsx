import styles from "./ThreeSteps.module.scss";
import { stepsList } from "../../helper/stepsList.ts";
import SafeLock from "../safe-lock/SafeLock.tsx";

const ThreeSteps = () => {
  return (
    <>
      <section className={styles["three-steps"]}>
        <div className={styles.container}>
          <div className={styles.body}>
            <img className={styles.img__girl} src="/girl.png" alt="" />
            <div className={styles["three-steps__text"]}>
              <h3 className={styles["three-steps__list-title"]}>
                3 Easy Steps for Buying <br /> Fresh Vegetables
              </h3>
              <ul className={styles["three-steps__list"]}>
                {stepsList.map((step, index) => {
                  return (
                    <li
                      className={styles["three-steps-list__element"]}
                      key={index}
                    >
                      <img src={step.img} alt="" />
                      <p
                        className={styles.steps__description}
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <SafeLock />
    </>
  );
};

export default ThreeSteps;
