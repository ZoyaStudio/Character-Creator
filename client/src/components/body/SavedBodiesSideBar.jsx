
import React, {useState, useContext} from 'react';

function SavedBodiesSideBar({body, setBody}) {


  return (
    <div className="details-bar">
      <h4>When Selecting New Body...</h4>
      <label htmlFor="keep-skin" className="checkbox-label">Keep Skin </label>
      <input type="checkbox" className="checkbox-input" name="keep-skin"></input>
      <br></br>
      <label htmlFor="keep-face" className="checkbox-label">Keep Face </label>
      <input type="checkbox" className="checkbox-input" name="keep-face"></input>
      <br></br>
      <label htmlFor="keep-hair" className="checkbox-label" >Keep Hair </label>
      <input type="checkbox" className="checkbox-input" name="keep-hair"></input>
      <h4>Filter By...</h4>
    </div>
  )
}
export default SavedBodiesSideBar;