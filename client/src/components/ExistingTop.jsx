
import React, {useState, useContext} from 'react';
import Gallary from './Gallary.jsx';
import Item from './Item.jsx';
import GarmentContext from './../context.js';

//Saved tops: Takes an array of saved tops and suppllies a Gallary component with Item components generated from array items
function ExistingTop(props) {
  const {savedTops, setSavedTops} = props;
  const {top, setTop} = useContext(GarmentContext);

  //sets current top to top previewed in item card
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