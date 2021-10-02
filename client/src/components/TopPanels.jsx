
import React, {useState, useContext} from 'react';
import DetailsBar from './DetailsBar.jsx';
import defaults from './../defaults-samples/defaults.js';
import GallaryPanel from './GallaryPanel.jsx';
import previewFunctions from './../defaults-samples/preview-functions.jsx';
import data from './../defaults-samples/sample-data.js';
function TopPanels({setTop, top}) {
  var {defaultTop, defaultTop2, defaultTop3} = defaults;
  const {bases, seams, decorations} = data;
  var {savedTopPreview, basePreview, seamPreview, decorationPreview} = previewFunctions.topPreviews;
  const [isSavedTop, setIsSavedTops] = useState(false);
  const [savedTops, setSavedTops] = useState([defaultTop, defaultTop2, defaultTop3]);

  var createNewTopClass = "selected";
  var savedTopsClass = "";
  if (isSavedTop) {
    createNewTopClass ="";
    savedTopsClass= "selected";
  }

  const toggleIsSavedTops = () => {
    setIsSavedTops(!isSavedTop);
  }

  var handleOnClickSavedTop = (info) => {
    console.log('savedtop click')
   var newTop = JSON.parse(JSON.stringify(info));
    setTop(newTop);
  }

  var handleOnClickFunctionCreator = (type) => {
    return (info) => {
      var currentTopCopy = JSON.parse(JSON.stringify(top));
      if (JSON.stringify(currentTopCopy[type]) === JSON.stringify(info) && type !== 'base') {
        currentTopCopy[type] = null;
        // console.log('same', type, info.outlineUrl)
      } else {
        currentTopCopy[type] = JSON.parse(JSON.stringify(info));
      }
      setTop(currentTopCopy);
    }
  };
  return (
    <div className="major-panel garment-creator">
       <div className="menu">
        <button className={createNewTopClass} onClick={toggleIsSavedTops}>Create New Top</button>
        <button className={savedTopsClass} onClick={toggleIsSavedTops}>Saved Tops</button>
      </div>
      <DetailsBar savedTops={savedTops} setSavedTops={setSavedTops}/>
      {isSavedTop && <GallaryPanel list={[{label: 'Saved Tops', items: savedTops, onClickHandler: handleOnClickSavedTop, previewFunction: savedTopPreview}]}/>}
      {!isSavedTop &&  <GallaryPanel list={[
        {label: 'Base', items: bases, onClickHandler: handleOnClickFunctionCreator('base'), previewFunction: basePreview},
        {label: 'Seams', items: seams, onClickHandler: handleOnClickFunctionCreator('seams'), previewFunction: seamPreview},
        {label: 'Decorations', items: decorations, onClickHandler: handleOnClickFunctionCreator('decoration'), previewFunction: decorationPreview}
        ]}/>}
    </div>
  )
}
export default TopPanels;