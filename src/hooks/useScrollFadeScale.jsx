import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useScrollFadeScale = () => {
  const Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: Ref,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return { Ref, opacity, scale };
};
