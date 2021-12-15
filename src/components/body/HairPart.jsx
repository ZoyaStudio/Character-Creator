import React from 'react';
import data from '../../defaults-samples/sample-data';

const HairPart = function hairPart({
  part,
  type,
  displayClass,
  // onClickHandler,
  zCounter,
  hairFilter,
}) {
  const makeFilterStyle = (filterSet) => {
    const {
      hue, sat, brit, con, op,
    } = filterSet;
    if (
      hue === undefined
      || sat === undefined
      || brit === undefined
      || con === undefined
      || op === undefined
    ) {
      return `brightness(${3.5}) hue-rotate(${0}deg) saturate(${1}%) contrast(${144.5}%) opacity(${100}%)`;
    }
    return `brightness(${brit}) hue-rotate(${hue}deg) saturate(${sat}%) contrast(${con}%) opacity(${op}%)`;
  };
  const { outlineUrl, gradientUrl, shadingUrl } = data.hair[type][part.typeKey];
  return (
    <div
      className={displayClass}
      // onClick={onClickHandler}
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
        style={{ zIndex: zCounter - 2, filter: makeFilterStyle(hairFilter) }}
        className={displayClass}
      />
      <img
        alt="shading"
        src={shadingUrl}
        style={{ zIndex: zCounter - 4, filter: makeFilterStyle(hairFilter) }}
        className={displayClass}
      />
    </div>
  );
};
export default HairPart;
