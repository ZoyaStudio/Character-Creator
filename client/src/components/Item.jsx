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
  upperBoundary = upperBoundary || {};
  lowerBoundary = lowerBoundary || {};
  //seams
  var seamsArr = seamUrls ? seamUrls.map((url, index )=> <img src={url} className={displayClass} style={{zIndex: zCounter - 4}} key={index + "item seam"}/>) : [];

  //decorations
  var decorationsArr = null;
  if (decoration) {
    let formattedDecorationFilter = decorationFilter ? makeFilterStyle(decorationFilter.hue, decorationFilter.sat, decorationFilter.brit, decorationFilter.con, decorationFilter.op) : makeFilterStyle();
    decorationsArr = [
    <img src={decoration.outlineUrl} className={displayClass} style={{zIndex: zCounter}} key={"decOut"}/>,
    <img src={decoration.gradientUrl} className={displayClass} style={{zIndex: zCounter -1, filter: formattedDecorationFilter}}  key={"decGrad"}/>,
    <img src={decoration.shadingUrl} className={displayClass} style={{zIndex: zCounter -2, filter: formattedDecorationFilter}}  key={"decShad"}/>
  ];
  } else {
    decoration = {hasBoundaries: false};
  }

  var lbClass = `${upperBoundary.class|| 'upperBoundaryClass'} portrait-img`;
  //base
  var baseImgs = null;
  if (base) {
      let formattedFilter = baseFilter  ?  makeFilterStyle(baseFilter.hue, baseFilter.sat, baseFilter.brit, baseFilter.con, baseFilter.op) : makeFilterStyle();

    baseImgs = (
      <React.Fragment>
            <img src={base.outlineUrl} className={displayClass} style={{zIndex: zCounter -10}} key={"baseOut"}/>
      <img src={base.gradientUrl} className={displayClass} style={{zIndex: zCounter - 11, filter: formattedFilter}} key={"baseGrad"}/>
      <img src={base.shadingUrl} className={displayClass} style={{zIndex: zCounter - 12, filter: formattedFilter}} key={"baseShad"}/>
      </React.Fragment>
    )
  }
  return (
    <div className="portrait-img" onClick={onClickEvent}>
      {!decoration.hasBoundaries && decorationsArr}
      <img src={upperBoundary.url} className={displayClass + ' portrait-img'} style={{zIndex: zCounter -4 }} key={"ub-img"}/>
      <div
      className={`${ upperBoundary.class || 'upperBoundaryClass'} portrait-img`}
      style={{zIndex: zCounter -10}}
      >
       {/* neckline */}
        <div className={`${neckline || 'neckineClass'} portrait-img`}>
          {/* lower boundary */}
          <img src={lowerBoundary.url} className={displayClass + ' portrait-img'} style={{zIndex: zCounter -3 }} key={"lb-img"}/>
          <div className={`${lowerBoundary.class || 'lowerBoundaryClass'} portrait-img`}>
          {decoration.hasBoundaries && decorationsArr}
          {seamUrls && seamsArr}
          { base && baseImgs}
          </div>
      </div>
      </div>
    </div>
  )
}
export default Item;