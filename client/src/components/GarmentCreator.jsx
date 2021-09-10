
import React, {useState, useContext} from 'react';
import CreateNewTop from './CreateNewTop.jsx';
import DetailsBar from './DetailsBar.jsx';
import ExistingTop from './ExistingTop.jsx';

var defaultTop = {
  upperBoundary: '',
  neckline: '',
  lowerBoundary: '',
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
var defaultTop2 = {
  upperBoundary: null,
  neckline: null,
  lowerBoundary: null,
  base: {
    outlineUrl: "/simpleTop-Outline.png",
    gradientUrl: "/simpleTop-GradientA.png",
    shadingUrl: "/simpleTopFlower-ShadingA.png",
  },
  baseFilter: {hue: 90, sat: 25, brit: 1, con: 100, op: 100},
  seams: ["./curved-seam.png"],
  decoration:  {outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
  decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
}
function GarmentCreator(props) {
  const [isSavedTop, setIsSavedTops] = useState(false);
  const [savedTops, setSavedTops] = useState([defaultTop2])
  var createNewTopClass = "selected";
  var savedTopsClass = "";
  if (isSavedTop) {
    createNewTopClass ="";
    savedTopsClass= "selected";
  }
  const toggleIsSavedTops = () => {
    setIsSavedTops(!isSavedTop);
  }
  return (
    <div className="major-panel garment-creator">
       <div className="menu">
        <button className={createNewTopClass} onClick={toggleIsSavedTops}>Create New Top</button>
        <button className={savedTopsClass} onClick={toggleIsSavedTops}>Saved Tops</button>
      </div>
      <DetailsBar savedTops={savedTops} setSavedTops={setSavedTops}/>
      {isSavedTop && <ExistingTop savedTops={savedTops} setSavedTops={setSavedTops}/>}
      {!isSavedTop &&  <CreateNewTop savedTops={savedTops} setSavedTops={setSavedTops}/>}

    </div>
  )
}
export default GarmentCreator;