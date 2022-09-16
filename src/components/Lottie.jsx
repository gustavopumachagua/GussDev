import React from "react";
import "@lottiefiles/lottie-player";

const lottie = () => {
  return (
    <lottie-player
      src="https://assets8.lottiefiles.com/packages/lf20_f8swhg5f.json"
      mode="bounce"
      background="transparent"
      speed="1"
      style={{ width: "300px", height: "300px" }}
      loop
      autoplay
    ></lottie-player>
  );
};

export default lottie;
