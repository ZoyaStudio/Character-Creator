
import React, {useState, useContext} from 'react';
import GenericPanels from './GenericPanels.jsx';
import previewFunctions from './../defaults-samples/preview-functions.jsx';
import DetailsBar from './DetailsBar.jsx';
import defaults from './../defaults-samples/defaults.js';
import data from './../defaults-samples/sample-data.js';

var {dataPreview, savedItemPreview, basePreview, seamPreview, decorationPreview} = previewFunctions.clothingPreviews;

function GenericCreator ({tabItems}) {
  const [currentData, setCurrentData] = useState(data.tops.skinTight);
  var {bases, seams, decorations} = currentData;
  var tabProfilesSelection =  {};
  var tabProfilesSavedItems =  {};
  for (var itemSet of tabItems) {
    let {label, currentItem, itemSetter, savedItems, setSavedItems, data, dataDefaultBase, required} = itemSet;
    var handleOnClickSavedItem = (info) => {
      var copy = JSON.parse(JSON.stringify(info));
      setSavedItems(copy);
    }
    var handleCurrentData = (data) => {
      setCurrentData(data);
    }
    var handleOnClickFunctionCreator = (type) => {
      return (info) => {
        var currentItemCopy = JSON.parse(JSON.stringify(item));
          if (JSON.stringify(currentTopCopy[type]) === JSON.stringify(info) && !required) {
            currentItemCopy[type] = null;
          } else {
            currentItemCopy[type] = JSON.parse(JSON.stringify(info));
          }
          itemSetter(currentItemCopy);
        }
    };
    tabProfilesSelection[label] = {
      list:  [
        {label: 'Type', items: Object.values(data), onClickHandler: handleCurrentData, previewFunction: dataPreview},
        // {label: 'Base', items: Object.values(bases), onClickHandler: handleOnClickFunctionCreator('base'), previewFunction: basePreview},
        // {label: 'Seams', items: seams, onClickHandler: handleOnClickFunctionCreator('seams'), previewFunction: seamPreview},
        // {label: 'Decorations', items: decorations, onClickHandler: handleOnClickFunctionCreator('decoration'), previewFunction: decorationPreview}
      ],
      detailBar: <DetailsBar savedItems={savedItems} setSavedItems={setSavedItems} itemData={data} item={currentItem} setItem={itemSetter} label={label}/>
    };
    // tabProfilesSavedItems['Saved ' + label] = {

    // }

  }
  return (
    <>
     <GenericPanels tabProfiles={tabProfilesSelection}/>
    </>
  )
}
export default GenericCreator;