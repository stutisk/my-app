
import styles from "../Cards/Cards.module.css";

const Cardsdata = [
  {
    id: 1,
    game: "PUBG SOLO",
    price: "3200",
    description: "This is the first card",
    color: "#ffc609",
    shadow: "0 3px 8px 0 rgb(255 198 9 / 30%)",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1677104346/xxklyxsgqwczy7x6bb3b.jpg",
  },
  {
    id: 2,
    price: "3200",
    game: "Free Fire DUO",
    description: "This is the second card",
    color: "#43f2ff",
    shadow: "0 3px 8px 0 rgb(67 242 255 / 30%)",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1677104346/xxklyxsgqwczy7x6bb3b.jpg",
  },
  {
    id: 3,
    price: "3200",
    game: "Call Of Duty",
    description: "This is the third card",
    color: "#09ffc4",
    shadow: "0 3px 8px 0 rgb(9 255 196 / 30%)",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1677104346/xxklyxsgqwczy7x6bb3b.jpg",
  },
];

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
                <img src={card.image} width="100%" className="border-radius" alt="card" />
                <div className={styles.cardimagetext}>
                <div className={styles.cardPrice}> {card.game}</div>
                <div className={styles.moveText}>KIll Champion </div>
                <div className={styles.subtitle}> Earn Per Kill ₹80 }</div>
              </div>
             
              
              </div>
              <div className="flex gap size-10 padding2">
                <div className="flex gap">
                  <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_10,w_11/v1677104783/s1x1jp6nt9e234ntrz9w.svg"  alt="card-icon" />
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
