
import React, {useState, useContext} from 'react';
import Gallary from './Gallary.jsx';
import Item from './Item.jsx';
import GarmentContext from './../context.js';
import data from './../defaults-samples/sample-data.js';
import cloneDeep from 'lodash.clonedeep';

//Top Creation Panel:
  //Set of three Gallaries from which user selects pieces for top
  //Provides child components with Item components for base, seams and details
  //Provides on-click handler to top preview cards
//TO DO: Refactor to allow mutiple seams and details on the same top

function CreateNewTop(props) {
  const {savedTops, setSavedTops} = props;
  const {top, setTop} = useContext(GarmentContext);

  var handleOnClickEvent = (type, info) => {
    var copy = Object.assign({}, top);

  // console.log('which piece:', info);
    // console.log(JSON.stringify(copy[type]) === JSON.stringify(info), )
    if (JSON.stringify(copy[type]) === JSON.stringify(info) && type !== 'base') {
      copy[type] = null;
      console.log('same', type, info.outlineUrl)
    } else {
        copy[type] = JSON.parse(JSON.stringify(info));
    }
    setTop(copy);
  }

  const {base, seams, decoration} = data;
  var basePreviews = base.map(baseValue => <Item base={baseValue} zCounter={500} displayClass="preview-top" onClickEvent={() => {handleOnClickEvent('base', baseValue)}}/>);
  var seamPreviews = seams.map(seam => <Item base={base[0]} seamUrls={[seam]} zCounter={500}  displayClass="preview-top" onClickEvent={() => {handleOnClickEvent('seams', [seam])}}/>)
  var decorationPreviews = decoration.map(decorationValue => <Item base={base[0]} decoration={decorationValue} zCounter={500} displayClass="preview-top" onClickEvent={() => {handleOnClickEvent('decoration', decorationValue)}}/>)
  return (
    <div className="creation-panel minor-panel">
      <Gallary label="Base" children={basePreviews}/>
      <Gallary label="Seams" children={seamPreviews}/>
      <Gallary label="Decoration" children={decorationPreviews}/>
    </div>
  )
}
export default CreateNewTop;