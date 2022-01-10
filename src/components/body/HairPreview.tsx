import React from 'react';
import HairPart from './HairPart';
import {HairObj, HairProfile, HairTypes} from '../../utility/types';
import {colors} from '../../utility/colors';
type HairPreviewProps = {
  handleOnClickEvent: (type:HairTypes, hairObj: HairObj) => void,
  previewCorrection: string,
  hairObj: HairObj
  type: HairTypes
}
const HairPreview = function ({
  handleOnClickEvent,
  previewCorrection,
  type,
  hairObj
}: HairPreviewProps) {
  const defaultBase = {
    typeKey: 'Short Hair',
    index: 0
  };
  return (
    <button
      className="preview-container"
      key={JSON.stringify(type + hairObj.typeKey) }
      type="button"
      onClick={() => {
        handleOnClickEvent(type, hairObj);
      }}
    >
      <div className={previewCorrection}>
        <HairPart
    zCounter={5}
    part={type === 'bases' ? hairObj :defaultBase}
    type="bases"
    displayClass="preview-inner fit"
    baseFilter={colors.Red}
    tintFilter={colors.Red}
/>


      </div>
      <div className="label-box">
        {hairObj.typeKey}
      </div>
    </button>
  );
};
export default HairPreview;
