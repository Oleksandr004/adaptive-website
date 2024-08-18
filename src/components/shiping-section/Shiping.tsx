import styles from "./Shiping.module.scss";

const Shiping = () => {
  return (
    <section className={styles.shiping}>
      <div className={styles.container}>
        <div className={styles.body}>
          <img src="/shiping.png" alt="shiping-img" />
          <h5 className={styles.title}>
            The best shipping for <br /> you! <span className={styles.txt__products}>Your products</span> <br /> always arrive
            in the <br /> <span className={styles.txt__best}>best</span>
            conditions!
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Shiping;
