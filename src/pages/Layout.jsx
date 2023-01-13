import React, { useEffect, useState } from "react";
import Home from "./Home";
import Landing from "../components/Pop";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Layout = () => {
  const [isLoad, setIsLoad] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoad(1);
      setIsLoaded(true);
    }, 3000);
  }, [isLoaded]);

  return (
    <div>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        {isLoad === 0 && <Landing />}
        {isLoad === 1 && <Landing />}
        {isLoad === 1 && <Home />}
      </motion.div>
    </div>
  );
};

export default Layout;
