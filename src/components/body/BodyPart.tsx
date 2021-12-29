import React from 'react';
import {makeFilterStyle} from '../../utility/helper-functions';
import {BodyFilterSet, BodyPngs} from '../../utility/types';
type AppProps = {
  bodyFilterSet: BodyFilterSet,
  part: BodyPngs,
  displayClass: string,
  zCounter: number,
}
const BodyPart = function BodyPart({
  bodyFilterSet,
  part,
  displayClass,
  zCounter,
}: AppProps) {
  const { blush, lightShade, darkShade, faceShade } = bodyFilterSet;

 return (
    <div
      className={displayClass}
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
      {part.faceShade && <img
        alt="face shade"
        src={part.faceShade}
        style={{ zIndex: zCounter - 5, filter: makeFilterStyle(faceShade) }}
        className={displayClass}
      />}

    </div>
  );
};
export default BodyPart;
