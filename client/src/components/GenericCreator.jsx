
import React, {useState, useContext} from 'react';
import GenericPanels from './GenericPanels.jsx';
import previewFunctions from './../defaults-samples/preview-functions.jsx';
import DetailsBar from './DetailsBar.jsx';
import defaults from './../defaults-samples/defaults.js';
import data from './../defaults-samples/sample-data.js';
import Item from './Item.jsx';

const makeCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}
const itemPreview = (handleOnClickEvent, previewCorrection, data, substitutes = {}) => {
  // console.log('subs', substitutes);
  const firstKeyOf = (obj) => {
    return Object.keys(obj)[0];
  }
  const firstKeyOfData = firstKeyOf(data);
  console.log(firstKeyOfData, substitutes)
  // console.log('item preview', data[firstKeyOfData].upperBoundaries[firstKeyOf(data[firstKeyOfData].upperBoundaries)], 'subs', substitutes)
  const itemProfile = {
    typeKey: substitutes.typeKey || firstKeyOfData,
    upperBoundaryKey: data[firstKeyOfData].upperBoundaries ? firstKeyOf(data[firstKeyOfData].upperBoundaries) : '',
    upperBoundaryIndex: data[firstKeyOfData].previewSettings.defaultUBIndex || 0,
    lowerBoundaryKey: data[firstKeyOfData].lowerBoundaries ? firstKeyOf(data[firstKeyOfData].lowerBoundaries) : '',
    lowerBoundaryIndex: data[firstKeyOfData].previewSettings.defaultLBIndex || 0,
    necklineKey: null,
    neckLineIndex: 0,
    baseKey: substitutes.baseKey || firstKeyOf(data[firstKeyOfData].bases),
    baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    seamKey: data[firstKeyOfData].seams.length ? {name: substitutes.seamKeyName || firstKeyOf(data[firstKeyOfData].seams), type: 'line'}: null,
    decoration:  substitutes.decoration || {hasBoundaries: false},
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
  }
  // console.log('Test', itemProfile);
  return (
    <div className="preview-container" key={substitutes}>
      <div className={previewCorrection}>
        <Item
        itemProfile={itemProfile}
        zCounter={500}
        displayClass={"preview-inner"}
        onClickEvent={handleOnClickEvent}
        typeData={data}
        key={JSON.stringify(substitutes)}
        />
      </div>
      <div className="label-box">{substitutes.typeKey || substitutes.baseKey || substitutes.seamKeyName || substitutes.decoration}</div>
    </div>
  )
}
// {typeKey: typeKey, baseKey: null, seamKeyName: null, decoration: null}
function GenericCreator ({tabItems}) {
  const [currentTypeKey, setCurrentTypeKey] = useState(tabItems[0].item.typeKey);
  var tabProfilesSelection =  {};
  var tabProfilesSavedItems =  {};

  for (var itemSet of tabItems) {
    let {label, item, itemSetter, savedItems, setSavedItems, data, dataDefaultBase, required, previewClass} = itemSet;

    var {bases, seams, decorations} = data;
    var handleOnClickSavedItem = (info) => {
      var copy = JSON.parse(JSON.stringify(info));
      setSavedItems(copy);
    }
    var handleOnClickFunctionCreator = (type) => {
      return (info) => {
        const infoCopy = makeCopy(info);
        const itemCopy = makeCopy(item);
        if (type === 'all') {
          itemSetter(infoCopy);
        }
        // else if ((!required || type !== 'baseKey') && JSON.stringify(item[type]) === JSON.stringify(info[type])){
        //   itemCopy[type] = null;
        //   if (type === 'baseKey') {
        //     itemCopy.seamKey = null;
        //     itemCopy.lowerBoundaryKey = null;
        //     itemCopy.upperBoundaryKey = null;
        //   }
        //   itemSetter(itemCopy);
        // }
         else {
          itemCopy[type] = info[type];
          itemSetter(itemCopy);
        }
        // var currentItemNameCopy = JSON.parse(JSON.stringify(item));
        //   if (true/*JSON.stringify(currentTopCopy[type]) === JSON.stringify(info) && !required*/) {
        //     currentItemNameCopy[type] = null;
        //   } else {
        //     currentItemNameCopy[type] = JSON.parse(JSON.stringify(info));
        //   }
        //   itemSetter(currentItemNameCopy);
        }
    };
    const sample = [];
    tabProfilesSelection[label] = {
      list:  [
        {label: 'Type', items: Object.keys(data).map(typeKey => itemPreview(handleOnClickFunctionCreator('all'), previewClass, data, {typeKey: typeKey, baseKey: null, seamKeyName: null, decoration: null}))},
        {label: 'Base', items: Object.keys(data[item.typeKey].bases).map(baseKey => itemPreview(handleOnClickFunctionCreator('baseKey'), previewClass, data, {typeKey: null, baseKey: baseKey, seamKeyName: null, decoration: null}))},
        // {label: 'Seams', items: Object.keys(data[item.typeKey].seams).map(seamKeyName => itemPreview(handleOnClickFunctionCreator('seamKey'), previewClass, data, {typeKey: null, baseKey: null, seamKeyName: seamKeyName, decoration: null}))},
        // {label: 'Decorations', items: decorations, onClickHandler: handleOnClickFunctionCreator('decoration'), previewFunction: decorationPreview}
      ],
      detailBar: <DetailsBar
        savedItems={savedItems}
        setSavedItems={setSavedItems}
        item={item}
        setItem={itemSetter}
        specificItemData={data[item.typeKey]}
        label={label}
        data={data}
        />
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