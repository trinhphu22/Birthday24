import React, { useEffect, useState } from "react";
import { DATA } from "../assets/api/data";
import Pop from "./Pop";
import SendMessage from "./SendMessage";
import classnames from "classnames";
import "animate.css";

const Typing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();
  const [animation, setAnimation] = useState(false);

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
        setData(DATA[currentIndex]);
      }, 4000);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, isDisplayed]);

  useEffect(() => {
    if (currentIndex === DATA.length - 1) {
      setIsDisplayed(false);
    }
  }, [currentIndex]);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 3000);
  }, [currentIndex]);

  return (
    <div className="typing">
      {data && (
        <div
          className={classnames(
            "typing__text",
            animation && "animated",
            animation && data.appear,
            !animation && "animated",
            !animation && data.disappear
          )}
        >
          {data.text}
          {data.text === "Happy birthday!" && <span className="emoji">🎉</span>}
        </div>
      )}
      {(currentIndex === 0 || currentIndex === 10 || currentIndex === 15) && (
        <Pop />
      )}
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
          <button onClick={show} className="btn btn-send">
            Send message
          </button>
        </div>
      )}
      <SendMessage visible={visible} hide={hide} />
    </div>
  );
};

export default Typing;
