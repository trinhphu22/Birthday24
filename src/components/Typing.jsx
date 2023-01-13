import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { DATA } from "../assets/api/data";
import Pop from "./Pop";
import SendMessage from "./SendMessage";
// import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDisplayed, setIsDisplayed] = useState(true);

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (isDisplayed) {
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % DATA.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, isDisplayed]);

  useEffect(() => {
    if (currentIndex === DATA.length - 1) {
      setIsDisplayed(false);
    }
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
      {!isDisplayed && (
        <div className="btn-container">
          <button
            onClick={() => {
              setIsDisplayed(true);
              setCurrentIndex(0);
            }}
            className="btn btn-reload"
          >
            Reload
          </button>
          <button onClick={show} className="btn btn-reload">
            Send message
          </button>
        </div>
      )}
      <SendMessage visible={visible} hide={hide} />
    </div>
  );
};

export default Typing;
