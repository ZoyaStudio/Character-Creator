import React from 'react';
import {hairProfiles} from '../../utility/sample-data';
import {HairObj, HairTypes, Color} from '../../utility/types';
import {makeFilterStyle} from '../../utility/helper-functions';
type AppProps = {
  part: HairObj,
  type: HairTypes,
  displayClass: string,
  zCounter: number,
  baseFilter: Color,
  tintFilter: Color
}
const HairPart = function hairPart({
  part,
  type,
  displayClass,
  // onClickHandler,
  zCounter,
  baseFilter,
  tintFilter
} : AppProps) {
  const { outlineUrl, gradientUrl, shadingUrl } = hairProfiles[type][part.typeKey][part.index];
  return (
    <div
      className={displayClass}
      style={{ zIndex: zCounter - 1 }}
    >
      <img
        alt="outline"
        src={outlineUrl}
        style={{ zIndex: zCounter - 1 }}
        className={displayClass}
      />
      <img
        alt="gradient"
        src={gradientUrl}
        style={{ zIndex: zCounter - 2, filter: makeFilterStyle(tintFilter) }}
        className={displayClass}
      />
      <img
        alt="shading"
        src={shadingUrl}
        style={{ zIndex: zCounter - 4, filter: makeFilterStyle(baseFilter) }}
        className={displayClass}
      />
    </div>
  );
};
export default HairPart;
