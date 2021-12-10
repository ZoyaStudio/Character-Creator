import React, {useState, useContext} from 'react';
import GenericCreator from './../GenericCreator.jsx';
import GarmentContext from './../../context.js';
import DetailsBar from './../DetailsBar.jsx';
import defaults from './../../defaults-samples/defaults.js';
import data from './../../defaults-samples/sample-data.js';

function TopCreator() {
  const {top, setTop, sleeves, setSleeves, collar, setCollar} = useContext(GarmentContext);
  const [savedTops, setSavedTops] = useState([]);
  return (
    <>
      <GenericCreator tabItems={
        [
          {
            label: 'Bodices',
            item: top,
            itemSetter: setTop,
            savedItems: savedTops,
            setSavedItems: setSavedTops,
            data: data.tops,
            dataDefaultBase: data.tops.skinTight,
            required: true,
            previewClass: 'preview-top'
          },
          {
            label: 'Collars',
            item: collar,
            itemSetter: setCollar,
            savedItems: savedTops,
            setSavedItems: setSavedTops,
            data: data.collars,
            dataDefaultBase: data.collars.skinTight,
            required: false,
            previewClass: 'preview-top'
          },
          {
            label: 'Sleeves',
            item: sleeves,
            itemSetter: setSleeves,
            savedItems: savedTops,
            setSavedItems: setSavedTops,
            data: data.sleeves,
            dataDefaultBase: data.sleeves['Puff Sleeves'],
            required: false,
            previewClass: 'preview-top'
          }
        ]
      }/>
    </>
  )
}
export default TopCreator;
