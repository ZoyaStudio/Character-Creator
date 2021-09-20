import React, {useState, useContext} from 'react';
import Portrait from './Portrait.jsx';
import GarmentCreator from './GarmentCreator.jsx';
import CategoryMenus from './CategoryMenus.jsx';
import GarmentContext from './../context.js';

var defaultTop = {
  upperBoundary: null,
  neckline: null,
  lowerBoundary: null,
  base: {
    outlineUrl: "/simpleTop-Outline.png",
    gradientUrl: "/simpleTop-GradientA.png",
    shadingUrl: "/stretched-top.png",
  },
  baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
  seams: ["./curved-seam.png"],
  decoration:  {outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
  decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
}

function CharacterCreator() {
  const [top, setTop] = useState(defaultTop);

  return (
    <div className="character-creator">
      <h1 >Character Creator</h1>
      <GarmentContext.Provider
      value={{top, setTop}
        }>
        <Portrait/>
        <CategoryMenus/>
        <GarmentCreator top={top} setTop={setTop}/>
      </GarmentContext.Provider>
    </div>
  )
}
export default CharacterCreator;

