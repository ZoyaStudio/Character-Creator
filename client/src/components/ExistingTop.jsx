
import React, {useState, useContext} from 'react';
import Gallary from './Gallary.jsx';
import Item from './Item.jsx';
import GarmentContext from './../context.js';

function ExistingTop(props) {
  const {savedTops, setSavedTops} = props;
  const {top, setTop} = useContext(GarmentContext);

  var handleOnClickEvent = (info) => {
    console.log('savedtop click')
    var top = Object.assign({}, info);
    setTop(top);
  }

//onClickEvent={() => {handleOnClickEvent('seams', [seam])}}
const savedTopsArr = savedTops.map(garment =>
  <Item base={garment.base}
  baseFilter={garment.baseFilter}
  decorationFilter={garment.decorationFilter}
  zCounter={500}
  decoration={garment.decoration}
  seamUrls={garment.seams}
  displayClass="preview-top"
  upperBoundary={garment.upperBoundary}
  neckline={garment.neckline}
  lowerBoundary={garment.lowerBoundary}
  onClickEvent={()=>{handleOnClickEvent(garment)}}
  />
  )
  return (
    <div className="creation-panel minor-panel">
      <Gallary label="Saved Tops" children={savedTopsArr}/>

    </div>
  )
}
export default ExistingTop;