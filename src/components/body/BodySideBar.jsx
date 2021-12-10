
import React, {useState, useContext} from 'react';
import ColorPicker from './../ColorPicker.jsx';
// defaultBody: {
//   filterSet: {
//     blush: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
//     lightShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
//     darkShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100}
//   },
function BodySideBar({body, setBody, setSavedBodies}) {
  var {lightShade, darkShade, blush} = body.filterSet;
  var handleFilterChange = (e, type, part) => {
    var copy = JSON.parse(JSON.stringify(body));
    copy['filterSet'][part][type] = e.target.value;
    setBody(copy);
  }
  var handleFilterPresetClick = (preset, part, name) => {
    var copy = JSON.parse(JSON.stringify(body));
    copy['filterSet'][part] = preset;
    setBody(copy);
  }
  return (
    <div className="details-bar">
      <h4>Skin</h4>
      <ColorPicker filter={lightShade} label="Light Shade" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="lightShade"/>
      <ColorPicker filter={darkShade} label="Dark Shade" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="darkShade"/>
      <ColorPicker filter={blush} label="Blush" handleFilterChange={handleFilterChange} handleFilterPresetClick={handleFilterPresetClick} part="blush"/>
      <label className="color-picker-label" htmlFor="skin-detail">Skin Color - Detail</label>
      color picker goes here
      <h4>Eyes</h4>
      <label className="color-picker-label" htmlFor="iris">Eye Color - Iris</label>
      color picker goes here
      <label className="color-picker-label" htmlFor="pupil">Eye Color - Pupin</label>
      color picker goes here
      <label className="color-picker-label" htmlFor="sclera">Eye Color - Sclera</label>
      color picker goes here
      <br></br>
      <label className="color-picker-label" className="checkbox-label" htmlFor="eye-style-normal">Eye Style - Normal </label>
      <input type="radio" className="checkbox-input" name="eye-style-normal"></input>
      <br></br>
      <label className="color-picker-label" className="checkbox-label" htmlFor="eye-style-glazed">Eye Style - Glazed </label>
      <input type="radio" className="checkbox-input" name="eye-style-glazed"></input>
      <br></br>
      <label className="color-picker-label" className="checkbox-label" htmlFor="eye-style-intense">Eye Style - Intense </label>
      <input type="radio" className="checkbox-input" name="eye-style-intense"></input>
      <br></br>
      <button className="save-button" onClick={null}>Save Body</button>
    </div>
  )
}
export default BodySideBar;