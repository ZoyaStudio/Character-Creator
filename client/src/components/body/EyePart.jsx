
import React, {useState, useContext} from 'react';
function EyePart ({eyeFilterSet, onClickHandler, zCounter, part}) {

  const {eyewhite, iris} = eyeFilterSet;
  const makeFilterStyle = (filterSet) => {
    var {hue, sat, brit, con, op} = filterSet;
    if (hue === undefined || sat === undefined || brit === undefined || con === undefined ||op === undefined) {
      return "brightness(" + 3.5 + ") hue-rotate(" + 0 + 'deg) saturate(' + 1 + '%) contrast(' + 144.5 + '%) opacity(' + 100 + '%)';
    }
    return "brightness(" + brit + ") hue-rotate(" + hue + 'deg) saturate(' + sat + '%) contrast(' + con + '%) opacity(' + op + '%)';
  }

  return (
    <div className={displayClass} onClick={onClickHandler} style={{zIndex: zCounter - 1}}>
       <img src={part.outline} style={{zIndex: zCounter - 1}} className={displayClass}/>
       <img src={part.irisShading} style={{zIndex: zCounter - 2, filter: makeFilterStyle(iris)}} className={displayClass}/>
       <img src={part.eyewhite} style={{zIndex: zCounter - 3, filter: makeFilterStyle(eyewhite)}} className={displayClass}/>
    </div>
  )
}
export default EyePart;