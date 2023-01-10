import React from "react";
import HeaderImage from "../components/HeaderImage";
import Typing from "../components/Typing";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <HeaderImage />
      </div>
      <div className="home__body">
        <Typing />
      </div>
    </div>
  );
};

export default Home;
