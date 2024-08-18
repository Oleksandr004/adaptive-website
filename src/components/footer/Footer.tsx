import styles from "./Footer.module.scss";
import FooterSocial from "../footer-social/FooterSocial";

const Footer = () => {
  return (
    <footer > 
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.navigation__container}>
            <div className={styles.navigation}>
              <div className={styles.navigation__img}>
                <img src="/footer-img.png" alt="" />
                <img
                  className={styles.footer__logo}
                  src="/footer-logo.png"
                  alt=""
                />
              </div>
              <nav className={styles.footer__nav}>
                <ul className={styles.footer__list}>
                  <li className={styles.footer__item}>
                    <a href="#!" className={styles.footer__link}>
                      How It Works
                    </a>
                  </li>
                  <li className={styles.footer__item}>
                    <a href="#!" className={styles.footer__link}>
                      Vegetables
                    </a>
                  </li>
                  <li className={styles.footer__item}>
                    <a href="#!" className={styles.footer__link}>
                      Contacts
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.contacts}>
            <FooterSocial />
            <p className={styles.footer__phone}>+380 (68) 443-94-26</p>
            <p className={styles.footer__street}>
              1678 S. Pioneer Road <br /> Salt Lake City <br /> UT 84104
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
