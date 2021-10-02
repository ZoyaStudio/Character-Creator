
import React, {useState, useContext} from 'react';

//Filter: creates a set of range inputs to alter the hue, saturation, opacity, britness and constrast values of the current top
//inputs:
  //filter: object with hue/sat/brit/con/op properties; the values at these properties should be the current filter values of the top
  //label: type: string. label for each set of sliders
  //handleFilterChange, event handler to update state with values from input
  //part: type: string. Key corresponding to filter object on garment
    //ex filter key and value:    "baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100}"
function Filter(props) {
  const {filter, label, handleFilterChange, part} = props;
  return (
      <React.Fragment>
        <h4>Colors - {label}</h4>
        <label htmlFor="hue" >Hue</label>
        <input type="range" name="hue" min={0} max={360} step=".1" value={filter.hue} onChange={(e) => {handleFilterChange(e, 'hue', part)}}/>

        <label htmlFor="sat">Staturation</label>
        <input type="range" name="sat" min={0} max={200} step=".1" value={filter.sat} onChange={(e) => {handleFilterChange(e, 'sat', part)}}/>

        <label htmlFor="brit">Brightness</label>
        <input type="range" name="brit" min={.5} max={3.5} step=".05" value={filter.brit} onChange={(e) => {handleFilterChange(e, 'brit', part)}}/>

        <label htmlFor="con">Contrast</label>
        <input type="range" name="con" min={0} max={200} step=".1" value={filter.con} onChange={(e) => {handleFilterChange(e, 'con', part)}}/>

        <label htmlFor="op">Opacity</label>
        <input type="range" name="op" min={0} max={100} step=".1" value={filter.op} onChange={(e) => {handleFilterChange(e, 'op', part)}}/>
      </React.Fragment>
  )
}
export default Filter;