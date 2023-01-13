import React, { useEffect, useState } from "react";
import HeaderImage from "../components/HeaderImage";
import { Test } from "../components/Test";
import Typing from "../components/Typing";

const Home = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 1200);
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <HeaderImage />
      </div>
      {isDisplayed && (
        <div className="home__body">
          <Typing />
          {/* <Test /> */}
        </div>
      )}
    </div>
  );
};

export default Home;
