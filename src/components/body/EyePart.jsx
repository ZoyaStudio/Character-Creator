
import React, {useState, useContext} from 'react';
import data from './../../defaults-samples/sample-data.js';

function EyePart ({part, displayClass, onClickHandler, zCounter}) {
  const {eyeColor, typeKey, irisStyle, pupilStyle, lashLength} = part;

  const makeFilterStyle = (filterSet) => {
    var {hue, sat, brit, con, op} = filterSet;
    if (hue === undefined || sat === undefined || brit === undefined || con === undefined ||op === undefined) {
      return "brightness(" + 3.5 + ") hue-rotate(" + 0 + 'deg) saturate(' + 1 + '%) contrast(' + 144.5 + '%) opacity(' + 100 + '%)';
    }
    return "brightness(" + brit + ") hue-rotate(" + hue + 'deg) saturate(' + sat + '%) contrast(' + con + '%) opacity(' + op + '%)';
  }
  const outline = data.bodies.eyes[typeKey].outlines[lashLength];
  const pupil = data.bodies.eyes[typeKey].pupils[pupilStyle];
  const irisOutline = data.bodies.eyes[typeKey].irisStyle[irisStyle].outlineUrl;
  const irisShading = data.bodies.eyes[typeKey].irisStyle[irisStyle].shadingUrl;

  return (
    <div className={displayClass} onClick={onClickHandler} style={{zIndex: zCounter - 1}}>
       <img src={outline} style={{zIndex: zCounter - 2}} className={displayClass}/>
       <img src={irisOutline} style={{zIndex: zCounter - 3}} className={displayClass}/>
       <img src={pupil} style={{zIndex: zCounter - 4}} className={displayClass}/>
       <img src={irisShading} style={{zIndex: zCounter - 5, filter: makeFilterStyle(eyeColor)}} className={displayClass}/>
    </div>
  )
}
export default EyePart;
// eyes: {
//   eyeColor: colors.white,
//   typeKey: "Round Eyes",
//   irisStyle: 'normal',
//   pupilStyle: 'normal',
//   lashLength: 'noLash'
// },

// "Round Eyes": {
//   outlines: {
//     noLash: '',
//     midLash: '',
//     longLashed: './RoundEyesLongLashed-Outline',
//   },
//   pupils: {
//     normal: './RoundEyePupil.svg',
//     cat: ''
//   },
//   irisStyle: {
//     normal: {
//       outlineUrl: './RoundEyeNormalIris-Outline.svg',
//       shadingUrl: './RoundEyeNormalIris-Shading.svg',
//     },
//     glazed: {
//       outlineUrl: '',
//       shadingUrl: ''
//     },
//     intense: {
//       outlineUrl: '',
//       shadingUrl: ''
//     }
//   },
//   eyewhite: '',
// }