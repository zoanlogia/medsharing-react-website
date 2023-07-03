import { useLottie } from "lottie-react";
import about from "./about.json";

const style = {
    height: '100%',
    width: '100%',
  };

const Lottie1 = () => {
  const options = {
    animationData: about,
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default Lottie1;
