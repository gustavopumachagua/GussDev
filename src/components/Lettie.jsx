import React from "react";
import "@lottiefiles/lottie-player";

const Lettie = () => {
  return (
    <lottie-player
      autoplay
      loop
      background="transparent"
      speed="1"
      mode="bounce"
      src="https://assets10.lottiefiles.com/packages/lf20_kd5rzej5.json"
      style={{ width: "500px", height: "500px" }}
    ></lottie-player>
  );
};

export default Lettie;
