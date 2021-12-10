import React, {useState, useContext} from 'react';

//   white: {brightness: 3.5, saturation: 1, hue: 0, opacity: 100, contrast: 144.5},
//creates string for filter css style from inputs
//inputs: numbers for value of hue/saturation/briteness/contrast/opacity
const makeFilterStyle = ({hue, sat, brit, con, op}) => {
  if (hue === undefined || sat === undefined || brit === undefined || con === undefined ||op === undefined) {
    // console.log('no color')
    return "brightness(" + 3.5 + ") hue-rotate(" + 0 + 'deg) saturate(' + 1 + '%) contrast(' + 144.5 + '%) opacity(' + 100 + '%)';
  }
  return "brightness(" + brit + ") hue-rotate(" + hue + 'deg) saturate(' + sat + '%) contrast(' + con + '%) opacity(' + op + '%)';
}
//Item: accepts data about garment/garment pieces and generates array of <img> elements
function Item({
  itemProfile,
  zCounter,
  displayClass,
  onClickEvent,
  sectionClass,
  typeData,
}) {
  let {
    typeKey,
    upperBoundaryKey,
    upperBoundaryIndex,
    lowerBoundaryKey,
    lowerBoundaryIndex,
    necklineKey,
    neckLineIndex,
    baseKey,
    baseFilter,
    seamKey,
    decoration = {},
    decorationFilter
  } = itemProfile;
  if (displayClass !== 'portrait-img') {

    // console.log('item', itemProfile);
  }
  let base = typeData[typeKey].bases[baseKey];
  let neckline = necklineKey ? typeData[typeKey].necklines[necklineKey][necklineIndex] : null;
  //boundaries
  let upperBoundary = upperBoundaryKey ? typeData[typeKey].upperBoundaries[upperBoundaryKey][upperBoundaryIndex]: {};
  let lowerBoundary = lowerBoundaryKey ? typeData[typeKey].lowerBoundaries[lowerBoundaryKey][lowerBoundaryIndex] : {};

  // console.log('lowerBoundaryIndex', lowerBoundaryIndex);
  // //decorations
   const decorationsArr = [
    <img src={decoration.outlineUrl} className={displayClass} style={{zIndex: zCounter}} key={"decOut"}/>,
    <img src={decoration.gradientUrl} className={displayClass} style={{zIndex: zCounter -1, filter: makeFilterStyle(decorationFilter)}}  key={"decGrad"}/>,
    <img src={decoration.shadingUrl} className={displayClass} style={{zIndex: zCounter -2, filter: makeFilterStyle(decorationFilter)}}  key={"decShad"}/>
  ];

  var lbClass = `${upperBoundary.class|| 'upperBoundaryClass'} portrait-img`;

  //base
  const baseImgs = base ? (
      <React.Fragment>
      <img src={base.outlineUrl} className={displayClass} style={{zIndex: zCounter -10}} key={"baseOut"}/>
      <img src={base.gradientUrl} className={displayClass} style={{zIndex: zCounter - 11, filter: makeFilterStyle(baseFilter)}} key={"baseGrad"}/>
      <img src={base.shadingUrl} className={displayClass} style={{zIndex: zCounter - 12, filter: makeFilterStyle(baseFilter)}} key={"baseShad"}/>
      </React.Fragment>
    ): [];
  // }

  return (
   <div className={`${sectionClass} ${displayClass}`} onClick={() => {onClickEvent(itemProfile)}} style={{zIndex: zCounter -10}}>
    {/* //   {!decoration.hasBoundaries && decorationsArr} */}
      <img src={upperBoundary.url} className={displayClass} style={{zIndex: zCounter -4 }} key={"ub-img"}/>
      <div
      className={`${ upperBoundary.class|| 'upperBoundaryClass'} ${displayClass}`}
      style={{zIndex: zCounter-5}}
      >
       {/* neckline */}
        <div className={`${neckline || 'neckineClass'} ${displayClass}`}>
          {/* lower boundary */}
          <img src={lowerBoundary.url} className={displayClass} style={{zIndex: zCounter -3 }} key={"lb-img"}/>
          <div className={`${lowerBoundary.class || 'lowerBoundaryClass'} ${displayClass}`}>
            {/* decoration */}
          {decoration.hasBoundaries && decorationsArr}
          {seamKey && <img src={typeData[typeKey].seams[seamKey.name][seamKey.type]} className={displayClass} style={{zIndex: zCounter - 4}} key={"item seam"}/>}
          {baseImgs}
          </div>
      </div>
      </div>
      <div className='preview-background'></div>
    </div>
  )
}
export default Item;