import React from 'react';

//   white: {brightness: 3.5, saturation: 1, hue: 0, opacity: 100, contrast: 144.5},
// creates string for filter css style from inputs
// inputs: numbers for value of hue/saturation/briteness/contrast/opacity
const makeFilterStyle = ({
  hue, sat, brit, con, op,
}) => {
  if (
    hue === undefined
    || sat === undefined
    || brit === undefined
    || con === undefined
    || op === undefined
  ) {
    // console.log('no color')
    return `brightness(${3.5}) hue-rotate(${0}deg) saturate(${1}%) contrast(${144.5}%) opacity(${100}%)`;
  }
  return `brightness(${brit}) hue-rotate(${hue}deg) saturate(${sat}%) contrast(${con}%) opacity(${op}%)`;
};
// Item: accepts data about garment/garment pieces and generates array of <img> elements
const Item = function Item({
  itemProfile,
  zCounter,
  displayClass,
  sectionClass,
  typeData,
}) {
  const {
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
    decorationFilter,
  } = itemProfile;
  if (displayClass !== 'portrait-img') {
    // console.log('item', itemProfile);
  }
  const base = typeData[typeKey].bases[baseKey];
  const neckline = necklineKey
    ? typeData[typeKey].necklines[necklineKey][neckLineIndex]
    : null;
  // boundaries
  const upperBoundary = upperBoundaryKey
    ? typeData[typeKey].upperBoundaries[upperBoundaryKey][upperBoundaryIndex]
    : {};
  const lowerBoundary = lowerBoundaryKey
    ? typeData[typeKey].lowerBoundaries[lowerBoundaryKey][lowerBoundaryIndex]
    : {};

  // console.log('lowerBoundaryIndex', lowerBoundaryIndex);
  // //decorations
  const decorationsArr = [
    <img
      alt="to be replaced"
      src={decoration.outlineUrl}
      className={displayClass}
      style={{ zIndex: zCounter }}
      key="decOut"
    />,
    <img
      alt="to be replaced"
      src={decoration.gradientUrl}
      className={displayClass}
      style={{
        zIndex: zCounter - 1,
        filter: makeFilterStyle(decorationFilter),
      }}
      key="decGrad"
    />,
    <img
      alt="to be replaced"
      src={decoration.shadingUrl}
      className={displayClass}
      style={{
        zIndex: zCounter - 2,
        filter: makeFilterStyle(decorationFilter),
      }}
      key="decShad"
    />,
  ];

  // const lbClass = `${upperBoundary.class || "upperBoundaryClass"} portrait-img`;

  // base
  const baseImgs = base ? (
    <>
      <img
        alt="to be replaced"
        src={base.outlineUrl}
        className={displayClass}
        style={{ zIndex: zCounter - 10 }}
        key="baseOut"
      />
      <img
        alt="to be replaced"
        src={base.gradientUrl}
        className={displayClass}
        style={{ zIndex: zCounter - 11, filter: makeFilterStyle(baseFilter) }}
        key="baseGrad"
      />
      <img
        alt="to be replaced"
        src={base.shadingUrl}
        className={displayClass}
        style={{ zIndex: zCounter - 12, filter: makeFilterStyle(baseFilter) }}
        key="baseShad"
      />
    </>
  ) : (
    []
  );
  // }

  return (
    <div
      className={`${sectionClass} ${displayClass}`}
      style={{ zIndex: zCounter - 10 }}
    >
      {/* //   {!decoration.hasBoundaries && decorationsArr} */}
      <img
        alt="to be replaced"
        src={upperBoundary.url}
        className={displayClass}
        style={{ zIndex: zCounter - 4 }}
        key="ub-img"
      />
      <div
        className={`${
          upperBoundary.class || 'upperBoundaryClass'
        } ${displayClass}`}
        style={{ zIndex: zCounter - 5 }}
      >
        {/* neckline */}
        <div className={`${neckline || 'neckineClass'} ${displayClass}`}>
          {/* lower boundary */}
          <img
            alt="to be replaced"
            src={lowerBoundary.url}
            className={displayClass}
            style={{ zIndex: zCounter - 3 }}
            key="lb-img"
          />
          <div
            className={`${
              lowerBoundary.class || 'lowerBoundaryClass'
            } ${displayClass}`}
          >
            {/* decoration */}
            {decoration.hasBoundaries && decorationsArr}
            {seamKey && (
              <img
                alt="to be replaced"
                src={typeData[typeKey].seams[seamKey.name][seamKey.type]}
                className={displayClass}
                style={{ zIndex: zCounter - 4 }}
                key="item seam"
              />
            )}
            {baseImgs}
          </div>
        </div>
      </div>
      <div className="preview-background" />
    </div>
  );
};
export default Item;
