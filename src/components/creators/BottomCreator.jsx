import React, {useState, useContext} from 'react';
import GenericCreator from './../GenericCreator.jsx';
import GarmentContext from './../../context.js';
import DetailsBar from './../DetailsBar.jsx';
import defaults from './../../defaults-samples/defaults.js';
import data from './../../defaults-samples/sample-data.js';

function BottomCreator() {
  const {bottom, setBottom, feet, setFeet} = useContext(GarmentContext);
  const [savedBottoms, setSavedBottoms] = useState([]);
  return (
    <>
      <GenericCreator tabItems={
        [
          {
            label: 'Pants',
            item: bottom,
            itemSetter: setBottom,
            savedItems: savedBottoms,
            setSavedItems: setSavedBottoms,
            data: data.bottoms,
            dataDefaultBase: data.bottoms.skinTight,
            required: true,
            previewClass: 'preview-bottom'
          },
          {
            label: 'Footware',
            item: feet,
            itemSetter: setFeet,
            savedItems: savedBottoms,
            setSavedItems: setSavedBottoms,
            data: data.feets,
            dataDefaultBase: data.feets.skinTight,
            required: false, //true,
            previewClass: 'preview-feet'
          }
        ]
      }/>
    </>
  )
}
export default BottomCreator;
