
import React, {useState, useContext} from 'react';
import Item from './Item.jsx';
import GarmentContext from './../context.js';

//Portrait: image of character user has customized
//props: none
//context: garment object with key for 'top' object
function Portrait(props) {
  const garment = useContext(GarmentContext).top;
  return (
    <div className="portrait">

      <img src="./base-flattened.png" className="portrait-img"/>
      <Item base={garment.base}
        baseFilter={garment.baseFilter}
        decorationFilter={garment.decorationFilter}
        zCounter={500}
        decoration={garment.decoration}
        seamUrls={garment.seams}
        displayClass="portrait-img"
        upperBoundary={garment.upperBoundary}
        neckline={garment.neckline}
        lowerBoundary={garment.lowerBoundary}/>
      <img src="./collarOut.png" className="portrait-img" style={{zIndex: 400 }}/>
      <img src="./collarGrad.png" className="portrait-img" style={{zIndex: 400 }}/>
      <img src="./collarShad.png" className="portrait-img" style={{zIndex: 400 }}/>
    </div>
  )
}
export default Portrait;