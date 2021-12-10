import React, {useState, useContext} from 'react';
import Gallary from './Gallary.jsx';

function GenericPanels ({tabProfiles}) {
  var [currentTab, setCurrentTab] = useState(Object.keys(tabProfiles)[0]);
  var buttons = Object.keys(tabProfiles).map((tabName) => (
    <button key={tabName} className={currentTab === tabName ? 'selected': ''}
    onClick = {() => {
      setCurrentTab(tabName)
    }}>{tabName}</button>
  ));
  return (
    <div className="major-panel garment-creator">
       <div className="section-menu menu">
        {buttons}
      </div>
      {tabProfiles[currentTab].detailBar}
    <div className="creation-panel minor-panel">
      {tabProfiles[currentTab].list.map((gallaryProfile) => (<Gallary key={gallaryProfile.label + 'gallary'} label={gallaryProfile.label} children={gallaryProfile.items}/>))}
    </div>
    </div>
  )
}

export default GenericPanels;