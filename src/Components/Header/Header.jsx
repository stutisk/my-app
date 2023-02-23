import styles from "../Header/Header.module.css";

import { RxHamburgerMenu, TfiWallet } from "../Icons/Icons";
import { Main } from "../Main/Main";
export const Header = () => {
  return (
    <section className={styles.mainwrapper}>
      <section className={styles.header}>
        <div>
          <RxHamburgerMenu size={35} />{" "}
        </div>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,/v1677087524/jhplzejmteqwvj58wkya.svg"
            height={100}
            alt="logo"
          />
        </div>
        <div>
          <TfiWallet size={35} />
        </div>
      </section>

      <section className={styles.main}>
        {/* <div className={styles.maindetails}> */}
          <Main/>
        {/* </div> */}
      </section>
      <section className={styles.footer}>
        <ul className={styles.menu}>
          <li className="cursor no-list-style icons ">
            <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677095115/jhvxin4tpyh0t2g2inf9.svg"  alt="footer-icon"  />
          </li>
          <li className="cursor no-list-style icons">
            <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677095365/urqd3qte58ir31zar1go.svg"  alt="footer-icon" />
          </li>
          <li className="cursor no-list-style center-icon padding-top">
            <img
              src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677095578/tq48bp7xzsqodv9k6bk1.svg  " alt="footer-icon"
              className="center-img"
              sizes="2"
            />
          </li>
          <li className="cursor no-list-style icons">
            <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677095365/bu2ryuxbcpkotrmqlwjb.svg"  alt="footer-icon" />
          </li>
          <li className="cursor no-list-style icons">
            <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677095449/fciekeh077emwyeutcso.svg" alt="footer-icon"  />
          </li>
        </ul>
      </section>
    </section>
  );
};
