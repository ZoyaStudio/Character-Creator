
import React, {useState, useContext} from 'react';
import ColorPicker from './ColorPicker.jsx';
import GarmentContext from './../context.js';

//Details Bar:
  //Allows user to set boundries, neckline and filters for item base and detail
  //Allows user to save items
function DetailsBar({savedIems, setSavedItems, item, setItem, label, data}) {
  const {lowerBoundaryKey, upperBoundaryKey, lowerBoundaryIndex, upperBoundaryIndex, typeKey} = item;
  const upperBoundaries = data[typeKey].upperBoundaries || {};
  const lowerBoundaries = data[typeKey].lowerBoundaries || {};

  const makeCopy = (obj) => JSON.parse(JSON.stringify(obj))

  //adds current item to savedItems array
  const saveCurrentItem = () => {
    var itemsCopy = savedItems.slice();
    itemsCopy.push(JSON.parse(JSON.stringify(item)));
    setSavedItems(itemsCopy)
  }
  //updates item's filter (for the base and decoration so far)
  //inputs:
  //e: event from onChange
  //type: 'hue', 'con', 'sat', 'op', 'sat'
  //part: any key of the 'item' object that has the listed properties above
  var handleFilterChange = (e, type, part) => {
    var copy = JSON.parse(JSON.stringify(item));//Object.assign({}, item);
    copy[part][type] = e.target.value;
    setItem(copy);
  }
  var handleFilterPresetClick = (preset, part, name) => {
    var copy = JSON.parse(JSON.stringify(item));
    copy[part] = preset;
    setItem(copy);
  }
  //updates item's boundaries
  //inputs:
  //e: event from onChange
  //type: string, name of type of boundary
  var handleBoundaryChange = (e, type) => {
    var index = Number(e.target.value);

    var itemCopy = makeCopy(item);
    itemCopy[type] = index;
    // console.log('index', type, index)
    // console.log('lower boundry url', data[typeKey].lowerBoundaries[lowerBoundaryKey]);
    // console.log('upper boundry url', data[typeKey].upperBoundaries[upperBoundaryKey]);
    setItem(itemCopy);
  }


  const radioList = (keys, label, itemKey, itemIndexProperty) => {
    return keys.map((name, index) =>
    <div key={label + name}>
      <label className="" htmlFor={label + name} >{name}</label>
      <input
      type="radio"
      name={label + name}
      onChange={(e) => {
        const itemCopy = makeCopy(item);
        itemCopy[itemKey] = name;
        itemCopy[itemIndexProperty] = 0;
        setItem(itemCopy);
      }
      }
      checked={name === item[itemKey]}
      />
    </div>);
  }
  const boundarySlider = (currentIndex, boundryKey, boundryList, boundryIndexType, label) => {
    return (
      <>
        <label className="range-label" htmlFor={`${label}-range`} >{label}</label>
        <input disabled={boundryKey ? '' : 'disabled'}
        className="range-input"
        type="range"
        name={`${label}-range`}
        value={currentIndex}
        min="0"
        max={boundryKey ? boundryList.length -1: 0}
        step="1" onChange={(e) => {handleBoundaryChange(e, boundryIndexType)}}/>
      </>
    )
  }
  return (
    <div className="details-bar">
      <h4>Details</h4>
       {radioList(Object.keys(upperBoundaries), 'Upper boundry', 'upperBoundaryKey', 'upperBoundryIndex')}
       {boundarySlider(upperBoundaryIndex, upperBoundaryKey, upperBoundaries[upperBoundaryKey], 'upperBoundaryIndex', 'Upper Boundry Height')}
       {radioList(Object.keys(lowerBoundaries), 'Lower Boundry', 'lowerBoundaryKey', 'lowerBoundryIndex')}
       {boundarySlider(lowerBoundaryIndex, lowerBoundaryKey, lowerBoundaries[lowerBoundaryKey], 'lowerBoundaryIndex', 'Lower Boundry Height')}
      <hr/>
      <ColorPicker filter={item.baseFilter} label="Base" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="baseFilter"/>
      <hr/>
      {/* <ColorPicker filter={item.decorationFilter} label="Decoration" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="decorationFilter"/>
      <button className="save-button" onClick={saveCurrentItem}>Save {label}</button> */}
    </div>
  )
}
export default DetailsBar;