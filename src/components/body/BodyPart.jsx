import React from "react";

const BodyPart = function BodyPart({
  filterSet,
  part,
  displayClass,
  // onClickHandler,
  zCounter,
}) {
  const { blush, lightShade, darkShade } = filterSet;
  const makeFilterStyle = (filterSetObj) => {
    const { hue, sat, brit, con, op } = filterSetObj;
    if (
      hue === undefined ||
      sat === undefined ||
      brit === undefined ||
      con === undefined ||
      op === undefined
    ) {
      return `brightness(${3.5}) hue-rotate(${0}deg) saturate(${1}%) contrast(${144.5}%) opacity(${100}%)`;
    }
    return `brightness(${brit}) hue-rotate(${hue}deg) saturate(${sat}%) contrast(${con}%) opacity(${op}%)`;
  };

  return (
    <div
      className={displayClass}
      // onClick={onClickHandler}
      style={{ zIndex: zCounter - 1 }}
    >
      <img
        alt="outline"
        src={part.outline}
        style={{ zIndex: zCounter - 1 }}
        className={displayClass}
      />
      <img
        alt="gradient"
        src={part.gradient}
        style={{ zIndex: zCounter - 2, filter: makeFilterStyle(lightShade) }}
        className={displayClass}
      />
      <img
        alt="blush"
        src={part.blush}
        style={{ zIndex: zCounter - 3, filter: makeFilterStyle(blush) }}
        className={displayClass}
      />
      <img
        alt="dark shade"
        src={part.darkShade}
        style={{ zIndex: zCounter - 4, filter: makeFilterStyle(darkShade) }}
        className={displayClass}
      />
      <img
        alt="light shade"
        src={part.lightShade}
        style={{ zIndex: zCounter - 5, filter: makeFilterStyle(darkShade) }}
        className={displayClass}
      />
      <img
        alt="face shade"
        src={part.faceShade}
        style={{ zIndex: zCounter - 5, filter: makeFilterStyle(darkShade) }}
        className={displayClass}
      />
    </div>
  );
};
export default BodyPart;
