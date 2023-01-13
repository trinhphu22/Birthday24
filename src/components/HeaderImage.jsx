import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/images/hpbd.png";
import { Animated } from "react-animated-css";

const HeaderImage = () => {
  return (
    <div className="motion">
      <Animated
        animationIn="rubberBand"
        animationOut="zoomOutDown"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 25, -25, -25, 25, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <img src={Image} alt="Happy Birthday" className="image" />
        </motion.div>
      </Animated>
    </div>
  );
};

export default HeaderImage;
