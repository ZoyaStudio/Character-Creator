
import React, {useState, useContext} from 'react';
import Item from './Item.jsx';
import GarmentContext from './../context.js';
import BodyPart from './body/BodyPart.jsx';
import HairPart from './body/HairPart.jsx';
import EyePart from './body/EyePart.jsx'

//Portrait: image of character user has customized
//props: none
//context: garment object with key for 'top' object
function Portrait(props) {
  const {top, body, sleeves, hair, bottom, feet, collar, data} = useContext(GarmentContext);
  const {base, hairFilter} = hair;

  var zCounterMax = 500;
  // console.log('nose', body.nose)
  var pieces = [
    // function HairPart ({part, displayClass, onClickHandler, zCounter, hairFilter}) {
    (zIndex) => (<HairPart
      key="hair base front"
      part={base}
      type="bases"
      hairFilter={hairFilter}
      zCounter={zIndex}
      displayClass="portrait-img front-hair"
      />),
    (zIndex) => (<BodyPart key="ear" filterSet={body.filterSet} part={body.ear} zCounter={zIndex}displayClass="portrait-img ear"/>),
    (zIndex) => (<BodyPart key="nose" filterSet={body.filterSet} part={body.nose} zCounter={zIndex}displayClass="portrait-img nose"/>),
    (zIndex) => (<BodyPart key="eyebrows" filterSet={body.filterSet} part={body.eyebrows} zCounter={zIndex} displayClass="portrait-img eyebrows"/>),
    (zIndex) => (<EyePart key="eyes" part={body.eyes} displayClass="portrait-img" zCounter={zIndex}/>),
    (zIndex) => (<BodyPart key="mouth" filterSet={body.filterSet} part={body.mouth} zCounter={zIndex}displayClass="portrait-img mouth"/>),
    (zIndex) => (<BodyPart key="head" filterSet={body.filterSet} part={body.head} zCounter={zIndex} displayClass="portrait-img head"/>),
    (zIndex) => (<Item
      key="sleeves-front"
      typeData={data.sleeves}
      itemProfile={sleeves}
      zCounter={zIndex}
      displayClass="portrait-img"
          sectionClass={'left-section'}
      />),
    (zIndex) => (<BodyPart key="front-arm" filterSet={body.filterSet} part={body.frontArm} zCounter={zIndex} displayClass="portrait-img front-arm"/>),
    (zIndex) => (<Item
      key="collar"
      typeData={data.collars}
      itemProfile={collar}
      zCounter={zIndex}
      displayClass="portrait-img"
        />),
    (zIndex) => (<Item
      key="top"
      typeData={data.tops}
      itemProfile={top}
      zCounter={zIndex}
      displayClass="portrait-img"
        />),
      (zIndex) => (<Item
        key="feet"
        typeData={data.feets}
        itemProfile={feet}
        zCounter={zIndex}
        displayClass="portrait-img"
        />),
    (zIndex) => (<Item
        key="bottom"
        typeData={data.bottoms}
        itemProfile={bottom}
        zCounter={zIndex}
        displayClass="portrait-img"
        />),
    (zIndex) => (<BodyPart key="body-legs" filterSet={body.filterSet} part={body.torsoLegs} zCounter= {zIndex} displayClass="portrait-img torso-legs"/>),
    (zIndex) => (<Item
      key="sleeves-back"
      typeData={data.sleeves}
      itemProfile={sleeves}
      zCounter={zIndex}
      displayClass="portrait-img"
          sectionClass={'right-section'}
      />),
    (zIndex) => (<BodyPart key="back-arm" filterSet={body.filterSet} part={body.backArm} zCounter={zIndex} displayClass="portrait-img back-arm"/>),
    (zIndex) => (<HairPart
      key="hair base back"
      part={base}
      type="bases"
      hairFilter={hairFilter}
      zCounter={zIndex}
      displayClass="portrait-img back-hair"
      />),
  ]

    // function BodyPart ({filterSet, part, className, onClickHandler, zCounter}) {
  return (
    <div className="portrait">
      {pieces.map((piece) => piece(zCounterMax -= 20))}
    </div>
  )
}
export default Portrait;