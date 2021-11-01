
import React, {useState, useContext} from 'react';

const makeFilterStyle = ({hue, sat, brit, con, op}) => {
  if (hue === undefined || sat === undefined || brit === undefined || con === undefined ||op === undefined) {
    return "brightness(" + 3.5 + ") hue-rotate(" + 0 + 'deg) saturate(' + 1 + '%) contrast(' + 144.5 + '%) opacity(' + 100 + '%)';
  }
  return "brightness(" + brit + ") hue-rotate(" + hue + 'deg) saturate(' + sat + '%) contrast(' + con + '%) opacity(' + op + '%)';
}
function ColorPicker(props) {
  const {filter, label, handleFilterChange, part} = props;
  return (
      <div className="color-picker">
        <h4 className="color-picker-label">Colors - {label}</h4>
        <img src="./color-sample.svg" className="color-preview" style={{filter: makeFilterStyle(filter)}}/>

        <label className="range-label" htmlFor="hue" >Hue</label>
        <input className="range-input" type="range" name="hue" min={0} max={360} step=".1" value={filter.hue} onChange={(e) => {handleFilterChange(e, 'hue', part)}}/>

        <label className="range-label" htmlFor="sat">Staturation</label>
        <input className="range-input" type="range" name="sat" min={0} max={200} step=".1" value={filter.sat} onChange={(e) => {handleFilterChange(e, 'sat', part)}}/>

        <label className="range-label" htmlFor="brit">Brightness</label>
        <input className="range-input" type="range" name="brit" min={.5} max={3.5} step=".05" value={filter.brit} onChange={(e) => {handleFilterChange(e, 'brit', part)}}/>

        <label className="range-label" htmlFor="con">Contrast</label>
        <input className="range-input" type="range" name="con" min={0} max={200} step=".1" value={filter.con} onChange={(e) => {handleFilterChange(e, 'con', part)}}/>

        <label className="range-label" htmlFor="op">Opacity</label>
        <input className="range-input" type="range" name="op" min={0} max={100} step=".1" value={filter.op} onChange={(e) => {handleFilterChange(e, 'op', part)}}/>
      </div>
  )
}
export default ColorPicker;