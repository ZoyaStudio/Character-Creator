
import React, {useState, useContext} from 'react';
import ColorPicker from './ColorPicker.jsx';
import GarmentContext from './../context.js';

//Details Bar:
  //Allows user to set boundries, neckline and filters for item base and detail
  //Allows user to save items
function DetailsBar({savedIems, setSavedItems, itemData, item, setItem, label}) {
  const {lowerBoundaries, upperBoundaries} = itemData;
  const lowerBoundaryNames = Object.keys(lowerBoundaries);
  const upperBoundaryNames = Object.keys(upperBoundaries);
  const [lowerBoundaryType, setlowerBoundaryType] = useState(lowerBoundaryNames[0]);
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
    console.log(item.baseFilter);
    var copy = JSON.parse(JSON.stringify(item));//Object.assign({}, item);
    copy[part][type] = e.target.value;
    setItem(copy);
  }
  var handleFilterPresetClick = (preset, part, name) => {
    var copy = JSON.parse(JSON.stringify(item));
    copy[part] = preset;
    setItem(copy);
  }
  const boundries = {
    lowerBoundary: lowerBoundaries[lowerBoundaryType]
  }
  //updates item's boundaries
  //inputs:
  //e: event from onChange
  //type: string, name of type of boundary
  var handleBoundaryChange = (e, type) => {
    var index = e.target.value;
    console.log('filter change', type, lowerBoundaries[lowerBoundaryType][index], index);
    if (type === 'lowerBoundary') {
      setLbIndex(index)
    }
    var copy = Object.assign({}, item);
    copy[type] = lowerBoundaries[lowerBoundaryType][index];
    setItem(copy);
  }

  const lowerBoundaryTypeInputs = lowerBoundaryNames.map((name, index) =>
    <div key={"ub" + index}>
      <label className="" htmlFor={"ub-radio" + index} >{name}</label>
      <input
      type="radio"
      name={"ub-radio" + index}
      step="1"
      onChange={(e) => {setlowerBoundaryType(name)}}
      checked={name === lowerBoundaryType}
      />
    </div>)
  // console.log(lowerBoundaries, lowerBoundaries[lowerBoundaryType], 'type:', lowerBoundaryType, lowerBoundaryNames[0] )
  return (
    <div className="details-bar">
      <h4>Details</h4>
      {lowerBoundaryTypeInputs}
      <label className="range-label" htmlFor="lb-range">Lower Boundary</label>
     <input className="range-input" type="range" name="lb-range" value={lbIndex} min="0" max={lowerBoundaries[lowerBoundaryType].length - 1} step="1" onChange={(e) => {handleBoundaryChange(e, 'lowerBoundary')}}/>
      <hr/>
      <ColorPicker filter={item.baseFilter} label="Base" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="baseFilter"/>
      <hr/>
      <ColorPicker filter={item.decorationFilter} label="Decoration" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="decorationFilter"/>
      <button className="save-button" onClick={saveCurrentItem}>Save {label}</button>
    </div>
  )
}
export default DetailsBar;