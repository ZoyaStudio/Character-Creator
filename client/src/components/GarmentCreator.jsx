
import React, {useState, useContext} from 'react';
import CreateNewTop from './CreateNewTop.jsx';
import DetailsBar from './DetailsBar.jsx';
import ExistingTop from './ExistingTop.jsx';
import defaults from './../defaults-samples/defaults.js';

//Garment Creator: container element for ExistingTop, DetailsBar and CreateNewTop panels as well as buttons to toggle which panel is visible
//provides saved tops array to ExistingTop component.
function GarmentCreator(props) {
  var {defaultTop, defaultTop2, defaultTop3} = defaults;
  const [isSavedTop, setIsSavedTops] = useState(false);
  const [savedTops, setSavedTops] = useState([defaultTop, defaultTop2, defaultTop3])
  var createNewTopClass = "selected";
  var savedTopsClass = "";
  if (isSavedTop) {
    createNewTopClass ="";
    savedTopsClass= "selected";
  }
  const toggleIsSavedTops = () => {
    setIsSavedTops(!isSavedTop);
  }
  return (
    <div className="major-panel garment-creator">
       <div className="menu">
        <button className={createNewTopClass} onClick={toggleIsSavedTops}>Create New Top</button>
        <button className={savedTopsClass} onClick={toggleIsSavedTops}>Saved Tops</button>
      </div>
      <DetailsBar savedTops={savedTops} setSavedTops={setSavedTops}/>
      {isSavedTop && <ExistingTop savedTops={savedTops} setSavedTops={setSavedTops}/>}
      {!isSavedTop &&  <CreateNewTop savedTops={savedTops} setSavedTops={setSavedTops}/>}

    </div>
  )
}
export default GarmentCreator;