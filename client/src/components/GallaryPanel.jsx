
import React, {useState, useContext} from 'react';
import Gallary from './Gallary.jsx';

// {items: [{}], label, previewFunction, onClickHandler}
function GallaryPanel({list}) {
  var GallaryList = list.map((gallaryProfile) => {
    // console.log(gallaryProfile);
    var ItemList = gallaryProfile.items.map(gallaryProfile.previewFunction(gallaryProfile.onClickHandler));
    return (<Gallary key={gallaryProfile.label + 'gallary'} label={gallaryProfile.label} children={ItemList}/>);
  });
  return (
    <div className="creation-panel minor-panel">
      {GallaryList}
    </div>
  );
}
export default GallaryPanel;