// import { Sliderdata } from "../../Backend/Cardsdata";
import { useState, useEffect } from "react";
const imageArray = ["https://res.cloudinary.com/dvbw8xujd/image/upload/v1677136464/kk0abipwczpk8dlxxzr9.jpg", "https://res.cloudinary.com/dvbw8xujd/image/upload/v1677139513/i5dsqlvg3c3v3pyuo5xy.jpg",];


const Slider = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {

          setCount(count => count + 1);
        }, 3000);
    
        return () => clearInterval(timerId);
      }, []);

      const image = imageArray[count % imageArray.length];
  return (
    <div className="flex justify-content">
  <img  src={image} alt="8"/>
   
    </div>
  );
};

export { Slider };
