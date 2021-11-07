
import React, {useState, useContext} from 'react';
import ColorPicker from './ColorPicker.jsx';
import GarmentContext from './../context.js';

//Details Bar:
  //Allows user to set boundries, neckline and filters for item base and detail
  //Allows user to save items
function DetailsBar({savedIems, setSavedItems, itemData, item, setItem, label}) {
  let {lowerBoundaries, upperBoundaries} = itemData;
  lowerBoundaries = lowerBoundaries || {};
  upperBoundaries = upperBoundaries || {};
  const lowerBoundaryNames = Object.keys(lowerBoundaries);
  const upperBoundaryNames = Object.keys(upperBoundaries);
  const [lowerBoundaryType, setlowerBoundaryType] = useState(lowerBoundaryNames[0]);
  const [upperBoundaryType, setUpperBoundaryType] = useState(upperBoundaryNames[0]);
  const [ubIndex, setUbIndex] = useState(0);
  const [lbIndex, setLbIndex] = useState(0);

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
    var index = e.target.value;
    var copy = Object.assign({}, item);
    if (type === 'lowerBoundary') {
      setLbIndex(index)
      copy[type] = lowerBoundaries[lowerBoundaryType][index];
    } else if (type === 'upperBoundary') {
      setUbIndex(index)
      // console.log( copy[type] = upperBoundaries[upperBoundaryType][index])
      copy[type] = upperBoundaries[upperBoundaryType][index];
    }
    setItem(copy);
  }

  const lowerBoundaryTypeInputs = lowerBoundaryNames.map((name, index) =>
    <div key={"lb" + index}>
      <label className="" htmlFor={"lb-radio" + index} >{name}</label>
      <input
      type="radio"
      name={"lb-radio" + index}
      step="1"
      onChange={(e) => {setlowerBoundaryType(name)}}
      checked={name === lowerBoundaryType}
      />
    </div>);
  const upperBoundaryTypeInputs = upperBoundaryNames.map((name, index) =>
  <div key={"ub" + index}>
    <label className="" htmlFor={"ub-radio" + index} >{name}</label>
    <input
    type="radio"
    name={"ub-radio" + index}
    step="1"
    onChange={(e) => {setUpperBoundaryType(name)}}
    checked={name === upperBoundaryType}
    />
  </div>);
  var hasLowerBoundaries = Boolean(Object.keys(lowerBoundaries).length);
  var hasUpperBoundaries = Boolean(Object.keys(upperBoundaries).length);
  return (
    <div className="details-bar">
      <h4>Details</h4>
     {upperBoundaryTypeInputs}
        <label className="range-label" htmlFor="ub-range" >Upper Boundary</label>
        <input disabled={hasUpperBoundaries ? '' : 'disabled'} className="range-input" type="range" name="ub-range" value={ubIndex} min="0" max={hasLowerBoundaries ? upperBoundaries[upperBoundaryType].length - 1 : 0} step="1" onChange={(e) => {handleBoundaryChange(e, 'upperBoundary')}}/>
      {lowerBoundaryTypeInputs}
        <label className="range-label" htmlFor="lb-range">Lower Boundary</label>
        <input disabled={hasLowerBoundaries ? '' : 'disabled'} className="range-input" type="range" name="lb-range" value={lbIndex} min="0" max={hasLowerBoundaries ? lowerBoundaries[lowerBoundaryType].length - 1: 0} step="1" onChange={(e) => {handleBoundaryChange(e, 'lowerBoundary')}}/>

      <hr/>
      <ColorPicker filter={item.baseFilter} label="Base" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="baseFilter"/>
      <hr/>
      <ColorPicker filter={item.decorationFilter} label="Decoration" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="decorationFilter"/>
      <button className="save-button" onClick={saveCurrentItem}>Save {label}</button>
    </div>
  )
}
export default DetailsBar;