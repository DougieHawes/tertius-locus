import { useEffect, useState } from "react";
import { Element } from "react-scroll";

import Background1 from "./media/background1.jpg";
import Background2 from "./media/background2.jpg";
import Background3 from "./media/background3.jpg";
import Background4 from "./media/background4.jpg";

const Landing = () => {
  const [selectedBackground, setSelectedBackground] = useState(3);

  const backgroundArray = [Background1, Background2, Background3, Background4];

  useEffect(() => {}, []);

  return (
    <Element
      id="test1"
      className="element landing"
      style={{ backgroundImage: `url(${backgroundArray[selectedBackground]})` }}
    ></Element>
  );
};

export default Landing;
