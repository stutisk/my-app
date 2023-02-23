import { Cards } from "../Cards/Cards";
import { Cards2 } from "../Cards/Cards2";
import styles from "../Header/Header.module.css";

export const Main = () => {
  return (
    <div className={styles.maindetails}>
      <div className="flex  title margin-top2">
        <div>
          <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677101510/had8cnzapeh3nltqgngs.svg" alt="footer-icon" />
        </div>
        <div className="title-icon-color">|</div>
        <div>Featured Tournaments</div>
      </div>
      <div className="flex gap">
        <Cards />
      </div>
      <div className="flex  title margin-top2">
        <div>
          <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677105672/demtuq79ffukvgii8ei6.svg" alt="footer-icon" />
        </div>
        <div className="title-icon-color">|</div>
        <div>Alll games</div>
      </div>
      <div className="flex gap2 wrap ">
        <Cards2 />
      </div>
    


    </div>
  );
};
