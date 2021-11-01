
import React, {useState, useContext} from 'react';
import Filters from './Filters.jsx';
import GarmentContext from './../context.js';

//Details Bar:
  //Allows user to set boundries, neckline and filters for top base and detail
  //Allows user to save tops
function DetailsBar(props) {
  const {savedTops, setSavedTops, topData} = props;
  const {lowerBoundaries} = topData;
  const {top, setTop} = useContext(GarmentContext);
  const lowerBoundaryNames = Object.keys(lowerBoundaries);
  const [lowerBoundaryType, setlowerBoundaryType] = useState(lowerBoundaryNames[0]);
  const [lbIndex, setLbIndex] = useState(0);

  //adds current top to savedTops array
  const saveCurrentTop = () => {
    var topsCopy = savedTops.slice();
    topsCopy.push(JSON.parse(JSON.stringify(top)));
    setSavedTops(topsCopy)
  }
  //updates top's filter (for the base and decoration so far)
  //inputs:
  //e: event from onChange
  //type: 'hue', 'con', 'sat', 'op', 'sat'
  //part: any key of the 'top' object that has the listed properties above
  var handleFilterChange = (e, type, part) => {
    console.log(top.baseFilter);
    var copy = JSON.parse(JSON.stringify(top));//Object.assign({}, top);
    copy[part][type] = e.target.value;
    setTop(copy);
  }
  const boundries = {
    lowerBoundary: lowerBoundaries[lowerBoundaryType]
  }
  //updates top's boundaries
  //inputs:
  //e: event from onChange
  //type: string, name of type of boundary
  var handleBoundaryChange = (e, type) => {
    var index = e.target.value;
    console.log('filter change', type, lowerBoundaries[lowerBoundaryType][index], index);
    if (type === 'lowerBoundary') {
      setLbIndex(index)
    }
    var copy = Object.assign({}, top);
    copy[type] = lowerBoundaries[lowerBoundaryType][index];
    setTop(copy);
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
      <Filters filter={top.baseFilter} label="Base" handleFilterChange={handleFilterChange} part="baseFilter"/>
      <hr/>
      <Filters filter={top.decorationFilter} label="Decoration" handleFilterChange={handleFilterChange} part="decorationFilter"/>
      <button className="save-button" onClick={saveCurrentTop}>Save Top</button>
    </div>
  )
}
export default DetailsBar;