import React, { useEffect } from "react";

import { useCycle } from "framer-motion";

import ImageHolder from "./common/ImageHolder";

import chicken1 from "./chicken1.png";
import hamb from "./hamb.png";
import rice from "./rice.png";
const SLIDE_CHANGE_TIME_MS = 5000;

export default function Banner(props) {
  const [currentScene, setCurrentScene] = useCycle(chicken1, hamb, rice);

  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);

  return (
    <div className="hero">
      <h1>Silver Kitchen</h1>
      <ImageHolder
        img={currentScene}
        className="animal-image animal-image__one"
      />
      <ImageHolder
        img={currentScene}
        className="animal-image animal-image__two"
      />
      <ImageHolder
        img={currentScene}
        className="animal-image animal-image__three"
      />
    </div>
  );
}
