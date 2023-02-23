import { Cardsdata2 } from "../../Backend/Cardsdata";
import styles from "../Cards/Cards.module.css";
export const Cards2 = () => {
  return (
    <>
      {Cardsdata2.map((card) => (
        <div className={styles.cardsWrapper}>
          <div
            style={{ backgroundColor: card.color, boxShadow: card.shadow }}
            className={styles.cards}
          >
            <div>
              <div className={styles.card2image}>
                <img
                  src={card.image}
                  width="100%"
                  className="border-radius"
                  alt="card"
                />
                <div className={styles.card2imagetext}>
                  <div className="flex gap">
                    <div className="flex gap2">
                      <div>
                        <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677134412/wawwqllsywthyvx71ng5.svg" />
                      </div>
                      <div>
                        <div className="size5">Played</div>
                        <div className="size-10">675K</div>
                      </div>
                    </div>
                    <div>|</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
