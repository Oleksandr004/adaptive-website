import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.text}>
            <img src="/rewiews.png" alt="rewiews.png" />
            <h1 className={styles.title}>
              organic <span>vegetables</span> <br /> to your diet today!
            </h1>
            <p className={styles.subtitle}>
              Our expertly curated vegetable baskets are made with the freshest,
              highest quality <br /> vegetables available. Fresh Harvest Box has
              got you covered. Fresh, high-quality <br /> vegetables in expertly
              curated vegetable baskets delivered to you.
            </p>
            <button className={styles.button}>
              shop
              <br />
              now
            </button>
          </div>
          <div className={styles.img}>
            <img className={styles.img__woman} src="/woman.png" alt="woman.png" />
            <div className={styles.hastags}>
              <div className={styles["hastags__first-row"]}>
                <p>#organic</p>
                <p>#products</p>
              </div>
              <div className={styles["hastags__second-row"]}>
                <p>#basket</p>
                <p>#vegetables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
