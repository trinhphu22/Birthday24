import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { DATA } from "../assets/api/data";
import Pop from "./Pop";
// import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % DATA.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="typing">
      {DATA.map((data, index) => {
        return (
          <div
            className="typing__text"
            style={{
              opacity: currentIndex === index ? 1 : 0,
            }}
          >
            {data.text}
          </div>
        );
      })}
      {(currentIndex === 8 || currentIndex === 13) && <Pop />}
    </div>
  );
};

export default Typing;
