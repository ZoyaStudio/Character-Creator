
import React, {useState, useContext} from 'react';
import Item from './Item.jsx';
import GarmentContext from './../context.js';
import BodyPart from './body/BodyPart.jsx';

//Portrait: image of character user has customized
//props: none
//context: garment object with key for 'top' object
function Portrait(props) {
  const {top, body, sleeves} = useContext(GarmentContext);
  var zCounterMax = 500;
  var pieces = [
    (zIndex) => (<BodyPart key="ear" filterSet={body.filterSet} part={body.ear} zCounter={zIndex} displayClass="portrait-img ear"/>),
    (zIndex) => (<BodyPart key="head" filterSet={body.filterSet} part={body.head} zCounter={zIndex} displayClass="portrait-img head"/>),
    (zIndex) => (<Item
      key="sleeve-caps-front"
      base={sleeves.base}
      baseFilter={sleeves.baseFilter}
      decorationFilter={sleeves.decorationFilter}
      zCounter={zIndex}
      displayClass="portrait-img"
      sectionClass={'left-section'}
      />),
      (zIndex) => (<BodyPart key="front-arm" filterSet={body.filterSet} part={body.frontArm} zCounter={zIndex} displayClass="portrait-img front-arm"/>),
    (zIndex) => (<Item
      key="top"
      base={top.base}
      baseFilter={top.baseFilter}
      decorationFilter={top.decorationFilter}
      zCounter={zIndex}
      decoration={top.decoration}
      seamUrls={top.seams}
      displayClass="portrait-img"
      upperBoundary={top.upperBoundary}
      neckline={top.neckline}
      lowerBoundary={top.lowerBoundary}/>),
    (zIndex) => (<BodyPart key="body-legs" filterSet={body.filterSet} part={body.torsoLegs} zCounter= {zIndex} displayClass="portrait-img torso-legs"/>),
    (zIndex) => (<Item
      key="sleeve-caps-back"
      base={sleeves.base}
      baseFilter={sleeves.baseFilter}
      decorationFilter={sleeves.decorationFilter}
      zCounter={zIndex}
      displayClass="portrait-img"
      sectionClass={'right-section'}
      />),
    (zIndex) => (<BodyPart key="back-arm" filterSet={body.filterSet} part={body.backArm} zCounter={zIndex} displayClass="portrait-img back-arm"/>)
  ]

    // function BodyPart ({filterSet, part, className, onClickHandler, zCounter}) {
  return (
    <div className="portrait">
      {pieces.map((piece) => piece(zCounterMax -= 20))}
    </div>
  )
}
export default Portrait;