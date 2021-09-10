
import React, {useState, useContext} from 'react';
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