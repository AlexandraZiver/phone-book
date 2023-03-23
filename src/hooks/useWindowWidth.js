import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const setScreenSize = (event) => {
    setScreenWidth(event.target.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setScreenSize, true);
    document.removeEventListener("resize", setScreenSize, false);
  }, []);

  return screenWidth;
};

export default useWindowWidth;
