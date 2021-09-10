import React, {useState, useContext} from 'react';
import Portrait from './Portrait.jsx';
import GarmentCreator from './GarmentCreator.jsx';
import CategoryMenus from './CategoryMenus.jsx';
import GarmentContext from './../context.js';

let boundary = (outlineUrl, clipPathClass) => ({url: outlineUrl, class: clipPathClass});
let upperBoundaries = {
  highTubeTop: boundary('highTubeTop.png', 'classname')
};
let lowerBoundaries = {

};
let 
const itemTemplate = {
  itemBoundary: { // 
    upper: upperBoundaries['name']; 
    cut1: 'string',
    cut2: 'string',
    lower: 'string',
  }
  base1: {
    outlineUrl: "/simpleTop-Outline.png",
    gradientUrl: ["/simpleTop-GradientA.png"],
    shadingUrl: ["/stretched-top.png"],
    filter: {
      primary: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      secondary: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      tertiary: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    }
  },
  base2: {
    outlineUrl: "/simpleTop-Outline.png",
    gradientUrl: ["/simpleTop-GradientA.png"],
    shadingUrl: ["/stretched-top.png"],
    filter: {
      primary: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      secondary: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      tertiary: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    }
  },
  baseFilter1: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
  baseFilter2: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
  baseFilter3: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
  seams: ["./curved-seam.png"], 
  decoration:  {outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
  decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
}
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
  const [headWear, setHeadWear] = useState(null);
  const [faceWear, setfaceWear] = useState(null);
  const [top, setTop] = useState(defaultTop); //should be array
  const [handWear, sethandWear] = useState([]);
  const [bottom, setbottom] = useState([]);
  const [footWear, setfootWear] = useState([]);
  const [back, setback] = useState([]);
  const [mantle, setMantle] = useState([]);

  return (
    <div className="character-creator">
      <h1 >Character Creator</h1>
      <GarmentContext.Provider
      value={{
        top: top,
        setTop: setTop
      }
        }>
        <Portrait/>
        <CategoryMenus/>
        <GarmentCreator top={top} setTop={setTop}/>
      </GarmentContext.Provider>
    </div>
  )
}
export default CharacterCreator;

