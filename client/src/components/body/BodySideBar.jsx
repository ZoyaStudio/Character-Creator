
import React, {useState, useContext} from 'react';

function BodySideBar({body, setBody, setSavedBodies}) {


  return (
    <div className="details-bar">
      <h4>Skin</h4>
      <label className="color-picker-label" htmlFor="light">Skin Color - Light Shade</label>
      color picker goes here
      <label className="color-picker-label" htmlFor="dark">Skin Color - Dark Shade</label>
      color picker goes here
      <label className="color-picker-label" htmlFor="blush">Skin Color - Blush</label>
      color picker goes here
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