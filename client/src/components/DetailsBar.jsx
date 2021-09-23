
import React, {useState, useContext} from 'react';
import Filters from './Filters.jsx';
import GarmentContext from './../context.js';

//Details Bar:
  //Allows user to set boundries, neckline and filters for top base and detail
  //Allows user to save tops
function DetailsBar(props) {
  const {savedTops, setSavedTops} = props;
  const {top, setTop} = useContext(GarmentContext);
  const boundries = {
    upperBoundary: ['', 'a-cut-ub', 'swoop-tube-top-ub', 'shallow-v-ub' ],
    neckline: ['', 'diamond-neck', 'deep-thin-neck'],
    lowerBoundary: ['', 'crop-top ', 'natural-waist']
  }
  //adds current top to savedTops array
  const saveCurrentTop = () => {
    var topsCopy = savedTops.slice();
    topsCopy.push(top);
    setSavedTops(topsCopy)
  }
  //updates top's filter (for the base and decoration so far)
    //inputs:
    //e: event from onChange
    //type: 'hue', 'con', 'sat', 'op', 'sat'
    //part: any key of the 'top' object that has the listed properties above
  var handleFilterChange = (e, type, part) => {
    var copy = Object.assign({}, top);
    copy[part][type] = e.target.value;
    setTop(copy);
  }

  //updates top's boundaries
  //inputs:
    //e: event from onChange
    //type: string, name of type of boundary
  var handleBoundaryChange = (e, type) => {
    var index = e.target.value;
    var copy = Object.assign({}, top);
    copy[type] = boundries[type][index];
    setTop(copy);
  }
  const {upperBoundary, neckline, lowerBoundary} = boundries;
  return (
    <div className="details-bar">
      <h4>Details</h4>
      <label htmlFor="neckline">Neckline</label>
      <input type="range" name="neckline" min="0" max={neckline.length -1} step="1" onChange={(e) => {handleBoundaryChange(e, 'neckline')}}/>
      <label htmlFor="upper" >Upper Boundary</label>
      <input type="range" name="upper" min="0" max={neckline.length -1} step="1" onChange={(e) => {handleBoundaryChange(e, 'upperBoundary')}}/>
      <label htmlFor="lower">Lower Boundary</label>
      <input type="range" name="lower" min="0" max={neckline.length -1} step="1" onChange={(e) => {handleBoundaryChange(e, 'lowerBoundary')}}/>
      <hr/>
      <Filters filter={top.baseFilter} label="Base" handleFilterChange={handleFilterChange} part="baseFilter"/>
      <hr/>
      <Filters filter={top.decorationFilter} label="Decoration" handleFilterChange={handleFilterChange} part="decorationFilter"/>
      <button className="save-button" onClick={saveCurrentTop}>Save Top</button>
    </div>
  )
}
export default DetailsBar;