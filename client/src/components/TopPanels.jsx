
import React, {useState, useContext} from 'react';
import GarmentContext from './../context.js';
import DetailsBar from './DetailsBar.jsx';
import defaults from './../defaults-samples/defaults.js';
import GallaryPanel from './GallaryPanel.jsx';
import previewFunctions from './../defaults-samples/preview-functions.jsx';
import data from './../defaults-samples/sample-data.js';
function TopPanels() {
  const {top,  setTop, sleeves, setSleeves} = useContext(GarmentContext);
  var {defaultTop, defaultSleeves} = defaults;
  var {savedTopPreview, basePreview, seamPreview, decorationPreview, topDataPreview} = previewFunctions.topPreviews;
  const [currentData, setCurrentData] = useState(data.tops.skinTight);
  const [currentTab, setCurrentTab] = useState('tops');
  const [savedTops, setSavedTops] = useState([defaultTop]);

  // var createNewTopClass = "selected";
  // var savedTopsClass = "";
  // if (isSavedTop) {
  //   createNewTopClass ="";
  //   savedTopsClass= "selected";
  // }

  const toggleTab = (tabName) => {
    setCurrentTab(tabName);
    var firstTypeKeyName = Object.keys(data[tabName])[0];
    setCurrentData(data[tabName][firstTypeKeyName]);
  }

  var handleOnClickSavedTop = (info) => {
    var newTop = JSON.parse(JSON.stringify(info));
    setTop(newTop);
  }
  var handleCurrentData = (data) => {
    setCurrentData(data);
  }
  var handleOnClickFunctionCreator = (category, type) => {
    return (info) => {
      if (category === 'tops') {
        var currentTopCopy = JSON.parse(JSON.stringify(top));
        if (JSON.stringify(currentTopCopy[type]) === JSON.stringify(info) && type !== 'base') {
          currentTopCopy[type] = null;
        } else {
          currentTopCopy[type] = JSON.parse(JSON.stringify(info));
        }
        setTop(currentTopCopy);
      } else if (category === 'sleeves') {
        var currentSleeveCopy = JSON.parse(JSON.stringify(sleeves));
        if (JSON.stringify(currentSleeveCopy[type]) === JSON.stringify(info)) {
          currentSleeveCopy[type] = null;
        } else {
          currentSleeveCopy[type] = JSON.parse(JSON.stringify(info));
        }
        setSleeves(currentSleeveCopy);
      }
    }
  };

  var {bases, seams, decorations} = currentData;
  return (
    <div className="major-panel garment-creator">
       <div className="menu">
        <button className={''} onClick={() => {toggleTab('tops')}}>Bodice</button>
        <button className={''} onClick={() => {toggleTab('sleeves')}}>Sleeves</button>
        <button className={''} onClick={() => {toggleTab('collar')}}>Collar</button>
        <button className={''} onClick={() => {toggleTab('saved tops')}}>Saved Tops</button>
      </div>
      {currentTab === 'tops' && <DetailsBar savedItems={savedTops} setSavedItems={setSavedTops} itemData={currentData} item={top} setItem={setTop} label={'Top'}/>}
      {currentTab === 'sleeves' && <DetailsBar savedItems={savedTops} setSavedItems={setSavedTops} itemData={currentData} item={sleeves} setItem={setSleeves} label={'Sleeve'}/>}
      {currentTab === 'saved tops' && <GallaryPanel list={[{label: 'Saved Tops', items: savedTops, onClickHandler: handleOnClickSavedTop, previewFunction: savedTopPreview}]}/>}
      {currentTab === 'tops' &&  <GallaryPanel list={[
         {label: 'Type', items: Object.values(data.tops), onClickHandler: handleCurrentData, previewFunction: topDataPreview},
        {label: 'Base', items: Object.values(bases), onClickHandler: handleOnClickFunctionCreator('tops', 'base'), previewFunction: basePreview},
        {label: 'Seams', items: seams, onClickHandler: handleOnClickFunctionCreator('tops', 'seams'), previewFunction: seamPreview},
        {label: 'Decorations', items: decorations, onClickHandler: handleOnClickFunctionCreator('tops', 'decoration'), previewFunction: decorationPreview}
        ]}/>}
         {currentTab === 'sleeves' &&  <GallaryPanel list={[
            {label: 'Type', items: Object.values(data.sleeves), onClickHandler: handleCurrentData, previewFunction: topDataPreview},
           {label: 'Base', items: Object.values(bases), onClickHandler: handleOnClickFunctionCreator('sleeves', 'base'), previewFunction: basePreview},
        //  {label: 'Type', items: Object.values(data.tops), onClickHandler: handleCurrentTopData, previewFunction: topDataPreview},
        // {label: 'Base', items: Object.values(bases), onClickHandler: handleOnClickFunctionCreator('base'), previewFunction: basePreview},
        // {label: 'Seams', items: seams, onClickHandler: handleOnClickFunctionCreator('seams'), previewFunction: seamPreview},
        // {label: 'Decorations', items: decorations, onClickHandler: handleOnClickFunctionCreator('decoration'), previewFunction: decorationPreview}
        ]}/>}
    </div>
  )
}
export default TopPanels;