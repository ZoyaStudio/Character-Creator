
import React, {useState, useContext} from 'react';
import GallaryPanel from './../GallaryPanel.jsx';
import previewFunctions from './../../defaults-samples/preview-functions.jsx';
import BodySideBar from './BodySideBar.jsx';
import SavedBodiesSideBar from './SavedBodiesSideBar.jsx';
import defaults from './../../defaults-samples/defaults.js';
import data from './../../defaults-samples/sample-data.js';
var {bodies} = data;
var {facePreviewAtType} = previewFunctions.bodyPreviews;

// {tabName: {list, detailBar}...}


function Creator ({tabProfiles}) {

  var [currentTab, setCurrentTab] = useState(Object.keys(tabProfiles)[0]);
  var buttons = Object.keys(tabProfiles).map((tabName) => (
    <button className={currentTab === tabName ? 'selected': ''}
    onClick = {() => {
      setCurrentTab(tabName)
    }}>{tabName}</button>
  ));
  return (
    <div className="major-panel garment-creator">
       <div className="menu">
        {buttons}
      </div>
      {tabProfiles[currentTab].detailBar}
     <GallaryPanel list={tabProfiles[currentTab].list}/>
    </div>
  )
}
function CreateBody ({setBody, body}) {
  const [savedBodies, setSavedBodies] = [];
  var handleOnClickFunctionCreator = (type) => {
    return (info) => {
      var currentBodyCopy = JSON.parse(JSON.stringify(body));
        currentBodyCopy[type] = JSON.parse(JSON.stringify(info));
      setBody(currentBodyCopy);
    }
  };

  var {heads, ears, eyebrows, eyes, noses, mouths, frontArms, backArms, torsoLegs} = bodies;
  var tabProfiles = {
    "Body": {
      list:  [
        {label: 'Eyes', items: Object.values(heads), onClickHandler: handleOnClickFunctionCreator('head'), previewFunction: facePreviewAtType('head', body.filterSet)},
        {label: 'Eyebrows', items: Object.values(heads), onClickHandler: handleOnClickFunctionCreator('head'), previewFunction: facePreviewAtType('head', body.filterSet)},
        {label: 'Ears', items: Object.values(heads), onClickHandler: handleOnClickFunctionCreator('head'), previewFunction: facePreviewAtType('head', body.filterSet)},
        {label: 'Nose', items: Object.values(heads), onClickHandler: handleOnClickFunctionCreator('head'), previewFunction: facePreviewAtType('head', body.filterSet)},
        {label: 'Mouth', items: Object.values(heads), onClickHandler: handleOnClickFunctionCreator('head'), previewFunction: facePreviewAtType('head', body.filterSet)},
        {label: 'Detail', items: Object.values(heads), onClickHandler: handleOnClickFunctionCreator('head'), previewFunction: facePreviewAtType('head', body.filterSet)},
        //wings
        //tails
      ],
      detailBar: <BodySideBar body={body} setBody={setBody} setSavedBodies={setSavedBodies}/>
    },
    'Saved Bodies': {
      list:  [
        //TO DO: set up for previewing full body
        {label: 'Saved Bodies', items: Object.values(heads), onClickHandler: handleOnClickFunctionCreator('head'), previewFunction: facePreviewAtType('head', body.filterSet)},
      ],
      detailBar: <SavedBodiesSideBar body={body} setBody={setBody}/>
    }
  }

  return (
    <>
   <Creator tabProfiles={tabProfiles}/>
    </>
  )
}
export default CreateBody;