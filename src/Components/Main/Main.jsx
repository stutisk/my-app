import { Cards } from "../Cards/Cards";
import styles from "../Header/Header.module.css";


export const Main = () => {
    return(

        <div className={styles.maindetails}>
            <div className="flex  title">
                <div><img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1677101510/had8cnzapeh3nltqgngs.svg"/></div>
                <div className="title-icon-color">|</div>
            <div>Featured Tournaments</div>

            </div>
     <div className="flex gap">
     <Cards/>
     </div>
            
        </div>
    )
}