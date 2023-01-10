import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/images/hpbd.png";

const HeaderImage = () => {
  return (
    <div className="motion">
      <motion.div
        // className="box"
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
          repeatDelay: 1,
        }}
      >
        <img src={Image} alt="Happy Birthday" className="image" />
      </motion.div>
    </div>
  );
};

export default HeaderImage;
