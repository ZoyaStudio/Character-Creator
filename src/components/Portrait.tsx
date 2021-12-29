import React, { useContext } from 'react';
import Item from './Item';
import GarmentContext from '../context';
import BodyPart from './body/BodyPart';
import HairPart from './body/HairPart';
import EyePart from './body/EyePart';

// Portrait: image of character user has customized
// props: none
// context: garment object with key for 'top' object
const Portrait = function Portrait() {
  const {
    top, body, sleeves, hair, bottom, feet, collar, garmentProfiles,
  } = useContext(GarmentContext);
  const { base, hairFilter } = hair;

  let zCounterMax = 500;
  // console.log('nose', body.nose)
  const pieces = [
    // function HairPart ({part, displayClass, onClickHandler, zCounter, hairFilter}) {
    (zIndex: number) => (
      <HairPart
        key="hair base front"
        part={base}
        type="bases"
        hairFilter={hairFilter}
        zCounter={zIndex}
        displayClass="portrait-img front-hair"
      />
    ),
    (zIndex: number) => (
      <BodyPart
        key="ear"
        bodyFilterSet={body.filterSet}
        part={body.ear}
        zCounter={zIndex}
        displayClass="portrait-img ear"
      />
    ),
    (zIndex: number) => (
      <BodyPart
        key="nose"
        bodyFilterSet={body.filterSet}
        part={body.nose}
        zCounter={zIndex}
        displayClass="portrait-img nose"
      />
    ),
    (zIndex: number) => (
      <BodyPart
        key="eyebrows"
        bodyFilterSet={body.filterSet}
        part={body.eyebrows}
        zCounter={zIndex}
        displayClass="portrait-img eyebrows"
      />
    ),
    (zIndex: number) => (
      <EyePart
        key="eyes"
        part={body.eyes}
        displayClass="portrait-img"
        zCounter={zIndex}
      />
    ),
    (zIndex: number) => (
      <BodyPart
        key="mouth"
        bodyFilterSet={body.filterSet}
        part={body.mouth}
        zCounter={zIndex}
        displayClass="portrait-img mouth"
      />
    ),
    (zIndex: number) => (
      <BodyPart
        key="head"
        bodyFilterSet={body.filterSet}
        part={body.head}
        zCounter={zIndex}
        displayClass="portrait-img head"
      />
    ),
    (zIndex: number) => (
      <Item
        key="sleeves-front"
        typeData={garmentProfiles.sleeves}
        itemProfile={sleeves}
        zCounter={zIndex}
        displayClass="portrait-img"
        sectionClass="left-section"
      />
    ),
    (zIndex: number) => (
      <BodyPart
        key="front-arm"
        bodyFilterSet={body.filterSet}
        part={body.frontArm}
        zCounter={zIndex}
        displayClass="portrait-img front-arm"
      />
    ),
    (zIndex: number) => (
      <Item
        key="collar"
        typeData={garmentProfiles.collars}
        itemProfile={collar}
        zCounter={zIndex}
        displayClass="portrait-img"
      />
    ),
    (zIndex: number) => (
      <Item
        key="top"
        typeData={garmentProfiles.tops}
        itemProfile={top}
        zCounter={zIndex}
        displayClass="portrait-img"
      />
    ),
    (zIndex: number) => (
      <Item
        key="feet"
        typeData={garmentProfiles.feets}
        itemProfile={feet}
        zCounter={zIndex}
        displayClass="portrait-img"
      />
    ),
    (zIndex: number) => (
      <Item
        key="bottom"
        typeData={garmentProfiles.bottoms}
        itemProfile={bottom}
        zCounter={zIndex}
        displayClass="portrait-img"
      />
    ),
    (zIndex: number) => (
      <BodyPart
        key="body-legs"
        bodyFilterSet={body.filterSet}
        part={body.torsoLegs}
        zCounter={zIndex}
        displayClass="portrait-img torso-legs"
      />
    ),
    (zIndex: number) => (
      <Item
        key="sleeves-back"
        typeData={garmentProfiles.sleeves}
        itemProfile={sleeves}
        zCounter={zIndex}
        displayClass="portrait-img"
        sectionClass="right-section"
      />
    ),
    (zIndex: number) => (
      <BodyPart
        key="back-arm"
        bodyFilterSet={body.filterSet}
        part={body.backArm}
        zCounter={zIndex}
        displayClass="portrait-img back-arm"
      />
    ),
    (zIndex: number) => (
      <HairPart
        key="hair base back"
        part={base}
        type="bases"
        hairFilter={hairFilter}
        zCounter={zIndex}
        displayClass="portrait-img back-hair"
      />
    ),
  ];

  // function BodyPart ({filterSet, part, className, onClickHandler, zCounter}) {
  return (
    <div className="portrait">
      {pieces.map((piece) => {
        zCounterMax -= 20;
        return piece(zCounterMax);
      })}
    </div>
  );
};
export default Portrait;
