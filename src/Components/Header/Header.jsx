import styles from "../Header/Header.module.css";

import { RxHamburgerMenu, TfiWallet } from "../Icons/Icons";
export const Header = () => {
  return (
    <section className={styles.mainwrapper}>
      <section className={styles.header}>
        <div>
          <RxHamburgerMenu size={35} />{" "}
        </div>
        <div className={styles.logo} >
          <img
            src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,/v1677087524/jhplzejmteqwvj58wkya.svg"
            height={100}
          />
        </div>
        <div>
          <TfiWallet size={35} />
        </div>
      </section>

      <section className={styles.main}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae
        maxime enim. Porro maiores harum quos ut minus aliquid, laudantium
        recusandae dolor expedita perferendis hic minima dolorem consequatur
        neque molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae
        maxime enim. Porro maiores harum quos ut minus aliquid, laudantium
        recusandae dolor expedita perferendis hic minima dolorem consequatur
        neque molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae
        maxime enim. Porro maiores harum quos ut minus aliquid, laudantium
        recusandae dolor expedita perferendis hic minima dolorem consequatur
        neque molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae
        maxime enim. Porro maiores harum quos ut minus aliquid, laudantium
        recusandae dolor expedita perferendis hic minima dolorem consequatur
        neque molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam molestiae
        maxime enim. Porro maiores harum quos ut minus aliquid, laudantium
        recusandae dolor expedita perferendis hic minima dolorem consequatur
        neque molestiae.

      </section>
    </section>
  );
};
