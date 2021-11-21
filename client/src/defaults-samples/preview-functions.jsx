import React from 'react';
import Item from './../components/Item.jsx';
import BodyPart from './../components/body/BodyPart.jsx';
import defaults from './defaults.js';
import colors from './colors.js';
const {white} = colors;
var body = defaults.defaultBody;
var previewFunctions = {
  clothingPreviews: {
    dataPreview: (handleOnClickEvent, displayClass) => {
      //console.log(handleOnClickEvent);
      return (item) => (
        <Item
        base={Object.values(item.bases)[0]}
        baseFilter={white}
        zCounter={500}
        displayClass={displayClass}//"preview-item"
        onClickEvent={() => {handleOnClickEvent(item)}}
        />
      )
    },
    savedItemPreview: (handleOnClickEvent) => {
      return (item) =>
      (  <Item
        base={item.base}
        baseFilter={item.baseFilter}
        decorationFilter={item.decorationFilter}
        zCounter={500}
        decoration={item.decoration}
        seamUrls={item.seams}
        displayClass="preview-item"
        upperBoundary={item.upperBoundary}
        neckline={item.neckline}
        lowerBoundary={item.lowerBoundary}
        onClickEvent={()=>{handleOnClickEvent(item)}}
        />);
    },
      basePreview: (handleOnClickEvent) => {
        //console.log(handleOnClickEvent);
        return (baseValue) => (
          <Item
          base={baseValue}
          baseFilter={white}
          zCounter={500}
          displayClass="preview-item"
          onClickEvent={() => {handleOnClickEvent(baseValue)}}
          />
        )
      },
      seamPreview: (handleOnClickEvent, displayClass, defaultBase) => {
        return (seam) => (
          <Item
          base={defaultBase.base}
          baseFilter={defaultBase.baseFilter || {hue: 0, sat: 100, brit: 1, con: 100, op: 100}}
          seamUrls={[seam]}
          zCounter={500}
          displayClass="preview-item"
          onClickEvent={() => {handleOnClickEvent([seam])}}
          />
        )
      },
      decorationPreview: (handleOnClickEvent, displayClass, defaultBase) => {
        return (decorationValue) => (
          <Item
          base={defaultBase.base}
          baseFilter={defaultBase.baseFilter || {hue: 0, sat: 100, brit: 1, con: 100, op: 100}}
          decorationFilter={decorationValue.decorationFilter || {hue: 0, sat: 100, brit: 1, con: 100, op: 100}}
          decoration={decorationValue}
          seamUrls={[]}
          zCounter={500}
          displayClass={displayClass}
          onClickEvent={() => {handleOnClickEvent(decorationValue)}}
          />
        )
      },

  },
  bodyPreviews: {
    facePreviewAtType: (type, filterSet) => {
     return (handleOnClickEvent) => {
      return (facePart) => (
        <div className="preview-head-container" >
        <BodyPart filterSet={filterSet} part={body.backArm} zCounter={120} displayClass="preview-head back-arm"/>
        <BodyPart filterSet={filterSet} part={body.torsoLegs} zCounter={140} displayClass="preview-head torso-legs"/>
        <BodyPart filterSet={filterSet} part={body.frontArm} zCounter={180} displayClass="preview-head front-arm"/>
        <BodyPart filterSet={filterSet} part={ type !== 'head'? body.head: facePart} zCounter={160} displayClass="preview-head head"/>
        <BodyPart filterSet={filterSet} part={body.ear} zCounter={200} displayClass="preview-head ear"/>
        </div>
      )
    }
    }
  }
}
export default previewFunctions;
