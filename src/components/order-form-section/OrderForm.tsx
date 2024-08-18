import styles from "./OrderForm.module.scss";

const OrderForm = () => {
  return (
    <section className={styles["order-form"]}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles["order-form__text"]}>
            <h5 className={styles.text__title}>
              Fresh Harvest Box has <br /> got you covered
            </h5>
            <p className={styles.text__subtitle}>
              Our boxes are packed with delicious, nutritious vegetables,
              perfect <br />
              for anyone looking to eat healthier or support local farmers.
              Order <br />
              your box today and start enjoying the best that nature has to
              offer! <br />
            </p>
            <form>
              <input placeholder="+ 380 () "/>
              <button type="submit">Recall</button>
            </form>
          </div>
          <div className={styles["order-form__img"]}>
            <div className={styles.img__background}>
              <img src="/girl-green.png" alt="green girl img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
