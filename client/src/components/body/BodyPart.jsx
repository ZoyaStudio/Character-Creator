
import React, {useState, useContext} from 'react';
function BodyPart ({filterSet, part, displayClass, onClickHandler, zCounter}) {
  const {blush, lightShade, darkShade} = filterSet;
  const makeFilterStyle = (filterSet) => {
    var {hue, sat, brit, con, op} = filterSet;
    if (hue === undefined || sat === undefined || brit === undefined || con === undefined ||op === undefined) {
      return "brightness(" + 3.5 + ") hue-rotate(" + 0 + 'deg) saturate(' + 1 + '%) contrast(' + 144.5 + '%) opacity(' + 100 + '%)';
    }
    return "brightness(" + brit + ") hue-rotate(" + hue + 'deg) saturate(' + sat + '%) contrast(' + con + '%) opacity(' + op + '%)';
  }
  return (
    <div className={displayClass} onClick={onClickHandler}>
       <img src={part.outline} style={{zIndex: zCounter - 1}} className={displayClass}/>
       <img src={part.gradient} style={{zIndex: zCounter - 2, filter: makeFilterStyle(lightShade)}} className={displayClass}/>
       <img src={part.blush} style={{zIndex: zCounter - 3, filter: makeFilterStyle(blush)}} className={displayClass}/>
       <img src={part.darkShade} style={{zIndex: zCounter - 4, filter: makeFilterStyle(darkShade)}} className={displayClass}/>
       <img src={part.lightShade} style={{zIndex: zCounter - 5, filter: makeFilterStyle(darkShade)}} className={displayClass}/>
    </div>
  )
}
export default BodyPart;
