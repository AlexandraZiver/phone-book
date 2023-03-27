import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const setScreenSize = (event) => {
    setScreenWidth(event.target.innerWidth);
    setScreenHeight(event.target.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", setScreenSize, true);
    return () => {
      document.removeEventListener("resize", setScreenSize, false);
    };
  }, []);

  return [screenWidth, screenHeight];
};

export default useWindowWidth;
