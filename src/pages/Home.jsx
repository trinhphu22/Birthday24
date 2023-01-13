import React, { useEffect, useState } from "react";
import HeaderImage from "../components/HeaderImage";
import Helmet from "../components/Helmet";
import Typing from "../components/Typing";

const Home = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 1200);
  }, []);

  return (
    <Helmet title="Happy Birthday Guiltia 🎉">
      <div className="home">
        <div className="home__header">
          <HeaderImage />
        </div>
        {isDisplayed && (
          <div className="home__body">
            <Typing />
          </div>
        )}
      </div>
    </Helmet>
  );
};

export default Home;
