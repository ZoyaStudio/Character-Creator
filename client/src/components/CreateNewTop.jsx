
import React, {useState, useContext} from 'react';
import Gallary from './Gallary.jsx';
import Item from './Item.jsx';
import GarmentContext from './../context.js';

const data = {
  base: [
    { //simple top
    outlineUrl: "/simpleTop-Outline.png",
    gradientUrl: "/simpleTop-GradientA.png",
    shadingUrl: "/simpleTop-ShadingA.png",
  },
    { //floral top
      outlineUrl: "/simpleTop-Outline.png",
      gradientUrl: "/simpleTop-GradientA.png",
      shadingUrl: "/simpleTopFlower-ShadingA.png",
    },
    { //stretched top
      outlineUrl: "/simpleTop-Outline.png",
      gradientUrl: "/simpleTop-GradientA.png",
      shadingUrl: "/stretched-top.png",
    },
  ],
  seams: ["./princessline.png", "./curved-seam.png"],
  decoration:  [
    //bow
    {outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
    //button down
    {outlineUrl: "./buttonOut.png", gradientUrl: './buttonGrad.png', shadingUrl: "./buttonShad.png", hasBoundaries: true}
  ]
}

/* <Item base={bases[2]} upperBoundary={ub} neckline={nl} lowerBoundary={lb} zCounter={500} decoration={buttondecoration} className="portrait-img" seamUrls={seamUrls} displayClass="portrait-img"/> */

function CreateNewTop(props) {
  const {savedTops, setSavedTops} = props;
  const {top, setTop} = useContext(GarmentContext);

  var handleOnClickEvent = (type, info) => {
    var copy = Object.assign({}, top);
    console.log(info);
    // console.log(JSON.stringify(copy[type]) === JSON.stringify(info), )
    if (JSON.stringify(copy[type]) === JSON.stringify(info) && type !== 'base') {
      copy[type] = null;
    } else {
      copy[type] = info;
    }
    setTop(copy);
  }

  const {base, seams, decoration} = data;
  var basePreviews = base.map(baseValue => <Item base={baseValue} zCounter={500} displayClass="preview-top" onClickEvent={() => {handleOnClickEvent('base', baseValue)}}/>);
  var seamPreviews = seams.map(seam => <Item base={base[0]} seamUrls={[seam]} zCounter={500}  displayClass="preview-top" onClickEvent={() => {handleOnClickEvent('seams', [seam])}}/>)
  var decorationPreviews = decoration.map(decorationValue => <Item base={base[0]} decoration={decorationValue} zCounter={500} displayClass="preview-top" onClickEvent={() => {handleOnClickEvent('decoration', decorationValue)}}/>)
  return (
    <div className="creation-panel minor-panel">
      <Gallary label="Base" children={basePreviews}/>
      <Gallary label="Seams" children={seamPreviews}/>
      <Gallary label="Decoration" children={decorationPreviews}/>
    </div>
  )
}
export default CreateNewTop;