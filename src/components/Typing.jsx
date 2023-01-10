import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Typing = () => {
//   const [text, setText] = useState("Hello I am FLY ");

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setText("Hello I am ");
  //     }, 2500);
  //   }, [text]);

  return (
    <div className="typing">
      <TypeAnimation
        // Same String at the start will only be typed once, initially
        sequence={[
          "We produce food for Mice",
          1000,
          "We produce food for Hamsters",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        speed={20} // Custom Speed from 1-99 - Default Speed: 40
        style={{ fontSize: "2em" }}
        wrapper="span" // Animation will be rendered as a <span>
        repeat={Infinity} // Repeat this Animation Sequence infinitely
      />
    </div>
  );
};

export default Typing;
