import React, {useState, useContext} from 'react';
import GenericCreator from './GenericCreator.jsx';
import GarmentContext from './../context.js';
import DetailsBar from './DetailsBar.jsx';
import defaults from './../defaults-samples/defaults.js';
import data from './../defaults-samples/sample-data.js';
function BottomCreator() {
  const {bottom, setBottom, feet, setFeet} = useContext(GarmentContext);
  const [savedBottoms, setSavedBottoms] = useState([]);
  return (
    <>
      <GenericCreator tabItems={
        [
          {
            label: 'Bottoms',
            currentItem: bottom,
            itemSetter: setBottom,
            savedItems: savedBottoms,
            setSavedItems: setSavedBottoms,
            data: data.bottoms,
            dataDefaultBase: data.bottoms.skinTight,
            required: true
          }
        ]
      }/>
    </>
  )
}
export default BottomCreator;
