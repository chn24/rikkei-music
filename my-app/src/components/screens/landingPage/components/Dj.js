import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Dj = () => {
  const speakerRef1 = useRef(null);
  const speakerRef2 = useRef(null);
  useEffect(() => {
    speakerRef2.current.style.transform = "rotateY(180deg)";
  });
  return (
    <div className="content-bg">
      <motion.div
        ref={speakerRef1}
        className="content-bg-speaker speaker1"
        animate={{
          scale: [1, 1.1, 1],
          //rotate: [0, 0, 180, 180, 0],
          //borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      ></motion.div>
      <div className="content-bg-main">
        <div className="content-bg-dj"></div>
        <div className="content-bg-djdesk"></div>
      </div>
      <motion.div
        ref={speakerRef2}
        className="content-bg-speaker speaker2"
        animate={{
          scale: [1, 1.1, 1],
          rotateY: [180, 180, 180],
          //rotate: [0, 0, 180, 180, 0],
          //borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      ></motion.div>
    </div>
  );
};

export default Dj;
