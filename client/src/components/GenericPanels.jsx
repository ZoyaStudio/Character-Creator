import React, {useState, useContext} from 'react';
import GallaryPanel from './GallaryPanel.jsx';

function GenericPanels ({tabProfiles}) {
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
export default GenericPanels;