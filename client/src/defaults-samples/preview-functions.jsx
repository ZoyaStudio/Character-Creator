import React from 'react';
import Item from './../components/Item.jsx';
import defaults from './defaults.js';
var baseShirt = defaults.previewTop;

var previewFunctions = {
  topPreviews: {
    savedTopPreview: (handleOnClickEvent) => {
      return (top) =>
      (  <Item
        base={top.base}
        baseFilter={top.baseFilter}
        decorationFilter={top.decorationFilter}
        zCounter={500}
        decoration={top.decoration}
        seamUrls={top.seams}
        displayClass="preview-top"
        upperBoundary={top.upperBoundary}
        neckline={top.neckline}
        lowerBoundary={top.lowerBoundary}
        onClickEvent={()=>{handleOnClickEvent(top)}}
        />);
    },
      basePreview: (handleOnClickEvent) => {
        //console.log(handleOnClickEvent);
        return (baseValue) => (
          <Item
          base={baseValue}
          baseFilter={baseShirt.baseFilter || {hue: 0, sat: 100, brit: 1, con: 100, op: 100}}
          zCounter={500}
          displayClass="preview-top"
          onClickEvent={() => {handleOnClickEvent(baseValue)}}
          />
        )
      },
      seamPreview: (handleOnClickEvent) => {
        return (seam) => (
          <Item
          base={baseShirt.base}
          baseFilter={baseShirt.baseFilter || {hue: 0, sat: 100, brit: 1, con: 100, op: 100}}
          seamUrls={[seam]}
          zCounter={500}
          displayClass="preview-top"
          onClickEvent={() => {handleOnClickEvent([seam])}}
          />
        )
      },
      decorationPreview: (handleOnClickEvent) => {
        return (decorationValue) => (
          <Item
          base={baseShirt.base}
          baseFilter={baseShirt.baseFilter || {hue: 0, sat: 100, brit: 1, con: 100, op: 100}}
          decorationFilter={decorationValue.decorationFilter || {hue: 0, sat: 100, brit: 1, con: 100, op: 100}}
          decoration={decorationValue}
          seamUrls={[]}
          zCounter={500}
          displayClass="preview-top"
          onClickEvent={() => {handleOnClickEvent(decorationValue)}}
          />
        )
      },
  }
}
export default previewFunctions;
