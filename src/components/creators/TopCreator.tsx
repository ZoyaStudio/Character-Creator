import React, { useState, useContext } from 'react';
import GenericCreator from '../generic-creator-components/GenericCreator';
import GarmentContext from '../../context';
import { garmentProfiles } from '../../utility/sample-data';

const TopCreator = function TopCreator() {
  const {
    top, setTop, sleeves, setSleeves, collar, setCollar,
  } = useContext(GarmentContext);
  const [savedTops, setSavedTops] = useState([]);
  return (
    <GenericCreator
      tabItems={[
        {
          label: 'Bodices',
          item: top,
          itemSetter: setTop,
          savedItems: savedTops,
          setSavedItems: setSavedTops,
          data: garmentProfiles.tops,
          garmentData: garmentProfiles.tops.skinTight,
          required: true,
          previewClass: 'preview-top',
        },
        {
          label: 'Collars',
          item: collar,
          itemSetter: setCollar,
          savedItems: savedTops,
          setSavedItems: setSavedTops,
          data: garmentProfiles.collars,
          garmentData: garmentProfiles.collars.skinTight,
          required: false,
          previewClass: 'preview-top',
        },
        {
          label: 'Sleeves',
          item: sleeves,
          itemSetter: setSleeves,
          savedItems: savedTops,
          setSavedItems: setSavedTops,
          data: garmentProfiles.sleeves,
          garmentData: garmentProfiles.sleeves['Puff Sleeves'],
          required: false,
          previewClass: 'preview-top',
        },
      ]}
    />
  );
};
export default TopCreator;
