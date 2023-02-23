import styles from "../Cards/Cards.module.css";
import { Cardsdata } from "../../Backend/Cardsdata";

export const Cards = () => {
  return (
    <>
      {Cardsdata.map((card) => (
        <div className={styles.cardsWrapper}>
          <div
            style={{ backgroundColor: card.color, boxShadow: card.shadow }}
            className={styles.cards}
          >
            <div>
              <div className={styles.cardimage}>
                <img
                  src={card.image}
                  width="100%"
                  className="border-radius"
                  alt="card"
                />
                <div className={styles.cardimagetext}>
                  <div className={styles.cardPrice}> {card.game}</div>
                  <div className={styles.moveText}>KIll Champion </div>
                  <div className={styles.subtitle}> Earn Per Kill ₹80 }</div>
                </div>
              </div>
              <div className="flex gap size-10 padding2">
                <div className="flex gap">
                  <img
                    src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_10,w_11/v1677104783/s1x1jp6nt9e234ntrz9w.svg"
                    alt="card-icon"
                  />
                  <div className={styles.cardPrice}> ₹{card.price}</div>
                </div>
                <div>in Winnings</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
