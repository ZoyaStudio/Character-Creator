import React, {useState, useContext} from 'react';

//   white: {brightness: 3.5, saturation: 1, hue: 0, opacity: 100, contrast: 144.5},
//creates string for filter css style from inputs
//inputs: numbers for value of hue/saturation/briteness/contrast/opacity
const makeFilterStyle = (hue, sat, brit, con, op) => {
  if (hue === undefined || sat === undefined || brit === undefined || con === undefined ||op === undefined) {
    return "brightness(" + 3.5 + ") hue-rotate(" + 0 + 'deg) saturate(' + 1 + '%) contrast(' + 144.5 + '%) opacity(' + 100 + '%)';
  }
  return "brightness(" + brit + ") hue-rotate(" + hue + 'deg) saturate(' + sat + '%) contrast(' + con + '%) opacity(' + op + '%)';
}
//Item: accepts data about garment/garment pieces and generates array of <img> elements
function Item(props) {
  let {base, seamUrls, decoration, upperBoundary, neckline, lowerBoundary, zCounter, baseFilter, decorationFilter, displayClass, onClickEvent} = props;

  //seams
  var seamsArr = seamUrls ? seamUrls.map((url, index )=> <img src={url} className={displayClass} style={{zIndex: zCounter - 4}} key={index + "item"}/>) : [];

  //decorations
  var decorationsArr = null;
  if (decoration) {
    let formattedDecorationFilter = decorationFilter ? makeFilterStyle(decorationFilter.hue, decorationFilter.sat, decorationFilter.brit, decorationFilter.con, decorationFilter.op) : makeFilterStyle();
    decorationsArr = [
    <img src={decoration.outlineUrl} className={displayClass} style={{zIndex: zCounter}}/>,
    <img src={decoration.gradientUrl} className={displayClass} style={{zIndex: zCounter -1, filter: formattedDecorationFilter}}/>,
    <img src={decoration.shadingUrl} className={displayClass} style={{zIndex: zCounter -2, filter: formattedDecorationFilter}}/>
  ];
  } else {
    decoration = {hasBoundaries: false};
  }

  //base
  var baseImgs = null;
  if (base) {
      let formattedFilter = baseFilter  ?  makeFilterStyle(baseFilter.hue, baseFilter.sat, baseFilter.brit, baseFilter.con, baseFilter.op) : makeFilterStyle();
    baseImgs = [
      <img src={base.outlineUrl} className={displayClass} style={{zIndex: zCounter -10}}/>,
      <img src={base.gradientUrl} className={displayClass} style={{zIndex: zCounter - 11, filter: formattedFilter}}/>,
      <img src={base.shadingUrl} className={displayClass} style={{zIndex: zCounter - 12, filter: formattedFilter}}/>
    ];
  }
  return (
    <React.Fragment>
      {!decoration.hasBoundaries && decorationsArr}
      <div className={`${upperBoundary || 'upperBoundaryClass'} portrait-img`}  onClick={onClickEvent}>
       {/* neckline */}
        <div className={`${neckline || 'neckineClass'} portrait-img`}>
          {/* lower boundary */}
          <div className={`${lowerBoundary || 'lowerBoundaryClass'} portrait-img`}>
          {decoration.hasBoundaries && decorationsArr}
          {seamUrls && seamsArr}
          { base && baseImgs}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Item;