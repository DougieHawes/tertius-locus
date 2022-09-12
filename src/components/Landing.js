import { useEffect, useState, useRef } from "react";
import { Element } from "react-scroll";

import Background1 from "./media/background1.jpg";
import Background2 from "./media/background2.jpg";
import Background3 from "./media/background3.jpg";
import Background4 from "./media/background4.jpg";
import Background5 from "./media/background5.jpg";
import Background6 from "./media/background6.jpg";

const Landing = () => {
  const [index, setIndex] = useState(0);

  const backgroundArray = [
    Background1,
    Background2,
    Background3,
    Background4,
    Background5,
    Background6,
  ];

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === backgroundArray.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Element
      id="test1"
      className="element landing"
      style={{ backgroundImage: `url(${backgroundArray[index]})` }}
    ></Element>
  );
};

export default Landing;
