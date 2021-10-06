
import React, {useState, useContext} from 'react';
import Item from './Item.jsx';
import GarmentContext from './../context.js';
import BodyPart from './body/BodyPart.jsx';

//Portrait: image of character user has customized
//props: none
//context: garment object with key for 'top' object
function Portrait(props) {
  const {top, body} = useContext(GarmentContext);
  var Top = (<Item base={top.base}
    baseFilter={top.baseFilter}
    decorationFilter={top.decorationFilter}
    zCounter={100}
    decoration={top.decoration}
    seamUrls={top.seams}
    displayClass="portrait-img"
    upperBoundary={top.upperBoundary}
    neckline={top.neckline}
    lowerBoundary={top.lowerBoundary}/>);
  var Ear = (<BodyPart filterSet={body.filterSet} part={body.ear} zCounter={200} displayClass="portrait-img ear"/>);
  var FrontArm = (<BodyPart filterSet={body.filterSet} part={body.frontArm} zCounter={180} displayClass="portrait-img front-arm"/>);
  var Head = (<BodyPart filterSet={body.filterSet} part={body.head} zCounter={160} displayClass="portrait-img head"/>);
  var BodyLegs = (<BodyPart filterSet={body.filterSet} part={body.torsoLegs} zCounter={140} displayClass="portrait-img torso-legs"/>)
  var BackArm = (<BodyPart filterSet={body.filterSet} part={body.backArm} zCounter={120} displayClass="portrait-img back-arm"/>);
    // function BodyPart ({filterSet, part, className, onClickHandler, zCounter}) {
  return (
    <div className="portrait">
      {[
        // Top,
        BackArm,
        BodyLegs,
        FrontArm,
        Head,
        Ear,
        ]}
      {/* <img src="./base-flattened.png" className="portrait-img"/> */}
      {/* <img src="./collarOut.png" className="portrait-img" style={{zIndex: 400 }}/>
      <img src="./collarGrad.png" className="portrait-img" style={{zIndex: 400 }}/>
      <img src="./collarShad.png" className="portrait-img" style={{zIndex: 400 }}/> */}
    </div>
  )
}
export default Portrait;